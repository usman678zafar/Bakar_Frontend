import { CartItem, CartSideline } from './cart.types'
import { Address } from './auth.types'

export interface Order {
  _id: string
  user_id: string
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  items: CartItem[]
  sidelines: CartSideline[]
  delivery_option: 'pickup' | 'delivery'
  delivery_address?: Address
  delivery_date: string
  delivery_time_slot?: string
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_method: 'card' | 'cash'
  payment_intent_id?: string
  subtotal: number
  delivery_fee: number
  tax: number
  total: number
  special_instructions?: string
  cancellation_reason?: string
  created_at: string
  updated_at: string
}

export interface CreateOrderPayload {
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  items: { menu_item_id: string; quantity: number; special_instructions?: string }[]
  sidelines?: { sideline_id: string; quantity: number }[]
  delivery_option: 'pickup' | 'delivery'
  delivery_address_id?: string
  delivery_date: string
  delivery_time_slot?: string
  payment_method: 'card' | 'cash'
  special_instructions?: string
}

export interface OrderTracking {
  order_id: string
  status: string
  estimated_delivery_time?: string
  driver_location?: {
    lat: number
    lng: number
  }
  status_history: {
    status: string
    timestamp: string
    note?: string
  }[]
}
