import React, { useState, useEffect } from 'react';
import { useMenu } from '@hooks/useMenu';
import { useCartStore } from '@store/cartStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import FilterBar from '@components/menu/FilterBar';
import CartSummary from '@components/menu/CartSummary';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import {
  Search,
  MapPin,
  Store,
  Utensils,
  Zap,
  Award,
  Clock,
  Truck,
  Shield,
} from 'lucide-react';
import { useDebounce } from '@hooks/useDebounce';

const DailyMenuPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [localDeliveryOption, setLocalDeliveryOption] = useState<
    'delivery' | 'pickup'
  >('delivery');

  const {
    dailyMenuItems,
    categories,
    activeFilters,
    isLoading,
    searchMenuItems,
    setFilters,
    clearFilters,
    getFilteredItems,
  } = useMenu('daily_menu');

  const { setOrderType, setDeliveryOption } = useCartStore();
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    setOrderType('daily_menu');
    setDeliveryOption(localDeliveryOption);
  }, [localDeliveryOption, setOrderType, setDeliveryOption]);

  useEffect(() => {
    if (debouncedSearch) {
      searchMenuItems(debouncedSearch);
    }
  }, [debouncedSearch, searchMenuItems]);

  const filteredItems = getFilteredItems('daily_menu');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading menu..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        {/* Page header */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
            Daily Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh meals prepared daily. Order for pickup or delivery within 6km.
          </p>
        </div>

        {/* Delivery options */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-md p-2 flex space-x-2">
            <button
              onClick={() => setLocalDeliveryOption('delivery')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                localDeliveryOption === 'delivery'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MapPin size={20} />
              <span>Delivery</span>
            </button>

            <button
              onClick={() => setLocalDeliveryOption('pickup')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                localDeliveryOption === 'pickup'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Store size={20} />
              <span>Pickup</span>
            </button>
          </div>

          {localDeliveryOption === 'delivery' && (
            <p className="text-sm text-gray-600 text-center mt-3 flex items-center justify-center space-x-2">
              <MapPin size={14} className="text-primary" />
              <span>Delivery available within 6km of Guildford 2161</span>
            </p>
          )}
        </div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left column - Filters and menu */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <FilterBar
              categories={categories}
              activeFilters={activeFilters}
              onFilterChange={setFilters}
              onClearFilters={clearFilters}
            />

            {/* Menu items grid */}
            {filteredItems.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-2xl font-bold text-text">
                    Available Items ({filteredItems.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard key={item._id} item={item} />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg mb-4">
                  {searchQuery
                    ? `No items found for "${searchQuery}"`
                    : 'No items match your filters'}
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Right column - Cart summary (sticky) */}
          <div className="lg:col-span-1">
            <CartSummary sticky />
          </div>
        </div>

        {/* Info section with proper icons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Utensils className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-text mb-2">Fresh Daily</h3>
            <p className="text-sm text-gray-600">
              All meals prepared fresh every day with quality ingredients
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Zap className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-text mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick delivery to your door or pickup available
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-text mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-600">
              Satisfaction guaranteed or your money back
            </p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-text mb-6 text-center">
            Why Choose Our Daily Menu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Order Anytime</h4>
                <p className="text-sm text-gray-600">
                  11:00 AM - 9:00 PM, 7 days a week
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Truck className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Free Delivery</h4>
                <p className="text-sm text-gray-600">
                  On orders above $50 within 6km
                </p>
              </div>
            </div>

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

            <div className="flex items-start space-x-3">
              <Award className="text-primary flex-shrink-0 mt-1" size={24} />
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
