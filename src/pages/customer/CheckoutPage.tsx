import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
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
  CreditCard,
  Package,
  Clock,
  User,
  FileText,
  ShoppingCart,
  Phone,
  Mail,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';

interface CheckoutState {
  cateringDetails?: any;
  subscriptionDetails?: any;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useAuthStore();
  const {
    items = [],
    sidelines = [],
    summary = {
      item_count: 0,
      subtotal: 0,
      delivery_fee: 0,
      tax: 0,
      total: 0,
    },
    clearCart,
    isLoading: cartLoading,
  } = useCart();
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
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // New address form state
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: 'Home',
    street: '',
    suburb: '',
    postcode: '',
    state: 'NSW',
    delivery_instructions: '',
  });

  // Initialize customer info from user data
  useEffect(() => {
    if (user) {
      setCustomerInfo({
        name:
          user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`
            : user.full_name || user.email?.split('@')[0] || '',
        email: user.email || '',
        phone: user.phone || '',
      });

      // Set default address if available
      if (user.addresses && user.addresses.length > 0) {
        const defaultAddr = user.addresses.find((addr: any) => addr.is_default);
        setSelectedAddress(defaultAddr || user.addresses[0]);
      }
    }
  }, [user]);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/checkout' } });
      return;
    }

    // Set minimum delivery date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDeliveryDate(tomorrow.toISOString().split('T')[0]);

    // Set default time
    setDeliveryTime('12:00');
  }, [isAuthenticated, navigate]);

  // Helper function to safely get item data
  const getItemData = (item: any) => {
    // Handle different item structures
    if (item.menu_item) {
      return {
        id: item.menu_item.id || item.menu_item._id,
        name: item.menu_item.name || 'Unknown Item',
        price: item.menu_item.price || 0,
        quantity: item.quantity || 1,
      };
    } else if (item.item_name) {
      return {
        id: item.item_id,
        name: item.item_name || 'Unknown Item',
        price: item.price || 0,
        quantity: item.quantity || 1,
      };
    } else {
      return {
        id: item.id || item._id || Math.random().toString(),
        name: item.name || 'Unknown Item',
        price: item.price || 0,
        quantity: item.quantity || 1,
      };
    }
  };

  // Check if cart is empty (excluding loading state)
  const isCartEmpty =
    !cartLoading &&
    (!items || items.length === 0) &&
    !cateringDetails &&
    !subscriptionDetails;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (isCartEmpty) {
      showToast('Your cart is empty', 'error');
      navigate('/menu/daily');
      return;
    }

    if (
      deliveryMethod === 'delivery' &&
      !selectedAddress &&
      !showNewAddressForm
    ) {
      showToast('Please select or add a delivery address', 'error');
      return;
    }

    if (!deliveryDate || !deliveryTime) {
      showToast('Please select delivery/pickup date and time', 'error');
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      showToast('Please fill in all contact information', 'error');
      return;
    }

    setIsProcessing(true);

    try {
      let orderPayload: any = {};

      if (cateringDetails) {
        // Catering order
        orderPayload = {
          package_type: cateringDetails.package.id,
          guest_count: cateringDetails.eventDetails.head_count,
          event_date: cateringDetails.eventDetails.event_date,
          event_time: cateringDetails.eventDetails.event_time,
          venue_address: cateringDetails.eventDetails.venue_address,
          selected_items: cateringDetails.selectedItems,
          special_requests: specialInstructions,
          contact_info: customerInfo,
        };
      } else if (subscriptionDetails) {
        // Weekly subscription order
        orderPayload = {
          menu_selections: subscriptionDetails.meals.reduce(
            (acc: any, meal: any) => {
              acc[meal.id || meal._id] = 1;
              return acc;
            },
            {}
          ),
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_dates: [deliveryDate],
          delivery_address:
            deliveryMethod === 'delivery'
              ? showNewAddressForm
                ? newAddress
                : selectedAddress
              : null,
          is_express: false,
          delivery_instructions: specialInstructions,
          notes: '',
        };
      } else {
        // Daily order
        orderPayload = {
          items:
            items?.map((item: any) => {
              const itemData = getItemData(item);
              return {
                item_id: itemData.id,
                quantity: itemData.quantity,
              };
            }) || [],
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_method: deliveryMethod,
          delivery_address:
            deliveryMethod === 'delivery'
              ? showNewAddressForm
                ? newAddress
                : selectedAddress
              : null,
          delivery_date: deliveryDate,
          delivery_time: deliveryTime,
          delivery_instructions: specialInstructions,
          notes: '',
          contact_info: customerInfo,
        };
      }

      console.log('Submitting order:', orderPayload);

      // Create order based on type
      let orderResponse;
      if (cateringDetails) {
        orderResponse = await ordersAPI.createCateringOrder(orderPayload);
      } else if (subscriptionDetails) {
        orderResponse = await ordersAPI.createWeeklyOrder(orderPayload);
      } else {
        orderResponse = await ordersAPI.createDailyOrder(orderPayload);
      }

      const order = orderResponse.data.data;

      // Clear cart after successful order
      await clearCart();

      showToast('Order placed successfully!', 'success');

      // Navigate to order confirmation or home
      navigate('/', {
        state: { orderPlaced: true, orderId: order.id || order._id },
      });
    } catch (error: any) {
      console.error('Checkout error:', error);
      showToast(
        error.response?.data?.message ||
          'Failed to place order. Please try again.',
        'error'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  // Show loading while cart data is loading
  if (cartLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" message="Loading checkout..." />
      </div>
    );
  }

  // Show empty cart message
  if (isCartEmpty) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card padding="lg" className="text-center max-w-md">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-text mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some delicious items to your cart before checking out
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigate('/menu/daily')}
          >
            Browse Menu
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-primary hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <h1 className="font-heading text-4xl font-bold text-text mb-8">
          Complete Your Order
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <User size={24} className="text-primary" />
                  <span>Contact Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="Full Name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    label="Email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    placeholder="04XX XXX XXX"
                    required
                  />
                </div>
              </Card>

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

              {/* Delivery Address - only show if delivery selected */}
              {deliveryMethod === 'delivery' && (
                <Card padding="lg">
                  <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                    <MapPin size={24} className="text-primary" />
                    <span>Delivery Address</span>
                  </h2>

                  {user?.addresses &&
                  user.addresses.length > 0 &&
                  !showNewAddressForm ? (
                    <div className="space-y-3">
                      {user.addresses.map((addr: any) => (
                        <label
                          key={addr._id || addr.id || Math.random()}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedAddress?.id === addr.id ||
                            selectedAddress?._id === addr._id
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="address"
                            checked={
                              selectedAddress?.id === addr.id ||
                              selectedAddress?._id === addr._id
                            }
                            onChange={() => setSelectedAddress(addr)}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-semibold text-text">
                              {addr.label || 'Address'}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {addr.street}, {addr.suburb} {addr.state}{' '}
                              {addr.postcode}
                            </p>
                            {addr.is_default && (
                              <span className="inline-block mt-1 px-2 py-1 bg-primary text-white text-xs rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                        </label>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        fullWidth
                        onClick={() => setShowNewAddressForm(true)}
                      >
                        Add New Address
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Input
                        type="text"
                        label="Street Address"
                        value={newAddress.street}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            street: e.target.value,
                          })
                        }
                        required={deliveryMethod === 'delivery'}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="Suburb"
                          value={newAddress.suburb}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              suburb: e.target.value,
                            })
                          }
                          required={deliveryMethod === 'delivery'}
                        />
                        <Input
                          type="text"
                          label="Postcode"
                          value={newAddress.postcode}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              postcode: e.target.value,
                            })
                          }
                          maxLength={4}
                          required={deliveryMethod === 'delivery'}
                        />
                      </div>
                      {user?.addresses && user.addresses.length > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setShowNewAddressForm(false)}
                        >
                          Use Existing Address
                        </Button>
                      )}
                    </div>
                  )}
                </Card>
              )}

              {/* Delivery Time */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Calendar size={24} className="text-primary" />
                  <span>
                    {deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}{' '}
                    Schedule
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    label="Date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  <Input
                    type="time"
                    label="Time"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    required
                  />
                </div>

                {deliveryMethod === 'pickup' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Pickup Location:</strong> Woodville Rd, Guildford
                      NSW 2161
                    </p>
                  </div>
                )}
              </Card>

              {/* Special Instructions */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <FileText size={24} className="text-primary" />
                  <span>Special Instructions (Optional)</span>
                </h2>

                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Any special requests or delivery instructions..."
                />
              </Card>

              {/* Payment Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <CreditCard size={24} className="text-primary" />
                  <span>Payment Method</span>
                </h2>

                <div className="space-y-3">
                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as 'card')
                      }
                      className="mr-3"
                    />
                    <CreditCard className="mr-3 text-gray-600" size={20} />
                    <span className="font-semibold">Card Payment</span>
                  </label>

                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'cash'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as 'cash')
                      }
                      className="mr-3"
                    />
                    <span className="mr-3">💵</span>
                    <span className="font-semibold">
                      Cash on{' '}
                      {deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}
                    </span>
                  </label>
                </div>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card padding="lg" className="sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Package size={24} className="text-primary" />
                  <span>Order Summary</span>
                </h2>

                {/* Items */}
                {items && items.length > 0 && (
                  <div className="space-y-3 mb-4">
                    <p className="text-sm font-semibold text-gray-700">
                      Items:
                    </p>
                    {items.map((item: any, index: number) => {
                      const itemData = getItemData(item);
                      return (
                        <div
                          key={itemData.id || index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-600">
                            {itemData.quantity}x {itemData.name}
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(itemData.price * itemData.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Sidelines */}
                {sidelines && sidelines.length > 0 && (
                  <>
                    <div className="border-t pt-3 mb-3">
                      <p className="text-sm font-semibold mb-2">Add-ons:</p>
                      {sidelines.map((item: any, index: number) => {
                        const sidelineData = item.sideline || item;
                        return (
                          <div
                            key={sidelineData.id || sidelineData._id || index}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-gray-600">
                              {item.quantity || 1}x{' '}
                              {sidelineData.name || 'Add-on'}
                            </span>
                            <span className="font-semibold">
                              {formatCurrency(
                                (sidelineData.price || 0) * (item.quantity || 1)
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* Summary */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">
                      {formatCurrency(summary.subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-semibold">
                      {deliveryMethod === 'pickup' || summary.delivery_fee === 0
                        ? 'FREE'
                        : formatCurrency(summary.delivery_fee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (GST 10%):</span>
                    <span className="font-semibold">
                      {formatCurrency(summary.tax)}
                    </span>
                  </div>

                  <div className="pt-3 border-t">
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

                {/* Place Order Button */}
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="lg"
                  className="mt-6"
                  disabled={isProcessing}
                  isLoading={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>

                {/* Security Note */}
                <div className="mt-4 flex items-start space-x-2 text-xs text-gray-600">
                  <CheckCircle
                    size={16}
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <p>Your payment information is secure and encrypted</p>
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
