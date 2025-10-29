import { MenuItem, Sideline } from './menu.types'
import { Address } from './auth.types'
import { MealSubscriptionPlan } from './subscription.types'

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
  order_type: 'daily_menu' | 'meal_subscription' | 'special_catering'
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

export interface MealSubscriptionSelection {
  plan: MealSubscriptionPlan
  planQuantity: number
  fulfilment: 'delivery' | 'pickup'
  schedule: Array<{ date: string; items: { item: MenuItem; quantity: number }[] }>
  includedBoxes: number
  totalBoxes: number
  extraBoxes: number
  maxPerMeal?: number | null
}

export interface CateringDetails {
  event_date: string
  event_time: string
  head_count: number
  event_type: string
  venue_address: string
  special_requirements?: string
}
