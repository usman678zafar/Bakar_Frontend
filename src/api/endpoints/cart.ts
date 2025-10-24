import apiClient from '../client'
import { Cart, CartSummary } from '@types/cart.types'
import { ApiResponse } from '@types/common.types'

export const cartAPI = {
  /**
   * Get cart for current user
   */
  getCart: () => 
    apiClient.get<ApiResponse<Cart>>('/cart'),

  /**
   * Add item to cart
   */
  addToCart: (menuItemId: string, quantity: number, specialInstructions?: string) => 
    apiClient.post<ApiResponse<Cart>>('/cart/items', {
      menu_item_id: menuItemId,
      quantity,
      special_instructions: specialInstructions,
    }),

  /**
   * Update cart item quantity
   */
  updateCartItem: (itemId: string, quantity: number) => 
    apiClient.put<ApiResponse<Cart>>(`/cart/items/${itemId}`, { quantity }),

  /**
   * Remove item from cart
   */
  removeFromCart: (itemId: string) => 
    apiClient.delete<ApiResponse<Cart>>(`/cart/items/${itemId}`),

  /**
   * Add sideline to cart
   */
  addSideline: (sidelineId: string, quantity: number) => 
    apiClient.post<ApiResponse<Cart>>('/cart/sidelines', {
      sideline_id: sidelineId,
      quantity,
    }),

  /**
   * Remove sideline from cart
   */
  removeSideline: (sidelineId: string) => 
    apiClient.delete<ApiResponse<Cart>>(`/cart/sidelines/${sidelineId}`),

  /**
   * Get cart summary
   */
  getCartSummary: () => 
    apiClient.get<ApiResponse<CartSummary>>('/cart/summary'),

  /**
   * Clear cart
   */
  clearCart: () => 
    apiClient.delete<ApiResponse<void>>('/cart'),
}
