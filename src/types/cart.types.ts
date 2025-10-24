import { MenuItem, Sideline } from './menu.types'
import { Address } from './auth.types'

export interface CartItem {
  menu_item: MenuItem
  quantity: number
  special_instructions?: string
}

export interface CartSideline {
  sideline: Sideline
  quantity: number
}

export interface Cart {
  items: CartItem[]
  sidelines: CartSideline[]
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  delivery_option: 'pickup' | 'delivery'
  selected_address?: Address
  delivery_date?: string
  delivery_time_slot?: string
  special_instructions?: string
}

export interface CartSummary {
  subtotal: number
  delivery_fee: number
  tax: number
  total: number
  item_count: number
}

export interface WeeklySubscriptionSelection {
  plan_type: 'weekly' | 'fortnightly' | 'monthly'
  meals_per_week: number
  selected_meals: { [key: string]: MenuItem[] } // day => meals
  start_date: string
  delivery_days: string[]
}

export interface CateringDetails {
  event_date: string
  event_time: string
  head_count: number
  event_type: string
  venue_address: string
  special_requirements?: string
}
