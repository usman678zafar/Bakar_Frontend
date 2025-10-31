import React, { useEffect, useMemo, useState } from 'react';
import { useMenuStore } from '@store/menuStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Card from '@components/common/Card';
import { Package, RefreshCcw, AlertCircle } from 'lucide-react';
import Pagination from '@components/common/Pagination';

const DailyMenuPage: React.FC = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

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
    loadMenuData();
  };

  // Get filtered items
  const filteredItems = getFilteredItems('daily_menu');
  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  // Reset pagination when filters or data change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    dailyMenuItems.length,
    activeFilters.category,
    activeFilters.is_vegetarian,
    activeFilters.is_vegan,
    activeFilters.order_type,
  ]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text mb-4">
            Daily Menu
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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

        {/* Main Content - Now full width */}
        <div className="space-y-6">
          {/* Filters */}
          <FilterBar
            categories={categories}
            activeFilters={activeFilters}
            onFilterChange={setFilters}
            onClearFilters={clearFilters}
          />

          {/* Menu Items Grid - Adjusted for full width */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedItems.map((item) => (
                <MenuItemCard
                  key={item._id || item.id}
                  item={item}
                  showQuickAdd={true} // Always show Add button
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

          {filteredItems.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              pageSize={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
              showSummary
              className="pt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyMenuPage;
