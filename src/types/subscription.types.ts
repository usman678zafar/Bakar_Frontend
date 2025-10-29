import { MenuItem } from './menu.types';

export interface MealSubscriptionPlan {
  _id: string;
  code: string;
  name: string;
  tab: string;
  description?: string;
  short_description?: string;
  included_meals: number;
  deliveries_per_cycle: number;
  boxes_per_delivery: number;
  max_boxes_per_meal?: number | null;
  price_per_plan: number;
  price_per_box?: number | null;
  allow_multiple: boolean;
  min_boxes_delivery?: number | null;
  min_boxes_pickup?: number | null;
  display_badge?: string;
  display_order: number;
  extra_box_price?: number | null;
  highlight: boolean;
  is_active: boolean;
  metadata?: Record<string, unknown>;
  available_delivery_days?: string[];
  menu_item_ids_by_day?: Record<string, string[]>;
  menu_items_by_day?: Record<string, MenuItem[]>;
  created_at: string;
  updated_at: string;
}

export interface DeliveryZone {
  _id: string;
  postcode: string;
  zone_label?: string | null;
  suburbs: string[];
  state: string;
  distance_from_business?: number | null;
  base_delivery_fee: number;
  express_delivery_fee?: number | null;
  max_delivery_days?: number | null;
  notes?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PlanSelectionInput {
  plan_id: string;
  quantity: number;
}

export interface DeliverySlotInput {
  delivery_date: string;
  menu_items: Record<string, number>;
  notes?: string;
}
