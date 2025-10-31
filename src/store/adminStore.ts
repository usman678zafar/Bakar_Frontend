import { create } from 'zustand';
import { adminAPI } from '@api/endpoints/admin';
import { menuAPI } from '@api/endpoints/menu';
import { Order } from '@models/order.types';
import { MenuItem, Sideline, MenuCategory } from '@models/menu.types';
import { MealSubscriptionPlan, DeliveryZone } from '@models/subscription.types';
import { DashboardStats } from '@models/admin.types';

interface AdminState {
  // Orders
  allOrders: Order[];
  orderStats: DashboardStats | null;

  // Menu
  managedMenuItems: MenuItem[];
  managedSidelines: Sideline[];
  managedCategories: MenuCategory[];
  mealPlans: MealSubscriptionPlan[];
  deliveryZones: DeliveryZone[];

  // Loading
  isLoading: boolean;
  isUpdating: boolean;
  error: string | null;

  // Actions
  fetchAllOrders: (filters?: any) => Promise<void>;
  fetchDashboardStats: () => Promise<void>;
  updateOrderStatus: (orderId: string, status: string) => Promise<void>;

  fetchManagedMenuItems: () => Promise<void>;
  fetchManagedSidelines: () => Promise<void>;
  fetchManagedCategories: () => Promise<void>;

  createMenuItem: (data: FormData) => Promise<void>;
  updateMenuItem: (itemId: string, data: FormData) => Promise<void>;
  deleteMenuItem: (itemId: string) => Promise<void>;

  createSideline: (data: FormData) => Promise<void>;
  updateSideline: (sidelineId: string, data: FormData) => Promise<void>;
  deleteSideline: (sidelineId: string) => Promise<void>;

  createCategory: (payload: CreateCategoryInput) => Promise<void>;
  updateCategory: (
    categoryId: string,
    payload: UpdateCategoryInput
  ) => Promise<void>;
  deleteCategory: (categoryId: string) => Promise<void>;

  fetchMealPlans: (tab?: string, includeInactive?: boolean) => Promise<void>;
  createMealPlan: (payload: Partial<MealSubscriptionPlan>) => Promise<void>;
  updateMealPlan: (
    planId: string,
    payload: Partial<MealSubscriptionPlan>
  ) => Promise<void>;
  deleteMealPlan: (planId: string) => Promise<void>;

  fetchDeliveryZones: (includeInactive?: boolean) => Promise<void>;
  createDeliveryZone: (payload: Partial<DeliveryZone>) => Promise<void>;
  updateDeliveryZone: (
    zoneId: string,
    payload: Partial<DeliveryZone>
  ) => Promise<void>;
  deleteDeliveryZone: (zoneId: string, permanent?: boolean) => Promise<void>;

  clearError: () => void;
}

type CreateCategoryInput = {
  name: string;
  display_name: string;
  description?: string;
  is_active: boolean;
  sort_order?: number;
  imageFile?: File | null;
};

type UpdateCategoryInput = {
  display_name?: string;
  description?: string;
  is_active?: boolean;
  sort_order?: number;
  imageFile?: File | null;
};

const createEmptyDashboardStats = (): DashboardStats => ({
  total_orders: 0,
  total_orders_growth_percent: 0,
  pending_orders: 0,
  pending_orders_weekly_change_percent: 0,
  confirmed_orders: 0,
  preparing_orders: 0,
  out_for_delivery_orders: 0,
  completed_orders: 0,
  cancelled_orders: 0,
  today_revenue: 0,
  today_vs_yesterday_percent: 0,
  weekly_revenue: 0,
  weekly_growth_percent: 0,
  monthly_revenue: 0,
  monthly_growth_percent: 0,
  total_revenue: 0,
  total_revenue_growth_percent: 0,
  weekly_revenue_breakdown: [],
  active_subscriptions: 0,
  upcoming_catering_events: 0,
});

