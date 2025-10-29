import React, { useEffect, useMemo, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import Modal from '@components/common/Modal';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';
import {
  MealSubscriptionPlan,
  DeliveryZone,
} from '@models/subscription.types';

type PlanFormState = Partial<MealSubscriptionPlan> & {
  suburbs?: string;
};

type ZoneFormState = {
  _id?: string;
  postcode: string;
  zone_label?: string;
  suburbs: string;
  base_delivery_fee: string;
  express_delivery_fee?: string;
  notes?: string;
  is_active: boolean;
};

const PLAN_TABS: Array<{ value: string; label: string }> = [
  { value: 'regular', label: 'Regular Order' },
  { value: 'weekly', label: 'Weekly Plan' },
  { value: 'fortnight', label: 'Fortnight Plan' },
  { value: 'monthly', label: 'Monthly Plan' },
];

const WEEK_DAYS: Array<{ value: string; label: string }> = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

const DAY_SEQUENCE = WEEK_DAYS.map((day) => day.value);
const defaultPlanForm: PlanFormState = {
  code: '',
  name: '',
  tab: 'weekly',
  description: '',
  included_meals: 10,
  deliveries_per_cycle: 2,
  boxes_per_delivery: 5,
  max_boxes_per_meal: 2,
  price_per_plan: 99,
  price_per_box: 9.9,
  allow_multiple: true,
  min_boxes_delivery: 4,
  min_boxes_pickup: 1,
  display_badge: '',
  display_order: 0,
  highlight: false,
  is_active: true,
  available_delivery_days: [],
  menu_item_ids_by_day: {},
};

const defaultZoneForm: ZoneFormState = {
  postcode: '',
  zone_label: '',
  suburbs: '',
  base_delivery_fee: '10',
  express_delivery_fee: '',
  notes: '',
  is_active: true,
};

const formatCurrency = (value: number | undefined) =>
  value !== undefined
    ? new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
      }).format(value)
    : '-';

const MealPlanManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    mealPlans,
    deliveryZones,
    managedMenuItems,
    fetchMealPlans,
    fetchDeliveryZones,
    fetchManagedMenuItems,
    createMealPlan,
    updateMealPlan,
    deleteMealPlan,
    createDeliveryZone,
    updateDeliveryZone,
    deleteDeliveryZone,
    isLoading,
    isUpdating,
    error,
    clearError,
  } = useAdminStore();

  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [zoneModalOpen, setZoneModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] =
    useState<MealSubscriptionPlan | null>(null);
  const [planForm, setPlanForm] = useState<PlanFormState>(defaultPlanForm);
  const [zoneForm, setZoneForm] = useState<ZoneFormState>(defaultZoneForm);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [dayMenuSelections, setDayMenuSelections] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    fetchMealPlans().catch(console.error);
    fetchDeliveryZones().catch(console.error);
    fetchManagedMenuItems().catch(console.error);
  }, []);

  useEffect(() => {
    if (error) {
      showToast(error, 'error');
      clearError();
    }
  }, [error]);

  const sortedMenuItems = useMemo(
    () =>
      [...(managedMenuItems ?? [])].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    [managedMenuItems]
  );
  const multiSelectSize = Math.min(
    10,
    Math.max(4, sortedMenuItems.length || 0)
  );

  const sortedPlans = useMemo(
    () =>
      [...mealPlans].sort(
        (a, b) =>
          (a.display_order ?? 0) - (b.display_order ?? 0) ||
          a.name.localeCompare(b.name)
      ),
    [mealPlans]
  );

  const handleOpenPlanModal = (plan?: MealSubscriptionPlan) => {
    if (plan) {
      setEditingPlan(plan);
      const planDaysRaw =
        Array.isArray(plan.available_delivery_days) &&
        plan.available_delivery_days.length > 0
          ? plan.available_delivery_days
          : Object.keys(plan.menu_item_ids_by_day ?? {});
      const normalizedDays = planDaysRaw
        .map((day) => day?.toString().toLowerCase())
        .filter((day): day is string => !!day && DAY_SEQUENCE.includes(day));
      normalizedDays.sort(
        (a, b) => DAY_SEQUENCE.indexOf(a) - DAY_SEQUENCE.indexOf(b)
      );

      const idMapping = plan.menu_item_ids_by_day ?? {};
      const fallbackMapping = plan.menu_items_by_day ?? {};
      const normalizedMenus: Record<string, string[]> = {};
      normalizedDays.forEach((day) => {
        const idsFromMapping = Array.isArray(idMapping[day])
          ? idMapping[day]
          : [];
        let resolvedIds = idsFromMapping.map((id) => id.toString());
        if (resolvedIds.length === 0 && Array.isArray(fallbackMapping[day])) {
          resolvedIds = (fallbackMapping[day] ?? []).map(
            (item) => item._id || item.id
          );
        }
        normalizedMenus[day] = Array.from(new Set(resolvedIds));
      });

      setSelectedDays(normalizedDays);
      setDayMenuSelections(normalizedMenus);
      setPlanForm({
        ...plan,
        suburbs: Array.isArray(plan.metadata?.suburbs)
          ? (plan.metadata?.suburbs as string[]).join(', ')
          : '',
        available_delivery_days: normalizedDays,
        menu_item_ids_by_day: normalizedMenus,
      });
    } else {
      setEditingPlan(null);
      setPlanForm({ ...defaultPlanForm });
      setSelectedDays([]);
      setDayMenuSelections({});
    }
    setPlanModalOpen(true);
  };

  const handlePlanFormChange = (
    field: keyof PlanFormState,
    value: string | number | boolean
  ) => {
    setPlanForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleDaySelection = (day: string) => {
    const normalizedDay = day.toLowerCase();
    const orderIndex = (value: string) => DAY_SEQUENCE.indexOf(value);

    setSelectedDays((prev) => {
      const isSelected = prev.includes(normalizedDay);
      if (isSelected) {
        const updated = prev.filter((value) => value !== normalizedDay);
        setDayMenuSelections((current) => {
          const updatedMenus = { ...current };
          delete updatedMenus[normalizedDay];
          return updatedMenus;
        });
        return updated;
      }
      const updated = [...prev, normalizedDay].sort(
        (a, b) => orderIndex(a) - orderIndex(b)
      );
      return updated;
    });
  };

  const handleDayMenuSelectChange = (day: string, values: string[]) => {
    const normalizedDay = day.toLowerCase();
    const uniqueValues = Array.from(
      new Set(values.map((value) => value.toString()))
    );
    setDayMenuSelections((prev) => ({
      ...prev,
      [normalizedDay]: uniqueValues,
    }));
  };

  const getDayLabel = (day: string) =>
    WEEK_DAYS.find((option) => option.value === day)?.label ?? day;

  const handleSubmitPlan = async () => {
    const { suburbs: _suburbs, ...planBase } = planForm;

    const payload: Partial<MealSubscriptionPlan> = {
      ...planBase,
      included_meals: Number(planForm.included_meals ?? 0),
      deliveries_per_cycle: Number(planForm.deliveries_per_cycle ?? 0),
      boxes_per_delivery: Number(planForm.boxes_per_delivery ?? 0),
      max_boxes_per_meal:
        planForm.max_boxes_per_meal !== undefined &&
        planForm.max_boxes_per_meal !== null
          ? Number(planForm.max_boxes_per_meal)
          : null,
      price_per_plan: Number(planForm.price_per_plan ?? 0),
      price_per_box:
        planForm.price_per_box !== undefined && planForm.price_per_box !== null
          ? Number(planForm.price_per_box)
          : null,
      min_boxes_delivery:
        planForm.min_boxes_delivery !== undefined &&
        planForm.min_boxes_delivery !== null
          ? Number(planForm.min_boxes_delivery)
          : null,
      min_boxes_pickup:
        planForm.min_boxes_pickup !== undefined &&
        planForm.min_boxes_pickup !== null
          ? Number(planForm.min_boxes_pickup)
          : null,
    };

    if (payload.code) {
      payload.code = payload.code.trim();
    }

    if (!payload.code || !payload.name) {
      showToast('Plan name and code are required.', 'error');
      return;
    }

    const normalizedDays = [...selectedDays].sort(
      (a, b) => DAY_SEQUENCE.indexOf(a) - DAY_SEQUENCE.indexOf(b)
    );

    if (normalizedDays.length === 0) {
      showToast('Select at least one delivery day for this plan.', 'error');
      return;
    }

    const expectedDeliveries = Number(planForm.deliveries_per_cycle ?? 0);
    if (
      expectedDeliveries > 0 &&
      planForm.tab !== 'regular' &&
      normalizedDays.length !== expectedDeliveries
    ) {
      showToast(
        `This plan expects ${expectedDeliveries} delivery day${
          expectedDeliveries === 1 ? '' : 's'
        }. Adjust the selection before saving.`,
        'error'
      );
      return;
    }

    const menuMapping: Record<string, string[]> = {};
    for (const day of normalizedDays) {
      const selections = dayMenuSelections[day] ?? [];
      if (selections.length === 0) {
        showToast(
          `Assign at least one menu item for ${getDayLabel(day)}.`,
          'error'
        );
        return;
      }
      menuMapping[day] = selections;
    }

    payload.available_delivery_days = normalizedDays;
    payload.menu_item_ids_by_day = menuMapping;

    try {
      if (editingPlan?._id) {
        await updateMealPlan(editingPlan._id, payload);
        showToast('Plan updated successfully', 'success');
      } else {
        await createMealPlan(payload);
        showToast('Plan created successfully', 'success');
      }
      setPlanModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlan = async (planId: string) => {
    if (!window.confirm('Are you sure you want to delete this meal plan?')) {
      return;
    }
    try {
      await deleteMealPlan(planId);
      showToast('Plan deleted', 'success');
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenZoneModal = (zone?: DeliveryZone) => {
    if (zone) {
      setZoneForm({
        _id: zone._id,
        postcode: zone.postcode,
        zone_label: zone.zone_label ?? '',
        suburbs: zone.suburbs.join(', '),
        base_delivery_fee: String(zone.base_delivery_fee ?? 0),
        express_delivery_fee: zone.express_delivery_fee
          ? String(zone.express_delivery_fee)
          : '',
        notes: zone.notes ?? '',
        is_active: zone.is_active,
      });
    } else {
      setZoneForm(defaultZoneForm);
    }
    setZoneModalOpen(true);
  };

  const handleSubmitZone = async () => {
    if (!zoneForm.postcode) {
      showToast('Postcode is required.', 'error');
      return;
    }

    const suburbsArray = zoneForm.suburbs
      ? zoneForm.suburbs
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    const payload: Partial<DeliveryZone> = {
      postcode: zoneForm.postcode,
      zone_label: zoneForm.zone_label,
      suburbs: suburbsArray,
      base_delivery_fee: Number(zoneForm.base_delivery_fee || 0),
      express_delivery_fee: zoneForm.express_delivery_fee
        ? Number(zoneForm.express_delivery_fee)
        : undefined,
      notes: zoneForm.notes,
      is_active: zoneForm.is_active,
    };

    try {
      if (zoneForm._id) {
        await updateDeliveryZone(zoneForm._id, payload);
        showToast('Delivery zone updated successfully', 'success');
      } else {
        await createDeliveryZone(payload);
        showToast('Delivery zone created successfully', 'success');
      }
      setZoneModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteZone = async (zoneId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to remove this delivery zone from availability?'
      )
    ) {
      return;
    }
    try {
      await deleteDeliveryZone(zoneId, false);
      showToast('Delivery zone deactivated', 'success');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text">
            Meal Plan & Delivery Configuration
          </h1>
          <p className="text-gray-600 mt-2">
            Control customer-facing meal deals, delivery pricing, and regional coverage.
          </p>
        </div>
        {(isLoading || isUpdating) && (
          <LoadingSpinner size="md" message="Saving changes..." />
        )}
      </div>

      {/* Meal Plans Section */}
      <Card className="p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text">
              Meal Subscription Plans
            </h2>
            <p className="text-sm text-gray-500">
              Create and manage weekly, fortnightly, monthly, and regular deals displayed to customers.
            </p>
          </div>
          <Button variant="primary" onClick={() => handleOpenPlanModal()}>
            Add Meal Plan
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tab
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Included Meals
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Highlight
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedPlans.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-6 text-center text-gray-500 italic"
                  >
                    No meal plans configured yet.
                  </td>
                </tr>
              )}
              {sortedPlans.map((plan) => (
                <tr key={plan._id}>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-text">{plan.name}</div>
                    <div className="text-xs text-gray-500">{plan.code}</div>
                    {(plan.available_delivery_days?.length ?? 0) > 0 && (
                      <div className="text-xs text-gray-500 mt-1">
                        Delivery days:{' '}
                        {plan.available_delivery_days
                          ?.map((day) => {
                            const label = getDayLabel(day);
                            const count =
                              plan.menu_item_ids_by_day?.[day]?.length ??
                              plan.menu_items_by_day?.[day]?.length ??
                              0;
                            return count > 0 ? `${label} (${count})` : label;
                          })
                          .join(', ')}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 capitalize text-sm text-gray-700">
                    {plan.tab}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {plan.included_meals ?? 0}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {formatCurrency(plan.price_per_plan)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {plan.highlight ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                        Highlighted
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {plan.is_active ? (
                      <span className="text-emerald-600 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-gray-400">Hidden</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenPlanModal(plan)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeletePlan(plan._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Delivery Zones Section */}
      <Card className="p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text">
              Delivery Zones & Postal Codes
            </h2>
            <p className="text-sm text-gray-500">
              Configure base delivery fees per postcode and control availability.
            </p>
          </div>
          <Button variant="primary" onClick={() => handleOpenZoneModal()}>
            Add Delivery Zone
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Postcode
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Zone
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Suburbs
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Base Fee
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Express Fee
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveryZones.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-6 text-center text-gray-500 italic"
                  >
                    No delivery zones configured yet.
                  </td>
                </tr>
              )}
              {deliveryZones.map((zone) => (
                <tr key={zone._id}>
                  <td className="px-4 py-3 text-sm font-medium text-text">
                    {zone.postcode}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {zone.zone_label || '—'}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {zone.suburbs.join(', ')}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {formatCurrency(zone.base_delivery_fee)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {zone.express_delivery_fee
                      ? formatCurrency(zone.express_delivery_fee)
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {zone.is_active ? (
                      <span className="text-emerald-600 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-gray-400">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenZoneModal(zone)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteZone(zone._id)}
                    >
                      Deactivate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Plan Modal */}
      <Modal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        title={editingPlan ? 'Edit Meal Plan' : 'Create Meal Plan'}
        size="xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Plan Name"
            value={planForm.name ?? ''}
            onChange={(e) => handlePlanFormChange('name', e.target.value)}
            required
          />
          <Input
            label="Plan Code"
            value={planForm.code ?? ''}
            onChange={(e) => handlePlanFormChange('code', e.target.value)}
            helperText="Slug used by the system (e.g., weekly_10)"
            required
          />
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Display Tab
            <select
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={planForm.tab ?? 'weekly'}
              onChange={(e) => handlePlanFormChange('tab', e.target.value)}
            >
              {PLAN_TABS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <Input
            label="Display Badge"
            value={planForm.display_badge ?? ''}
            onChange={(e) =>
              handlePlanFormChange('display_badge', e.target.value)
            }
            placeholder="e.g., Best Value"
          />
          <Input
            label="Included Meals"
            type="number"
            min={0}
            value={planForm.included_meals ?? 0}
            onChange={(e) =>
              handlePlanFormChange('included_meals', Number(e.target.value))
            }
          />
          <Input
            label="Deliveries per Cycle"
            type="number"
            min={0}
            value={planForm.deliveries_per_cycle ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'deliveries_per_cycle',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Boxes per Delivery"
            type="number"
            min={0}
            value={planForm.boxes_per_delivery ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'boxes_per_delivery',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Max Boxes per Meal"
            type="number"
            min={0}
            value={planForm.max_boxes_per_meal ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'max_boxes_per_meal',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Plan Price"
            type="number"
            min={0}
            step="0.01"
            value={planForm.price_per_plan ?? 0}
            onChange={(e) =>
              handlePlanFormChange('price_per_plan', Number(e.target.value))
            }
          />
          <Input
            label="Price per Meal"
            type="number"
            min={0}
            step="0.01"
            value={planForm.price_per_box ?? 0}
            onChange={(e) =>
              handlePlanFormChange('price_per_box', Number(e.target.value))
            }
          />
          <Input
            label="Min Boxes (Delivery)"
            type="number"
            min={0}
            value={planForm.min_boxes_delivery ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'min_boxes_delivery',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Min Boxes (Pickup)"
            type="number"
            min={0}
            value={planForm.min_boxes_pickup ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'min_boxes_pickup',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Display Order"
            type="number"
            value={planForm.display_order ?? 0}
            onChange={(e) =>
              handlePlanFormChange('display_order', Number(e.target.value))
            }
          />
          <div className="md:col-span-2 border-t border-gray-200 pt-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text text-sm">
                  Delivery days & curated menus
                </h3>
                <p className="text-xs text-gray-500">
                  Select which weekdays this plan runs and assign the dishes customers can choose from on each day.
                </p>
              </div>
              {planForm.deliveries_per_cycle ? (
                <div className="text-xs text-gray-500">
                  Expected deliveries per cycle:{' '}
                  <span className="font-semibold text-text">
                    {planForm.deliveries_per_cycle}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
              {WEEK_DAYS.map((day) => {
                const isChecked = selectedDays.includes(day.value);
                return (
                  <label
                    key={day.value}
                    className={`flex items-center space-x-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                      isChecked
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 text-gray-600 hover:border-primary/60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={isChecked}
                      onChange={() => toggleDaySelection(day.value)}
                    />
                    <span>{day.label}</span>
                  </label>
                );
              })}
            </div>

            {selectedDays.length === 0 && (
              <p className="text-xs text-amber-600 mt-3">
                Select at least one delivery day to configure the menu.
              </p>
            )}

            {selectedDays.length > 0 && (
              <div className="mt-4 space-y-4">
                {selectedDays.map((day) => (
                  <div
                    key={day}
                    className="rounded-lg border border-gray-200 p-3 bg-white/60"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm text-text">
                        {getDayLabel(day)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {(dayMenuSelections[day]?.length ?? 0)} item
                        {(dayMenuSelections[day]?.length ?? 0) === 1
                          ? ''
                          : 's'}{' '}
                        selected
                      </div>
                    </div>
                    {sortedMenuItems.length > 0 ? (
                      <select
                        multiple
                        size={multiSelectSize}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={dayMenuSelections[day] ?? []}
                        onChange={(e) =>
                          handleDayMenuSelectChange(
                            day,
                            Array.from(e.target.selectedOptions).map(
                              (option) => option.value
                            )
                          )
                        }
                      >
                        {sortedMenuItems.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name} • {item.category}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="mt-2 text-xs text-amber-600">
                        No menu items available yet. Add dishes from the Menu
                        Management section first.
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Hold Ctrl (or Command on Mac) to select multiple dishes.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.allow_multiple ?? true}
              onChange={(e) =>
                handlePlanFormChange('allow_multiple', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">
              Allow customers to choose multiple plans
            </span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.highlight ?? false}
              onChange={(e) =>
                handlePlanFormChange('highlight', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">Highlight this plan</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.is_active ?? true}
              onChange={(e) =>
                handlePlanFormChange('is_active', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">Plan is active</span>
          </label>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="ghost" onClick={() => setPlanModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitPlan}>
            {editingPlan ? 'Save Changes' : 'Create Plan'}
          </Button>
        </div>
      </Modal>

      {/* Delivery Zone Modal */}
      <Modal
        isOpen={zoneModalOpen}
        onClose={() => setZoneModalOpen(false)}
        title={zoneForm._id ? 'Edit Delivery Zone' : 'Add Delivery Zone'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Postcode"
            value={zoneForm.postcode}
            onChange={(e) =>
              setZoneForm((prev) => ({ ...prev, postcode: e.target.value }))
            }
            required
          />
          <Input
            label="Zone Label"
            value={zoneForm.zone_label ?? ''}
            onChange={(e) =>
              setZoneForm((prev) => ({ ...prev, zone_label: e.target.value }))
            }
            placeholder="e.g., Zone 1 (0-14km)"
          />
          <label className="flex flex-col text-sm font-medium text-gray-700 md:col-span-2">
            Suburbs (comma separated)
            <textarea
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={zoneForm.suburbs}
              onChange={(e) =>
                setZoneForm((prev) => ({ ...prev, suburbs: e.target.value }))
              }
            />
          </label>
          <Input
            label="Base Delivery Fee"
            type="number"
            step="0.01"
            value={zoneForm.base_delivery_fee}
            onChange={(e) =>
              setZoneForm((prev) => ({
                ...prev,
                base_delivery_fee: e.target.value,
              }))
            }
          />
          <Input
            label="Express Delivery Fee"
            type="number"
            step="0.01"
            value={zoneForm.express_delivery_fee ?? ''}
            onChange={(e) =>
              setZoneForm((prev) => ({
                ...prev,
                express_delivery_fee: e.target.value,
              }))
            }
          />
          <label className="flex flex-col text-sm font-medium text-gray-700 md:col-span-2">
            Notes
            <textarea
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={zoneForm.notes ?? ''}
              onChange={(e) =>
                setZoneForm((prev) => ({ ...prev, notes: e.target.value }))
              }
            />
          </label>
          <label className="flex items-center space-x-2 mt-2 md:col-span-2">
            <input
              type="checkbox"
              checked={zoneForm.is_active}
              onChange={(e) =>
                setZoneForm((prev) => ({ ...prev, is_active: e.target.checked }))
              }
            />
            <span className="text-sm text-gray-700">Zone is active</span>
          </label>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="ghost" onClick={() => setZoneModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitZone}>
            {zoneForm._id ? 'Save Changes' : 'Create Zone'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MealPlanManagement;
