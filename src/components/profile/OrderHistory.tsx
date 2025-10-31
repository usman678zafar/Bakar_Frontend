import React, { useEffect } from 'react';
import { useOrderStore } from '@store/orderStore';
import { formatCurrency, formatDate } from '@utils/formatters';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Package, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/common/Modal';
import type { Order } from '@models/order.types';

const OrderHistory: React.FC = () => {
  const { orderHistory, fetchOrderHistory, isLoadingHistory } = useOrderStore();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);

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
    <>
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
                  onClick={() => { setSelectedOrder(order as unknown as Order); setIsOrderModalOpen(true); }}
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

    {/* Order Details Modal */}
    <Modal
      isOpen={isOrderModalOpen}
      onClose={() => setIsOrderModalOpen(false)}
      title={selectedOrder ? `Order #${selectedOrder._id?.slice(-8)}` : 'Order Details'}
    >
      {!selectedOrder ? (
        <div className="py-6 text-center text-gray-600">No order selected.</div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Placed on</p>
              <p className="font-medium">{formatDate(selectedOrder.created_at)}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                selectedOrder.status === 'delivered'
                  ? 'bg-green-100 text-green-800'
                  : selectedOrder.status === 'cancelled'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {selectedOrder.status?.toUpperCase().replace('_', ' ')}
            </span>
          </div>

          <div className="divide-y border rounded">
            {[...(selectedOrder.items || []), ...(selectedOrder.sidelines || [])].map((it: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3 text-sm">
                <div className="text-gray-700">
                  {it.item_name || it.name}
                  {it.category ? <span className="text-gray-400"> • {it.category}</span> : null}
                </div>
                <div className="text-gray-600">x{it.quantity}</div>
                <div className="font-medium">{formatCurrency(it.subtotal ?? (it.price || 0) * (it.quantity || 1))}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(selectedOrder.subtotal || 0)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Delivery</span>
            <span className="font-medium">{formatCurrency(selectedOrder.delivery_fee || 0)}</span>
          </div>
          <div className="flex items-center justify-between text-base">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{formatCurrency((selectedOrder as any).total ?? (selectedOrder as any).total_amount ?? 0)}</span>
          </div>

          <div className="pt-2 text-xs text-gray-500">
            Delivery method: {String((selectedOrder as any).delivery_option || (selectedOrder as any).delivery_method || 'N/A')}
          </div>
        </div>
      )}
    </Modal>
    </>
  );
};

export default OrderHistory;

// Inline order details modal rendering at the bottom
// Render modal via a portal-like placement within this component tree
// to avoid external wiring.