export const useAdminStore = create<AdminState>((set, get) => ({
  allOrders: [],
  orderStats: null,
  managedMenuItems: [],
  managedSidelines: [],
  managedCategories: [],
  mealPlans: [],
  deliveryZones: [],
  isLoading: false,
  isUpdating: false,
  error: null,

  // ✅ Fetch all orders from backend
  fetchAllOrders: async (filters?: any) => {
    set({ isLoading: true, error: null });
    try {
      console.log('[ADMIN] Fetching all orders...');
      const response = await adminAPI.getAllOrders(filters);

      const payload = response.data?.data ?? response.data;
      let orders: Order[] = [];
      let totalOrders = 0;

      if (Array.isArray(payload)) {
        orders = payload as Order[];
        totalOrders = orders.length;
      } else if (payload && typeof payload === 'object') {
        const payloadObj = payload as any;
        if (Array.isArray(payloadObj.orders)) {
          orders = payloadObj.orders as Order[];
          totalOrders =
            typeof payloadObj.total === 'number'
              ? payloadObj.total
              : payloadObj.orders.length;
        } else if (Array.isArray(payloadObj.data)) {
          orders = payloadObj.data as Order[];
          totalOrders = orders.length;
        }
      }

      console.log('[ADMIN] Orders loaded:', orders.length, 'of', totalOrders);

      set({
        allOrders: orders,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('[ADMIN] Failed to fetch orders:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch orders',
        isLoading: false,
      });
    }
  },

  // ✅ Update order status
  updateOrderStatus: async (orderId: string, status: string) => {
    set({ isUpdating: true, error: null });
    try {
      console.log(`📡 Updating order ${orderId} to ${status}...`);
      const response = await adminAPI.updateOrderStatus(orderId, status);
      const updatedOrder = response.data.data || response.data;

      const { allOrders } = get();
      set({
        allOrders: allOrders.map((order) =>
          order._id === orderId ? updatedOrder : order
        ),
        isUpdating: false,
      });

      console.log('✅ Order status updated');
    } catch (error: any) {
      console.error('❌ Failed to update order:', error);
      set({
        error: error.response?.data?.message || 'Failed to update order',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ FIXED: Fetch ALL menu items for admin (including unavailable)
  fetchManagedMenuItems: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 [ADMIN] Fetching ALL menu items (including unavailable)...');
      
      // Use admin API that includes unavailable items
      const response = await adminAPI.getAllMenuItems(1, 1000);
      console.log('📦 [ADMIN] Raw response:', response);

      const payload = response.data?.data ?? response.data;
      let items: MenuItem[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.items)
        ? (payload as any).items
        : [];
      
      // If admin endpoint doesn't exist or returns empty, fallback to regular endpoint
      if (items.length === 0) {
        console.log('⚠️ [ADMIN] Admin endpoint empty, trying fallback to daily menu...');
        try {
          const fallbackResponse = await menuAPI.getDailyMenu();
          const fallbackData = fallbackResponse.data.data || fallbackResponse.data;
          items = Array.isArray(fallbackData) ? fallbackData : [];
          console.log('✅ [ADMIN] Fallback loaded:', items.length, 'items');
        } catch (fallbackError) {
          console.error('❌ [ADMIN] Fallback also failed:', fallbackError);
        }
      }

      // Log availability status for debugging
      const availableCount = items.filter(item => item.is_available).length;
      const unavailableCount = items.filter(item => !item.is_available).length;
      
      console.log('✅ [ADMIN] All menu items loaded:', items.length);
      console.log(`📊 [ADMIN] Available: ${availableCount}, Unavailable: ${unavailableCount}`);
      
      // Log sample items for debugging
      if (items.length > 0) {
        console.log('📦 [ADMIN] Sample items:', items.slice(0, 3).map(item => ({
          id: item._id,
          name: item.name,
          is_available: item.is_available,
          category: item.category
        })));
      }

      set({
        managedMenuItems: items, // Store ALL items without filtering
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ [ADMIN] Failed to fetch menu items:', error);
      console.error('Error details:', error.response?.data);
      
      // Even on error, try to use cached data if available
      set({
        error: error.response?.data?.message || 'Failed to fetch menu items',
        isLoading: false,
      });
    }
  },

  // ✅ FIXED: Fetch ALL sidelines for admin (including unavailable)
  fetchManagedSidelines: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 [ADMIN] Fetching ALL sidelines (including unavailable)...');
      const response = await adminAPI.getAllSidelines(1, 1000);

      const payload = response.data?.data ?? response.data;
      let sidelines: Sideline[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.items)
        ? (payload as any).items
        : [];
      
      // If admin endpoint doesn't exist or returns empty, fallback
      if (sidelines.length === 0) {
        console.log('⚠️ [ADMIN] Admin endpoint empty, trying fallback...');
        try {
          const fallbackResponse = await menuAPI.getSidelines();
          const fallbackData = fallbackResponse.data.data || fallbackResponse.data;
          sidelines = Array.isArray(fallbackData) ? fallbackData : [];
        } catch (fallbackError) {
          console.error('❌ [ADMIN] Fallback failed:', fallbackError);
        }
      }

      // Log availability status
      const availableCount = sidelines.filter(item => item.is_available).length;
      const unavailableCount = sidelines.filter(item => !item.is_available).length;
      console.log(`📊 [ADMIN] Sidelines - Available: ${availableCount}, Unavailable: ${unavailableCount}`);

      set({
        managedSidelines: sidelines, // Store ALL items without filtering
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ [ADMIN] Failed to fetch sidelines:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch sidelines',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch managed categories
  fetchManagedCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 [ADMIN] Fetching categories...');
      const response = await adminAPI.getAllCategories(1, 1000);

      const payload = response.data?.data ?? response.data;
      const categories: MenuCategory[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.categories)
        ? (payload as any).categories
        : [];

      console.log('✅ Categories loaded:', categories.length);

      set({
        managedCategories: categories,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch categories:', error);
      set({
        managedCategories: [],
        error: error.response?.data?.message || 'Failed to fetch categories',
        isLoading: false,
      });
    }
  },

  // ✅ Create menu item
  createMenuItem: async (data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      console.log('📡 Creating menu item...');
      
      // Log form data for debugging
      for (let [key, value] of data.entries()) {
        console.log(`  ${key}: ${value}`);
      }
      
      const response = await adminAPI.createMenuItem(data);
      const newItem = response.data.data || response.data;

      console.log('✅ Menu item created:', newItem);

      // Refresh the entire list to ensure consistency
      await get().fetchManagedMenuItems();
      
      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to create menu item:', error);
      console.error('Error details:', error.response?.data);
      set({
        error: error.response?.data?.message || 'Failed to create menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update menu item
  updateMenuItem: async (itemId: string, data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      console.log('📡 Updating menu item:', itemId);
      
      // Log form data for debugging
      for (let [key, value] of data.entries()) {
        console.log(`  ${key}: ${value}`);
      }
      
      const response = await adminAPI.updateMenuItem(itemId, data);
      const updatedItem = response.data.data || response.data;
      
      console.log('✅ Menu item updated:', updatedItem);
      
      // Update the item in the list WITHOUT filtering
      const currentItems = get().managedMenuItems;
      set({
        managedMenuItems: currentItems.map((item) =>
          item._id === itemId ? updatedItem : item
        ),
        isUpdating: false,
      });
      
      // Optional: Refresh entire list to ensure consistency
      // await get().fetchManagedMenuItems();
      
    } catch (error: any) {
      console.error('❌ Failed to update menu item:', error);
      console.error('Error details:', error.response?.data);
      set({
        error: error.response?.data?.message || 'Failed to update menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete menu item
  deleteMenuItem: async (itemId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteMenuItem(itemId);
      set({
        managedMenuItems: get().managedMenuItems.filter(
          (item) => item._id !== itemId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Create sideline
  createSideline: async (data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createSideline(data);
      const newSideline = response.data.data || response.data;
      
      // Refresh the entire list
      await get().fetchManagedSidelines();
      
      set({ isUpdating: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to create sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update sideline
  updateSideline: async (sidelineId: string, data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateSideline(sidelineId, data);
      const updatedSideline = response.data.data || response.data;
      
      // Update the item in the list WITHOUT filtering
      const currentSidelines = get().managedSidelines;
      set({
        managedSidelines: currentSidelines.map((sideline) =>
          sideline._id === sidelineId ? updatedSideline : sideline
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to update sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete sideline
  deleteSideline: async (sidelineId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteSideline(sidelineId);
      set({
        managedSidelines: get().managedSidelines.filter(
          (s) => s._id !== sidelineId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Create category
  createCategory: async (payload: CreateCategoryInput) => {
    set({ isUpdating: true, error: null });
    try {
      const formData = new FormData();
      formData.append('name', payload.name.trim());
      formData.append('display_name', payload.display_name.trim());
      if (payload.description) formData.append('description', payload.description.trim());
      formData.append('is_active', String(payload.is_active));
      if (payload.sort_order !== undefined && payload.sort_order !== null) {
        formData.append('sort_order', String(payload.sort_order));
      }
      if (payload.imageFile) {
        formData.append('image', payload.imageFile);
      }

      await adminAPI.createCategory(formData);
      await get().fetchManagedCategories();
      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to create category:', error);
      set({
        error: error.response?.data?.message || 'Failed to create category',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update category
  updateCategory: async (
    categoryId: string,
    payload: UpdateCategoryInput
  ) => {
    set({ isUpdating: true, error: null });
    try {
      const formData = new FormData();
      if (payload.display_name !== undefined) {
        formData.append('display_name', payload.display_name.trim());
      }
      if (payload.description !== undefined) {
        formData.append('description', payload.description.trim());
      }
      if (payload.is_active !== undefined) {
        formData.append('is_active', String(payload.is_active));
      }
      if (payload.sort_order !== undefined && payload.sort_order !== null) {
        formData.append('sort_order', String(payload.sort_order));
      }
      if (payload.imageFile) {
        formData.append('image', payload.imageFile);
      }

      await adminAPI.updateCategory(categoryId, formData);
      await get().fetchManagedCategories();
      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to update category:', error);
      set({
        error: error.response?.data?.message || 'Failed to update category',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete category
  deleteCategory: async (categoryId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteCategory(categoryId);
      set({
        managedCategories: get().managedCategories.filter(
          (category) => category._id !== categoryId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to delete category:', error);
      set({
        error: error.response?.data?.message || 'Failed to delete category',
        isUpdating: false,
      });
      throw error;
    }
  },

  fetchMealPlans: async (tab?: string, includeInactive: boolean = true) => {
    set({ isLoading: true, error: null });
    try {
      const response = await adminAPI.getMealPlans(tab, includeInactive);
      const plans = response.data.data || response.data;
      set({
        mealPlans: Array.isArray(plans) ? plans : [],
        isLoading: false,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to fetch meal plans';
      set({
        error: message,
        isLoading: false,
      });
      throw error;
    }
  },

  createMealPlan: async (payload: Partial<MealSubscriptionPlan>) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createMealPlan(payload);
      const plan = response.data.data || response.data;
      if (plan) {
        set({
          mealPlans: [plan, ...get().mealPlans.filter((p) => p._id !== plan._id)],
          isUpdating: false,
        });
      } else {
        set({ isUpdating: false });
      }
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to create meal plan';
      set({
        error: message,
        isUpdating: false,
      });
      throw error;
    }
  },

  updateMealPlan: async (
    planId: string,
    payload: Partial<MealSubscriptionPlan>
  ) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateMealPlan(planId, payload);
      const updated = response.data.data || response.data;
      if (!updated) {
        set({ isUpdating: false });
        return;
      }
      set({
        mealPlans: get().mealPlans.map((plan) =>
          plan._id === planId ? updated : plan
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to update meal plan';
      set({
        error: message,
        isUpdating: false,
      });
      throw error;
    }
  },

  deleteMealPlan: async (planId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteMealPlan(planId);
      set({
        mealPlans: get().mealPlans.filter((plan) => plan._id !== planId),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete meal plan',
        isUpdating: false,
      });
      throw error;
    }
  },

  fetchDeliveryZones: async (includeInactive: boolean = true) => {
    set({ isLoading: true, error: null });
    try {
      const response = await adminAPI.getDeliveryZones(includeInactive, 1, 1000);
      const payload = response.data?.data ?? response.data;
      const zones: DeliveryZone[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.zones)
        ? (payload as any).zones
        : [];
      set({
        deliveryZones: zones,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to fetch delivery zones',
        isLoading: false,
      });
      throw error;
    }
  },

  createDeliveryZone: async (payload: Partial<DeliveryZone>) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createDeliveryZone(payload);
      const zone = response.data.data || response.data;
      if (zone) {
        set({
          deliveryZones: [
            zone,
            ...get().deliveryZones.filter((z) => z._id !== zone._id),
          ],
          isUpdating: false,
        });
      } else {
        set({ isUpdating: false });
      }
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to create delivery zone',
        isUpdating: false,
      });
      throw error;
    }
  },

  updateDeliveryZone: async (
    zoneId: string,
    payload: Partial<DeliveryZone>
  ) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateDeliveryZone(zoneId, payload);
      const updated = response.data.data || response.data;
      if (!updated) {
        set({ isUpdating: false });
        return;
      }
      set({
        deliveryZones: get().deliveryZones.map((zone) =>
          zone._id === zoneId ? updated : zone
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to update delivery zone',
        isUpdating: false,
      });
      throw error;
    }
  },

  deleteDeliveryZone: async (zoneId: string, permanent: boolean = false) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteDeliveryZone(zoneId, permanent);
      set({
        deliveryZones: get().deliveryZones.filter(
          (zone) => zone._id !== zoneId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to delete delivery zone',
        isUpdating: false,
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));
