import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI } from '@api/endpoints/menu';
import { useToast } from '@components/common/Toast';
import {
  Calendar,
  Package,
  CheckCircle,
  Info,
  MapPin,
  Store,
  Leaf,
  X,
  Plus,
  AlertCircle,
  Truck,
  Clock,
} from 'lucide-react';

// ===========================
// TYPE DEFINITIONS
// ===========================

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string;
  is_available: boolean;
  is_vegetarian: boolean;
  is_vegan: boolean;
  serving_size?: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  shortName: string;
  description: string;
  mealsPerDelivery: number;
  totalMeals: number;
  duration: 'weekly' | 'fortnightly' | 'monthly';
  deliveries: number;
  pricePerMeal: number;
  totalPrice: number;
  regularPrice: number;
  savings: number;
  features: string[];
  badge?: string;
  popular?: boolean;
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
};

// ===========================
// SUBSCRIPTION PLANS DATA (Business Logic - Not from Backend)
// ===========================

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'weekly-10',
    name: 'Weekly 10-Box Deal',
    shortName: 'Weekly',
    description: 'Perfect for singles or couples',
    mealsPerDelivery: 10,
    totalMeals: 10,
    duration: 'weekly',
    deliveries: 1,
    pricePerMeal: 9.9, // From backend docs: $99 / 10 meals
    totalPrice: 99.0,
    regularPrice: 150.0,
    savings: 51.0,
    badge: 'POPULAR',
    popular: true,
    features: [
      '10 meals per week',
      'Free delivery within 6km',
      'Flexible menu selection',
      'Max 2 boxes per menu item',
      'Cancel anytime',
    ],
  },
  {
    id: 'fortnight-20',
    name: 'Fortnight 20-Box Deal',
    shortName: 'Fortnightly',
    description: 'Great value for small families',
    mealsPerDelivery: 10,
    totalMeals: 20,
    duration: 'fortnightly',
    deliveries: 2,
    pricePerMeal: 9.9, // From backend docs: $198 / 20 meals
    totalPrice: 198.0,
    regularPrice: 300.0,
    savings: 102.0,
    badge: 'BEST VALUE',
    popular: true,
    features: [
      '20 meals over 2 weeks',
      '2 deliveries (10 meals each)',
      'Free delivery on both days',
      'Priority support',
      'Mix & match menu',
    ],
  },
  {
    id: 'monthly-40',
    name: 'Monthly 40-Box Deal',
    shortName: 'Monthly',
    description: 'Maximum savings for families',
    mealsPerDelivery: 10,
    totalMeals: 40,
    duration: 'monthly',
    deliveries: 4,
    pricePerMeal: 9.9, // From backend docs: $396 / 40 meals
    totalPrice: 396.0,
    regularPrice: 600.0,
    savings: 204.0,
    badge: 'MAX SAVINGS',
    popular: false,
    features: [
      '40 meals over 4 weeks',
      '4 deliveries (10 meals each)',
      'Free delivery all month',
      'Premium menu access',
      'Dedicated support',
      'Exclusive recipes',
    ],
  },
];

// ===========================
// SIMPLE COMPONENTS
// ===========================

