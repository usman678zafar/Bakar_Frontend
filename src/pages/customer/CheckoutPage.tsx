import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuth } from '@hooks/useAuth';
import { useToast } from '@components/common/Toast';
import { ordersAPI } from '@api';
import { formatCurrency } from '@utils/formatters';
import {
  MapPin,
  Calendar,
  ArrowLeft,
  Truck,
  Store,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Package,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';

interface CheckoutState {
  cateringDetails?: any;
  subscriptionDetails?: any;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { summary, items, sidelines, clearCart } = useCart();
  const { showToast } = useToast();

  const state = (location.state as CheckoutState) || {};
  const { cateringDetails, subscriptionDetails } = state;

  // State
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  useEffect(() => {
    // Set default address
    if (user?.addresses && user.addresses.length > 0) {
      const defaultAddr = user.addresses.find((addr: any) => addr.is_default);
      setSelectedAddress(defaultAddr || user.addresses[0]);
    }

    // Set minimum delivery date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDeliveryDate(tomorrow.toISOString().split('T')[0]);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0 && !cateringDetails && !subscriptionDetails) {
      showToast('Cart is empty', 'error');
      return;
    }

    if (deliveryMethod === 'delivery' && !selectedAddress) {
      showToast('Please select a delivery address', 'error');
      return;
    }

    if (!deliveryDate || !deliveryTime) {
      showToast('Please select delivery date and time', 'error');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create order based on type
      let orderResponse;

      if (cateringDetails) {
        // Catering order
        orderResponse = await ordersAPI.createCateringOrder({
          package_type: cateringDetails.package.id,
          guest_count: cateringDetails.eventDetails.head_count,
          event_date: cateringDetails.eventDetails.event_date,
          event_time: cateringDetails.eventDetails.event_time,
          venue_address: cateringDetails.eventDetails.venue_address,
          selected_items: cateringDetails.selectedItems,
          special_requests: specialInstructions,
          payment_method: paymentMethod,
        });
      } else if (subscriptionDetails) {
        // Weekly subscription order
        orderResponse = await ordersAPI.createWeeklyOrder({
          menu_selections: subscriptionDetails.meals.reduce(
            (acc: any, meal: any) => {
              acc[meal._id] = 1;
              return acc;
            },
            {}
          ),
          sidelines: sidelines.map((s: any) => ({
            item_id: s.sideline._id,
            quantity: s.quantity,
          })),
          delivery_dates: [deliveryDate],
          deals: subscriptionDetails.plan.deals || {},
          delivery_address_id: selectedAddress?._id || '',
          is_express: false,
          delivery_instructions: specialInstructions,
          notes: '',
          payment_method: paymentMethod,
        });
      } else {
        // Daily order
        orderResponse = await ordersAPI.createDailyOrder({
          items: items.map((item: any) => ({
            item_id: item.menu_item._id,
            quantity: item.quantity,
          })),
          sidelines: sidelines.map((s: any) => ({
            item_id: s.sideline._id,
            quantity: s.quantity,
          })),
          delivery_method: deliveryMethod,
          delivery_address_id: selectedAddress?._id,
          delivery_instructions: specialInstructions,
          notes: '',
          payment_method: paymentMethod,
        });
      }

      const order = orderResponse.data.data;

      // Clear cart and redirect to success page
      clearCart();
      showToast('Order placed successfully!', 'success');
      navigate(`/orders/${order.id}`, {
        state: { orderPlaced: true },
      });
    } catch (error: any) {
      console.error('Checkout error:', error);
      showToast(
        error.response?.data?.message || 'Failed to place order',
        'error'
      );
      setIsProcessing(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card padding="lg" className="text-center max-w-md">
          <AlertCircle className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold text-text mb-4">Please Sign In</h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to complete your order
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigate('/login', { state: { from: '/checkout' } })}
          >
            Sign In
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-primary hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <h1 className="font-heading text-4xl font-bold text-text mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Truck size={24} className="text-primary" />
                  <span>Delivery Method</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      deliveryMethod === 'delivery'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <MapPin
                      className={`mx-auto mb-2 ${
                        deliveryMethod === 'delivery'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                      size={32}
                    />
                    <p className="font-semibold text-text">Delivery</p>
                    <p className="text-sm text-gray-600">
                      {summary.delivery_fee === 0
                        ? 'FREE'
                        : formatCurrency(summary.delivery_fee)}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      deliveryMethod === 'pickup'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <Store
                      className={`mx-auto mb-2 ${
                        deliveryMethod === 'pickup'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                      size={32}
                    />
                    <p className="font-semibold text-text">Pickup</p>
                    <p className="text-sm text-gray-600">FREE</p>
                  </button>
                </div>
              </Card>

              {/* Delivery Address */}
              {deliveryMethod === 'delivery' && (
                <Card padding="lg">
                  <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                    <MapPin size={24} className="text-primary" />
                    <span>Delivery Address</span>
                  </h2>

                  {user.addresses && user.addresses.length > 0 ? (
                    <div className="space-y-3">
                      {user.addresses.map((addr: any) => (
                        <button
                          key={addr._id}
                          type="button"
                          onClick={() => setSelectedAddress(addr)}
                          className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                            selectedAddress?._id === addr._id
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-semibold text-text">
                                {addr.label || 'Address'}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {addr.street}
                              </p>
                              <p className="text-sm text-gray-600">
                                {addr.suburb}, {addr.state} {addr.postcode}
                              </p>
                            </div>
                            {selectedAddress?._id === addr._id && (
                              <CheckCircle className="text-primary" size={24} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">
                        No addresses saved.{' '}
                        <button
                          type="button"
                          onClick={() => navigate('/profile')}
                          className="text-primary hover:underline"
                        >
                          Add an address
                        </button>
                      </p>
                    </div>
                  )}
                </Card>
              )}

              {/* Delivery Date & Time */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Calendar size={24} className="text-primary" />
                  <span>Delivery Schedule</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    label="Delivery Date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Delivery Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                      <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
                      <option value="13:00-14:00">1:00 PM - 2:00 PM</option>
                      <option value="18:00-19:00">6:00 PM - 7:00 PM</option>
                      <option value="19:00-20:00">7:00 PM - 8:00 PM</option>
                      <option value="20:00-21:00">8:00 PM - 9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-text mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Any special delivery instructions..."
                  />
                </div>
              </Card>

              {/* Payment Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <CreditCard size={24} className="text-primary" />
                  <span>Payment Method</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <CreditCard
                      className={`mx-auto mb-2 ${
                        paymentMethod === 'card'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                      size={32}
                    />
                    <p className="font-semibold text-text">Card Payment</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Pay on delivery
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      paymentMethod === 'cash'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <div
                      className={`mx-auto mb-2 text-3xl ${
                        paymentMethod === 'cash'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                    >
                      💵
                    </div>
                    <p className="font-semibold text-text">Cash Payment</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Pay on delivery
                    </p>
                  </button>
                </div>

                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Payment will be collected upon
                    delivery. Please have exact change ready if paying with
                    cash.
                  </p>
                </div>
              </Card>

              {/* Place Order Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isProcessing}
                isLoading={isProcessing}
              >
                {isProcessing
                  ? 'Processing Order...'
                  : `Place Order • ${formatCurrency(summary.total)}`}
              </Button>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card padding="lg" className="sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-text mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                  {items.map((item: any) => (
                    <div
                      key={item.menu_item._id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-700">
                        {item.quantity}x {item.menu_item.name}
                      </span>
                      <span className="font-semibold">
                        {formatCurrency(item.menu_item.price * item.quantity)}
                      </span>
                    </div>
                  ))}

                  {sidelines.map((sideline: any) => (
                    <div
                      key={sideline.sideline._id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-600">
                        {sideline.quantity}x {sideline.sideline.name}
                      </span>
                      <span className="font-semibold">
                        {formatCurrency(
                          sideline.sideline.price * sideline.quantity
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 pt-6 border-t-2 border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">
                      {formatCurrency(summary.subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-medium">
                      {deliveryMethod === 'pickup'
                        ? 'FREE'
                        : summary.delivery_fee === 0
                          ? 'FREE'
                          : formatCurrency(summary.delivery_fee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (GST 10%):</span>
                    <span className="font-medium">
                      {formatCurrency(summary.tax)}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-text">
                        Total:
                      </span>
                      <span className="font-heading text-3xl font-bold text-primary">
                        {formatCurrency(summary.total)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>Fresh meals daily</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
