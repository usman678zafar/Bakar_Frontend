import apiClient from '../client';
import { Order, OrderTracking } from '@models/order.types';
import { ApiResponse } from '@models/common.types';

export const ordersAPI = {
  /**
   * Create daily order
   */
  createDailyOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/daily', payload),

  /**
   * Create meal subscription order
   */
  createMealSubscriptionOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/weekly', payload),

  /**
   * Create catering order
   */
  createCateringOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/catering', payload),

  /**
   * Get user's order history
   */
  getOrderHistory: (page: number = 1, page_size: number = 20) =>
    apiClient.get<ApiResponse<{ orders: Order[]; total: number; page: number; page_size: number }>>(
      `/orders/my-orders?page=${page}&page_size=${page_size}`
    ),

  /**
   * Get order by ID
   */
  getOrderById: (orderId: string) =>
    apiClient.get<ApiResponse<Order>>(`/orders/${orderId}`),

  /**
   * Track order
   */
  trackOrder: (orderId: string) =>
    apiClient.get<ApiResponse<OrderTracking>>(`/orders/${orderId}/track`),

  /**
   * Cancel order
   */
  cancelOrder: (orderId: string, reason: string) =>
    apiClient.post<ApiResponse<Order>>(`/orders/${orderId}/cancel`, { reason }),

  /**
   * Update order status (admin)
   */
  updateOrderStatus: (orderId: string, status: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, { status }),
};