// Loading Spinner Component
const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF6B35]"></div>
    {message && <p className="mt-4 text-gray-600">{message}</p>}
  </div>
);

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  size = 'md',
  className = '',
}) => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-[#FF6B35] text-white hover:bg-[#E55A2B] focus:ring-[#FF6B35] disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white focus:ring-[#FF6B35] disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed',
    ghost:
      'text-[#FF6B35] hover:bg-[#FFF5F2] focus:ring-[#FF6B35] disabled:text-gray-300 disabled:cursor-not-allowed',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-gray-100 ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// ===========================
// PLAN CARD COMPONENT
// ===========================

interface PlanCardProps {
  plan: SubscriptionPlan;
  isSelected: boolean;
  onSelect: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect }) => {
  const savingsPercentage = Math.round(
    (plan.savings / plan.regularPrice) * 100
  );

  return (
    <Card
      className={`cursor-pointer transition-all relative transform hover:scale-102 ${
        isSelected
          ? 'ring-4 ring-[#FF6B35] border-[#FF6B35] shadow-2xl scale-105'
          : 'hover:shadow-xl border-gray-200'
      }`}
      onClick={() => onSelect(plan.id)}
      padding="lg"
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
          {plan.badge}
        </div>
      )}

      {/* Selection Indicator */}
      <div className="flex justify-end mb-3">
        <div
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? 'border-[#FF6B35] bg-[#FF6B35] scale-110'
              : 'border-gray-300 hover:border-[#FF6B35]'
          }`}
        >
          {isSelected && <CheckCircle className="h-5 w-5 text-white" />}
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? 'bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] shadow-lg'
              : 'bg-[#FFF5F2]'
          }`}
        >
          <Package
            className={isSelected ? 'text-white' : 'text-[#FF6B35]'}
            size={48}
          />
        </div>
      </div>

      {/* Plan Details */}
      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] text-center mb-2">
        {plan.name}
      </h3>
      <p className="font-['Montserrat'] text-sm text-gray-600 text-center mb-6 min-h-[40px]">
        {plan.description}
      </p>

      {/* Pricing */}
      <div className="text-center mb-6 bg-gradient-to-br from-gray-50 to-[#FFF5F2] rounded-xl p-5 border border-gray-100">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-gray-400 line-through text-lg font-['Montserrat']">
            {formatCurrency(plan.regularPrice)}
          </span>
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            SAVE {savingsPercentage}%
          </span>
        </div>
        <div className="font-['Playfair_Display'] text-5xl font-bold text-[#FF6B35] mb-2">
          {formatCurrency(plan.totalPrice)}
        </div>
        <div className="text-sm text-gray-600 font-['Montserrat'] mb-1">
          {formatCurrency(plan.pricePerMeal)} per meal
        </div>
        <div className="text-xs text-gray-500 font-['Montserrat'] mt-3 pt-3 border-t border-gray-200">
          {plan.totalMeals} meals • {plan.deliveries}{' '}
          {plan.deliveries === 1 ? 'delivery' : 'deliveries'}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 text-sm">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 font-['Montserrat']">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Select Button */}
      <Button
        variant={isSelected ? 'primary' : 'outline'}
        fullWidth
        size="lg"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(plan.id);
        }}
      >
        {isSelected ? (
          <span className="flex items-center justify-center space-x-2">
            <CheckCircle size={20} />
            <span>Selected</span>
          </span>
        ) : (
          'Select Plan'
        )}
      </Button>
    </Card>
  );
};

// ===========================
// MEAL CARD COMPONENT
// ===========================

interface MealCardProps {
  meal: MenuItem;
  isSelected: boolean;
  onSelect: (mealId: string) => void;
  disabled?: boolean;
}

