import React from 'react';
import { Order } from '@types/order.types';
import { formatCurrency, formatDate } from '@utils/formatters';
import Button from '@components/common/Button';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Package,
  DollarSign,
  Calendar,
  Clock,
  Truck,
  CreditCard,
  FileText,
} from 'lucide-react';

interface OrderDetailsProps {
  order: Order;
  onStatusUpdate: (orderId: string, newStatus: string) => void;
  onClose: () => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  onStatusUpdate,
  onClose,
}) => {
  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'text-yellow-600 bg-yellow-50',
      confirmed: 'text-blue-600 bg-blue-50',
      preparing: 'text-purple-600 bg-purple-50',
      out_for_delivery: 'text-indigo-600 bg-indigo-50',
      delivered: 'text-green-600 bg-green-50',
      cancelled: 'text-red-600 bg-red-50',
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h2 className="font-heading text-3xl font-bold text-text">
            Order #{order.order_number}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Placed on {formatDate(order.created_at)}
          </p>
        </div>
        <div
          className={`px-4 py-2 rounded-full ${getStatusColor(order.status)}`}
        >
          <span className="font-semibold uppercase text-sm">
            {order.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Customer Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <User size={20} className="text-primary" />
          <span>Customer Information</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-3">
            <User size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium text-text">
                {order.user_name || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-text">
                {order.user_email || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium text-text">
                {order.user_phone || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Order Date</p>
              <p className="font-medium text-text">
                {formatDate(order.created_at)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      {order.delivery_address && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
            <MapPin size={20} className="text-primary" />
            <span>Delivery Information</span>
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Delivery Method</p>
              <p className="font-medium text-text capitalize">
                {order.delivery_method.replace('_', ' ')}
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Address</p>
              <p className="font-medium text-text">
                {order.delivery_address.street}
                <br />
                {order.delivery_address.suburb}, {order.delivery_address.state}{' '}
                {order.delivery_address.postcode}
              </p>
            </div>

            {order.delivery_instructions && (
              <div>
                <p className="text-gray-500 mb-1">Delivery Instructions</p>
                <p className="font-medium text-text italic">
                  {order.delivery_instructions}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order Items */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <Package size={20} className="text-primary" />
          <span>Order Items</span>
        </h3>

        <div className="space-y-3">
          {order.items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-medium text-text">{item.item_name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="font-semibold text-primary">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}

          {order.sidelines && order.sidelines.length > 0 && (
            <>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Add-ons:
                </p>
              </div>
              {order.sidelines.map((sideline: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-text">
                      {sideline.item_name}
                    </p>
                    <p className="text-xs text-gray-500">Sideline</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      Qty: {sideline.quantity}
                    </p>
                    <p className="font-semibold text-primary">
                      {formatCurrency(sideline.price * sideline.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <DollarSign size={20} className="text-primary" />
          <span>Payment Summary</span>
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">
              {formatCurrency(order.subtotal)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee:</span>
            <span className="font-medium">
              {formatCurrency(order.delivery_fee)}
            </span>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-text text-lg">Total:</span>
              <span className="font-heading text-3xl font-bold text-primary">
                {formatCurrency(order.total)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Payment Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.payment_status === 'paid'
                    ? 'bg-green-100 text-green-800'
                    : order.payment_status === 'failed'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {order.payment_status.toUpperCase()}
              </span>
            </div>
          </div>

          {order.payment_intent_id && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Payment ID:</span>
              <span className="font-mono text-gray-700">
                {order.payment_intent_id}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {(order.notes || order.admin_notes) && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
            <FileText size={20} className="text-primary" />
            <span>Notes</span>
          </h3>

          {order.notes && (
            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-1">Customer Notes:</p>
              <p className="text-sm text-text">{order.notes}</p>
            </div>
          )}

          {order.admin_notes && (
            <div>
              <p className="text-sm text-gray-500 mb-1">Admin Notes:</p>
              <p className="text-sm text-text">{order.admin_notes}</p>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3 pt-6 border-t border-gray-200">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Close
        </Button>

        {order.status !== 'delivered' && order.status !== 'cancelled' && (
          <div className="flex-1">
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={order.status}
              onChange={(e) => onStatusUpdate(order._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancel Order</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
