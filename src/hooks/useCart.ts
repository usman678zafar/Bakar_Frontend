import { useCartStore } from '@store/cartStore';
import { useToast } from './useToast'; // This will now properly import from Toast component

export const useCart = () => {
  const cart = useCartStore();
  const { showToast } = useToast();

  const addToCart = (menuItem: any, quantity: number = 1, specialInstructions?: string) => {
    try {
      cart.addItem(menuItem, quantity, specialInstructions);
      showToast(`${menuItem.name} added to cart!`, 'success');
    } catch (error) {
      showToast('Failed to add item to cart', 'error');
    }
  };

  const removeFromCart = (menuItemId: string) => {
    try {
      cart.removeItem(menuItemId);
      showToast('Item removed from cart', 'success');
    } catch (error) {
      showToast('Failed to remove item', 'error');
    }
  };

  const updateCartQuantity = (menuItemId: string, quantity: number) => {
    try {
      cart.updateQuantity(menuItemId, quantity);
    } catch (error) {
      showToast('Failed to update quantity', 'error');
    }
  };

  return {
    ...cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
  };
};
