export interface MenuItem {
  id: string;  // Changed from _id to id to match backend
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string;
  is_available: boolean;
  is_available_for_daily: boolean;
  is_available_for_weekly: boolean;
  is_available_for_catering: boolean;
  max_boxes_per_menu?: number;
  nutritional_info?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  allergens?: string[];
  spice_level?: 'mild' | 'medium' | 'hot';
  is_vegetarian: boolean;
  is_vegan?: boolean;
  is_halal?: boolean;
  serving_size?: string;
  created_at: string;
  updated_at: string;
}

export interface Sideline {
  id: string;  // Changed from _id to id
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  is_available: boolean;
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

export interface MenuCategory {
  id?: string;  // Changed from _id to id
  name: string;
  display_name: string;
  description?: string;
  image_url?: string;
  is_active?: boolean;
  sort_order?: number;
}

export interface MenuFilters {
  category?: string;
  is_vegetarian?: boolean;
  is_vegan?: boolean;
  search?: string;
  order_type?: 'daily_menu' | 'weekly_subscription' | 'special_catering';
}
