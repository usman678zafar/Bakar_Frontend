import { create } from 'zustand';
import { menuAPI } from '@api/endpoints/menu';
import {
  MenuItem,
  Sideline,
  MenuFilters,
  MenuCategory,
} from '@types/menu.types';

interface MenuState {
  // Daily menu
  dailyMenuItems: MenuItem[];
  weeklyMenuItems: MenuItem[];
  cateringMenuItems: MenuItem[];

  // Sidelines
  sidelines: Sideline[];

  // Categories
  categories: string[];

  // Filters
  activeFilters: MenuFilters;
  searchQuery: string;

  // Loading states
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchDailyMenu: () => Promise<void>;
  fetchWeeklyMenu: () => Promise<void>;
  fetchCateringMenu: () => Promise<void>;
  fetchSidelines: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  searchMenuItems: (query: string) => Promise<void>;
  setFilters: (filters: Partial<MenuFilters>) => void;
  clearFilters: () => void;
  getFilteredItems: (
    orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => MenuItem[];
}

export const useMenuStore = create<MenuState>((set, get) => ({
  dailyMenuItems: [],
  weeklyMenuItems: [],
  cateringMenuItems: [],
  sidelines: [],
  categories: [],
  activeFilters: {},
  searchQuery: '',
  isLoading: false,
  error: null,

  fetchDailyMenu: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('🔍 [DEBUG] Fetching daily menu from API...');
      const response = await menuAPI.getDailyMenu();
      
      // ===== EXTENSIVE DEBUGGING =====
      console.log('🔍 [DEBUG] Full Response Object:', response);
      console.log('🔍 [DEBUG] response.data:', response.data);
      console.log('🔍 [DEBUG] response.data.data:', response.data.data);
      console.log('🔍 [DEBUG] response.data.items:', response.data.items);
      console.log('🔍 [DEBUG] response.data.menu_items:', response.data.menu_items);
      console.log('🔍 [DEBUG] typeof response.data:', typeof response.data);
      console.log('🔍 [DEBUG] Array.isArray(response.data):', Array.isArray(response.data));
      console.log('🔍 [DEBUG] Array.isArray(response.data.data):', Array.isArray(response.data.data));
      console.log('🔍 [DEBUG] Object.keys(response.data):', Object.keys(response.data));
      
      // Try all possible unwrapping strategies
      let items: MenuItem[] = [];
      
      // Strategy 1: response.data.data
      if (response.data.data !== undefined && response.data.data !== null) {
        if (Array.isArray(response.data.data)) {
          items = response.data.data;
          console.log('✅ [SUCCESS] Using response.data.data (Strategy 1) - Length:', items.length);
        } else if (typeof response.data.data === 'object' && response.data.data.items) {
          items = response.data.data.items;
          console.log('✅ [SUCCESS] Using response.data.data.items (Strategy 1b) - Length:', items.length);
        }
      }
      // Strategy 2: response.data.items
      else if (response.data.items && Array.isArray(response.data.items)) {
        items = response.data.items;
        console.log('✅ [SUCCESS] Using response.data.items (Strategy 2) - Length:', items.length);
      }
      // Strategy 3: response.data is array
      else if (Array.isArray(response.data)) {
        items = response.data;
        console.log('✅ [SUCCESS] Using response.data directly (Strategy 3) - Length:', items.length);
      }
      // Strategy 4: response.data.menu_items
      else if (response.data.menu_items && Array.isArray(response.data.menu_items)) {
        items = response.data.menu_items;
        console.log('✅ [SUCCESS] Using response.data.menu_items (Strategy 4) - Length:', items.length);
      }
      else {
        console.error('❌ [ERROR] Could not find array in response!');
        console.error('❌ [ERROR] Response structure:', JSON.stringify(response.data, null, 2));
      }

      console.log('📦 [RESULT] Final items array length:', items.length);
      if (items.length > 0) {
        console.log('📦 [RESULT] First item:', items[0]);
        console.log('📦 [RESULT] Sample item structure:', Object.keys(items[0]));
      } else {
        console.warn('⚠️ [WARNING] No items found in response!');
        console.warn('⚠️ [WARNING] This means the backend returned an empty array or database has no menu items');
      }

      set({
        dailyMenuItems: items,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ [ERROR] Failed to fetch daily menu:', error);
      console.error('❌ [ERROR] Error response:', error.response);
      console.error('❌ [ERROR] Error message:', error.message);
      set({
        error: error.response?.data?.message || 'Failed to fetch daily menu',
        isLoading: false,
      });
    }
  },

  fetchWeeklyMenu: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('🔍 [DEBUG] Fetching weekly menu...');
      
      // Calculate next Monday
      const today = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
      const nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + daysUntilMonday);
      const delivery_date = nextMonday.toISOString().split('T')[0];
      
      console.log('📅 Using delivery_date:', delivery_date);
      
      const response = await menuAPI.getWeeklyMenu(delivery_date);
      
      console.log('🔍 [DEBUG] Weekly menu response:', response.data);
      
      const menuData = response.data.data || response.data;
      
      let items: MenuItem[] = [];
      if (Array.isArray(menuData)) {
        items = menuData;
      } else if (menuData && menuData.items) {
        items = menuData.items;
      }

      console.log('✅ Weekly menu items:', items.length);

      set({
        weeklyMenuItems: items,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch weekly menu:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch weekly menu',
        isLoading: false,
      });
    }
  },

