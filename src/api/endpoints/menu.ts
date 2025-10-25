import apiClient from '../client';
import { MenuItem, Sideline, MenuFilters } from '@types/menu.types';
import { ApiResponse } from '@types/common.types';

export const menuAPI = {
  /**
   * Get daily menu items
   */
  getDailyMenu: (filters?: MenuFilters) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.is_vegetarian !== undefined)
      params.append('is_vegetarian', String(filters.is_vegetarian));
    if (filters?.is_vegan !== undefined)
      params.append('is_vegan', String(filters.is_vegan));
    if (filters?.search) params.append('search', filters.search);
    
    // Add filter for weekly available items
    if (filters?.order_type === 'weekly_subscription') {
      params.append('is_available_for_weekly', 'true');
    }

    return apiClient.get<ApiResponse<MenuItem[]>>(
      `/menu/daily?${params.toString()}`
    );
  },

  /**
   * Get weekly menu items with improved error handling
   */
  getWeeklyMenu: (delivery_date?: string) => {
    // If no date provided, use next Monday
    if (!delivery_date) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
      const nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + daysUntilMonday);
      delivery_date = nextMonday.toISOString().split('T')[0];
    }

    const params = `?delivery_date=${delivery_date}`;
    
    console.log('🔍 Fetching weekly menu for date:', delivery_date);
    
    return apiClient.get<ApiResponse<any>>(`/menu/weekly${params}`).catch((error) => {
      // If 404, don't throw - let the component handle it
      if (error.response?.status === 404) {
        console.log('📝 No weekly menu found for date:', delivery_date);
        // Return a valid but empty response structure
        return {
          data: {
            success: true,
            data: { 
              delivery_date,
              menu_rotation: null,
              items: []
            }
          },
          status: 404,
          statusText: 'Not Found',
          headers: {},
          config: error.config
        };
      }
      // Re-throw other errors
      throw error;
    });
  },

  /**
   * Get catering menu items
   */
  getCateringMenu: () => {
    return apiClient.get<ApiResponse<MenuItem[]>>('/menu/catering');
  },

  /**
   * Get all sidelines
   */
  getSidelines: () => {
    return apiClient.get<ApiResponse<Sideline[]>>('/menu/sidelines');
  },

  /**
   * Get menu categories
   */
  getCategories: () => {
    return apiClient.get<ApiResponse<string[]>>('/menu/categories');
  },

  /**
   * Get specific menu item by ID
   */
  getMenuItemById: (id: string) => {
    return apiClient.get<ApiResponse<MenuItem>>(`/menu/items/${id}`);
  },

  /**
   * Search menu items
   */
  searchMenuItems: (query: string, filters?: MenuFilters) => {
    const params = new URLSearchParams({ search: query });
    if (filters?.category) params.append('category', filters.category);
    if (filters?.order_type) params.append('order_type', filters.order_type);
    return apiClient.get<ApiResponse<MenuItem[]>>(
      `/menu/daily?${params.toString()}`
    );
  },
};
