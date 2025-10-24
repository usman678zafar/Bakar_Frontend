import { useAuthStore } from '@store/authStore'

export const useAuth = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    role,
    login,
    register,
    logout,
    updateProfile,
  } = useAuthStore()

  return {
    user,
    isAuthenticated,
    isLoading,
    role,
    isAdmin: role === 'admin',
    isCustomer: role === 'customer',
    login,
    register,
    logout,
    updateProfile,
  }
}