const MealCard: React.FC<MealCardProps> = ({
  meal,
  isSelected,
  onSelect,
  disabled,
}) => {
  return (
    <Card
      className={`cursor-pointer transition-all relative overflow-hidden ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : isSelected
            ? 'ring-4 ring-[#FF6B35] border-[#FF6B35] shadow-lg'
            : 'hover:shadow-xl hover:scale-102 border-gray-200'
      }`}
      onClick={() => !disabled && onSelect(meal._id)}
      padding="none"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={
            meal.image_url ||
            'https://via.placeholder.com/400x300?text=No+Image'
          }
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://via.placeholder.com/400x300?text=No+Image';
          }}
        />

        {/* Selection Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-[#FF6B35] bg-opacity-30 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-[#FF6B35] text-white rounded-full p-4 shadow-2xl animate-pulse">
              <CheckCircle size={40} strokeWidth={3} />
            </div>
          </div>
        )}

        {/* Dietary Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {meal.is_vegetarian && (
            <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
              <Leaf size={16} />
            </div>
          )}
          {meal.is_vegan && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              VEGAN
            </div>
          )}
        </div>

        {/* Availability Badge */}
        {!meal.is_available && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 bg-[#FFF5F2] text-[#FF6B35] text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
          {meal.category}
        </span>

        {/* Name */}
        <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-xl mb-2 line-clamp-1">
          {meal.name}
        </h3>

        {/* Description */}
        <p className="font-['Montserrat'] text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
          {meal.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#FF6B35] font-['Playfair_Display'] font-bold text-2xl">
              {formatCurrency(meal.price)}
            </div>
            {meal.serving_size && (
              <div className="text-xs text-gray-500 font-['Montserrat'] mt-1">
                {meal.serving_size}
              </div>
            )}
          </div>
          {isSelected && (
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center space-x-1">
              <CheckCircle size={14} />
              <span>ADDED</span>
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

// ===========================
// MAIN PAGE COMPONENT
// ===========================

const WeeklySubscriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // State
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [selectedMealIds, setSelectedMealIds] = useState<string[]>([]);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Get selected plan
  const selectedPlan = SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId);

  // ✅ Fetch menu items from backend API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true);

        // Fetch weekly menu from backend
        const response = await menuAPI.getWeeklyMenu();
        const menuData = response.data.data;

        // Set menu items from API response
        if (menuData && menuData.items) {
          setMenuItems(menuData.items);
        } else if (Array.isArray(menuData)) {
          setMenuItems(menuData);
        }

        setError(null);
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          'Failed to load menu items. Please try again.';
        setError(errorMessage);
        showToast(errorMessage, 'error');
        console.error('Error loading menu:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle plan selection
  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    setSelectedMealIds([]);
    showToast(
      `${SUBSCRIPTION_PLANS.find((p) => p.id === planId)?.shortName} plan selected`,
      'success'
    );
  };

  // Handle meal selection
  const handleMealSelect = (mealId: string) => {
    if (!selectedPlan) {
      showToast('Please select a plan first', 'warning');
      return;
    }

    if (selectedMealIds.includes(mealId)) {
      setSelectedMealIds(selectedMealIds.filter((id) => id !== mealId));
      showToast('Meal removed', 'info');
    } else {
      if (selectedMealIds.length >= selectedPlan.totalMeals) {
        showToast(
          `You can only select ${selectedPlan.totalMeals} meals for this plan`,
          'warning'
        );
      } else {
        setSelectedMealIds([...selectedMealIds, mealId]);
        showToast('Meal added', 'success');
      }
    }
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    if (!selectedPlan) {
      showToast('Please select a subscription plan', 'error');
      return;
    }

    if (selectedMealIds.length !== selectedPlan.totalMeals) {
      showToast(
        `Please select ${selectedPlan.totalMeals} meals to continue`,
        'error'
      );
      return;
    }

    const selectedMeals = menuItems.filter((item) =>
      selectedMealIds.includes(item._id)
    );

    // Navigate to checkout with subscription details
    navigate('/checkout', {
      state: {
        subscriptionDetails: {
          plan: selectedPlan,
          meals: selectedMeals,
          deliveryOption,
        },
      },
    });
  };

  // Calculate progress
  const progress = selectedPlan
    ? Math.round((selectedMealIds.length / selectedPlan.totalMeals) * 100)
    : 0;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <LoadingSpinner message="Loading subscription plans..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Card padding="lg" className="max-w-md text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-2">
            Oops! Something went wrong
          </h2>
          <p className="font-['Montserrat'] text-gray-600 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
            Weekly Meal <span className="text-[#FF6B35]">Subscriptions</span>
          </h1>
          <p className="font-['Montserrat'] text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our meal plans and enjoy fresh, delicious meals
            delivered regularly.
            <br />
            <span className="font-semibold text-[#FF6B35]">
              Save up to 35%
            </span>{' '}
            with our flexible subscription packages!
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4">
            {/* Step 1 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlanId ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlanId
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                1
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Choose Plan
              </span>
            </div>

            <div
              className={`w-20 h-1 rounded transition-all ${selectedPlanId ? 'bg-[#FF6B35]' : 'bg-gray-300'}`}
            ></div>

            {/* Step 2 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlanId && selectedMealIds.length > 0 ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlanId && selectedMealIds.length > 0
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                2
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Select Meals
              </span>
            </div>

            <div
              className={`w-20 h-1 rounded transition-all ${selectedPlan && selectedMealIds.length === selectedPlan.totalMeals ? 'bg-[#FF6B35]' : 'bg-gray-300'}`}
            ></div>

            {/* Step 3 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlan && selectedMealIds.length === selectedPlan.totalMeals ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlan &&
                  selectedMealIds.length === selectedPlan.totalMeals
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                3
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Checkout
              </span>
            </div>
          </div>
        </div>

        {/* DELIVERY OPTIONS */}
        <div className="max-w-xl mx-auto mb-12">
          <Card padding="sm" className="shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setDeliveryOption('delivery')}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-['Montserrat'] font-semibold transition-all ${
                  deliveryOption === 'delivery'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Truck size={22} />
                <span>Delivery</span>
              </button>

              <button
                onClick={() => setDeliveryOption('pickup')}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-['Montserrat'] font-semibold transition-all ${
                  deliveryOption === 'pickup'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Store size={22} />
                <span>Pickup</span>
              </button>
            </div>
          </Card>

          {deliveryOption === 'delivery' && (
            <p className="font-['Montserrat'] text-sm text-gray-600 text-center mt-4 flex items-center justify-center space-x-2">
              <MapPin size={16} className="text-[#FF6B35]" />
              <span>Free delivery within 6km of Guildford 2161</span>
            </p>
          )}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT/CENTER COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            {/* SUBSCRIPTION PLANS */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E] mb-8">
                Choose Your Subscription Plan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    isSelected={selectedPlanId === plan.id}
                    onSelect={handlePlanSelect}
                  />
                ))}
              </div>
            </div>

            {/* MEAL SELECTION */}
            {selectedPlan && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E]">
                      Select Your Meals
                    </h2>
                    <p className="font-['Montserrat'] text-gray-600 mt-2">
                      Choose {selectedPlan.totalMeals} delicious meals from our
                      weekly menu
                    </p>
                  </div>

                  {selectedMealIds.length === selectedPlan.totalMeals && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
                      <CheckCircle size={24} />
                      <span className="font-['Montserrat'] font-semibold">
                        Complete!
                      </span>
                    </div>
                  )}
                </div>

                {/* Selection Progress */}
                <Card
                  padding="md"
                  className="mb-8 bg-gradient-to-br from-white to-[#FFF5F2]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Montserrat'] text-sm font-semibold text-[#2E2E2E]">
                      Meals Selected:{' '}
                      <span className="text-[#FF6B35]">
                        {selectedMealIds.length}
                      </span>{' '}
                      / {selectedPlan.totalMeals}
                    </span>
                    <span className="font-['Montserrat'] text-sm font-bold text-[#FF6B35]">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] h-4 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </Card>

                {/* Meal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.map((meal) => (
                    <MealCard
                      key={meal._id}
                      meal={meal}
                      isSelected={selectedMealIds.includes(meal._id)}
                      onSelect={handleMealSelect}
                      disabled={
                        !meal.is_available ||
                        (!selectedMealIds.includes(meal._id) &&
                          selectedMealIds.length >= selectedPlan.totalMeals)
                      }
                    />
                  ))}
                </div>

                {menuItems.length === 0 && (
                  <Card padding="lg">
                    <div className="text-center py-16">
                      <Package className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-2">
                        No Meals Available
                      </h3>
                      <p className="font-['Montserrat'] text-gray-500">
                        Check back soon for our delicious weekly menu!
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card padding="lg" className="shadow-xl">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-6 pb-4 border-b-2 border-gray-100">
                  Order Summary
                </h3>

                {selectedPlan ? (
                  <div className="space-y-6">
                    {/* Selected Plan */}
                    <div className="pb-6 border-b border-gray-200">
                      <div className="flex items-start space-x-3 mb-4">
                        <Calendar
                          className="text-[#FF6B35] flex-shrink-0 mt-1"
                          size={24}
                        />
                        <div>
                          <span className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-lg block mb-2">
                            {selectedPlan.name}
                          </span>
                          <span className="font-['Montserrat'] text-sm text-gray-600">
                            {selectedPlan.description}
                          </span>
                        </div>
                      </div>

                      <div className="font-['Montserrat'] text-xs text-gray-500 space-y-2 bg-gray-50 rounded-lg p-3">
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>{selectedPlan.totalMeals} meals total</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>
                            {selectedPlan.deliveries}{' '}
                            {selectedPlan.deliveries === 1
                              ? 'delivery'
                              : 'deliveries'}
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>
                            {selectedPlan.mealsPerDelivery} meals per delivery
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Selected Meals Summary */}
                    {selectedMealIds.length > 0 && (
                      <div className="pb-6 border-b border-gray-200">
                        <h4 className="font-['Montserrat'] font-bold text-[#2E2E2E] mb-4 text-sm flex items-center justify-between">
                          <span>Selected Meals ({selectedMealIds.length})</span>
                          {selectedMealIds.length > 0 && (
                            <button
                              onClick={() => setSelectedMealIds([])}
                              className="text-red-500 hover:text-red-700 text-xs"
                            >
                              Clear All
                            </button>
                          )}
                        </h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                          {selectedMealIds.map((mealId) => {
                            const meal = menuItems.find(
                              (m) => m._id === mealId
                            );
                            if (!meal) return null;
                            return (
                              <div
                                key={mealId}
                                className="flex items-center justify-between text-xs bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                              >
                                <span className="font-['Montserrat'] text-gray-700 flex-1 mr-2">
                                  {meal.name}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleMealSelect(mealId);
                                  }}
                                  className="text-red-500 hover:text-red-700 flex-shrink-0 p-1 hover:bg-red-50 rounded"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Pricing Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-gray-600">Regular Price:</span>
                        <span className="line-through text-gray-400 font-medium">
                          {formatCurrency(selectedPlan.regularPrice)}
                        </span>
                      </div>

                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-green-600 font-semibold">
                          You Save:
                        </span>
                        <span className="font-bold text-green-600">
                          -{formatCurrency(selectedPlan.savings)}
                        </span>
                      </div>

                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-gray-600">Delivery Fee:</span>
                        <span className="font-bold text-green-600">FREE</span>
                      </div>

                      <div className="pt-4 border-t-2 border-[#FF6B35]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-xl">
                            Total:
                          </span>
                          <span className="font-['Playfair_Display'] text-4xl font-bold text-[#FF6B35]">
                            {formatCurrency(selectedPlan.totalPrice)}
                          </span>
                        </div>
                        <div className="font-['Montserrat'] text-xs text-gray-500 text-right">
                          {formatCurrency(selectedPlan.pricePerMeal)} per meal
                        </div>
                      </div>
                    </div>

                    {/* Delivery Option Display */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center space-x-3 font-['Montserrat'] text-sm text-blue-900">
                        {deliveryOption === 'delivery' ? (
                          <>
                            <Truck size={20} className="text-blue-600" />
                            <div>
                              <div className="font-bold">Free Delivery</div>
                              <div className="text-xs text-blue-700">
                                Within 6km radius
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <Store size={20} className="text-blue-600" />
                            <div>
                              <div className="font-bold">Store Pickup</div>
                              <div className="text-xs text-blue-700">
                                Guildford 2161
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
                      <div className="flex items-start space-x-3 font-['Montserrat'] text-xs text-amber-900">
                        <Clock
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-amber-600"
                        />
                        <p className="leading-relaxed">
                          <strong className="block mb-1">
                            Fresh Meals, On Time
                          </strong>
                          Meals are prepared fresh and delivered on your
                          selected days. You can customize your delivery
                          schedule at checkout.
                        </p>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      variant="primary"
                      fullWidth
                      size="lg"
                      onClick={handleProceedToCheckout}
                      disabled={
                        !selectedPlan ||
                        selectedMealIds.length !== selectedPlan.totalMeals
                      }
                      className="shadow-2xl hover:shadow-3xl transition-shadow font-['Montserrat']"
                    >
                      {selectedMealIds.length === selectedPlan.totalMeals ? (
                        <span className="flex items-center justify-center space-x-2">
                          <CheckCircle size={20} />
                          <span>Proceed to Checkout</span>
                        </span>
                      ) : (
                        `Select ${selectedPlan.totalMeals - selectedMealIds.length} More ${selectedPlan.totalMeals - selectedMealIds.length === 1 ? 'Meal' : 'Meals'}`
                      )}
                    </Button>

                    {/* Security Note */}
                    <p className="font-['Montserrat'] text-xs text-gray-500 text-center flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>Secure checkout • Cancel anytime</span>
                    </p>
                  </div>
                ) : (
                  // Empty State
                  <div className="text-center py-16">
                    <Package className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                    <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-2">
                      No Plan Selected
                    </h4>
                    <p className="font-['Montserrat'] text-sm text-gray-500 mb-6">
                      Choose a subscription plan to see your order summary
                    </p>
                    <div className="text-left space-y-2">
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Flexible meal selection</span>
                      </p>
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Free delivery included</span>
                      </p>
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Cancel anytime</span>
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mt-24 pt-16 border-t-2 border-gray-200">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] text-center mb-4">
            Why Subscribe to Our{' '}
            <span className="text-[#FF6B35]">Meal Plans?</span>
          </h2>
          <p className="font-['Montserrat'] text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join hundreds of satisfied customers enjoying convenient, delicious
            meals every week
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">💰</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Save Money
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                Up to 35% off regular menu prices with our subscription packages
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">⏰</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Save Time
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                No more daily menu decisions. Your meals are planned and ready
                to enjoy
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">🍱</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Fresh Quality
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                All meals prepared fresh daily with premium, authentic
                ingredients
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">🔄</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Flexible Plans
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                Change meals, pause, or cancel your subscription anytime, no
                questions asked
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] text-center mb-4">
            Frequently Asked <span className="text-[#FF6B35]">Questions</span>
          </h2>
          <p className="font-['Montserrat'] text-gray-600 text-center mb-12">
            Everything you need to know about our meal subscriptions
          </p>

          <div className="space-y-4">
            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Can I change my meal selections?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Yes! You can update your meal selections up to 24 hours before
                your scheduled delivery. Simply log into your account and make
                changes to your upcoming orders.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>What if I need to skip a week?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                You can pause or skip deliveries anytime from your account
                dashboard. There are no penalties or fees for pausing your
                subscription.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Are dietary restrictions accommodated?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Absolutely! Our menu includes vegetarian, vegan, and various
                dietary-friendly options, all clearly marked with icons. You can
                filter meals based on your dietary preferences.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>How does delivery work?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                We offer free delivery within 6km of Guildford 2161. Meals are
                delivered fresh on your chosen days each week. You'll receive
                delivery notifications via WhatsApp with tracking information.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Can I cancel my subscription?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Yes, you can cancel your subscription at any time with no
                cancellation fees. Your subscription will remain active until
                the end of your current billing period.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 mb-12">
          <Card
            padding="lg"
            className="bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] text-white text-center shadow-2xl"
          >
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
              Ready to Start Your Subscription?
            </h2>
            <p className="font-['Montserrat'] text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of food lovers and enjoy delicious, hassle-free
              meals every week
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF6B35] hover:bg-gray-100 border-white font-['Montserrat'] font-bold px-12"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Choose Your Plan Now
            </Button>
          </Card>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FF6B35;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E55A2B;
        }
      `}</style>
    </div>
  );
};

export default WeeklySubscriptionPage;
