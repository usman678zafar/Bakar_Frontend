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
  getAllMenuItems: (page: number = 1, pageSize: number = 200, category?: string) => {
    const safePage = Math.max(1, page);
    const safePageSize = Math.min(Math.max(1, pageSize), 200);
    const params = new URLSearchParams();
    params.append('include_unavailable', 'true');
    params.append('page', String(safePage));
    params.append('page_size', String(safePageSize));
    if (category) params.append('category', category);
    return apiClient.get<ApiResponse<{ items: MenuItem[]; total: number; page: number; page_size: number; total_pages: number }>>(
      `/admin/menu-items?${params.toString()}`
    );
  },

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
  getAllSidelines: (page: number = 1, pageSize: number = 200) => {
    const safePage = Math.max(1, page);
    const safePageSize = Math.min(Math.max(1, pageSize), 200);
    const params = new URLSearchParams();
    params.append('include_unavailable', 'true');
    params.append('page', String(safePage));
    params.append('page_size', String(safePageSize));
    return apiClient.get<ApiResponse<{ items: Sideline[]; total: number; page: number; page_size: number; total_pages: number }>>(
      `/admin/sidelines?${params.toString()}`
    );
  },

  /**
   * Categories (admin)
   */
  getAllCategories: (page: number = 1, pageSize: number = 100) => {
    const safePage = Math.max(1, page);
    const safePageSize = Math.min(Math.max(1, pageSize), 100);
    const params = new URLSearchParams();
    params.append('include_inactive', 'true');
    params.append('page', String(safePage));
    params.append('page_size', String(safePageSize));
    return apiClient.get<ApiResponse<{ categories: MenuCategory[]; total: number; page: number; page_size: number; total_pages: number }>>(
      `/admin/categories?${params.toString()}`
    );
  },
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
  getDeliveryZones: (includeInactive: boolean = true, page: number = 1, pageSize: number = 1000) => {
    const params = new URLSearchParams();
    if (!includeInactive) params.append('include_inactive', 'false'); else params.append('include_inactive', 'true');
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    return apiClient.get<ApiResponse<{ zones: DeliveryZone[]; total: number; page: number; page_size: number; total_pages: number }>>(
      `/admin/delivery-zones?${params.toString()}`
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
