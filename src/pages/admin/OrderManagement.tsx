import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { OrdersList } from '@components/admin/orders/OrdersList';
import { OrderDetails } from '@components/admin/orders/OrderDetails';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Modal from '@components/common/Modal';
import { Filter, RefreshCcw, Calendar, Download } from 'lucide-react';
import { Order } from '@types/order.types';

const OrderManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    allOrders,
    fetchAllOrders,
    updateOrderStatus,
    isLoading,
    isUpdating,
  } = useAdminStore();

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    date: '',
    order_type: '',
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      await fetchAllOrders(filters);
    } catch (error) {
      showToast('Failed to load orders', 'error');
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadOrders();
    setRefreshing(false);
    showToast('Orders refreshed', 'success');
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleApplyFilters = () => {
    loadOrders();
  };

  const handleClearFilters = () => {
    setFilters({ status: '', date: '', order_type: '' });
    fetchAllOrders();
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      showToast(`Order status updated to ${newStatus}`, 'success');
      loadOrders();
    } catch (error) {
      showToast('Failed to update order status', 'error');
    }
  };

  const handleExportOrders = () => {
    // Implementation for exporting orders to CSV
    showToast('Export feature coming soon', 'info');
  };

  if (isLoading && allOrders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading orders..." />
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
              Order Management
            </h1>
            <p className="text-gray-600">
              Manage and track all customer orders
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleExportOrders}
              disabled={allOrders.length === 0}
            >
              <Download size={18} className="mr-2" />
              Export
            </Button>

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
          </div>
        </div>

        {/* Filters */}
        <Card padding="lg" className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-primary" />
            <h3 className="font-semibold text-text">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="preparing">Preparing</option>
                <option value="out_for_delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Order Type Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Order Type
              </label>
              <select
                value={filters.order_type}
                onChange={(e) =>
                  handleFilterChange('order_type', e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="daily_menu">Daily Menu</option>
                <option value="weekly_subscription">Weekly Subscription</option>
                <option value="special_catering">Special Catering</option>
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Date
              </label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Actions */}
            <div className="flex items-end space-x-2">
              <Button
                variant="primary"
                onClick={handleApplyFilters}
                className="flex-1"
              >
                Apply
              </Button>
              <Button variant="ghost" onClick={handleClearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </Card>

        {/* Orders List */}
        <OrdersList
          orders={allOrders}
          onViewOrder={handleViewOrder}
          onStatusUpdate={handleStatusUpdate}
          isLoading={isLoading}
          isUpdating={isUpdating}
        />

        {/* Order Details Modal */}
        <Modal
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
          title="Order Details"
          size="xl"
        >
          {selectedOrder && (
            <OrderDetails
              order={selectedOrder}
              onStatusUpdate={handleStatusUpdate}
              onClose={() => setShowDetailsModal(false)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default OrderManagement;
