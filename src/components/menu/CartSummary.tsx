import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { formatCurrency } from '@utils/formatters';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';

interface CartSummaryProps {
  sticky?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ sticky = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const {
    items,
    sidelines,
    summary,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleProceedToCheckout = () => {
    // ✅ Check if user is logged in before checkout
    if (!isAuthenticated) {
      // Redirect to login with return URL
      navigate('/login', { state: { from: '/checkout' } });
    } else {
      navigate('/checkout');
    }
  };

  if (items.length === 0 && sidelines.length === 0) {
    return (
      <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
        <div className="text-center py-8">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-500 mb-2">
            Your cart is empty
          </h3>
          <p className="text-sm text-gray-400">Add items to get started</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="text-primary" size={24} />
          <h3 className="font-heading text-xl font-bold text-text">
            Your Cart
          </h3>
        </div>
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {summary.item_count} {summary.item_count === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* Cart items */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.menu_item._id}
            className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0"
          >
            {/* Image */}
            <img
              src={item.menu_item.image_url || '/placeholder-food.jpg'}
              alt={item.menu_item.name}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-text text-sm mb-1">
                {item.menu_item.name}
              </h4>
              <p className="text-primary font-semibold text-sm mb-2">
                {formatCurrency(item.menu_item.price)}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateCartQuantity(item.menu_item._id, item.quantity - 1)
                  }
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateCartQuantity(item.menu_item._id, item.quantity + 1)
                  }
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>

              {item.special_instructions && (
                <p className="text-xs text-gray-500 mt-1 italic">
                  {item.special_instructions}
                </p>
              )}
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.menu_item._id)}
              className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        {/* Sidelines */}
        {sidelines.length > 0 && (
          <>
            <div className="pt-2 mt-2 border-t-2 border-gray-200">
              <h4 className="font-semibold text-text text-sm mb-3">Add-ons:</h4>
            </div>
            {sidelines.map((sideline) => (
              <div
                key={sideline.sideline._id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex-1">
                  <p className="font-medium text-text text-sm">
                    {sideline.sideline.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {sideline.quantity}
                  </p>
                </div>
                <span className="text-primary font-semibold text-sm">
                  {formatCurrency(sideline.sideline.price * sideline.quantity)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Summary */}
      <div className="space-y-2 mb-6 pt-4 border-t-2 border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">
            {formatCurrency(summary.subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery Fee:</span>
          <span className="font-medium">
            {summary.delivery_fee > 0
              ? formatCurrency(summary.delivery_fee)
              : 'FREE'}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (GST 10%):</span>
          <span className="font-medium">{formatCurrency(summary.tax)}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-text">Total:</span>
            <span className="font-heading text-2xl font-bold text-primary">
              {formatCurrency(summary.total)}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <Button
          variant="primary"
          fullWidth
          size="lg"
          onClick={handleProceedToCheckout}
        >
          {/* ✅ Show appropriate text based on auth status */}
          {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
        </Button>

        <button
          onClick={clearCart}
          className="w-full text-sm text-gray-600 hover:text-red-500 transition-colors py-2"
        >
          Clear Cart
        </button>

        {/* ✅ Show info message if not logged in */}
        {!isAuthenticated && items.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
            <p className="text-xs text-blue-800">
              <strong>Note:</strong> You need to login or create an account to
              complete your order.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CartSummary;
