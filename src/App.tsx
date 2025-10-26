import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastProvider } from '@components/common/Toast';
import { useAuthStore } from '@store/authStore';
import Layout from '@components/layout/Layout';
import ProtectedRoute from '@components/auth/ProtectedRoute';
import RoleGuard from '@components/auth/RoleGuard';
import LoadingSpinner from '@components/common/LoadingSpinner';

// Public Pages
import HomePage from '@pages/public/HomePage';
import LoginPage from '@pages/public/LoginPage';
import RegisterPage from '@pages/public/RegisterPage';
import ContactPage from '@pages/public/ContactPage';

// Customer Pages
import DailyMenuPage from '@pages/customer/DailyMenuPage';
import WeeklySubscriptionPage from '@pages/customer/WeeklySubscriptionPage';
import CateringPage from '@pages/customer/CateringPage';
import CartPage from '@pages/customer/CartPage';
import CheckoutPage from '@pages/customer/CheckoutPage';
import ProfilePage from '@pages/customer/ProfilePage';

// Admin Pages
import AdminDashboard from '@pages/admin/AdminDashboard';
import MenuManagement from '@pages/admin/MenuManagement';
import OrderManagement from '@pages/admin/OrderManagement';
import SidelinesManagement from '@pages/admin/SidelinesManagement';

function App() {
  const { checkAuth, isLoading, isAuthenticated } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading..." />
      </div>
    );
  }

  return (
    <ToastProvider>
      <Router>
        <Routes>
          {/* Layout wrapper for all pages */}
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Menu Routes (Public) */}
            <Route path="menu/daily" element={<DailyMenuPage />} />
            <Route path="menu/weekly" element={<WeeklySubscriptionPage />} />
            <Route path="catering" element={<CateringPage />} />

            {/* Protected Customer Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<RoleGuard requiredRole="admin" />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/menu" element={<MenuManagement />} />
              <Route path="admin/orders" element={<OrderManagement />} />
              <Route path="admin/sidelines" element={<SidelinesManagement />} />
            </Route>
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
