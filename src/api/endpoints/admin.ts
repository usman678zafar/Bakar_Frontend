import apiClient from '../client';
import { MenuItem, Sideline } from '@types/menu.types';
import { Order } from '@types/order.types';
import { ApiResponse } from '@types/common.types';

export const adminAPI = {
  /**
   * Get dashboard statistics
   */
  getDashboardStats: () => apiClient.get<ApiResponse<any>>('/admin/dashboard'),

  /**
   * Get all orders
   */
  getAllOrders: (filters?: {
    status?: string;
    date_from?: string;
    date_to?: string;
  }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.date_from) params.append('date_from', filters.date_from);
    if (filters?.date_to) params.append('date_to', filters.date_to);
    return apiClient.get<ApiResponse<Order[]>>(
      `/admin/orders?${params.toString()}`
    );
  },

  /**
   * Update order status (ADMIN)
   */
  updateOrderStatus: (orderId: string, status: string, admin_notes?: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, {
      status,
      admin_notes,
    }),

  /**
   * Create menu item
   */
  createMenuItem: (data: FormData) =>
    apiClient.post<ApiResponse<MenuItem>>('/admin/menu-items', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Update menu item
   */
  updateMenuItem: (itemId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuItem>>(`/admin/menu-items/${itemId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Delete menu item
   */
  deleteMenuItem: (itemId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/menu-items/${itemId}`),

  /**
   * Create sideline
   */
  createSideline: (data: FormData) =>
    apiClient.post<ApiResponse<Sideline>>('/admin/sidelines', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Update sideline
   */
  updateSideline: (sidelineId: string, data: FormData) =>
    apiClient.put<ApiResponse<Sideline>>(
      `/admin/sidelines/${sidelineId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),

  /**
   * Delete sideline
   */
  deleteSideline: (sidelineId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/sidelines/${sidelineId}`),

  /**
   * Get all menu items (admin) - ✅ FIXED: Include ALL items regardless of availability
   * Admin should see ALL items including unavailable ones
   */
  getAllMenuItems: () => {
    console.log('🔍 [Admin API] Fetching ALL menu items including unavailable...');
    // Add include_unavailable parameter to explicitly request all items
    return apiClient.get<ApiResponse<MenuItem[]>>(
      '/admin/menu-items?include_unavailable=true&include_all=true'
    );
  },

  /**
   * Get all sidelines (admin) - ✅ FIXED: Include ALL items regardless of availability
   */
  getAllSidelines: () => {
    console.log('🔍 [Admin API] Fetching ALL sidelines including unavailable...');
    return apiClient.get<ApiResponse<Sideline[]>>(
      '/admin/sidelines?include_unavailable=true&include_all=true'
    );
  },
};