  fetchCateringMenu: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('🔍 [DEBUG] Fetching catering menu...');
      const response = await menuAPI.getCateringMenu();
      
      const menuData = response.data.data || response.data;
      const items = Array.isArray(menuData) ? menuData : [];

      console.log('✅ Catering items:', items.length);

      set({
        cateringMenuItems: items,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch catering menu:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch catering menu',
        isLoading: false,
      });
    }
  },

  fetchSidelines: async () => {
    try {
      console.log('🔍 [DEBUG] Fetching sidelines...');
      const response = await menuAPI.getSidelines();
      
      console.log('🔍 [DEBUG] Sidelines response:', response.data);
      
      const sidelinesData = response.data.data || response.data;
      const items = Array.isArray(sidelinesData) ? sidelinesData : [];

      console.log('✅ Sidelines:', items.length);

      set({ sidelines: items });
    } catch (error: any) {
      console.error('❌ Failed to fetch sidelines:', error);
    }
  },

  fetchCategories: async () => {
    try {
      console.log('🔍 [DEBUG] Fetching categories...');
      const response = await menuAPI.getCategories();
      
      console.log('🔍 [DEBUG] Categories response:', response.data);
      
      const categoriesData = response.data.data || response.data;
      
      let items: string[] = [];
      
      if (Array.isArray(categoriesData)) {
        items = categoriesData.map((cat: any) => {
          if (typeof cat === 'string') {
            return cat;
          }
          return cat.name || cat.display_name || String(cat);
        });
      }

      console.log('✅ Categories:', items);

      set({ categories: items });
    } catch (error: any) {
      console.error('❌ Failed to fetch categories:', error);
    }
  },

  searchMenuItems: async (query: string) => {
    set({ searchQuery: query, isLoading: true, error: null });
    try {
      console.log('🔍 Searching for:', query);
      const response = await menuAPI.searchMenuItems(query);
      
      const searchData = response.data.data || response.data;
      const items = Array.isArray(searchData) ? searchData : [];

      console.log('✅ Search results:', items.length);

      // Categorize items by order type
      set({
        dailyMenuItems: items.filter(
          (item: MenuItem) => item.is_available_for_daily
        ),
        weeklyMenuItems: items.filter(
          (item: MenuItem) => item.is_available_for_weekly
        ),
        cateringMenuItems: items.filter(
          (item: MenuItem) => item.is_available_for_catering
        ),
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Search failed:', error);
      set({
        error: error.response?.data?.message || 'Search failed',
        isLoading: false,
      });
    }
  },

  setFilters: (filters: Partial<MenuFilters>) => {
    set((state) => ({
      activeFilters: { ...state.activeFilters, ...filters },
    }));
  },

  clearFilters: () => {
    set({ activeFilters: {}, searchQuery: '' });
  },

  getFilteredItems: (
    orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => {
    const { activeFilters, searchQuery } = get();

    let items: MenuItem[] = [];
    switch (orderType) {
      case 'daily_menu':
        items = get().dailyMenuItems;
        break;
      case 'weekly_subscription':
        items = get().weeklyMenuItems;
        break;
      case 'special_catering':
        items = get().cateringMenuItems;
        break;
    }

    console.log(`📦 Filtering ${orderType}:`, items.length, 'items');

    // Apply filters
    let filtered = items;

    if (activeFilters.category) {
      filtered = filtered.filter(
        (item) => item.category === activeFilters.category
      );
    }

    if (activeFilters.is_vegetarian !== undefined) {
      filtered = filtered.filter(
        (item) => item.is_vegetarian === activeFilters.is_vegetarian
      );
    }

    if (activeFilters.is_vegan !== undefined) {
      filtered = filtered.filter(
        (item) => item.is_vegan === activeFilters.is_vegan
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    console.log(`✅ After filtering:`, filtered.length, 'items');

    return filtered;
  },
}));
