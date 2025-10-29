import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI } from '@api/endpoints/menu';
import { MealSubscriptionPlan } from '@models/subscription.types';
import { MenuItem } from '@models/menu.types';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';
import { formatCurrency } from '@utils/formatters';
import {
  CalendarRange,
  CheckCircle2,
  ChevronLeft,
  Edit2,
  Info,
  Package,
  Truck,
  Utensils,
} from 'lucide-react';
import clsx from 'clsx';

type FulfilmentMethod = 'delivery' | 'pickup';

interface DeliveryOption {
  date: string;
  label: string;
  weekIndex: number;
}

interface ScheduledItem {
  item: MenuItem;
  quantity: number;
}

interface SubscriptionReviewPayload {
  plan: MealSubscriptionPlan;
  planQuantity: number;
  fulfilment: FulfilmentMethod;
  schedule: Array<{ date: string; items: ScheduledItem[] }>;
  includedBoxes: number;
  totalBoxes: number;
  extraBoxes: number;
  maxPerMeal?: number | null;
}

const INDEX_TO_WEEKDAY_NAME = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

const WEEKDAY_NAME_TO_INDEX: Record<string, number> =
  INDEX_TO_WEEKDAY_NAME.reduce<Record<string, number>>((acc, name, index) => {
    acc[name] = index;
    return acc;
  }, {});

const DEFAULT_DELIVERY_DAYS = ['monday', 'thursday'];

const normalizeDeliveryDays = (days?: string[]): string[] => {
  if (!Array.isArray(days)) {
    return [];
  }
  const normalized: string[] = [];
  const seen = new Set<string>();
  for (const day of days) {
    const normalizedDay = day?.toString().toLowerCase();
    if (
      normalizedDay &&
      WEEKDAY_NAME_TO_INDEX[normalizedDay] !== undefined &&
      !seen.has(normalizedDay)
    ) {
      seen.add(normalizedDay);
      normalized.push(normalizedDay);
    }
  }
  return normalized;
};

const resolvePlanDeliveryDays = (plan?: MealSubscriptionPlan): string[] => {
  if (!plan) {
    return [];
  }
  const available = normalizeDeliveryDays(plan.available_delivery_days ?? []);
  if (available.length > 0) {
    return available;
  }
  const mappedDays = normalizeDeliveryDays(
    Object.keys(plan.menu_item_ids_by_day ?? {})
  );
  if (mappedDays.length > 0) {
    return mappedDays;
  }
  return normalizeDeliveryDays(Object.keys(plan.menu_items_by_day ?? {}));
};

const getDayKeyFromDate = (isoDate: string): string => {
  const candidate = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(candidate.getTime())) {
    return 'monday';
  }
  const index = candidate.getDay();
  return INDEX_TO_WEEKDAY_NAME[index] ?? 'monday';
};

