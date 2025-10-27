import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '@store/adminStore';
import { useAuthStore } from '@store/authStore'; // ✅ Import authStore
import { formatCurrency } from '@utils/formatters';
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Clock,
  RefreshCcw,
  Calendar,
  Package,
  CheckCircle,
  XCircle,
  Truck,
  AlertCircle,
} from 'lucide-react';
import AdminSidebar from '@components/admin/AdminSidebar';

// ===========================
// SIMPLE COMPONENTS (No External Dependencies)
// ===========================

// Loading Spinner Component
const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF6B35]"></div>
    {message && <p className="mt-4 text-gray-600">{message}</p>}
  </div>
);

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-gray-100 ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-[#FF6B35] text-white hover:bg-[#E55A2B] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white',
    ghost: 'text-[#FF6B35] hover:bg-[#FFF5F2]',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// ===========================
// MAIN ADMIN DASHBOARD COMPONENT
// ===========================

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, role, isAuthenticated } = useAuthStore(); // ✅ Get auth state
  const { orderStats, fetchDashboardStats, isLoading } = useAdminStore();
  const [refreshing, setRefreshing] = useState(false);

  // ✅ Debug log on mount
  useEffect(() => {
    console.log('🎯 AdminDashboard mounted', {
      isAuthenticated,
      role,
      userEmail: user?.email,
      userRole: user?.role,
    });
  }, [isAuthenticated, role, user]);

  // ✅ Load dashboard data
  useEffect(() => {
    if (role === 'admin') {
      console.log('📡 Loading dashboard data...');
      loadDashboardData();
    }
  }, [role]);

  const loadDashboardData = async () => {
    console.log('📡 Fetching dashboard stats...');
    try {
      await fetchDashboardStats();
      console.log('✅ Dashboard data loaded:', orderStats);
    } catch (error) {
      console.error('❌ Failed to load dashboard data:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadDashboardData();
    setRefreshing(false);
  };

  // ✅ Show access denied if not admin
  if (role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Card padding="lg" className="max-w-md text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E] mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-2">
            You need admin privileges to access this page.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <strong>Current role:</strong>{' '}
              <span className="text-red-600 font-semibold">
                {role || 'None'}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Required role:</strong>{' '}
              <span className="text-green-600 font-semibold">admin</span>
            </p>
          </div>
          <Button onClick={() => navigate('/')} className="w-full">
            Go to Homepage
          </Button>
        </Card>
      </div>
    );
  }

  // Show loading state only on initial load
  if (isLoading && !orderStats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <LoadingSpinner message="Loading dashboard..." />
      </div>
    );
  }

  // Default stats if API fails
  const stats = orderStats || {
    total_orders: 0,
    total_orders_growth_percent: 0,
    pending_orders: 0,
    pending_orders_weekly_change_percent: 0,
    confirmed_orders: 0,
    preparing_orders: 0,
    out_for_delivery_orders: 0,
    completed_orders: 0,
    cancelled_orders: 0,
    today_revenue: 0,
    today_vs_yesterday_percent: 0,
    weekly_revenue: 0,
    weekly_growth_percent: 0,
    monthly_revenue: 0,
    monthly_growth_percent: 0,
    total_revenue: 0,
    total_revenue_growth_percent: 0,
    weekly_revenue_breakdown: [],
    active_subscriptions: 0,
    upcoming_catering_events: 0,
  };

  const formatPercent = (value?: number) => {
    if (
      value === undefined ||
      value === null ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return '—';
    }
    const rounded = value.toFixed(1);
    const numeric = Number(rounded);
    const sign = numeric > 0 ? '+' : '';
    return `${sign}${rounded}%`;
  };

  const statsCards = [
    {
      title: 'Total Orders',
      value: stats.total_orders || 0,
      icon: <ShoppingBag size={32} />,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: formatPercent(stats.total_orders_growth_percent),
    },
    {
      title: 'Pending Orders',
      value: stats.pending_orders || 0,
      icon: <Clock size={32} />,
      color: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: formatPercent(stats.pending_orders_weekly_change_percent),
    },
    {
      title: "Today's Revenue",
      value: formatCurrency(stats.today_revenue || 0),
      icon: <DollarSign size={32} />,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      change: formatPercent(stats.today_vs_yesterday_percent),
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(stats.total_revenue || 0),
      icon: <TrendingUp size={32} />,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: formatPercent(stats.total_revenue_growth_percent),
    },
  ];

  const orderStatusCards = [
    {
      label: 'Pending',
      count: stats.pending_orders || 0,
      icon: <Clock size={24} />,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Confirmed',
      count: stats.confirmed_orders || 0,
      icon: <Package size={24} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Out for Delivery',
      count: stats.out_for_delivery_orders || 0,
      icon: <Truck size={24} />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Completed',
      count: stats.completed_orders || 0,
      icon: <CheckCircle size={24} />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Cancelled',
      count: stats.cancelled_orders || 0,
      icon: <XCircle size={24} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  const successRate =
    stats.total_orders && stats.total_orders > 0
      ? ((stats.completed_orders || 0) / stats.total_orders) * 100
      : 0;

  const weeklyRevenueBreakdown =
    stats.weekly_revenue_breakdown && stats.weekly_revenue_breakdown.length
      ? stats.weekly_revenue_breakdown
      : [
          { label: 'Mon', date: '', total: 0 },
          { label: 'Tue', date: '', total: 0 },
          { label: 'Wed', date: '', total: 0 },
          { label: 'Thu', date: '', total: 0 },
          { label: 'Fri', date: '', total: 0 },
          { label: 'Sat', date: '', total: 0 },
          { label: 'Sun', date: '', total: 0 },
        ];

  const maxDailyRevenue = Math.max(
    ...weeklyRevenueBreakdown.map((day) => day.total || 0),
    1
  );

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <AdminSidebar />
      <div className="py-8 px-4 sm:px-6 lg:px-8 pl-20 md:pl-28">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 flex items-center space-x-2">
                <Calendar size={16} />
                <span>
                  {new Date().toLocaleDateString('en-AU', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </p>
            </div>
            <Button onClick={handleRefresh} disabled={refreshing}>
              <RefreshCcw
                size={18}
                className={`mr-2 ${refreshing ? 'animate-spin' : ''}`}
              />
              {refreshing ? 'Refreshing...' : 'Refresh Data'}
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center ${stat.textColor}`}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">
                  {stat.title}
                </h3>
                <p className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E]">
                  {stat.value}
                </p>
              </Card>
            ))}
          </div>

          {/* Order Status Overview */}
          <Card className="mb-8">
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-6">
              Order Status Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {orderStatusCards.map((status, index) => (
                <div
                  key={index}
                  className={`${status.bgColor} rounded-lg p-4 text-center transition-transform hover:scale-105`}
                >
                  <div className={`${status.color} flex justify-center mb-3`}>
                    {status.icon}
                  </div>
                  <p className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E] mb-1">
                    {status.count}
                  </p>
                  <p className="text-sm text-gray-600">{status.label}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Revenue and Operational Snapshot */}
          <div className="space-y-8">
            <Card>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-6">
                Weekly Revenue
              </h3>

              {/* Summary Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">This Week</p>
                  <p className="font-['Playfair_Display'] text-2xl font-bold text-blue-600">
                    {formatCurrency(stats.weekly_revenue || 0)}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">This Month</p>
                  <p className="font-['Playfair_Display'] text-2xl font-bold text-green-600">
                    {formatCurrency(stats.monthly_revenue || 0)}
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    {formatPercent(stats.monthly_growth_percent)}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Growth</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-purple-600" size={20} />
                    <p className="font-['Playfair_Display'] text-2xl font-bold text-purple-600">
                      {formatPercent(stats.weekly_growth_percent)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Revenue by Day */}
              <div className="space-y-4">
                {weeklyRevenueBreakdown.map((day) => {
                  const revenue = day.total || 0;
                  const width =
                    revenue > 0
                      ? Math.max((revenue / maxDailyRevenue) * 100, 8)
                      : 0;

                  return (
                    <div key={day.label} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-gray-700">
                        {day.label}
                      </div>
                      <div className="flex-1">
                        <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-lg flex items-center justify-end px-3 transition-all duration-500"
                            style={{ width: `${width}%` }}
                          >
                            {revenue > 0 && (
                              <span className="text-white font-semibold text-sm">
                                {formatCurrency(revenue)}
                              </span>
                            )}
                          </div>
                          {revenue === 0 && (
                            <div className="absolute inset-0 flex items-center justify-end px-3">
                              <span className="text-gray-400 text-sm">
                                {formatCurrency(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-6">
                Operational Snapshot
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Active Subscriptions</p>
                  <p className="font-heading text-3xl font-bold text-primary">
                    {stats.active_subscriptions || 0}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Upcoming Catering Events</p>
                  <p className="font-heading text-3xl font-bold text-orange-600">
                    {stats.upcoming_catering_events || 0}
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                  <p className="font-heading text-3xl font-bold text-emerald-600">
                    {successRate.toFixed(1)}%
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">Completed Orders</span>
                  <span className="text-2xl font-semibold text-green-600">
                    {stats.completed_orders || 0}
                  </span>
                </div>
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">Cancelled Orders</span>
                  <span className="text-2xl font-semibold text-red-500">
                    {stats.cancelled_orders || 0}
                  </span>
                </div>
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">Pending Queue</span>
                  <span className="text-2xl font-semibold text-blue-600">
                    {stats.pending_orders || 0}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
