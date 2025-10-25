import { create } from 'zustand';
import { menuAPI } from '@api/endpoints/menu';
import {
  MenuItem,
  Sideline,
  MenuFilters,
  MenuCategory,
} from '@types/menu.types';

// ✅ ============================================
// NORMALIZATION FUNCTIONS
// ============================================

/**
 * Normalize menu item to ensure both id and _id exist
 * and image URLs are properly formatted
 */
const normalizeMenuItem = (item: any): MenuItem => {
  // Ensure both id and _id exist
  const itemId = item.id || item._id;
  
  if (!itemId) {
    console.error('❌ Item missing both id and _id:', item);
  }

  // Normalize the item
  const normalized: MenuItem = {
    ...item,
    id: itemId,
    _id: itemId,
    // Ensure required fields have defaults
    name: item.name || 'Unnamed Item',
    description: item.description || '',
    category: item.category || 'other',
    price: Number(item.price) || 0,
    image_url: item.image_url || undefined,
    is_available: item.is_available !== false,
    is_available_for_daily: item.is_available_for_daily !== false,
    is_available_for_weekly: item.is_available_for_weekly !== false,
    is_available_for_catering: item.is_available_for_catering !== false,
    max_boxes_per_menu: item.max_boxes_per_menu || 2,
    allergens: Array.isArray(item.allergens) ? item.allergens : [],
    spice_level: item.spice_level || undefined,
    is_vegetarian: item.is_vegetarian === true,
    is_vegan: item.is_vegan === true,
    is_halal: item.is_halal !== false,
    nutritional_info: item.nutritional_info || undefined,
    serving_size: item.serving_size || undefined,
    created_at: item.created_at || new Date().toISOString(),
    updated_at: item.updated_at || new Date().toISOString(),
  };

  // Debug log in development
  if (import.meta.env.DEV) {
    console.log('🔧 Normalized menu item:', {
      originalId: item.id,
      original_Id: item._id,
      normalizedId: normalized.id,
      normalized_Id: normalized._id,
      name: normalized.name,
      imageUrl: normalized.image_url,
      isAvailableForDaily: normalized.is_available_for_daily,
    });
  }

  return normalized;
};

/**
 * Normalize sideline to ensure both id and _id exist
 */
const normalizeSideline = (item: any): Sideline => {
  const itemId = item.id || item._id;

  return {
    ...item,
    id: itemId,
    _id: itemId,
    name: item.name || 'Unnamed Sideline',
    description: item.description || undefined,
    price: Number(item.price) || 0,
    image_url: item.image_url || undefined,
    is_available: item.is_available !== false,
    sort_order: item.sort_order || 0,
    created_at: item.created_at || new Date().toISOString(),
    updated_at: item.updated_at || new Date().toISOString(),
  };
};

// ✅ ============================================
// MENU STORE INTERFACE
// ============================================

interface MenuState {
  // Menu items by type
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
  fetchWeeklyMenu: (deliveryDate?: string) => Promise<void>;
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

// ✅ ============================================
// MENU STORE IMPLEMENTATION
// ============================================

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