const generateUpcomingDeliveryDates = (
  weeks: number = 6,
  allowedDays?: string[]
): DeliveryOption[] => {
  const results: DeliveryOption[] = [];
  const daysToUse = (() => {
    const normalized = normalizeDeliveryDays(allowedDays);
    if (normalized.length > 0) {
      return normalized;
    }
    return [...DEFAULT_DELIVERY_DAYS];
  })();
  const allowedIndices = daysToUse.map(
    (day) => WEEKDAY_NAME_TO_INDEX[day] ?? WEEKDAY_NAME_TO_INDEX['monday']
  );
  const allowedIndexSet = new Set(allowedIndices);

  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  let currentWeekIndex = -1;
  const seenWeeks = new Set<string>();
  const maxIterations = weeks * 14 + 14;
  let iterations = 0;

  while (
    results.length < daysToUse.length * weeks &&
    iterations < maxIterations
  ) {
    const day = cursor.getDay();
    if (allowedIndexSet.has(day)) {
      const weekAnchor = new Date(cursor);
      weekAnchor.setHours(0, 0, 0, 0);
      weekAnchor.setDate(cursor.getDate() - day);
      const weekKey = weekAnchor.toISOString().split('T')[0];
      if (!seenWeeks.has(weekKey)) {
        seenWeeks.add(weekKey);
        currentWeekIndex += 1;
      }
      const formatted = cursor.toLocaleDateString('en-AU', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });

      results.push({
        date: cursor.toISOString().split('T')[0],
        label: formatted,
        weekIndex: currentWeekIndex,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return results;
};

const MealsSubscriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [isLoadingPlans, setIsLoadingPlans] = useState<boolean>(true);
  const [plans, setPlans] = useState<MealSubscriptionPlan[]>([]);
  const [activeTab, setActiveTab] = useState<string>('regular');
  const [currentStep, setCurrentStep] = useState<'plans' | 'schedule' | 'review'>(
    'plans'
  );

  const [modalPlan, setModalPlan] = useState<MealSubscriptionPlan | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [modalFulfilment, setModalFulfilment] =
    useState<FulfilmentMethod>('delivery');
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<{
    plan: MealSubscriptionPlan;
    quantity: number;
    fulfilment: FulfilmentMethod;
  } | null>(null);

  const planDeliveryDays = useMemo(
    () =>
      selectedPlanDetails?.plan
        ? resolvePlanDeliveryDays(selectedPlanDetails.plan)
        : undefined,
    [selectedPlanDetails?.plan]
  );

  const upcomingDates = useMemo(
    () => generateUpcomingDeliveryDates(6, planDeliveryDays),
    [planDeliveryDays]
  );
  const loadedMenusRef = useRef<Set<string>>(new Set());

  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [menusByDate, setMenusByDate] = useState<Record<string, MenuItem[]>>({});
  const [menuLoadingState, setMenuLoadingState] = useState<
    Record<string, boolean>
  >({});
  const [selectedMeals, setSelectedMeals] = useState<
    Record<string, Record<string, number>>
  >({});

  const planTabs = useMemo(() => {
    const tabOrder = ['regular', 'weekly', 'fortnight', 'monthly'];
    const uniqueTabs = Array.from(new Set(plans.map((plan) => plan.tab)));
    return uniqueTabs.sort(
      (a, b) => tabOrder.indexOf(a) - tabOrder.indexOf(b)
    );
  }, [plans]);

  const plansByActiveTab = useMemo(
    () => plans.filter((plan) => plan.tab === activeTab),
    [plans, activeTab]
  );

  useEffect(() => {
    const loadPlans = async () => {
      setIsLoadingPlans(true);
      try {
        const response = await menuAPI.getMealSubscriptionPlans();
        const payload = response.data.data || response.data;
        const activePlans = Array.isArray(payload)
          ? payload.filter((plan) => plan.is_active)
          : [];
        setPlans(
          activePlans.sort(
            (a, b) =>
              (a.display_order ?? 0) - (b.display_order ?? 0) ||
              a.name.localeCompare(b.name)
          )
        );

        if (activePlans.length > 0) {
          const defaultTab =
            activePlans.find((plan) => plan.tab === 'weekly')?.tab ||
            activePlans[0].tab;
          setActiveTab(defaultTab);
        }
      } catch (error) {
        console.error(error);
        showToast('Failed to load meal subscription plans', 'error');
      } finally {
        setIsLoadingPlans(false);
      }
    };

    loadPlans();
  }, []);

  const fetchMenuForDate = useCallback(
    async (date: string, planOverride?: MealSubscriptionPlan | null) => {
      if (!date) {
        return;
      }

      const plan = planOverride ?? selectedPlanDetails?.plan ?? null;
      const dayKey = getDayKeyFromDate(date);

      if (plan) {
        const planMenus = plan.menu_items_by_day?.[dayKey];
        if (Array.isArray(planMenus) && planMenus.length > 0) {
          loadedMenusRef.current.add(date);
          setMenusByDate((prev) => ({ ...prev, [date]: planMenus }));
          setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
          return;
        }

        const planMenuIds = plan.menu_item_ids_by_day?.[dayKey];
        if (Array.isArray(planMenuIds) && planMenuIds.length > 0) {
          loadedMenusRef.current.add(date);
          setMenuLoadingState((prev) => ({ ...prev, [date]: true }));
          try {
            const items = await Promise.all(
              planMenuIds.map(async (id) => {
                try {
                  const response = await menuAPI.getMenuItemById(id);
                  return response.data?.data || response.data;
                } catch (error) {
                  console.error(error);
                  return null;
                }
              })
            );
            setMenusByDate((prev) => ({
              ...prev,
              [date]: items.filter((item): item is MenuItem => !!item),
            }));
          } catch (error) {
            console.error(error);
            showToast(`Unable to load menu for ${date}`, 'error');
          } finally {
            setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
          }
          return;
        }
      }

      if (loadedMenusRef.current.has(date)) {
        return;
      }

      loadedMenusRef.current.add(date);
      setMenuLoadingState((prev) => ({ ...prev, [date]: true }));

      try {
        const response = await menuAPI.getWeeklyMenu(date);
        const items =
          response.data?.data?.items ??
          response.data?.data ??
          response.data ??
          [];
        setMenusByDate((prev) => ({ ...prev, [date]: items }));
      } catch (error) {
        console.error(error);
        showToast(`Unable to load menu for ${date}`, 'error');
      } finally {
        setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
      }
    },
    [showToast, selectedPlanDetails]
  );

  const includedBoxes = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    return (selectedPlanDetails.plan.included_meals || 0) * selectedPlanDetails.quantity;
  }, [selectedPlanDetails]);

  const selectedBoxes = useMemo(() => {
    return Object.values(selectedMeals).reduce((total, menuMap) => {
      return (
        total +
        Object.values(menuMap).reduce((sum, quantity) => sum + quantity, 0)
      );
    }, 0);
  }, [selectedMeals]);

  const extraBoxes = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const extras = selectedBoxes - includedBoxes;
    return extras > 0 ? extras : 0;
  }, [selectedBoxes, includedBoxes, selectedPlanDetails]);

  const requiredDeliveries = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const planDeliveries = selectedPlanDetails.plan.deliveries_per_cycle || 0;
    return selectedPlanDetails.plan.tab === 'regular' ? 0 : planDeliveries;
  }, [selectedPlanDetails]);

  const minBoxesRequired = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const plan = selectedPlanDetails.plan;
    if (plan.tab !== 'regular') return includedBoxes;
    return selectedPlanDetails.fulfilment === 'delivery'
      ? plan.min_boxes_delivery ?? 4
      : plan.min_boxes_pickup ?? 1;
  }, [selectedPlanDetails, includedBoxes]);

  const handleOpenPlanModal = (plan: MealSubscriptionPlan) => {
    setModalPlan(plan);
    setModalQuantity(1);
    setModalFulfilment('delivery');
  };

  const resetScheduleState = useCallback(
    async (
      plan: MealSubscriptionPlan,
      quantity: number,
      fulfilment: FulfilmentMethod
    ) => {
      const planDays = resolvePlanDeliveryDays(plan);
      const planUpcomingDates = generateUpcomingDeliveryDates(6, planDays);

      loadedMenusRef.current.clear();
      setMenusByDate({});
      setMenuLoadingState({});
      setSelectedMeals({});
      setSelectedDates([]);
      setActiveDate(null);

      setSelectedPlanDetails({ plan, quantity, fulfilment });
      setCurrentStep('schedule');

      let initialDates: string[] = [];
      if (plan.tab === 'regular') {
        initialDates = planUpcomingDates.length
          ? [planUpcomingDates[0].date]
          : [];
      } else if (plan.deliveries_per_cycle && plan.deliveries_per_cycle > 0) {
        initialDates = planUpcomingDates
          .slice(0, plan.deliveries_per_cycle)
          .map((option) => option.date);
      } else if (planUpcomingDates.length > 0) {
        initialDates = [planUpcomingDates[0].date];
      }

      if (initialDates.length > 0) {
        setSelectedDates(initialDates);
        setActiveDate(initialDates[0]);
        await Promise.all(
          initialDates.map((date) => fetchMenuForDate(date, plan))
        );
      }
    },
    [fetchMenuForDate]
  );

  const handleConfirmPlan = async () => {
    if (!modalPlan) return;
    await resetScheduleState(modalPlan, modalQuantity, modalFulfilment);
    setModalPlan(null);
  };

  const handleChangePlan = () => {
    setSelectedPlanDetails(null);
    setSelectedDates([]);
    setSelectedMeals({});
    setActiveDate(null);
    setMenusByDate({});
    setMenuLoadingState({});
    loadedMenusRef.current.clear();
    setCurrentStep('plans');
  };

  const handleToggleDate = (date: string) => {
    if (!selectedPlanDetails) return;

    const isSelected = selectedDates.includes(date);
    if (isSelected) {
      const remaining = selectedDates.filter((d) => d !== date);
      setSelectedDates(remaining);
      setSelectedMeals((prev) => {
        const updated = { ...prev };
        delete updated[date];
        return updated;
      });
      if (activeDate === date) {
        setActiveDate(remaining[0] ?? null);
      }
      return;
    }

    if (
      requiredDeliveries > 0 &&
      selectedDates.length >= requiredDeliveries
    ) {
      showToast(
        `This plan includes ${requiredDeliveries} delivery day${
          requiredDeliveries > 1 ? 's' : ''
        }. Deselect another date to choose a new one.`,
        'info'
      );
      return;
    }

    const updatedDates = [...selectedDates, date].sort();
    setSelectedDates(updatedDates);
    setActiveDate(date);
    fetchMenuForDate(date, selectedPlanDetails.plan);
  };

  const handleAdjustMealQuantity = (
    date: string,
    item: MenuItem,
    delta: number
  ) => {
    if (!selectedPlanDetails) {
      showToast('Select a meal subscription plan first', 'warning');
      return;
    }

    if (!selectedDates.includes(date)) {
      showToast('Please choose a delivery day before adding meals', 'info');
      return;
    }

    setSelectedMeals((prev) => {
      const existingForDate = prev[date] || {};
      const itemId = item._id || item.id;
      const currentQuantity = existingForDate[itemId] || 0;
      const nextQuantity = Math.max(0, currentQuantity + delta);

      const maxPerMeal =
        selectedPlanDetails.plan.max_boxes_per_meal &&
        selectedPlanDetails.plan.max_boxes_per_meal > 0
          ? selectedPlanDetails.plan.max_boxes_per_meal *
            selectedPlanDetails.quantity
          : null;

      if (maxPerMeal && nextQuantity > maxPerMeal) {
        showToast(
          `This plan allows up to ${maxPerMeal} boxes per dish.`,
          'warning'
        );
        return prev;
      }

      const updatedForDate = { ...existingForDate };
      if (nextQuantity === 0) {
        delete updatedForDate[itemId];
      } else {
        updatedForDate[itemId] = nextQuantity;
      }

      const updated = { ...prev };
      if (Object.keys(updatedForDate).length === 0) {
        delete updated[date];
      } else {
        updated[date] = updatedForDate;
      }
      return updated;
    });
  };

  const scheduleReady = useMemo(() => {
    if (!selectedPlanDetails) return false;
    if (selectedPlanDetails.plan.tab !== 'regular' && requiredDeliveries > 0) {
      if (selectedDates.length !== requiredDeliveries) return false;
    } else if (selectedPlanDetails.plan.tab === 'regular') {
      if (selectedDates.length === 0) return false;
    }

    if (selectedBoxes < minBoxesRequired) return false;

    const allDatesHaveMeals = selectedDates.every((date) => {
      const items = selectedMeals[date];
      if (!items) return false;
      const dateTotal = Object.values(items).reduce(
        (sum, qty) => sum + qty,
        0
      );
      return dateTotal > 0;
    });

    return allDatesHaveMeals;
  }, [
    selectedPlanDetails,
    selectedDates,
    selectedMeals,
    requiredDeliveries,
    minBoxesRequired,
    selectedBoxes,
  ]);

  const handleProceedToReview = () => {
    if (!scheduleReady) {
      showToast('Please complete your meal selections before continuing.', 'info');
      return;
    }
    setCurrentStep('review');
  };

  const handleProceedToCheckout = () => {
    if (!selectedPlanDetails) return;

    const schedule = selectedDates.map((date) => {
      const selections = selectedMeals[date] || {};
      const items: ScheduledItem[] = Object.entries(selections)
        .map(([itemId, quantity]) => {
          const menu = menusByDate[date]?.find(
            (menuItem) => (menuItem._id || menuItem.id) === itemId
          );
          if (!menu) return null;
          return { item: menu, quantity };
        })
        .filter(Boolean) as ScheduledItem[];
      return { date, items };
    });

    const payload: SubscriptionReviewPayload = {
      plan: selectedPlanDetails.plan,
      planQuantity: selectedPlanDetails.quantity,
      fulfilment: selectedPlanDetails.fulfilment,
      schedule,
      includedBoxes,
      totalBoxes: selectedBoxes,
      extraBoxes,
      maxPerMeal: selectedPlanDetails.plan.max_boxes_per_meal,
    };

    navigate('/checkout', {
      state: {
        subscriptionDetails: payload,
      },
    });
  };

  const renderPlanCard = (plan: MealSubscriptionPlan) => {
    const includedMeals = plan.included_meals || 0;
    const deliveries = plan.deliveries_per_cycle || 0;
    const planDays = resolvePlanDeliveryDays(plan);
    const formatDayLabel = (day: string) =>
      day.charAt(0).toUpperCase() + day.slice(1);
    const daySummaries = planDays.map((day) => {
      const configuredCount =
        plan.menu_item_ids_by_day?.[day]?.length ??
        plan.menu_items_by_day?.[day]?.length ??
        0;
      return configuredCount > 0
        ? `${formatDayLabel(day)} (${configuredCount})`
        : formatDayLabel(day);
    });

    return (
      <Card
        key={plan._id}
        hoverable
        onClick={() => handleOpenPlanModal(plan)}
        className={clsx(
          'border border-transparent transition-all duration-200 hover:border-primary/40 group'
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-heading font-semibold text-text mb-1">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500">{plan.description}</p>
          </div>
          {plan.display_badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {plan.display_badge}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <Utensils className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">{includedMeals}</p>
              <p>Meals included</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CalendarRange className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">
                {deliveries || 'Flexible'}
              </p>
              <p>Delivery {deliveries === 1 ? 'day' : 'days'}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Package className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">
                {formatCurrency(plan.price_per_plan || 0)}
              </p>
              <p>Total plan price</p>
            </div>
          </div>
          {planDays.length > 0 && (
            <div className="flex items-center space-x-3 sm:col-span-2">
              <Truck className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-text">
                  {daySummaries.join(' • ')}
                </p>
                <p>Configured delivery days</p>
              </div>
            </div>
          )}
          {plan.price_per_box ? (
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-text">
                  {formatCurrency(plan.price_per_box)}
                </p>
                <p>Per meal after discount</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Click to customise this plan
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      </Card>
    );
  };

  const renderPlanSelectionStep = () => (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-heading font-bold text-text">
          Meals Subscription Plans
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that suits your lifestyle. Configure weekly, fortnight,
          monthly, or regular orders and customise the meals delivered to your door.
        </p>
      </div>

      <div className="flex justify-center space-x-3">
        {planTabs.map((tab) => (
          <button
            key={tab}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-colors',
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'regular'
              ? 'Regular Order'
              : tab === 'weekly'
              ? 'Weekly Plan'
              : tab === 'fortnight'
              ? 'Fortnight Plan'
              : 'Monthly Plan'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plansByActiveTab.map(renderPlanCard)}
      </div>

      <Card className="bg-primary-50 border-primary/20">
        <div className="flex items-start space-x-3">
          <Info className="text-primary mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-text">How it works</h3>
            <p className="text-sm text-gray-600 mt-1">
              Select a plan to see its detailed terms and conditions. After choosing
              a plan you&apos;ll pick delivery days, customise meals, and review your
              schedule before finishing at checkout.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderScheduleStep = () => {
    if (!selectedPlanDetails) return null;

    const plan = selectedPlanDetails.plan;
    const maxPerMeal =
      plan.max_boxes_per_meal && plan.max_boxes_per_meal > 0
        ? plan.max_boxes_per_meal * selectedPlanDetails.quantity
        : null;

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={handleChangePlan}
              className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
            >
              <ChevronLeft size={16} className="mr-1" />
              Change plan
            </button>
            <h2 className="text-3xl font-heading font-bold text-text mt-2">
              Build your {plan.name}
            </h2>
            <p className="text-gray-600">
              Select delivery days and customise meals. Included boxes:{' '}
              <span className="font-semibold text-text">{includedBoxes}</span>
            </p>
          </div>
          <div className="bg-primary/10 px-5 py-3 rounded-lg text-primary font-semibold">
            {formatCurrency(plan.price_per_plan || 0)} per cycle
          </div>
        </div>

        <Card className="border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-text">
                Select delivery days
              </h3>
              <p className="text-sm text-gray-500">
                {plan.tab === 'regular'
                  ? 'Choose your preferred delivery or pickup days.'
                  : `This plan includes ${requiredDeliveries} delivery day${
                      requiredDeliveries > 1 ? 's' : ''
                    } each cycle.`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {upcomingDates.map((option) => {
              const isSelected = selectedDates.includes(option.date);
              const isDisabled =
                !isSelected &&
                requiredDeliveries > 0 &&
                selectedDates.length >= requiredDeliveries;

              return (
                <button
                  key={option.date}
                  onClick={() => handleToggleDate(option.date)}
                  className={clsx(
                    'px-4 py-2 rounded-full border transition-colors text-sm font-semibold',
                    isSelected
                      ? 'bg-primary text-white border-primary shadow'
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary',
                    isDisabled && 'opacity-40 cursor-not-allowed'
                  )}
                  disabled={isDisabled}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-6 items-start">
          <Card className="border border-gray-100">
            <h3 className="text-lg font-semibold text-text mb-4">
              Summary
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Selected deliveries</span>
                <span className="font-semibold text-text">
                  {selectedDates.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total boxes selected</span>
                <span className="font-semibold text-text">{selectedBoxes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Included boxes</span>
                <span className="font-semibold text-text">{includedBoxes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Extra boxes</span>
                <span
                  className={clsx(
                    'font-semibold',
                    extraBoxes > 0 ? 'text-primary' : 'text-text'
                  )}
                >
                  {extraBoxes}
                </span>
              </div>
              {plan.tab === 'regular' && (
                <div className="text-xs text-gray-500">
                  Minimum boxes for {selectedPlanDetails.fulfilment}:
                  <span className="ml-1 font-semibold text-text">
                    {minBoxesRequired}
                  </span>
                </div>
              )}
              {maxPerMeal && (
                <div className="text-xs text-gray-500">
                  Maximum boxes per dish: {maxPerMeal}
                </div>
              )}
            </div>
          </Card>

          <Card className="border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">
                {activeDate
                  ? `Meals for ${new Date(activeDate).toLocaleDateString('en-AU', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'short',
                    })}`
                  : 'Select a delivery day'}
              </h3>
              {activeDate && (
                <span className="text-xs text-gray-500">
                  Click a day to switch menus
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedDates.map((date) => (
                <button
                  key={date}
                  onClick={() => {
                    setActiveDate(date);
                    fetchMenuForDate(date, selectedPlanDetails?.plan);
                  }}
                  className={clsx(
                    'px-3 py-1 rounded-full text-xs font-semibold transition-colors',
                    activeDate === date
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  {new Date(date).toLocaleDateString('en-AU', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  })}
                </button>
              ))}
            </div>

            {!activeDate && (
              <div className="py-12 text-center text-gray-500">
                Select a delivery day to view menu options.
              </div>
            )}

            {activeDate && menuLoadingState[activeDate] && (
              <div className="py-12 text-center">
                <LoadingSpinner message="Loading meals..." />
              </div>
            )}

            {activeDate &&
              !menuLoadingState[activeDate] &&
              (menusByDate[activeDate]?.length || 0) === 0 && (
                <div className="py-12 text-center text-gray-500">
                  Menu not available for this date yet. Please choose another day.
                </div>
              )}

            {activeDate &&
              !menuLoadingState[activeDate] &&
              (menusByDate[activeDate]?.length || 0) > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menusByDate[activeDate]?.map((item) => {
                    const itemId = item._id || item.id;
                    const currentCount =
                      selectedMeals[activeDate]?.[itemId] || 0;

                    return (
                      <div
                        key={itemId}
                        className="border border-gray-200 rounded-lg p-4 flex flex-col space-y-3"
                      >
                        <div>
                          <h4 className="font-semibold text-text">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{formatCurrency(item.price)}</span>
                          <span>
                            Max{' '}
                            {plan.max_boxes_per_meal
                              ? plan.max_boxes_per_meal *
                                selectedPlanDetails.quantity
                              : '—'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleAdjustMealQuantity(activeDate, item, -1)
                            }
                          >
                            -
                          </Button>
                          <span className="text-xl font-semibold text-text">
                            {currentCount}
                          </span>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleAdjustMealQuantity(activeDate, item, 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <Truck size={16} className="text-primary" />
            <span>
              Delivery fees are calculated per delivery day based on your postcode
              during checkout.
            </span>
          </div>
          <div className="space-x-3">
            <Button variant="outline" onClick={handleChangePlan}>
              Change Plan
            </Button>
            <Button
              variant="primary"
              onClick={handleProceedToReview}
              disabled={!scheduleReady}
            >
              Review Selection
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderReviewStep = () => {
    if (!selectedPlanDetails) return null;

    const plan = selectedPlanDetails.plan;

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() => setCurrentStep('schedule')}
              className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
            >
              <ChevronLeft size={16} className="mr-1" />
              Edit meals
            </button>
            <h2 className="text-3xl font-heading font-bold text-text mt-2">
              Review your subscription
            </h2>
            <p className="text-gray-600">
              Confirm your schedule, selected meals, and plan details.
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Plan price</div>
            <div className="text-3xl font-heading font-bold text-primary">
              {formatCurrency(plan.price_per_plan || 0)}
            </div>
          </div>
        </div>

        <Card className="border border-gray-100">
          <h3 className="text-lg font-semibold text-text mb-4">
            Plan summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <div className="text-xs uppercase text-gray-400">Plan</div>
              <div className="font-semibold text-text mt-1">{plan.name}</div>
              <div className="text-xs text-gray-500">
                Qty: {selectedPlanDetails.quantity}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">Fulfilment</div>
              <div className="font-semibold text-text mt-1 capitalize">
                {selectedPlanDetails.fulfilment}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">
                Included boxes
              </div>
              <div className="font-semibold text-text mt-1">
                {includedBoxes}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">
                Extra boxes
              </div>
              <div
                className={clsx(
                  'font-semibold mt-1',
                  extraBoxes > 0 ? 'text-primary' : 'text-text'
                )}
              >
                {extraBoxes}
              </div>
            </div>
          </div>
        </Card>

        <Card className="border border-gray-100">
          <h3 className="text-lg font-semibold text-text mb-4">
            Delivery schedule & meals
          </h3>
          <div className="space-y-4">
            {selectedDates.map((date) => {
              const selections = selectedMeals[date] || {};
              const items: ScheduledItem[] = Object.entries(selections)
                .map(([itemId, quantity]) => {
                  const menu = menusByDate[date]?.find(
                    (menuItem) => (menuItem._id || menuItem.id) === itemId
                  );
                  if (!menu) return null;
                  return { item: menu, quantity };
                })
                .filter(Boolean) as ScheduledItem[];

              return (
                <div
                  key={date}
                  className="border border-gray-200 rounded-lg p-4 text-sm text-gray-600"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <CalendarRange className="text-primary" size={18} />
                      <span className="font-semibold text-text">
                        {new Date(date).toLocaleDateString('en-AU', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {items.reduce((sum, entry) => sum + entry.quantity, 0)}{' '}
                      boxes
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {items.map(({ item, quantity }) => (
                      <div
                        key={item._id || item.id}
                        className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between"
                      >
                        <span className="font-medium text-text">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          x{quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="border border-gray-100">
          <div className="flex items-start space-x-3">
            <Truck className="text-primary mt-1" size={18} />
            <div className="text-sm text-gray-600">
              <p>
                Delivery charges are based on your postcode and multiplied by the
                number of delivery days selected. Pickup orders will not incur a
                delivery fee.
              </p>
              <p className="mt-2">
                You&apos;ll confirm your address and review final pricing at
                checkout.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('schedule')}>
            <Edit2 size={18} className="mr-2" />
            Edit meals
          </Button>
          <Button variant="primary" onClick={handleProceedToCheckout}>
            Continue to Checkout
          </Button>
        </div>
      </div>
    );
  };
  if (isLoadingPlans) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner message="Loading meal subscriptions..." />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom space-y-12">
        <div className="flex items-center space-x-3 text-sm">
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'plans'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            1. Choose Plan
          </span>
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'schedule'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            2. Meals & Schedule
          </span>
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'review'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            3. Review
          </span>
        </div>

        {currentStep === 'plans' && renderPlanSelectionStep()}
        {currentStep === 'schedule' && renderScheduleStep()}
        {currentStep === 'review' && renderReviewStep()}
      </div>

      <Modal
        isOpen={!!modalPlan}
        onClose={() => setModalPlan(null)}
        title={modalPlan ? modalPlan.name : 'Plan Details'}
        size="lg"
      >
        {modalPlan && (
          <div className="space-y-6">
            <div className="text-sm text-gray-600 space-y-2">
              <p>{modalPlan.description}</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  {modalPlan.included_meals || 0} meals included (
                  {modalPlan.deliveries_per_cycle || 0} delivery day
                  {modalPlan.deliveries_per_cycle === 1 ? '' : 's'}).
                </li>
                <li>
                  Base price:{' '}
                  <span className="font-semibold text-text">
                    {formatCurrency(modalPlan.price_per_plan || 0)}
                  </span>
                </li>
                {modalPlan.price_per_box && (
                  <li>
                    Per meal after discount:{' '}
                    <span className="font-semibold text-text">
                      {formatCurrency(modalPlan.price_per_box)}
                    </span>
                  </li>
                )}
                {modalPlan.max_boxes_per_meal && (
                  <li>
                    {modalPlan.max_boxes_per_meal} boxes per dish per plan.
                  </li>
                )}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modalPlan.allow_multiple && (
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Number of plans
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={modalQuantity}
                    onChange={(e) =>
                      setModalQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {modalPlan.tab === 'regular' && (
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Fulfilment method
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setModalFulfilment('delivery')}
                      className={clsx(
                        'flex-1 px-3 py-2 rounded-lg border text-sm font-semibold transition-colors',
                        modalFulfilment === 'delivery'
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                      )}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setModalFulfilment('pickup')}
                      className={clsx(
                        'flex-1 px-3 py-2 rounded-lg border text-sm font-semibold transition-colors',
                        modalFulfilment === 'pickup'
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                      )}
                    >
                      Pickup
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Minimum boxes: {modalPlan.min_boxes_delivery ?? 4} for delivery,
                    {modalPlan.min_boxes_pickup ?? 1} for pickup.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="ghost" onClick={() => setModalPlan(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmPlan}>
                Continue
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MealsSubscriptionPage;
