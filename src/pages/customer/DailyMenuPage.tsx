import React, { useEffect, useState } from 'react';
import { useMenuStore } from '@store/menuStore';
import { useAuthStore } from '@store/authStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import CartSummary from '@components/menu/CartSummary';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import {
  Package,
  RefreshCcw,
  AlertCircle,
  Truck,
  Award,
  Clock,
  Shield,
  MapPin,
  ChefHat,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@components/common/Toast';

const DailyMenuPage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const {
    dailyMenuItems,
    categories,
    activeFilters,
    isLoading,
    error,
    fetchDailyMenu,
    fetchCategories,
    setFilters,
    clearFilters,
    getFilteredItems,
  } = useMenuStore();
  const { showToast } = useToast();

  const [retryCount, setRetryCount] = useState(0);

  // Fetch data on mount
  useEffect(() => {
    loadMenuData();
  }, []);

  // Load menu data
  const loadMenuData = async () => {
    try {
      await Promise.all([fetchDailyMenu(), fetchCategories()]);
    } catch (error) {
      console.error('Failed to load menu data:', error);
    }
  };

  // Retry loading
  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    loadMenuData();
  };

  // Get filtered items
  const filteredItems = getFilteredItems('daily_menu');

  // Loading state
  if (isLoading && dailyMenuItems.length === 0) {
    return (
      <div className="container-custom py-12">
        <LoadingSpinner message="Loading daily menu..." />
      </div>
    );
  }

  // Error state
  if (error && dailyMenuItems.length === 0) {
    return (
      <div className="container-custom py-12">
        <Card padding="lg" className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-text mb-4">
            Failed to Load Menu
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center space-x-2"
          >
            <RefreshCcw size={20} />
            <span>Retry Loading</span>
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-text mb-4">
            Daily Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh meals prepared daily. Order for pickup or delivery within 6km
            of Guildford.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2 text-sm">
            <Package size={16} className="text-primary" />
            <span className="text-gray-600">
              Delivery available within 6km of Guildford • $10 delivery fee
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Filters */}
            <FilterBar
              categories={categories}
              activeFilters={activeFilters}
              onFilterChange={setFilters}
              onClearFilters={clearFilters}
            />

            {/* Menu Items Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <MenuItemCard
                    key={item._id || item.id}
                    item={item}
                    showQuickAdd={isAuthenticated}
                  />
                ))}
              </div>
            ) : (
              <Card padding="lg">
                <div className="text-center py-12">
                  <Package className="mx-auto h-20 w-20 text-gray-300 mb-4" />
                  <h3 className="font-semibold text-gray-500 mb-2 text-xl">
                    {dailyMenuItems.length === 0
                      ? 'No menu items available'
                      : 'No items match your filters'}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {dailyMenuItems.length === 0
                      ? 'Please check back later or contact us.'
                      : 'Try adjusting your filters to see more items.'}
                  </p>
                  {activeFilters.category ||
                  activeFilters.is_vegetarian ||
                  activeFilters.is_vegan ? (
                    <button
                      onClick={clearFilters}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Clear Filters
                    </button>
                  ) : (
                    <button
                      onClick={handleRetry}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center space-x-2"
                    >
                      <RefreshCcw size={18} />
                      <span>Refresh Menu</span>
                    </button>
                  )}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar - Cart Summary */}
          <div className="lg:col-span-4">
            <CartSummary sticky />
          </div>
        </div>

        {/* Info Cards with Professional Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Fresh Daily Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Fresh Daily
            </h3>
            <p className="text-gray-600 text-sm">
              All meals prepared daily with quality ingredients
            </p>
          </Card>

          {/* Fast Delivery Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Quick delivery or pickup available within 6km radius
            </p>
          </Card>

          {/* Quality Guaranteed Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              Satisfaction guaranteed on your every order
            </p>
          </Card>
        </div>

        {/* Additional Feature Cards */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-text mb-6 text-center">
            Why Choose Our Daily Menu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Order Anytime */}
            <div className="flex items-start space-x-3">
              <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Order Anytime</h4>
                <p className="text-sm text-gray-600">
                  11:00 AM - 9:00 PM, 7 days a week
                </p>
              </div>
            </div>

            {/* Free Delivery */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Free Delivery</h4>
                <p className="text-sm text-gray-600">
                  On orders above $50 within 6km
                </p>
              </div>
            </div>

            {/* Safe & Hygienic */}
            <div className="flex items-start space-x-3">
              <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">
                  Safe & Hygienic
                </h4>
                <p className="text-sm text-gray-600">
                  Strict quality control standards
                </p>
              </div>
            </div>

            {/* Best Quality */}
            <div className="flex items-start space-x-3">
              <Sparkles className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Best Quality</h4>
                <p className="text-sm text-gray-600">
                  Premium ingredients only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMenuPage;
