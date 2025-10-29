import { CartItem, CartSideline } from './cart.types';
import { Address } from './auth.types';

export type OrderType = 'daily_menu' | 'meal_subscription' | 'special_catering';
export type DeliveryOption = 'pickup' | 'delivery';
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';
export type PaymentStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded'
  | 'paid';
export type PaymentMethod = 'card' | 'cash';

export interface OrderStatusHistoryEntry {
  status: string;
  timestamp: string;
  note?: string;
  updated_by?: string;
}

export interface Order {
  _id: string;
  user_id: string;
  order_type: OrderType;
  items: CartItem[];
  sidelines: CartSideline[];
  delivery_option: DeliveryOption;
  delivery_address?: Address;
  delivery_date: string;
  delivery_time_slot?: string;
  status: OrderStatus;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  payment_intent_id?: string;
  subtotal: number;
  delivery_fee: number;
  tax: number;
  total: number;
  special_instructions?: string;
  cancellation_reason?: string;
  notes?: string;
  admin_notes?: string;
  delivery_method?: DeliveryOption | string;
  delivery_instructions?: string;
  order_number?: string;
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  created_at: string;
  updated_at: string;
  status_history?: OrderStatusHistoryEntry[];
}

export interface CreateOrderPayload {
  order_type: OrderType;
  items: {
    menu_item_id: string;
    quantity: number;
    special_instructions?: string;
  }[];
  sidelines?: { sideline_id: string; quantity: number }[];
  delivery_option: DeliveryOption;
  delivery_address_id?: string;
  delivery_date: string;
  delivery_time_slot?: string;
  payment_method: PaymentMethod;
  special_instructions?: string;
}

export interface OrderTracking {
  order_id: string;
  status: string;
  estimated_delivery_time?: string;
  driver_location?: {
    lat: number;
    lng: number;
  };
  status_history: OrderStatusHistoryEntry[];
}
