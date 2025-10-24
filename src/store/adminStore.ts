import { create } from 'zustand';
import { adminAPI } from '@api/endpoints/admin';
import { menuAPI } from '@api/endpoints/menu';
import { Order } from '@types/order.types';
import { MenuItem, Sideline } from '@types/menu.types';

interface AdminState {
  // Orders
  allOrders: Order[];
  orderStats: any | null;

  // Menu
  managedMenuItems: MenuItem[];
  managedSidelines: Sideline[];
  managedCategories: any[];

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

  clearError: () => void;
}

export const useAdminStore = create<AdminState>((set, get) => ({
  allOrders: [],
  orderStats: null,
  managedMenuItems: [],
  managedSidelines: [],
  managedCategories: [],
  isLoading: false,
  isUpdating: false,
  error: null,

  // ✅ Fetch all orders from backend
  fetchAllOrders: async (filters?: any) => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching all orders...');
      const response = await adminAPI.getAllOrders(filters);
      
      // ✅ Unwrap response properly
      const ordersData = response.data.data || response.data;
      const orders = Array.isArray(ordersData) ? ordersData : [];
      
      console.log('✅ Orders loaded:', orders.length);
      
      set({
        allOrders: orders,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch orders:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch orders',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch dashboard stats with fallback
  fetchDashboardStats: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching dashboard stats...');
      const response = await adminAPI.getDashboardStats();
      
      console.log('📦 Dashboard response:', response.data);
      
      // ✅ Unwrap response properly
      const statsData = response.data.data || response.data;
      
      console.log('✅ Stats loaded:', statsData);
      
      // ✅ Provide default values if stats are null/undefined
      set({
        orderStats: statsData || {
          total_orders: 0,
          pending_orders: 0,
          completed_orders: 0,
          cancelled_orders: 0,
          today_revenue: 0,
          weekly_revenue: 0,
          monthly_revenue: 0,
          total_revenue: 0,
        },
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch dashboard stats:', error);
      
      // ✅ Set default stats on error
      set({
        orderStats: {
          total_orders: 0,
          pending_orders: 0,
          completed_orders: 0,
          cancelled_orders: 0,
          today_revenue: 0,
          weekly_revenue: 0,
          monthly_revenue: 0,
          total_revenue: 0,
        },
        error: error.response?.data?.message || 'Failed to fetch stats',
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

  // ✅ Fetch managed menu items
  fetchManagedMenuItems: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching menu items...');
      const response = await adminAPI.getAllMenuItems();
      
      const menuData = response.data.data || response.data;
      const items = Array.isArray(menuData) ? menuData : [];
      
      console.log('✅ Menu items loaded:', items.length);
      
      set({
        managedMenuItems: items,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch menu items:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch menu items',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch managed sidelines
  fetchManagedSidelines: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching sidelines...');
      const response = await adminAPI.getAllSidelines();
      
      const sidelinesData = response.data.data || response.data;
      const sidelines = Array.isArray(sidelinesData) ? sidelinesData : [];
      
      console.log('✅ Sidelines loaded:', sidelines.length);
      
      set({
        managedSidelines: sidelines,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch sidelines:', error);
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
      console.log('📡 Fetching categories...');
      const response = await menuAPI.getCategories();
      
      const categoriesData = response.data.data || response.data;
      const categories = Array.isArray(categoriesData) ? categoriesData : [];
      
      console.log('✅ Categories loaded:', categories);
      
      set({
        managedCategories: categories,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch categories:', error);
      set({
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
    const response = await adminAPI.createMenuItem(data);
    const newItem = response.data.data || response.data;
    
    console.log('✅ Menu item created:', newItem);
    
    set({
      managedMenuItems: [...get().managedMenuItems, newItem],
      isUpdating: false,
    });
  } catch (error: any) {
    console.error('❌ Failed to create menu item:', error);
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
      const response = await adminAPI.updateMenuItem(itemId, data);
      const updatedItem = response.data.data || response.data;
      set({
        managedMenuItems: get().managedMenuItems.map((item) =>
          item._id === itemId ? updatedItem : item
        ),
        isUpdating: false,
      });
    } catch (error: any) {
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
      set({
        managedSidelines: [...get().managedSidelines, newSideline],
        isUpdating: false,
      });
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
      set({
        managedSidelines: get().managedSidelines.map((sideline) =>
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

  clearError: () => set({ error: null }),
}));
