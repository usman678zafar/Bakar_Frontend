export interface RevenueDaySummary {
  label: string;
  date: string;
  total: number;
}

export interface DashboardStats {
  total_orders: number;
  total_orders_growth_percent: number;
  pending_orders: number;
  pending_orders_weekly_change_percent: number;
  confirmed_orders: number;
  preparing_orders: number;
  out_for_delivery_orders: number;
  completed_orders: number;
  cancelled_orders: number;
  today_revenue: number;
  today_vs_yesterday_percent: number;
  weekly_revenue: number;
  weekly_growth_percent: number;
  monthly_revenue: number;
  monthly_growth_percent: number;
  total_revenue: number;
  total_revenue_growth_percent: number;
  weekly_revenue_breakdown: RevenueDaySummary[];
  active_subscriptions: number;
  upcoming_catering_events: number;
}
