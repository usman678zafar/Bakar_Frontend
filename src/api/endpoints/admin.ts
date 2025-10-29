import apiClient from '../client';
import { MenuItem, Sideline, MenuCategory } from '@models/menu.types';
import { MealSubscriptionPlan, DeliveryZone } from '@models/subscription.types';
import { Order } from '@models/order.types';
import { ApiResponse } from '@models/common.types';
import { DashboardStats } from '@models/admin.types';

export const adminAPI = {
  /**
   * Get dashboard statistics
   */
  getDashboardStats: () =>
    apiClient.get<ApiResponse<DashboardStats>>('/admin/dashboard'),

  /**
   * Get all orders with optional filters
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

    const query = params.toString();
    const suffix = query ? `?${query}` : '';

    return apiClient.get<ApiResponse<Order[]>>(`/admin/orders${suffix}`);
  },

  /**
   * Update order status (admin only)
   */
  updateOrderStatus: (orderId: string, status: string, admin_notes?: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, {
      status,
      admin_notes,
    }),

  /**
   * Menu items (admin)
   */
  createMenuItem: (data: FormData) =>
    apiClient.post<ApiResponse<MenuItem>>('/admin/menu-items', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateMenuItem: (itemId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuItem>>(`/admin/menu-items/${itemId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  deleteMenuItem: (itemId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/menu-items/${itemId}`),
  getAllMenuItems: () =>
    apiClient.get<ApiResponse<MenuItem[]>>(
      '/admin/menu-items?include_unavailable=true&include_all=true'
    ),

  /**
   * Sidelines (admin)
   */
  createSideline: (data: FormData) =>
    apiClient.post<ApiResponse<Sideline>>('/admin/sidelines', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateSideline: (sidelineId: string, data: FormData) =>
    apiClient.put<ApiResponse<Sideline>>(
      `/admin/sidelines/${sidelineId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),
  deleteSideline: (sidelineId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/sidelines/${sidelineId}`),
  getAllSidelines: () =>
    apiClient.get<ApiResponse<Sideline[]>>(
      '/admin/sidelines?include_unavailable=true&include_all=true'
    ),

  /**
   * Categories (admin)
   */
  getAllCategories: () =>
    apiClient.get<ApiResponse<MenuCategory[]>>(
      '/admin/categories?include_inactive=true'
    ),
  createCategory: (data: FormData) =>
    apiClient.post<ApiResponse<MenuCategory>>('/admin/categories', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateCategory: (categoryId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuCategory>>(
      `/admin/categories/${categoryId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),
  deleteCategory: (categoryId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/categories/${categoryId}`),

  /**
   * Meal subscription plans (admin)
   */
  getMealPlans: (tab?: string, includeInactive: boolean = true) => {
    const params = new URLSearchParams();
    if (tab) params.append('tab', tab);
    if (!includeInactive) params.append('include_inactive', 'false');
    const suffix = params.size ? `?${params.toString()}` : '';
    return apiClient.get<ApiResponse<MealSubscriptionPlan[]>>(
      `/admin/meal-plans${suffix}`
    );
  },
  createMealPlan: (payload: Partial<MealSubscriptionPlan>) =>
    apiClient.post<ApiResponse<MealSubscriptionPlan>>('/admin/meal-plans', payload),
  updateMealPlan: (
    planId: string,
    payload: Partial<MealSubscriptionPlan>
  ) =>
    apiClient.put<ApiResponse<MealSubscriptionPlan>>(
      `/admin/meal-plans/${planId}`,
      payload
    ),
  deleteMealPlan: (planId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/meal-plans/${planId}`),

  /**
   * Delivery zones (admin)
   */
  getDeliveryZones: (includeInactive: boolean = true) => {
    const suffix = includeInactive ? '' : '?include_inactive=false';
    return apiClient.get<ApiResponse<DeliveryZone[]>>(
      `/admin/delivery-zones${suffix}`
    );
  },
  createDeliveryZone: (payload: Partial<DeliveryZone>) =>
    apiClient.post<ApiResponse<DeliveryZone>>('/admin/delivery-zones', payload),
  updateDeliveryZone: (
    zoneId: string,
    payload: Partial<DeliveryZone>
  ) =>
    apiClient.put<ApiResponse<DeliveryZone>>(
      `/admin/delivery-zones/${zoneId}`,
      payload
    ),
  deleteDeliveryZone: (zoneId: string, permanent: boolean = false) =>
    apiClient.delete<ApiResponse<void>>(
      `/admin/delivery-zones/${zoneId}?permanent=${String(permanent)}`
    ),
};
