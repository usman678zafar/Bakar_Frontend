import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { formatCurrency } from '@utils/formatters';
import { getImageUrl, handleImageError } from '@utils/images';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  X,
  ArrowLeft,
  Tag,
  Truck,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { showToast } = useToast();
  const {
    items,
    sidelines,
    summary,
    isLoading,
    isUpdating,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    refreshCart,
  } = useCart();

  const [voucherCode, setVoucherCode] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    refreshCart();
  }, [isAuthenticated]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
      setSelectAll(false);
    } else {
      const allItemIds = new Set([
        ...items.map((item: any) => item.item_id),
        ...sidelines.map((item: any) => item.item_id + '_sideline'),
      ]);
      setSelectedItems(allItemIds);
      setSelectAll(true);
    }
  };

  const handleSelectItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);

    // Update selectAll state
    const totalItems = items.length + sidelines.length;
    setSelectAll(newSelected.size === totalItems && totalItems > 0);
  };

  const handleDeleteSelected = async () => {
    if (selectedItems.size === 0) {
      showToast('Please select items to delete', 'warning');
      return;
    }

    if (!window.confirm(`Delete ${selectedItems.size} selected item(s)?`)) {
      return;
    }

    for (const itemId of selectedItems) {
      const isSideline = itemId.endsWith('_sideline');
      const actualId = isSideline ? itemId.replace('_sideline', '') : itemId;
      await removeFromCart(actualId, isSideline);
    }

    setSelectedItems(new Set());
    setSelectAll(false);
    showToast('Selected items removed', 'success');
  };

  const handleQuantityChange = async (
    itemId: string,
    newQuantity: number,
    isSideline: boolean = false
  ) => {
    if (newQuantity === 0) {
      if (window.confirm('Remove this item from cart?')) {
        await removeFromCart(itemId, isSideline);
      }
    } else {
      await updateCartQuantity(itemId, newQuantity, isSideline);
    }
  };

  const handleApplyVoucher = () => {
    if (!voucherCode.trim()) {
      showToast('Please enter a voucher code', 'warning');
      return;
    }
    // TODO: Implement voucher validation
    showToast('Voucher code applied!', 'success');
  };

  const handleProceedToCheckout = () => {
    if (items.length === 0 && sidelines.length === 0) {
      showToast('Your cart is empty', 'warning');
      return;
    }
    navigate('/checkout');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" message="Loading cart..." />
      </div>
    );
  }

  const isCartEmpty = items.length === 0 && sidelines.length === 0;

  if (isCartEmpty) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container-custom">
          <Card padding="lg" className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="mx-auto h-24 w-24 text-gray-300 mb-6" />
            <h2 className="font-heading text-3xl font-bold text-text mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/menu/daily')}
            >
              Start Shopping
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-primary hover:text-primary-600 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </button>
          <h1 className="font-heading text-4xl font-bold text-text">
            Shopping Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              {/* Select All & Delete Selected */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">
                      SELECT ALL ({items.length + sidelines.length} ITEM(S))
                    </span>
                  </label>
                </div>

                {selectedItems.size > 0 && (
                  <button
                    onClick={handleDeleteSelected}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={18} />
                    <span>DELETE</span>
                  </button>
                )}
              </div>

              {/* Main Items */}
              <div className="space-y-4">
                {items.map((item: any) => (
                  <div
                    key={item.item_id}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.item_id)}
                        onChange={() => handleSelectItem(item.item_id)}
                        className="mt-8 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />

                      {/* Item Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={getImageUrl(item.image_url)}
                          alt={item.item_name}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-text mb-1">
                              {item.item_name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {item.category}
                            </p>

                            {/* Special instructions if any */}
                            {item.special_instructions && (
                              <p className="text-xs text-gray-600 italic mb-2">
                                Note: {item.special_instructions}
                              </p>
                            )}

                            {/* Price */}
                            <div className="flex items-center space-x-3">
                              <span className="font-heading text-xl font-bold text-primary">
                                {formatCurrency(item.price)}
                              </span>
                              {item.original_price &&
                                item.original_price > item.price && (
                                  <span className="text-sm text-gray-400 line-through">
                                    {formatCurrency(item.original_price)}
                                  </span>
                                )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col items-end space-y-2">
                            <button
                              onClick={() => removeFromCart(item.item_id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-2 py-1">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.item_id,
                                    item.quantity - 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                disabled={isUpdating}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-10 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.item_id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                disabled={isUpdating}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Sidelines */}
                {sidelines.length > 0 && (
                  <>
                    <div className="py-2 my-2">
                      <h3 className="font-semibold text-gray-700">Add-ons</h3>
                    </div>
                    {sidelines.map((item: any) => (
                      <div
                        key={item.item_id}
                        className="border-b border-gray-100 pb-4 last:border-0"
                      >
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            checked={selectedItems.has(
                              item.item_id + '_sideline'
                            )}
                            onChange={() =>
                              handleSelectItem(item.item_id + '_sideline')
                            }
                            className="mt-6 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />

                          {/* Item Image */}
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={getImageUrl(item.image_url)}
                              alt={item.item_name}
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                            />
                          </div>

                          {/* Item Details */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-text text-sm mb-1">
                                  {item.item_name}
                                </h3>
                                <span className="font-heading text-lg font-bold text-primary">
                                  {formatCurrency(item.price)}
                                </span>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col items-end space-y-2">
                                <button
                                  onClick={() =>
                                    removeFromCart(item.item_id, true)
                                  }
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={16} />
                                </button>

                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-2 py-1">
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.item_id,
                                        item.quantity - 1,
                                        true
                                      )
                                    }
                                    className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                    disabled={isUpdating}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-8 text-center text-sm font-semibold">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.item_id,
                                        item.quantity + 1,
                                        true
                                      )
                                    }
                                    className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                    disabled={isUpdating}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card padding="lg" className="sticky top-24">
              <h2 className="font-heading text-2xl font-bold text-text mb-6">
                Order Summary
              </h2>

              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({summary.item_count} items)</span>
                  <span className="font-semibold">
                    {formatCurrency(summary.subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping Fee</span>
                  <span className="font-semibold">
                    {summary.delivery_fee > 0
                      ? formatCurrency(summary.delivery_fee)
                      : formatCurrency(0)}
                  </span>
                </div>
              </div>

              {/* Voucher Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter Voucher Code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button
                    variant="primary"
                    onClick={handleApplyVoucher}
                    disabled={!voucherCode.trim()}
                  >
                    APPLY
                  </Button>
                </div>
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-text">Total</span>
                  <span className="font-heading text-3xl font-bold text-primary">
                    {formatCurrency(summary.total)}
                  </span>
                </div>

                {/* Proceed to Checkout */}
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleProceedToCheckout}
                  disabled={isCartEmpty}
                >
                  PROCEED TO CHECKOUT({summary.item_count})
                </Button>
              </div>

              {/* Info Messages */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <Truck
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>Free delivery on orders above $50 within 6km</p>
                </div>

                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>100% secure payment</p>
                </div>

                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <AlertCircle
                    className="text-blue-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>Need help? Contact us at support@bakars.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
