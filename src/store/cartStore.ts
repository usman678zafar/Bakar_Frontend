import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Cart, CartItem, CartSideline, CartSummary } from '@types/cart.types'
import { MenuItem, Sideline } from '@types/menu.types'
import { Address } from '@types/auth.types'
import { TAX_RATE, DELIVERY_FEE_PER_KM, FREE_DELIVERY_THRESHOLD } from '@utils/constants'

interface CartState extends Cart {
  // Computed values
  summary: CartSummary
  
  // Actions
  addItem: (menuItem: MenuItem, quantity: number, specialInstructions?: string) => void
  removeItem: (menuItemId: string) => void
  updateQuantity: (menuItemId: string, quantity: number) => void
  addSideline: (sideline: Sideline, quantity: number) => void
  removeSideline: (sidelineId: string) => void
  updateSidelineQuantity: (sidelineId: string, quantity: number) => void
  setOrderType: (orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering') => void
  setDeliveryOption: (option: 'pickup' | 'delivery') => void
  setSelectedAddress: (address: Address | undefined) => void
  setDeliveryDate: (date: string) => void
  setDeliveryTimeSlot: (slot: string) => void
  setSpecialInstructions: (instructions: string) => void
  calculateSummary: () => void
  clearCart: () => void
}

const calculateCartSummary = (
  items: CartItem[],
  sidelines: CartSideline[],
  deliveryOption: 'pickup' | 'delivery',
  distanceKm: number = 0
): CartSummary => {
  // Calculate subtotal
  const itemsSubtotal = items.reduce((sum, item) => sum + item.menu_item.price * item.quantity, 0)
  const sidelinesSubtotal = sidelines.reduce((sum, sideline) => sum + sideline.sideline.price * sideline.quantity, 0)
  const subtotal = itemsSubtotal + sidelinesSubtotal

  // Calculate delivery fee
  let delivery_fee = 0
  if (deliveryOption === 'delivery') {
    if (subtotal < FREE_DELIVERY_THRESHOLD) {
      delivery_fee = distanceKm * DELIVERY_FEE_PER_KM
    }
  }

  // Calculate tax
  const tax = (subtotal + delivery_fee) * TAX_RATE

  // Calculate total
  const total = subtotal + delivery_fee + tax

  // Count items
  const item_count = items.reduce((sum, item) => sum + item.quantity, 0) +
    sidelines.reduce((sum, sideline) => sum + sideline.quantity, 0)

  return {
    subtotal,
    delivery_fee,
    tax,
    total,
    item_count,
  }
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      sidelines: [],
      order_type: 'daily_menu',
      delivery_option: 'pickup',
      selected_address: undefined,
      delivery_date: undefined,
      delivery_time_slot: undefined,
      special_instructions: undefined,
      summary: {
        subtotal: 0,
        delivery_fee: 0,
        tax: 0,
        total: 0,
        item_count: 0,
      },

      addItem: (menuItem: MenuItem, quantity: number, specialInstructions?: string) => {
        const { items } = get()
        const existingItemIndex = items.findIndex(item => item.menu_item._id === menuItem._id)

        if (existingItemIndex > -1) {
          // Update quantity if item exists
          const newItems = [...items]
          newItems[existingItemIndex].quantity += quantity
          set({ items: newItems })
        } else {
          // Add new item
          set({ items: [...items, { menu_item: menuItem, quantity, special_instructions: specialInstructions }] })
        }
        get().calculateSummary()
      },

      removeItem: (menuItemId: string) => {
        const { items } = get()
        set({ items: items.filter(item => item.menu_item._id !== menuItemId) })
        get().calculateSummary()
      },

      updateQuantity: (menuItemId: string, quantity: number) => {
        const { items } = get()
        if (quantity <= 0) {
          get().removeItem(menuItemId)
          return
        }
        const newItems = items.map(item =>
          item.menu_item._id === menuItemId ? { ...item, quantity } : item
        )
        set({ items: newItems })
        get().calculateSummary()
      },

      addSideline: (sideline: Sideline, quantity: number) => {
        const { sidelines } = get()
        const existingIndex = sidelines.findIndex(s => s.sideline._id === sideline._id)

        if (existingIndex > -1) {
          const newSidelines = [...sidelines]
          newSidelines[existingIndex].quantity += quantity
          set({ sidelines: newSidelines })
        } else {
          set({ sidelines: [...sidelines, { sideline, quantity }] })
        }
        get().calculateSummary()
      },

      removeSideline: (sidelineId: string) => {
        const { sidelines } = get()
        set({ sidelines: sidelines.filter(s => s.sideline._id !== sidelineId) })
        get().calculateSummary()
      },

      updateSidelineQuantity: (sidelineId: string, quantity: number) => {
        const { sidelines } = get()
        if (quantity <= 0) {
          get().removeSideline(sidelineId)
          return
        }
        const newSidelines = sidelines.map(s =>
          s.sideline._id === sidelineId ? { ...s, quantity } : s
        )
        set({ sidelines: newSidelines })
        get().calculateSummary()
      },

      setOrderType: (orderType) => {
        set({ order_type: orderType })
      },

      setDeliveryOption: (option) => {
        set({ delivery_option: option })
        get().calculateSummary()
      },

      setSelectedAddress: (address) => {
        set({ selected_address: address })
        get().calculateSummary()
      },

      setDeliveryDate: (date) => {
        set({ delivery_date: date })
      },

      setDeliveryTimeSlot: (slot) => {
        set({ delivery_time_slot: slot })
      },

      setSpecialInstructions: (instructions) => {
        set({ special_instructions: instructions })
      },

      calculateSummary: () => {
        const { items, sidelines, delivery_option, selected_address } = get()
        // TODO: Calculate actual distance from selected address
        const distanceKm = 5 // Placeholder
        const summary = calculateCartSummary(items, sidelines, delivery_option, distanceKm)
        set({ summary })
      },

      clearCart: () => {
        set({
          items: [],
          sidelines: [],
          delivery_date: undefined,
          delivery_time_slot: undefined,
          special_instructions: undefined,
          summary: {
            subtotal: 0,
            delivery_fee: 0,
            tax: 0,
            total: 0,
            item_count: 0,
          },
        })
      },
    }),
    {
      name: 'bakars-cart',
      partialize: (state) => ({
        items: state.items,
        sidelines: state.sidelines,
        order_type: state.order_type,
        delivery_option: state.delivery_option,
      }),
    }
  )
)
