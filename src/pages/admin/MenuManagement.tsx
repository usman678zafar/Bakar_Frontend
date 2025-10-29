import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { MenuItemsList } from '@components/admin/menu/MenuItemsList';
import { AddMenuItem } from '@components/admin/menu/AddMenuItem';
import { EditMenuItem } from '@components/admin/menu/EditMenuItem';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Modal from '@components/common/Modal';
import Input from '@components/common/Input';
import {
  Plus,
  Search,
  Filter,
  RefreshCcw,
  Eye,
  EyeOff,
  Info,
} from 'lucide-react';
import { MenuItem } from '@models/menu.types';

const MenuManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    managedMenuItems,
    managedCategories,
    fetchManagedMenuItems,
    fetchManagedCategories,
    deleteMenuItem,
    isLoading,
  } = useAdminStore();

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showUnavailable, setShowUnavailable] = useState(true); // ✅ DEFAULT: Show ALL items including unavailable
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      console.log('🔄 Loading menu management data...');
      await Promise.all([fetchManagedMenuItems(), fetchManagedCategories()]);
      console.log('✅ Menu management data loaded');
    } catch (error) {
      console.error('❌ Failed to load menu data:', error);
      showToast('Failed to load menu data', 'error');
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
    showToast('Menu items refreshed', 'success');
  };

  const handleDelete = async (itemId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this menu item? This action cannot be undone.'
      )
    ) {
      return;
    }

    try {
      await deleteMenuItem(itemId);
      showToast('Menu item deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete menu item', 'error');
    }
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
  };

  const handleCloseEdit = () => {
    setEditingItem(null);
    loadData(); // Refresh data after edit
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
    loadData(); // Refresh data after add
  };

  // ✅ FIXED: Filter menu items - Admin sees ALL items by default
  const filteredItems = managedMenuItems.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === '' || item.category === selectedCategory;

    // ✅ FIXED: Only filter by availability if admin chooses to hide unavailable items
    const matchesAvailability = showUnavailable || item.is_available;

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  // ✅ Calculate stats including ALL items (don't filter managedMenuItems)
  const totalItems = managedMenuItems.length;
  const availableItems = managedMenuItems.filter(
    (item) => item.is_available
  ).length;
  const unavailableItems = managedMenuItems.filter(
    (item) => !item.is_available
  ).length;

  console.log('📊 Menu Management Stats:', {
    total: totalItems,
    available: availableItems,
    unavailable: unavailableItems,
    filtered: filteredItems.length,
    showingUnavailable: showUnavailable,
  });

  if (isLoading && managedMenuItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading menu items..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-text mb-2">
              Menu Management
            </h1>
            <p className="text-gray-600">Manage your restaurant menu items</p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCcw
                size={18}
                className={`mr-2 ${refreshing ? 'animate-spin' : ''}`}
              />
              Refresh
            </Button>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={20} className="mr-2" />
              Add Menu Item
            </Button>
          </div>
        </div>

        {/* ✅ Stats Cards - Shows counts of ALL items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {totalItems}
              </h3>
              <p className="text-sm text-gray-600">Total Items</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                {availableItems}
              </h3>
              <p className="text-sm text-gray-600">Available</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                {unavailableItems}
              </h3>
              <p className="text-sm text-gray-600">Unavailable</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">
                {managedCategories.length}
              </h3>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card padding="lg" className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">All Categories</option>
                  {managedCategories.map((cat) => (
                    <option key={cat._id || cat.name} value={cat.name}>
                      {cat.display_name || cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ✅ FIXED: Availability Toggle - Default shows all */}
            <div className="md:w-auto">
              <button
                onClick={() => setShowUnavailable(!showUnavailable)}
                className={`flex items-center space-x-2 px-4 py-3 border-2 rounded-lg transition-all ${
                  showUnavailable
                    ? 'border-primary bg-primary text-white'
                    : 'border-orange-500 bg-orange-500 text-white'
                }`}
              >
                {showUnavailable ? (
                  <>
                    <Eye size={20} />
                    <span>Showing All</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={20} />
                    <span>Available Only</span>
                  </>
                )}
              </button>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory || !showUnavailable) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setShowUnavailable(true);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory || !showUnavailable) && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                  Search: {searchQuery}
                </span>
              )}
              {selectedCategory && (
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                  Category: {selectedCategory}
                </span>
              )}
              {!showUnavailable && (
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm">
                  Available Only
                </span>
              )}
              <span className="text-sm text-gray-600 ml-2">
                ({filteredItems.length} of {managedMenuItems.length} items)
              </span>
            </div>
          )}

          {/* ✅ IMPROVED: Info Message for Admin */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800 flex items-start space-x-2">
              <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Admin View:</strong> You can see and manage ALL menu
                items regardless of their availability status. Items marked as{' '}
                <span className="font-semibold">unavailable</span> will not be
                shown to customers but remain visible here for management. Use
                the toggle above to filter your view.
              </span>
            </p>
          </div>
        </Card>

        {/* Menu Items List */}
        <MenuItemsList
          items={filteredItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />

        {/* Add Modal */}
        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Menu Item"
          size="lg"
        >
          <AddMenuItem
            onSuccess={handleCloseAdd}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={!!editingItem}
          onClose={() => setEditingItem(null)}
          title="Edit Menu Item"
          size="lg"
        >
          {editingItem && (
            <EditMenuItem
              item={editingItem}
              onSuccess={handleCloseEdit}
              onCancel={() => setEditingItem(null)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MenuManagement;
