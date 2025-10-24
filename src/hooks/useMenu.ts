import { useEffect } from 'react'
import { useMenuStore } from '@store/menuStore'

export const useMenu = (orderType?: 'daily_menu' | 'weekly_subscription' | 'special_catering') => {
  const menuStore = useMenuStore()

  useEffect(() => {
    if (orderType === 'daily_menu') {
      menuStore.fetchDailyMenu()
    } else if (orderType === 'weekly_subscription') {
      menuStore.fetchWeeklyMenu()
    } else if (orderType === 'special_catering') {
      menuStore.fetchCateringMenu()
    }
    
    menuStore.fetchSidelines()
    menuStore.fetchCategories()
  }, [orderType])

  return menuStore
}
