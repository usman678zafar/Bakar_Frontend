import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { useAddressStore } from '@store/addressStore';
import { useToast } from '@components/common/Toast';
import { ordersAPI } from '@api';
import { deliveryAPI } from '@api/endpoints/delivery';
import { MealSubscriptionSelection } from '@models/cart.types';
import { formatCurrency } from '@utils/formatters';
import { Address, DeliveryAvailability } from '@models/address.types';
import { DAILY_DELIVERY_FEE } from '@utils/constants';
import {
  MapPin,
  Calendar,
  ArrowLeft,
  Truck,
  Store,
  CheckCircle,
  CreditCard,
  Package,
  FileText,
  ShoppingCart,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Modal from '@components/common/Modal';

const DEFAULT_COUNTRY = 'Australia';

const getInitialAddressForm = () => ({
  label: 'Home',
  street: '',
  suburb: '',
  postcode: '',
  state: 'NSW',
  country: DEFAULT_COUNTRY,
  is_default: false,
  delivery_instructions: '',
});

interface CheckoutState {
  cateringDetails?: any;
  subscriptionDetails?: MealSubscriptionSelection;
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
  const {
    addresses,
    fetchAddresses,
    addAddress,
    calculateDeliveryFee,
    isLoading: addressStoreLoading,
    isValidating: isCalculatingDeliveryFee,
    error: addressStoreError,
    clearError: clearAddressError,
  } = useAddressStore();

  const state = (location.state as CheckoutState) || {};
  const { cateringDetails, subscriptionDetails } = state;

  useEffect(() => {
    if (subscriptionDetails) {
      setDeliveryMethod(subscriptionDetails.fulfilment);
    }
  }, [subscriptionDetails]);

  // State
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [deliveryFee, setDeliveryFee] = useState(
    summary.delivery_fee ?? DAILY_DELIVERY_FEE
  );
  const [addressError, setAddressError] = useState<string | null>(null);

  // Address modal state
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSavingAddress, setIsSavingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState(getInitialAddressForm);

  // Fetch saved addresses on mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchAddresses().catch((error: any) => {
        console.error('Failed to fetch addresses:', error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const selectedAddressId = selectedAddress?._id ?? '';

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      setSelectedAddress(null);
      return;
    }

    if (
      !selectedAddressId ||
      !addresses.some((addr) => addr._id === selectedAddressId)
    ) {
      const nextAddress =
        addresses.find((addr) => addr.is_default) || addresses[0];
      setSelectedAddress(nextAddress);
    }
  }, [addresses, selectedAddressId]);

  useEffect(() => {
    if (
      deliveryMethod === 'delivery' &&
      !addressStoreLoading &&
      addresses.length === 0
    ) {
      setIsAddressModalOpen(true);
    }
  }, [deliveryMethod, addressStoreLoading, addresses.length]);

  useEffect(() => {
    const evaluateDeliveryFee = async () => {
      if (deliveryMethod !== 'delivery') {
        setAddressError(null);
        setDeliveryFee(0);
        return;
      }

      if (!selectedAddressId || !selectedAddress) {
        setAddressError(null);
        setDeliveryFee(0);
        return;
      }

      clearAddressError();
      setAddressError(null);

      const isDailyOrder = !subscriptionDetails && !cateringDetails;

      if (isDailyOrder) {
        try {
          const formattedAddress = [
            selectedAddress.street,
            selectedAddress.suburb,
            selectedAddress.state,
            selectedAddress.postcode,
            selectedAddress.country || DEFAULT_COUNTRY,
          ]
            .filter(Boolean)
            .join(', ');

          const availabilityResponse = await deliveryAPI.checkAvailability(
            formattedAddress,
            'daily'
          );
          const availability = availabilityResponse.data.data as DeliveryAvailability | undefined;

          if (availability?.available) {
            const fee =
              availability.delivery_fee !== undefined
                ? availability.delivery_fee
                : DAILY_DELIVERY_FEE;
            setDeliveryFee(fee);
          } else {
            const message =
              availability?.message ||
              availabilityResponse.data.message ||
              'Delivery service is not available for this address.';
            setAddressError(message);
            setDeliveryFee(0);
          }
        } catch (error: any) {
          console.error('Delivery availability check failed:', error);
          const message =
            error?.response?.data?.message ||
            error?.response?.data?.detail ||
            error?.message ||
            'Delivery service is not available for this address.';
          setAddressError(message);
          setDeliveryFee(0);
        }
        return;
      }

      try {
        const result = await calculateDeliveryFee(selectedAddressId);
        if (result && typeof result.fee === 'number') {
          setDeliveryFee(result.fee);
        }
      } catch (error: any) {
        console.error('Delivery fee calculation failed:', error);
        const message =
          error?.response?.data?.message ||
          error?.response?.data?.detail ||
          error?.message ||
          'Delivery service is not available for this address.';
        setAddressError(message);
        setDeliveryFee(0);
      }
    };

    evaluateDeliveryFee();
  }, [
    selectedAddressId,
    selectedAddress,
    deliveryMethod,
    calculateDeliveryFee,
    clearAddressError,
    subscriptionDetails,
    cateringDetails,
  ]);

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

  const handleSaveAddress = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedPayload = {
      label: newAddress.label.trim() || 'Home',
      street: newAddress.street.trim(),
      suburb: newAddress.suburb.trim(),
      postcode: newAddress.postcode.trim(),
      state: newAddress.state.trim() || 'NSW',
      country: newAddress.country || DEFAULT_COUNTRY,
      is_default: newAddress.is_default || addresses.length === 0,
      delivery_instructions: newAddress.delivery_instructions?.trim() || undefined,
    };

    if (!trimmedPayload.street || !trimmedPayload.suburb || !trimmedPayload.postcode) {
      showToast('Please complete the required address fields.', 'error');
      return;
    }

    setIsSavingAddress(true);
    try {
      const createdAddress = await addAddress(trimmedPayload);
      setIsAddressModalOpen(false);
      setNewAddress(getInitialAddressForm());
      setSelectedAddress(createdAddress);
      showToast('Address saved successfully', 'success');
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        error?.message ||
        'Failed to save address';
      showToast(message, 'error');
    } finally {
      setIsSavingAddress(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (isCartEmpty) {
      showToast('Your cart is empty', 'error');
      navigate('/menu/daily');
      return;
    }

      if (subscriptionDetails) {
        if (
          subscriptionDetails.fulfilment === 'delivery' &&
          !selectedAddress
        ) {
          showToast('Please select a delivery address', 'error');
        return;
      }
    } else {
      if (
        deliveryMethod === 'delivery' &&
        !selectedAddress
      ) {
        showToast('Please select or add a delivery address', 'error');
        return;
      }

      if (!deliveryDate || !deliveryTime) {
        showToast('Please select delivery/pickup date and time', 'error');
        return;
      }
    }

    if (
      addressError &&
      ((subscriptionDetails &&
        subscriptionDetails.fulfilment === 'delivery') ||
        (!subscriptionDetails && deliveryMethod === 'delivery'))
    ) {
      showToast(addressError, 'error');
      return;
    }

    setIsProcessing(true);

    try {
      let orderPayload: any = {};
      const deliveryAddressId = selectedAddressId;
      const backendDeliveryMethod =
        deliveryMethod === 'delivery' ? 'standard' : 'pickup';

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
        };
      } else if (subscriptionDetails) {
        const plan = subscriptionDetails.plan;
        const planId = (plan as any)._id || (plan as any).id;

        const planSelections = [
          {
            plan_id: planId,
            quantity: subscriptionDetails.planQuantity,
          },
        ];

        const deliverySlots = subscriptionDetails.schedule.map((slot) => ({
          delivery_date: slot.date,
          menu_items: slot.items.reduce(
            (acc: Record<string, number>, entry) => {
              const id = (entry.item as any)._id || entry.item.id;
              if (id) {
                acc[id] = entry.quantity;
              }
              return acc;
            },
            {} as Record<string, number>
          ),
        }));

        orderPayload = {
          plan_selections: planSelections,
          delivery_slots: deliverySlots,
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_address_id:
            subscriptionDetails.fulfilment === 'delivery'
              ? deliveryAddressId
              : undefined,
          fulfilment_method: subscriptionDetails.fulfilment,
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
          delivery_method: backendDeliveryMethod,
          delivery_address_id:
            backendDeliveryMethod === 'standard' ? deliveryAddressId : undefined,
          delivery_instructions: specialInstructions,
          notes: '',
        };
      }

      console.log('Submitting order:', orderPayload);

      // Create order based on type
      let orderResponse;
      if (cateringDetails) {
        orderResponse = await ordersAPI.createCateringOrder(orderPayload);
      } else if (subscriptionDetails) {
        orderResponse = await ordersAPI.createMealSubscriptionOrder(orderPayload);
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
          error.response?.data?.detail ||
          'Failed to place order. Please try again.',
        'error'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const subtotalAmount = summary.subtotal;
  const taxAmount =
    summary.tax !== undefined ? summary.tax : subtotalAmount * 0.1;
  const effectiveDeliveryFee =
    deliveryMethod === 'delivery' ? deliveryFee : 0;
  const totalAmount = subtotalAmount + taxAmount + effectiveDeliveryFee;

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
              {/* Delivery Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Truck size={24} className="text-primary" />
                  <span>Delivery Method</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      {deliveryMethod === 'delivery' ? (
                        isCalculatingDeliveryFee ? (
                          'Calculating...'
                        ) : effectiveDeliveryFee === 0 ? (
                          'FREE'
                        ) : (
                          formatCurrency(effectiveDeliveryFee)
                        )
                      ) : (
                        formatCurrency(effectiveDeliveryFee)
                      )}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMethod('pickup');
                      setIsAddressModalOpen(false);
                    }}
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin size={24} className="text-primary" />
                      <h2 className="font-heading text-2xl font-bold text-text">
                        Delivery Address
                      </h2>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                    onClick={() => {
                      const initialForm = getInitialAddressForm();
                      initialForm.is_default = addresses.length === 0;
                      setNewAddress(initialForm);
                      setIsAddressModalOpen(true);
                    }}
                    >
                      Add Address
                    </Button>
                  </div>

                  {addressStoreLoading ? (
                    <div className="py-6">
                      <LoadingSpinner message="Loading saved addresses..." />
                    </div>
                  ) : addresses.length > 0 ? (
                    <div className="space-y-3">
                      {addresses.map((addr) => (
                        <label
                          key={addr._id}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            (selectedAddressId &&
                              selectedAddressId === addr._id) ||
                            (!selectedAddressId && addr.is_default)
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="address"
                            checked={selectedAddressId === addr._id}
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
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-3">
                        You have not saved any delivery addresses yet.
                      </p>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          const initialForm = getInitialAddressForm();
                          initialForm.is_default = true;
                          setNewAddress(initialForm);
                          setIsAddressModalOpen(true);
                        }}
                      >
                        Add Your First Address
                      </Button>
                    </div>
                  )}

                  {(addressError || addressStoreError) && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {addressError || addressStoreError || 'Delivery service is not available for this address.'}
                    </div>
                  )}

                  {deliveryMethod === 'delivery' && addresses.length > 0 && !addressError && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                      {isCalculatingDeliveryFee
                        ? 'Calculating delivery fee for the selected address...'
                        : `Calculated delivery fee: ${formatCurrency(effectiveDeliveryFee)}`}
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
                      {formatCurrency(subtotalAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-semibold">
                      {deliveryMethod === 'pickup' || effectiveDeliveryFee === 0
                        ? 'FREE'
                        : formatCurrency(effectiveDeliveryFee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (GST 10%):</span>
                    <span className="font-semibold">
                      {formatCurrency(taxAmount)}
                    </span>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-text">
                        Total:
                      </span>
                      <span className="font-heading text-3xl font-bold text-primary">
                        {formatCurrency(totalAmount)}
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
        <Modal
          isOpen={isAddressModalOpen}
          onClose={() => {
            if (!isSavingAddress) {
              setIsAddressModalOpen(false);
            }
          }}
          title="Add New Address"
          size="md"
        >
          <form onSubmit={handleSaveAddress} className="space-y-4">
            <Input
              type="text"
              label="Label"
              value={newAddress.label}
              onChange={(e) =>
                setNewAddress((prev) => ({ ...prev, label: e.target.value }))
              }
              placeholder="Home, Work, etc."
              required
            />

            <Input
              type="text"
              label="Street Address"
              value={newAddress.street}
              onChange={(e) =>
                setNewAddress((prev) => ({ ...prev, street: e.target.value }))
              }
              placeholder="45 Railway Terrace"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                label="Suburb"
                value={newAddress.suburb}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, suburb: e.target.value }))
                }
                placeholder="Guildford"
                required
              />
              <Input
                type="text"
                label="Postcode"
                value={newAddress.postcode}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, postcode: e.target.value }))
                }
                placeholder="2161"
                maxLength={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                label="State"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, state: e.target.value }))
                }
                placeholder="NSW"
                required
              />
              <Input
                type="text"
                label="Country"
                value={newAddress.country}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, country: e.target.value }))
                }
                placeholder="Australia"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Instructions (Optional)
              </label>
              <textarea
                value={newAddress.delivery_instructions}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    delivery_instructions: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
                placeholder="Gate is on Palmer St; buzz 45 then wait."
              />
            </div>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newAddress.is_default}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    is_default: e.target.checked,
                  }))
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
                disabled={addresses.length === 0 && newAddress.is_default}
              />
              <span className="text-sm text-gray-700">
                Set as default delivery address
              </span>
            </label>

            <div className="flex space-x-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  if (!isSavingAddress) {
                    setIsAddressModalOpen(false);
                  }
                }}
                disabled={isSavingAddress}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                disabled={isSavingAddress}
                isLoading={isSavingAddress}
              >
                Save Address
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default CheckoutPage;
