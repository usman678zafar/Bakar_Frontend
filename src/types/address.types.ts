export interface Address {
  _id: string
  user_id: string
  label: string
  street: string
  suburb: string
  postcode: string
  state: string
  country: string
  is_default: boolean
  delivery_instructions?: string
  created_at: string
  updated_at: string
}

export interface CreateAddressPayload {
  label: string
  street: string
  suburb: string
  postcode: string
  state: string
  country?: string
  is_default?: boolean
  delivery_instructions?: string
}

export interface DeliveryValidation {
  is_valid: boolean
  distance_km: number
  delivery_fee: number
  estimated_time_minutes: number
  message?: string
}
