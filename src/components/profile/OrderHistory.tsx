import React, { useEffect } from 'react';
import { useOrderStore } from '@store/orderStore';
import { formatCurrency, formatDate } from '@utils/formatters';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Package, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderHistory: React.FC = () => {
  const { orderHistory, fetchOrderHistory, isLoadingHistory } = useOrderStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderHistory();
  }, [fetchOrderHistory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      case 'pending':
      case 'confirmed':
        return 'text-blue-600 bg-blue-50';
      case 'preparing':
      case 'out_for_delivery':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={16} />;
      case 'cancelled':
        return <XCircle size={16} />;
      case 'preparing':
      case 'out_for_delivery':
        return <Clock size={16} />;
      default:
        return <Package size={16} />;
    }
  };

  if (isLoadingHistory) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading order history..." />
      </Card>
    );
  }

  if (orderHistory.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <Package className="mx-auto h-20 w-20 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-500 mb-2">No orders yet</h3>
          <p className="text-sm text-gray-400 mb-6">
            Start ordering to see your order history
          </p>
          <Button variant="primary" onClick={() => navigate('/menu/daily')}>
            Browse Menu
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text">
        Order History
      </h2>

      <div className="space-y-4">
        {orderHistory.map((order) => (
          <Card
            key={order._id}
            padding="lg"
            className="hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-text">
                    Order #{order._id.slice(-8).toUpperCase()}
                  </h3>
                  <span
                    className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="capitalize">
                      {order.status.replace('_', ' ')}
                    </span>
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {formatDate(order.created_at)} •{' '}
                  {order.items.length + order.sidelines.length} items
                </p>

                <div className="space-y-1">
                  {order.items.slice(0, 2).map((item, index) => (
                    <p key={index} className="text-sm text-gray-700">
                      {item.quantity}x {item.menu_item.name}
                    </p>
                  ))}
                  {order.items.length > 2 && (
                    <p className="text-sm text-gray-500">
                      +{order.items.length - 2} more items
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end space-y-3">
                <div className="text-right">
                  <p className="font-heading text-2xl font-bold text-primary">
                    {formatCurrency(order.total)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {order.delivery_option === 'delivery'
                      ? 'Delivery'
                      : 'Pickup'}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/orders/${order._id}`)}
                >
                  <Eye size={16} className="mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