  // ✅ FETCH DAILY MENU
  fetchDailyMenu: async () => {
    set({ isLoading: true, error: null });
    
    try {
      console.log('🔍 [MenuStore] Fetching daily menu from API...');
      const response = await menuAPI.getDailyMenu();

      console.log('📦 [MenuStore] Raw API response:', response);

      let items: any[] = [];

      // ✅ Handle different response structures
      if (response.data?.data && Array.isArray(response.data.data)) {
        items = response.data.data;
        console.log('✅ [MenuStore] Using response.data.data');
      } else if (response.data?.items && Array.isArray(response.data.items)) {
        items = response.data.items;
        console.log('✅ [MenuStore] Using response.data.items');
      } else if (Array.isArray(response.data)) {
        items = response.data;
        console.log('✅ [MenuStore] Using response.data directly');
      } else {
        console.warn('⚠️ [MenuStore] Unknown response structure:', response);
      }

      // ✅ Normalize ALL items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`📦 [MenuStore] Normalized ${normalizedItems.length} daily menu items`);

      if (normalizedItems.length > 0) {
        console.log('📦 [MenuStore] Sample normalized item:', {
          id: normalizedItems[0].id,
          _id: normalizedItems[0]._id,
          name: normalizedItems[0].name,
          imageUrl: normalizedItems[0].image_url,
          isAvailable: normalizedItems[0].is_available,
          isAvailableForDaily: normalizedItems[0].is_available_for_daily,
        });
      } else {
        console.warn('⚠️ [MenuStore] No daily menu items found!');
      }

      set({
        dailyMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch daily menu:', error);
      set({
        error: error.response?.data?.message || error.message || 'Failed to fetch daily menu',
        isLoading: false,
        dailyMenuItems: [], // Clear items on error
      });
    }
  },

  // ✅ FETCH WEEKLY MENU
  fetchWeeklyMenu: async (deliveryDate?: string) => {
    set({ isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Fetching weekly menu...');

      const response = await menuAPI.getWeeklyMenu(deliveryDate);

      console.log('📦 [MenuStore] Weekly menu response:', response);

      const menuData = response.data?.data || response.data;

      let items: any[] = [];

      if (Array.isArray(menuData)) {
        items = menuData;
      } else if (menuData?.items && Array.isArray(menuData.items)) {
        items = menuData.items;
      }

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`✅ [MenuStore] Weekly menu: ${normalizedItems.length} items`);

      set({
        weeklyMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch weekly menu:', error);
      set({
        error: error.response?.data?.message || error.message || 'Failed to fetch weekly menu',
        isLoading: false,
        weeklyMenuItems: [],
      });
    }
  },

  // ✅ FETCH CATERING MENU
  fetchCateringMenu: async () => {
    set({ isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Fetching catering menu...');
      const response = await menuAPI.getCateringMenu();

      const menuData = response.data?.data || response.data;
      let items = Array.isArray(menuData) ? menuData : [];

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`✅ [MenuStore] Catering items: ${normalizedItems.length}`);

      set({
        cateringMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch catering menu:', error);
      set({
        error: error.response?.data?.message || error.message || 'Failed to fetch catering menu',
        isLoading: false,
        cateringMenuItems: [],
      });
    }
  },

  // ✅ FETCH SIDELINES
  fetchSidelines: async () => {
    try {
      console.log('🔍 [MenuStore] Fetching sidelines...');
      const response = await menuAPI.getSidelines();

      console.log('📦 [MenuStore] Sidelines response:', response.data);

      const sidelinesData = response.data?.data || response.data;
      let items = Array.isArray(sidelinesData) ? sidelinesData : [];

      // ✅ Normalize all sidelines
      const normalizedItems = items.map(normalizeSideline);

      console.log(`✅ [MenuStore] Sidelines: ${normalizedItems.length}`);

      set({ sidelines: normalizedItems });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch sidelines:', error);
    }
  },

  // ✅ FETCH CATEGORIES
  fetchCategories: async () => {
    try {
      console.log('🔍 [MenuStore] Fetching categories...');
      const response = await menuAPI.getCategories();

      console.log('📦 [MenuStore] Categories response:', response.data);

      const categoriesData = response.data?.data || response.data;

      let items: string[] = [];

      if (Array.isArray(categoriesData)) {
        items = categoriesData.map((cat: any) => {
          if (typeof cat === 'string') {
            return cat;
          }
          return cat.name || cat.display_name || String(cat);
        });
      }

      console.log('✅ [MenuStore] Categories:', items);

      set({ categories: items });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch categories:', error);
    }
  },

  // ✅ SEARCH MENU ITEMS
  searchMenuItems: async (query: string) => {
    set({ searchQuery: query, isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Searching for:', query);
      const response = await menuAPI.searchMenuItems(query);

      const searchData = response.data?.data || response.data;
      let items = Array.isArray(searchData) ? searchData : [];

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`✅ [MenuStore] Search results: ${normalizedItems.length}`);

      // Categorize items by order type
      set({
        dailyMenuItems: normalizedItems.filter((item) => item.is_available_for_daily),
        weeklyMenuItems: normalizedItems.filter((item) => item.is_available_for_weekly),
        cateringMenuItems: normalizedItems.filter((item) => item.is_available_for_catering),
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Search failed:', error);
      set({
        error: error.response?.data?.message || error.message || 'Search failed',
        isLoading: false,
      });
    }
  },

  // ✅ SET FILTERS
  setFilters: (filters: Partial<MenuFilters>) => {
    console.log('🔍 [MenuStore] Setting filters:', filters);
    set((state) => ({
      activeFilters: { ...state.activeFilters, ...filters },
    }));
  },

  // ✅ CLEAR FILTERS
  clearFilters: () => {
    console.log('🔍 [MenuStore] Clearing all filters');
    set({ activeFilters: {}, searchQuery: '' });
  },

  // ✅ GET FILTERED ITEMS
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

    console.log(`📦 [MenuStore] Filtering ${orderType}: ${items.length} items`);
    console.log(`📦 [MenuStore] Active filters:`, activeFilters);

    // Apply filters
    let filtered = items;

    // Category filter
    if (activeFilters.category) {
      filtered = filtered.filter((item) => item.category === activeFilters.category);
      console.log(`  🔹 After category filter (${activeFilters.category}): ${filtered.length}`);
    }

    // Vegetarian filter
    if (activeFilters.is_vegetarian !== undefined) {
      filtered = filtered.filter((item) => item.is_vegetarian === activeFilters.is_vegetarian);
      console.log(`  🔹 After vegetarian filter: ${filtered.length}`);
    }

    // Vegan filter
    if (activeFilters.is_vegan !== undefined) {
      filtered = filtered.filter((item) => item.is_vegan === activeFilters.is_vegan);
      console.log(`  🔹 After vegan filter: ${filtered.length}`);
    }

    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
      );
      console.log(`  🔹 After search filter ("${query}"): ${filtered.length}`);
    }

    console.log(`✅ [MenuStore] Final filtered count: ${filtered.length} items`);

    return filtered;
  },
}));
