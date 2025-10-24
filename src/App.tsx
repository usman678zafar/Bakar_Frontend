import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { useAuthStore } from '@store/authStore';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { ToastProvider } from '@components/common/Toast'; // ✅ Import ToastProvider

const App: React.FC = () => {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ToastProvider>
        {' '}
        {/* ✅ Wrap with ToastProvider */}
        <AppRoutes />
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
