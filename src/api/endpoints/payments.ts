import apiClient from '../client'
import { ApiResponse } from '@models/common.types'

export interface PaymentIntent {
  client_secret: string
  payment_intent_id: string
  amount: number
}

export const paymentsAPI = {
  /**
   * Create payment intent for order
   */
  createPaymentIntent: (orderId: string) => 
    apiClient.post<ApiResponse<PaymentIntent>>('/payments/create-intent', { order_id: orderId }),

  /**
   * Confirm payment
   */
  confirmPayment: (paymentIntentId: string) => 
    apiClient.post<ApiResponse<void>>('/payments/confirm', { payment_intent_id: paymentIntentId }),

  /**
   * Get payment status
   */
  getPaymentStatus: (paymentIntentId: string) => 
    apiClient.get<ApiResponse<{ status: string }>>(`/payments/${paymentIntentId}/status`),

  /**
   * Request refund
   */
  requestRefund: (orderId: string, reason: string) => 
    apiClient.post<ApiResponse<void>>('/payments/refund', { order_id: orderId, reason }),
}
