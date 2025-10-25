# Frontend Project Documentation

_Generated on: 2025-10-25 16:38:59_

---

# Table of Contents

### 📁 Root Files

- [.env.example](#envexample)
- [package.json](#packagejson)
- [App.tsx](#src\apptsx)
- [client.ts](#src\api\clientts)
- [admin.ts](#src\api\endpoints\admints)
- [auth.ts](#src\api\endpoints\authts)
- [cart.ts](#src\api\endpoints\cartts)
- [delivery.ts](#src\api\endpoints\deliveryts)
- [menu.ts](#src\api\endpoints\menuts)
- [notifications.ts](#src\api\endpoints\notificationsts)
- [orders.ts](#src\api\endpoints\ordersts)
- [payments.ts](#src\api\endpoints\paymentsts)
- [index.ts](#src\api\indexts)
- [OrderStats.tsx](#src\components\admin\dashboard\orderstatstsx)
- [RecentOrders.tsx](#src\components\admin\dashboard\recentorderstsx)
- [RevenueChart.tsx](#src\components\admin\dashboard\revenuecharttsx)
- [AddMenuItem.tsx](#src\components\admin\menu\addmenuitemtsx)
- [EditMenuItem.tsx](#src\components\admin\menu\editmenuitemtsx)
- [MenuItemsList.tsx](#src\components\admin\menu\menuitemslisttsx)
- [OrderActions.tsx](#src\components\admin\orders\orderactionstsx)
- [OrderDetails.tsx](#src\components\admin\orders\orderdetailstsx)
- [OrdersList.tsx](#src\components\admin\orders\orderslisttsx)
- [AddSideline.tsx](#src\components\admin\sidelines\addsidelinetsx)
- [EditSideline.tsx](#src\components\admin\sidelines\editsidelinetsx)
- [SidelinesList.tsx](#src\components\admin\sidelines\sidelineslisttsx)
- [LoginForm.tsx](#src\components\auth\loginformtsx)
- [ProtectedRoute.tsx](#src\components\auth\protectedroutetsx)
- [RegisterForm.tsx](#src\components\auth\registerformtsx)
- [RoleGuard.tsx](#src\components\auth\roleguardtsx)
- [CartItem.tsx](#src\components\cart\cartitemtsx)
- [CartSummary.tsx](#src\components\cart\cartsummarytsx)
- [DeliverySelector.tsx](#src\components\cart\deliveryselectortsx)
- [CateringMenu.tsx](#src\components\catering\cateringmenutsx)
- [CateringSummary.tsx](#src\components\catering\cateringsummarytsx)
- [EventDetails.tsx](#src\components\catering\eventdetailstsx)
- [HeadCountCalculator.tsx](#src\components\catering\headcountcalculatortsx)
- [AddressSelector.tsx](#src\components\checkout\addressselectortsx)
- [OrderReview.tsx](#src\components\checkout\orderreviewtsx)
- [PaymentForm.tsx](#src\components\checkout\paymentformtsx)
- [PlaceOrderButton.tsx](#src\components\checkout\placeorderbuttontsx)
- [Button.tsx](#src\components\common\buttontsx)
- [Card.tsx](#src\components\common\cardtsx)
- [Input.tsx](#src\components\common\inputtsx)
- [LoadingSpinner.tsx](#src\components\common\loadingspinnertsx)
- [Modal.tsx](#src\components\common\modaltsx)
- [Toast.tsx](#src\components\common\toasttsx)
- [CartIcon.tsx](#src\components\layout\carticontsx)
- [Footer.tsx](#src\components\layout\footertsx)
- [Header.tsx](#src\components\layout\headertsx)
- [Layout.tsx](#src\components\layout\layouttsx)
- [Logo.tsx](#src\components\layout\logotsx)
- [Navigation.tsx](#src\components\layout\navigationtsx)
- [UserMenu.tsx](#src\components\layout\usermenutsx)
- [CartSummary.tsx](#src\components\menu\cartsummarytsx)
- [CategoryFilter.tsx](#src\components\menu\categoryfiltertsx)
- [FilterBar.tsx](#src\components\menu\filterbartsx)
- [MenuItemCard.tsx](#src\components\menu\menuitemcardtsx)
- [MenuItemGrid.tsx](#src\components\menu\menuitemgridtsx)
- [SidelinesPanel.tsx](#src\components\menu\sidelinespaneltsx)
- [AddressCard.tsx](#src\components\profile\addresscardtsx)
- [AddressManager.tsx](#src\components\profile\addressmanagertsx)
- [OrderHistory.tsx](#src\components\profile\orderhistorytsx)
- [ProfileForm.tsx](#src\components\profile\profileformtsx)
- [DeliverySchedule.tsx](#src\components\subscription\deliveryscheduletsx)
- [MealSelection.tsx](#src\components\subscription\mealselectiontsx)
- [SubscriptionPlans.tsx](#src\components\subscription\subscriptionplanstsx)
- [SubscriptionSummary.tsx](#src\components\subscription\subscriptionsummarytsx)
- [useAuth.ts](#src\hooks\useauthts)
- [useCart.ts](#src\hooks\usecartts)
- [useDebounce.ts](#src\hooks\usedebouncets)
- [useMenu.ts](#src\hooks\usemenuts)
- [useOrders.ts](#src\hooks\useordersts)
- [useToast.ts](#src\hooks\usetoastts)
- [main.tsx](#src\maintsx)
- [AdminDashboard.tsx](#src\pages\admin\admindashboardtsx)
- [MenuManagement.tsx](#src\pages\admin\menumanagementtsx)
- [OrderManagement.tsx](#src\pages\admin\ordermanagementtsx)
- [SidelinesManagement.tsx](#src\pages\admin\sidelinesmanagementtsx)
- [CateringPage.tsx](#src\pages\customer\cateringpagetsx)
- [CheckoutPage.tsx](#src\pages\customer\checkoutpagetsx)
- [DailyMenuPage.tsx](#src\pages\customer\dailymenupagetsx)
- [ProfilePage.tsx](#src\pages\customer\profilepagetsx)
- [WeeklySubscriptionPage.tsx](#src\pages\customer\weeklysubscriptionpagetsx)
- [AdminRoutes.tsx](#src\routes\adminroutestsx)
- [CustomerRoutes.tsx](#src\routes\customerroutestsx)
- [PublicRoutes.tsx](#src\routes\publicroutestsx)
- [index.tsx](#src\routes\indextsx)
- [addressStore.ts](#src\store\addressstorets)
- [adminStore.ts](#src\store\adminstorets)
- [authStore.ts](#src\store\authstorets)
- [cartStore.ts](#src\store\cartstorets)
- [menuStore.ts](#src\store\menustorets)
- [orderStore.ts](#src\store\orderstorets)
- [globals.css](#src\styles\globalscss)
- [address.types.ts](#src\types\addresstypests)
- [auth.types.ts](#src\types\authtypests)
- [cart.types.ts](#src\types\carttypests)
- [common.types.ts](#src\types\commontypests)
- [menu.types.ts](#src\types\menutypests)
- [order.types.ts](#src\types\ordertypests)
- [constants.ts](#src\utils\constantsts)
- [formatters.ts](#src\utils\formattersts)
- [images.ts](#src\utils\imagests)
- [storage.ts](#src\utils\storagets)
- [validators.ts](#src\utils\validatorsts)
- [tailwind.config.js](#tailwindconfigjs)
- [tsconfig.json](#tsconfigjson)
- [vite.config.ts](#viteconfigts)

---

## 📄 tailwind.config.js

_Path: `tailwind.config.js`_

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFE8E0',
          100: '#FFD5C6',
          200: '#FFAF93',
          300: '#FF8A60',
          400: '#FF6B35',
          500: '#FF4800',
          600: '#CC3A00',
          700: '#992B00',
          800: '#661D00',
          900: '#330E00',
        },
        secondary: {
          DEFAULT: '#4B6043',
          50: '#E8EBE6',
          100: '#D1D7CD',
          200: '#A3AF9B',
          300: '#758769',
          400: '#4B6043',
          500: '#3D4D36',
          600: '#2F3A29',
          700: '#21271C',
          800: '#13140F',
          900: '#050602',
        },
        background: '#F9F9F9',
        text: '#2E2E2E',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
```

---

## 📄 .env.example

_Path: `.env.example`_

```bash
VITE_API_URL=http://localhost:8000/api/v1
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Bakars
VITE_STRIPE_PUBLIC_KEY=
VITE_GOOGLE_MAPS_API_KEY=AIzaSyBzu9lXawVMs341W_6k2kk2wpJLEdljSWY
# Cloudflare R2 Public URL (for images)
VITE_R2_PUBLIC_URL=https://6f63dc6260a584c1fd2d7f64d8d5b8d7.r2.cloudflarestorage.com
VITE_CDN_URL=https://6f63dc6260a584c1fd2d7f64d8d5b8d7.r2.cloudflarestorage.com

```

---

## 📄 tsconfig.json

_Path: `tsconfig.json`_

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@store/*": ["./src/store/*"],
      "@api/*": ["./src/api/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@models/*": ["./src/types/*"],
      "@utils/*": ["./src/utils/*"],
      "@assets/*": ["./src/assets/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 📄 package.json

_Path: `package.json`_

```json
{
  "name": "bakars-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "axios": "^1.12.2",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "lucide-react": "^0.446.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.65.0",
    "react-router-dom": "^6.30.1",
    "tailwind-merge": "^2.6.0",
    "zod": "^3.25.76",
    "zustand": "^4.5.7"
  },
  "devDependencies": {
    "@types/node": "^24.9.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.7.0",
    "@typescript-eslint/parser": "^8.7.0",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.11.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "postcss": "^8.4.47",
    "prettier": "^3.3.3",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
```

---

## 📄 vite.config.ts

_Path: `vite.config.ts`_

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@models': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

---

## 📄 src\api\endpoints\admin.ts

_Path: `src\api\endpoints\admin.ts`_

```typescript
import apiClient from '../client';
import { MenuItem, Sideline } from '@types/menu.types';
import { Order } from '@types/order.types';
import { ApiResponse } from '@types/common.types';

export const adminAPI = {
  /**
   * Get dashboard statistics
   */
  getDashboardStats: () => apiClient.get<ApiResponse<any>>('/admin/dashboard'),

  /**
   * Get all orders
   */
  getAllOrders: (filters?: {
    status?: string;
    date_from?: string;
    date_to?: string;
  }) => {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.date_from) params.append('date_from', filters.date_from);
    if (filters?.date_to) params.append('date_to', filters.date_to);
    return apiClient.get<ApiResponse<Order[]>>(
      `/admin/orders?${params.toString()}`
    );
  },

  /**
   * Update order status (ADMIN)
   */
  updateOrderStatus: (orderId: string, status: string, admin_notes?: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, {
      status,
      admin_notes,
    }),

  /**
   * Create menu item
   */
  createMenuItem: (data: FormData) =>
    apiClient.post<ApiResponse<MenuItem>>('/admin/menu-items', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Update menu item
   */
  updateMenuItem: (itemId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuItem>>(`/admin/menu-items/${itemId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Delete menu item
   */
  deleteMenuItem: (itemId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/menu-items/${itemId}`),

  /**
   * Create sideline
   */
  createSideline: (data: FormData) =>
    apiClient.post<ApiResponse<Sideline>>('/admin/sidelines', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Update sideline
   */
  updateSideline: (sidelineId: string, data: FormData) =>
    apiClient.put<ApiResponse<Sideline>>(
      `/admin/sidelines/${sidelineId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),

  /**
   * Delete sideline
   */
  deleteSideline: (sidelineId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/sidelines/${sidelineId}`),

  /**
   * Get all menu items (admin)
   */
  getAllMenuItems: () =>
    apiClient.get<ApiResponse<MenuItem[]>>('/admin/menu-items'),

  /**
   * Get all sidelines (admin)
   */
  getAllSidelines: () =>
    apiClient.get<ApiResponse<Sideline[]>>('/admin/sidelines'),
};
```

---

## 📄 src\api\endpoints\auth.ts

_Path: `src\api\endpoints\auth.ts`_

```typescript
import apiClient from '../client';
import {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  User,
} from '@types/auth.types';

export const authAPI = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>('/auth/login', credentials),

  register: (data: RegisterData) =>
    apiClient.post<AuthResponse>('/auth/register', data),

  getProfile: () => apiClient.get<User>('/auth/profile'),

  updateProfile: (data: Partial<User>) =>
    apiClient.put<User>('/auth/profile', data),

  logout: () => apiClient.post('/auth/logout'),
};
```

---

## 📄 src\api\endpoints\cart.ts

_Path: `src\api\endpoints\cart.ts`_

```typescript
import apiClient from '../client';
import { ApiResponse } from '@types/common.types';

export interface CartItem {
  item_id: string;
  item_name: string;
  category: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface CartSideline {
  item_id: string;
  item_name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface CartSummary {
  items: CartItem[];
  sidelines: CartSideline[];
  subtotal: number;
  delivery_fee: number;
  total: number;
  items_count: number;
}

export const cartAPI = {
  /**
   * Get cart summary for current user
   */
  getCartSummary: () =>
    apiClient.get<ApiResponse<CartSummary>>('/cart/summary'),

  /**
   * Add item to cart - FIXED to match backend API
   */
  addToCart: (
    item_id: string,
    quantity: number,
    is_sideline: boolean = false
  ) => {
    console.log('📤 Sending to /cart/add-item:', {
      item_id,
      quantity,
      is_sideline,
    });
    return apiClient.post<ApiResponse<CartSummary>>('/cart/add-item', {
      item_id,
      quantity,
      is_sideline,
    });
  },

  /**
   * Update cart item quantity
   */
  updateCartItem: (
    item_id: string,
    quantity: number,
    is_sideline: boolean = false
  ) =>
    apiClient.put<ApiResponse<CartSummary>>(
      `/cart/update-item/${item_id}?is_sideline=${is_sideline}`,
      {
        quantity,
      }
    ),

  /**
   * Remove item from cart
   */
  removeFromCart: (item_id: string, is_sideline: boolean = false) =>
    apiClient.delete<ApiResponse<CartSummary>>(
      `/cart/remove-item/${item_id}?is_sideline=${is_sideline}`
    ),

  /**
   * Clear cart
   */
  clearCart: () => apiClient.post<ApiResponse<void>>('/cart/clear'),
};
```

---

## 📄 src\api\endpoints\delivery.ts

_Path: `src\api\endpoints\delivery.ts`_

```typescript
import apiClient from '../client';
import {
  Address,
  CreateAddressPayload,
  DeliveryValidation,
} from '@types/address.types';
import { ApiResponse } from '@types/common.types';

export const deliveryAPI = {
  /**
   * Get all addresses for user
   */
  getAddresses: () => apiClient.get<ApiResponse<Address[]>>('/addresses'),

  /**
   * Get address by ID
   */
  getAddressById: (addressId: string) =>
    apiClient.get<ApiResponse<Address>>(`/addresses/${addressId}`),

  /**
   * Create new address
   */
  createAddress: (payload: CreateAddressPayload) =>
    apiClient.post<ApiResponse<Address>>('/addresses', payload),

  /**
   * Update address
   */
  updateAddress: (addressId: string, payload: Partial<CreateAddressPayload>) =>
    apiClient.put<ApiResponse<Address>>(`/addresses/${addressId}`, payload),

  /**
   * Delete address
   */
  deleteAddress: (addressId: string) =>
    apiClient.delete<ApiResponse<void>>(`/addresses/${addressId}`),

  /**
   * Set default address
   */
  setDefaultAddress: (addressId: string) =>
    apiClient.put<ApiResponse<Address>>(`/addresses/${addressId}/default`),

  /**
   * Validate delivery address
   */
  validateDelivery: (addressId: string) =>
    apiClient.post<ApiResponse<DeliveryValidation>>('/delivery/validate', {
      address_id: addressId,
    }),

  /**
   * Calculate delivery fee
   */
  calculateDeliveryFee: (addressId: string) =>
    apiClient.post<ApiResponse<{ fee: number; distance_km: number }>>(
      '/delivery/calculate',
      { address_id: addressId }
    ),
};
```

---

## 📄 src\api\endpoints\menu.ts

_Path: `src\api\endpoints\menu.ts`_

```typescript
import apiClient from '../client';
import { MenuItem, Sideline, MenuFilters } from '@types/menu.types';
import { ApiResponse } from '@types/common.types';

export const menuAPI = {
  /**
   * Get daily menu items
   */
  getDailyMenu: (filters?: MenuFilters) => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.is_vegetarian !== undefined)
      params.append('is_vegetarian', String(filters.is_vegetarian));
    if (filters?.is_vegan !== undefined)
      params.append('is_vegan', String(filters.is_vegan));
    if (filters?.search) params.append('search', filters.search);

    return apiClient.get<ApiResponse<MenuItem[]>>(
      `/menu/daily?${params.toString()}`
    );
  },

  /**
   * Get weekly menu items
   * ✅ FIX: Provide default delivery_date if not specified
   */
  getWeeklyMenu: (delivery_date?: string) => {
    // If no date provided, use next Monday
    if (!delivery_date) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // If Sunday, add 1 day, else calculate days to next Monday
      const nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + daysUntilMonday);
      delivery_date = nextMonday.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    }

    const params = `?delivery_date=${delivery_date}`;
    return apiClient.get<ApiResponse<any>>(`/menu/weekly${params}`);
  },

  /**
   * Get catering menu items
   */
  getCateringMenu: () => {
    return apiClient.get<ApiResponse<MenuItem[]>>('/menu/catering');
  },

  /**
   * Get all sidelines
   */
  getSidelines: () => {
    return apiClient.get<ApiResponse<Sideline[]>>('/menu/sidelines');
  },

  /**
   * Get menu categories
   */
  getCategories: () => {
    return apiClient.get<ApiResponse<string[]>>('/menu/categories');
  },

  /**
   * Get specific menu item by ID
   */
  getMenuItemById: (id: string) => {
    return apiClient.get<ApiResponse<MenuItem>>(`/menu/items/${id}`);
  },

  /**
   * Search menu items
   */
  searchMenuItems: (query: string, filters?: MenuFilters) => {
    const params = new URLSearchParams({ search: query });
    if (filters?.category) params.append('category', filters.category);
    if (filters?.order_type) params.append('order_type', filters.order_type);
    return apiClient.get<ApiResponse<MenuItem[]>>(
      `/menu/daily?${params.toString()}`
    );
  },
};
```

---

## 📄 src\api\endpoints\notifications.ts

_Path: `src\api\endpoints\notifications.ts`_

```typescript
import apiClient from '../client';
import { ApiResponse } from '@types/common.types';

export interface Notification {
  id: string;
  user_id: string;
  type: 'order_update' | 'promotion' | 'system';
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

export const notificationsAPI = {
  /**
   * Get user notifications
   */
  getNotifications: () =>
    apiClient.get<ApiResponse<Notification[]>>('/notifications'),

  /**
   * Mark notification as read
   */
  markAsRead: (notificationId: string) =>
    apiClient.put<ApiResponse<void>>(`/notifications/${notificationId}/read`),

  /**
   * Mark all notifications as read
   */
  markAllAsRead: () =>
    apiClient.put<ApiResponse<void>>('/notifications/read-all'),

  /**
   * Delete notification
   */
  deleteNotification: (notificationId: string) =>
    apiClient.delete<ApiResponse<void>>(`/notifications/${notificationId}`),
};
```

---

## 📄 src\api\endpoints\orders.ts

_Path: `src\api\endpoints\orders.ts`_

```typescript
import apiClient from '../client';
import { Order, OrderTracking } from '@types/order.types';
import { ApiResponse } from '@types/common.types';

export const ordersAPI = {
  /**
   * Create daily order
   */
  createDailyOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/daily', payload),

  /**
   * Create weekly subscription order
   */
  createWeeklyOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/weekly', payload),

  /**
   * Create catering order
   */
  createCateringOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/catering', payload),

  /**
   * Get user's order history
   */
  getOrderHistory: (page: number = 1, page_size: number = 20) =>
    apiClient.get<
      ApiResponse<{
        orders: Order[];
        total: number;
        page: number;
        page_size: number;
      }>
    >(`/orders/my-orders?page=${page}&page_size=${page_size}`),

  /**
   * Get order by ID
   */
  getOrderById: (orderId: string) =>
    apiClient.get<ApiResponse<Order>>(`/orders/${orderId}`),

  /**
   * Track order
   */
  trackOrder: (orderId: string) =>
    apiClient.get<ApiResponse<OrderTracking>>(`/orders/${orderId}/track`),

  /**
   * Cancel order
   */
  cancelOrder: (orderId: string, reason: string) =>
    apiClient.post<ApiResponse<Order>>(`/orders/${orderId}/cancel`, { reason }),

  /**
   * Update order status (admin)
   */
  updateOrderStatus: (orderId: string, status: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, {
      status,
    }),
};
```

---

## 📄 src\api\endpoints\payments.ts

_Path: `src\api\endpoints\payments.ts`_

```typescript
import apiClient from '../client';
import { ApiResponse } from '@types/common.types';

export interface PaymentIntent {
  client_secret: string;
  payment_intent_id: string;
  amount: number;
}

export const paymentsAPI = {
  /**
   * Create payment intent for order
   */
  createPaymentIntent: (orderId: string) =>
    apiClient.post<ApiResponse<PaymentIntent>>('/payments/create-intent', {
      order_id: orderId,
    }),

  /**
   * Confirm payment
   */
  confirmPayment: (paymentIntentId: string) =>
    apiClient.post<ApiResponse<void>>('/payments/confirm', {
      payment_intent_id: paymentIntentId,
    }),

  /**
   * Get payment status
   */
  getPaymentStatus: (paymentIntentId: string) =>
    apiClient.get<ApiResponse<{ status: string }>>(
      `/payments/${paymentIntentId}/status`
    ),

  /**
   * Request refund
   */
  requestRefund: (orderId: string, reason: string) =>
    apiClient.post<ApiResponse<void>>('/payments/refund', {
      order_id: orderId,
      reason,
    }),
};
```

---

## 📄 src\api\client.ts

_Path: `src\api\client.ts`_

```typescript
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('bakars_auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('bakars_auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

---

## 📄 src\api\index.ts

_Path: `src\api\index.ts`_

```typescript
export { authAPI } from './endpoints/auth';
export { menuAPI } from './endpoints/menu';
export { ordersAPI } from './endpoints/orders';
export { cartAPI } from './endpoints/cart';
export { deliveryAPI } from './endpoints/delivery';
export { paymentsAPI } from './endpoints/payments';
export { notificationsAPI } from './endpoints/notifications';
export { adminAPI } from './endpoints/admin';

export { default as apiClient } from './client';
```

---

## 📄 src\components\admin\dashboard\OrderStats.tsx

_Path: `src\components\admin\dashboard\OrderStats.tsx`_

```tsx
import React from 'react';
import { useAdminStore } from '@store/adminStore';
import Card from '@components/common/Card';
import { Package, Clock, Truck, CheckCircle, XCircle } from 'lucide-react';

export const OrderStats: React.FC = () => {
  const { orderStats } = useAdminStore();

  const statuses = [
    {
      label: 'Pending',
      count: orderStats?.pending_orders || 0,
      icon: <Clock size={24} />,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      label: 'Confirmed',
      count: 15, // Example - should come from API
      icon: <Package size={24} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Out for Delivery',
      count: 8, // Example
      icon: <Truck size={24} />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Completed',
      count: orderStats?.completed_orders || 0,
      icon: <CheckCircle size={24} />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Cancelled',
      count: orderStats?.cancelled_orders || 0,
      icon: <XCircle size={24} />,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <Card padding="lg">
      <h2 className="font-heading text-2xl font-bold text-text mb-6">
        Order Status Overview
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statuses.map((status, index) => (
          <div
            key={index}
            className={`${status.bgColor} rounded-lg p-4 text-center transition-transform hover:scale-105`}
          >
            <div className={`${status.color} flex justify-center mb-3`}>
              {status.icon}
            </div>
            <p className="font-heading text-3xl font-bold text-text mb-1">
              {status.count}
            </p>
            <p className="text-sm text-gray-600">{status.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
```

---

## 📄 src\components\admin\dashboard\RecentOrders.tsx

_Path: `src\components\admin\dashboard\RecentOrders.tsx`_

```tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminStore } from '@store/adminStore';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import { formatCurrency, formatDate } from '@utils/formatters';
import { Eye } from 'lucide-react';

export const RecentOrders: React.FC = () => {
  const navigate = useNavigate();
  const { allOrders, fetchAllOrders, isLoading } = useAdminStore();

  useEffect(() => {
    fetchAllOrders({
      status: undefined,
      date_from: undefined,
      date_to: undefined,
    });
  }, []);

  const getStatusBadgeColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      preparing: 'bg-purple-100 text-purple-800',
      out_for_delivery: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card padding="lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-bold text-text">
          Recent Orders
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/admin/orders')}
        >
          View All Orders
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-gray-500">Loading orders...</div>
      ) : allOrders.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No orders found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Order #
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Customer
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders.slice(0, 10).map((order: any) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-mono text-sm">
                    {order.order_number}
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-text">
                        {order.user_name || 'N/A'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.user_email}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm capitalize">
                      {order.order_type.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold">
                    {formatCurrency(order.total_amount)}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                        order.status
                      )}`}
                    >
                      {order.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {formatDate(order.created_at)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admin/orders/${order._id}`)}
                    >
                      <Eye size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};
```

---

## 📄 src\components\admin\dashboard\RevenueChart.tsx

_Path: `src\components\admin\dashboard\RevenueChart.tsx`_

```tsx
import React from 'react';
import { useAdminStore } from '@store/adminStore';
import Card from '@components/common/Card';
import { formatCurrency } from '@utils/formatters';
import { TrendingUp, Calendar } from 'lucide-react';

export const RevenueChart: React.FC = () => {
  const { orderStats } = useAdminStore();

  // Mock chart data - in production, this would come from API
  const chartData = [
    { day: 'Mon', revenue: 450 },
    { day: 'Tue', revenue: 680 },
    { day: 'Wed', revenue: 520 },
    { day: 'Thu', revenue: 890 },
    { day: 'Fri', revenue: 1100 },
    { day: 'Sat', revenue: 950 },
    { day: 'Sun', revenue: 780 },
  ];

  const maxRevenue = Math.max(...chartData.map((d) => d.revenue));

  return (
    <Card padding="lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-bold text-text">
          Weekly Revenue
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Last 7 Days</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">This Week</p>
          <p className="font-heading text-2xl font-bold text-blue-600">
            {formatCurrency(orderStats?.weekly_revenue || 0)}
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">This Month</p>
          <p className="font-heading text-2xl font-bold text-green-600">
            {formatCurrency(orderStats?.monthly_revenue || 0)}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Growth</p>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-purple-600" size={20} />
            <p className="font-heading text-2xl font-bold text-purple-600">
              +12%
            </p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {chartData.map((data, index) => {
          const barWidth = (data.revenue / maxRevenue) * 100;

          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-700">
                {data.day}
              </div>
              <div className="flex-1">
                <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-600 rounded-lg transition-all duration-500 flex items-center justify-end px-3"
                    style={{ width: `${barWidth}%` }}
                  >
                    <span className="text-white font-semibold text-sm">
                      {formatCurrency(data.revenue)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
```

---

## 📄 src\components\admin\menu\AddMenuItem.tsx

_Path: `src\components\admin\menu\AddMenuItem.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Upload, X } from 'lucide-react';

interface AddMenuItemProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const AddMenuItem: React.FC<AddMenuItemProps> = ({
  onSuccess,
  onCancel,
}) => {
  const {
    createMenuItem,
    managedCategories,
    fetchManagedCategories,
    isUpdating,
  } = useAdminStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    is_available_for_daily: true,
    is_available_for_weekly: true,
    is_available_for_catering: false,
    max_boxes_per_menu: 2,
    allergens: '',
    spice_level: '',
    is_vegetarian: false,
    is_halal: true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (managedCategories.length === 0) {
      fetchManagedCategories();
    }
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'error');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        showToast('Image size should be less than 5MB', 'error');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.category || !formData.price) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('price', formData.price);
      if (formData.description)
        formDataToSend.append('description', formData.description);
      formDataToSend.append(
        'is_available_for_daily',
        String(formData.is_available_for_daily)
      );
      formDataToSend.append(
        'is_available_for_weekly',
        String(formData.is_available_for_weekly)
      );
      formDataToSend.append(
        'is_available_for_catering',
        String(formData.is_available_for_catering)
      );
      formDataToSend.append(
        'max_boxes_per_menu',
        String(formData.max_boxes_per_menu)
      );

      if (formData.allergens) {
        formDataToSend.append('allergens', formData.allergens);
      }
      if (formData.spice_level) {
        formDataToSend.append('spice_level', formData.spice_level);
      }

      formDataToSend.append('is_vegetarian', String(formData.is_vegetarian));
      formDataToSend.append('is_halal', String(formData.is_halal));

      // Append image if selected
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      await createMenuItem(formDataToSend);
      showToast('Menu item created successfully', 'success');
      onSuccess();
    } catch (error: any) {
      showToast(error.message || 'Failed to create menu item', 'error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-h-[70vh] overflow-y-auto pr-2"
    >
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Item Image
        </label>

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => {
                setImageFile(null);
                setImagePreview('');
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload size={32} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Click to upload image</span>
            <span className="text-xs text-gray-400 mt-1">Max 5MB</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
        )}
      </div>

      {/* Name */}
      <Input
        type="text"
        label="Item Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="e.g., Butter Chicken"
        required
      />

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="">Select category</option>
          <option value="rice">Rice Dishes</option>
          <option value="curry">Curry</option>
          <option value="bbq">BBQ</option>
          <option value="sweets">Sweets</option>
          <option value="drinks">Drinks</option>
          {managedCategories
            .filter(
              (cat) =>
                !['rice', 'curry', 'bbq', 'sweets', 'drinks'].includes(cat.name)
            )
            .map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.display_name || cat.name}
              </option>
            ))}
        </select>
      </div>

      {/* Price */}
      <Input
        type="number"
        step="0.01"
        label="Price (AUD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="15.99"
        required
        min="0"
      />

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={4}
          placeholder="Describe your dish..."
        />
      </div>

      {/* Availability Checkboxes */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-text">Available For:</p>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_daily}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_daily: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Daily Menu</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_weekly}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_weekly: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Weekly Subscription</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_catering}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_catering: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Special Catering</span>
        </label>
      </div>

      {/* Max Boxes Per Menu (for weekly) */}
      {formData.is_available_for_weekly && (
        <Input
          type="number"
          label="Max Boxes Per Weekly Menu"
          value={String(formData.max_boxes_per_menu)}
          onChange={(e) =>
            setFormData({
              ...formData,
              max_boxes_per_menu: parseInt(e.target.value) || 2,
            })
          }
          min="1"
          max="10"
        />
      )}

      {/* Allergens */}
      <Input
        type="text"
        label="Allergens (comma separated)"
        value={formData.allergens}
        onChange={(e) =>
          setFormData({ ...formData, allergens: e.target.value })
        }
        placeholder="dairy, nuts, gluten"
      />

      {/* Spice Level */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Spice Level
        </label>
        <select
          value={formData.spice_level}
          onChange={(e) =>
            setFormData({ ...formData, spice_level: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">None</option>
          <option value="mild">Mild</option>
          <option value="medium">Medium</option>
          <option value="hot">Hot</option>
        </select>
      </div>

      {/* Dietary Options */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_vegetarian}
            onChange={(e) =>
              setFormData({ ...formData, is_vegetarian: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Vegetarian</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_halal}
            onChange={(e) =>
              setFormData({ ...formData, is_halal: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Halal</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          isLoading={isUpdating}
          disabled={isUpdating}
        >
          Create Menu Item
        </Button>
      </div>
    </form>
  );
};

export default AddMenuItem;
```

---

## 📄 src\components\admin\menu\EditMenuItem.tsx

_Path: `src\components\admin\menu\EditMenuItem.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Upload, X, Save } from 'lucide-react';
import { MenuItem } from '@types/menu.types';

interface EditMenuItemProps {
  item: MenuItem;
  onSuccess: () => void;
  onCancel: () => void;
}

export const EditMenuItem: React.FC<EditMenuItemProps> = ({
  item,
  onSuccess,
  onCancel,
}) => {
  const {
    updateMenuItem,
    managedCategories,
    fetchManagedCategories,
    isUpdating,
  } = useAdminStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: item.name,
    category: item.category,
    price: String(item.price),
    description: item.description || '',
    is_available: item.is_available,
    is_available_for_daily: item.is_available_for_daily,
    is_available_for_weekly: item.is_available_for_weekly,
    is_available_for_catering: item.is_available_for_catering,
    max_boxes_per_menu: item.max_boxes_per_menu || 2,
    allergens: item.allergens?.join(', ') || '',
    spice_level: item.spice_level || '',
    is_vegetarian: item.is_vegetarian || false,
    is_halal: item.is_halal !== false,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    item.image_url || ''
  );
  const [removeImage, setRemoveImage] = useState(false);

  useEffect(() => {
    fetchManagedCategories();
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'error');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setRemoveImage(false);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setRemoveImage(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Append only changed fields
      if (formData.name !== item.name)
        formDataToSend.append('name', formData.name);
      if (formData.category !== item.category)
        formDataToSend.append('category', formData.category);
      if (Number(formData.price) !== item.price)
        formDataToSend.append('price', formData.price);
      if (formData.description !== item.description)
        formDataToSend.append('description', formData.description);
      if (formData.is_available !== item.is_available)
        formDataToSend.append('is_available', String(formData.is_available));
      if (formData.is_available_for_daily !== item.is_available_for_daily)
        formDataToSend.append(
          'is_available_for_daily',
          String(formData.is_available_for_daily)
        );
      if (formData.is_available_for_weekly !== item.is_available_for_weekly)
        formDataToSend.append(
          'is_available_for_weekly',
          String(formData.is_available_for_weekly)
        );
      if (formData.is_available_for_catering !== item.is_available_for_catering)
        formDataToSend.append(
          'is_available_for_catering',
          String(formData.is_available_for_catering)
        );
      if (formData.max_boxes_per_menu !== item.max_boxes_per_menu)
        formDataToSend.append(
          'max_boxes_per_menu',
          String(formData.max_boxes_per_menu)
        );

      const allergensArray = formData.allergens
        .split(',')
        .map((a) => a.trim())
        .filter(Boolean);
      if (
        JSON.stringify(allergensArray) !== JSON.stringify(item.allergens || [])
      ) {
        formDataToSend.append('allergens', JSON.stringify(allergensArray));
      }

      if (formData.spice_level !== (item.spice_level || ''))
        formDataToSend.append('spice_level', formData.spice_level);
      if (formData.is_vegetarian !== item.is_vegetarian)
        formDataToSend.append('is_vegetarian', String(formData.is_vegetarian));
      if (formData.is_halal !== item.is_halal)
        formDataToSend.append('is_halal', String(formData.is_halal));

      // Append image if changed
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      } else if (removeImage) {
        formDataToSend.append('remove_image', 'true');
      }

      await updateMenuItem(item._id, formDataToSend);
      showToast('Menu item updated successfully', 'success');
      onSuccess();
    } catch (error) {
      showToast('Failed to update menu item', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Item Image
        </label>

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload size={32} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">
              Click to upload new image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
        )}
      </div>

      {/* Name */}
      <Input
        type="text"
        label="Item Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Butter Chicken"
        required
      />

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        >
          <option value="">Select category</option>
          {managedCategories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.display_name}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <Input
        type="number"
        step="0.01"
        label="Price (AUD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="15.99"
        required
      />

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={4}
          placeholder="Creamy butter chicken with aromatic spices..."
        />
      </div>

      {/* Availability Status */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available}
            onChange={(e) =>
              setFormData({ ...formData, is_available: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700 font-medium">
            Item is Available
          </span>
        </label>
      </div>

      {/* Availability For Order Types */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-text">Available For:</p>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_daily}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_daily: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Daily Menu</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_weekly}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_weekly: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Weekly Subscription</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available_for_catering}
            onChange={(e) =>
              setFormData({
                ...formData,
                is_available_for_catering: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Special Catering</span>
        </label>
      </div>

      {/* Max Boxes Per Menu (for weekly) */}
      {formData.is_available_for_weekly && (
        <Input
          type="number"
          label="Max Boxes Per Weekly Menu"
          value={String(formData.max_boxes_per_menu)}
          onChange={(e) =>
            setFormData({
              ...formData,
              max_boxes_per_menu: parseInt(e.target.value) || 2,
            })
          }
          min="1"
          max="10"
        />
      )}

      {/* Allergens */}
      <Input
        type="text"
        label="Allergens (comma separated)"
        value={formData.allergens}
        onChange={(e) =>
          setFormData({ ...formData, allergens: e.target.value })
        }
        placeholder="dairy, nuts, gluten"
      />

      {/* Spice Level */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Spice Level
        </label>
        <select
          value={formData.spice_level}
          onChange={(e) =>
            setFormData({ ...formData, spice_level: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">None</option>
          <option value="mild">Mild</option>
          <option value="medium">Medium</option>
          <option value="hot">Hot</option>
        </select>
      </div>

      {/* Dietary Options */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_vegetarian}
            onChange={(e) =>
              setFormData({ ...formData, is_vegetarian: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Vegetarian</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_halal}
            onChange={(e) =>
              setFormData({ ...formData, is_halal: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">Halal</span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          isLoading={isUpdating}
          disabled={isUpdating}
        >
          <Save size={20} className="mr-2" />
          {isUpdating ? 'Updating...' : 'Update Menu Item'}
        </Button>
      </div>
    </form>
  );
};

export default EditMenuItem;
```

---

## 📄 src\components\admin\menu\MenuItemsList.tsx

_Path: `src\components\admin\menu\MenuItemsList.tsx`_

```tsx
import React, { useState } from 'react';
import { MenuItem } from '@types/menu.types';
import { formatCurrency } from '@utils/formatters';
import { getImageUrl, handleImageError } from '@utils/images';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import {
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Leaf,
  CheckCircle,
  XCircle,
  Image as ImageIcon,
} from 'lucide-react';

interface MenuItemsListProps {
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onDelete: (itemId: string) => void;
  isLoading: boolean;
}

export const MenuItemsList: React.FC<MenuItemsListProps> = ({
  items,
  onEdit,
  onDelete,
  isLoading,
}) => {
  const [imageLoadStates, setImageLoadStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleImageLoad = (itemId: string) => {
    setImageLoadStates((prev) => ({ ...prev, [itemId]: true }));
  };

  if (isLoading) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading menu items..." />
      </Card>
    );
  }

  if (items.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No menu items found</p>
          <p className="text-sm text-gray-400">
            Click "Add Menu Item" to create your first item
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const imageUrl = getImageUrl(item.image_url);
        const isImageLoaded = imageLoadStates[item._id] || false;

        return (
          <Card key={item._id} padding="none" className="overflow-hidden">
            {/* Image */}
            <div className="relative h-48 bg-gray-100">
              {/* Loading state */}
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex flex-col items-center justify-center">
                  <ImageIcon className="text-gray-400 mb-2" size={32} />
                  <span className="text-gray-400 text-sm">
                    Loading image...
                  </span>
                </div>
              )}

              <img
                src={imageUrl}
                alt={item.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(item._id)}
                onError={handleImageError}
                loading="lazy"
              />

              {/* Debug info for missing images in development */}
              {import.meta.env.DEV && !item.image_url && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded shadow">
                  No image_url in data
                </div>
              )}

              {/* Availability Badge */}
              <div className="absolute top-3 right-3">
                {item.is_available ? (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <CheckCircle size={14} />
                    <span>Available</span>
                  </div>
                ) : (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                    <XCircle size={14} />
                    <span>Unavailable</span>
                  </div>
                )}
              </div>

              {/* Dietary Badges */}
              <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {item.is_vegetarian && (
                  <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                    <Leaf size={14} />
                  </div>
                )}
                {item.is_vegan && (
                  <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    VEGAN
                  </div>
                )}
                {item.is_halal && (
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    HALAL
                  </div>
                )}
              </div>

              {/* Spice level */}
              {item.spice_level && (
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full shadow-md text-xs font-semibold">
                  {item.spice_level === 'mild' && '🌶️ Mild'}
                  {item.spice_level === 'medium' && '🌶️🌶️ Medium'}
                  {item.spice_level === 'hot' && '🌶️🌶️🌶️ Hot'}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Category */}
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-bold rounded-full mb-2">
                {item.category}
              </span>

              {/* Name */}
              <h3 className="font-heading text-xl font-bold text-text mb-2 line-clamp-1">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
                {item.description}
              </p>

              {/* Availability Info */}
              <div className="space-y-2 mb-4 text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                  {item.is_available_for_daily && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Daily
                    </span>
                  )}
                  {item.is_available_for_weekly && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      Weekly
                    </span>
                  )}
                  {item.is_available_for_catering && (
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      Catering
                    </span>
                  )}
                </div>

                {item.allergens && item.allergens.length > 0 && (
                  <p className="text-red-600">
                    ⚠️ Allergens: {item.allergens.join(', ')}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-2xl font-bold text-primary">
                  {formatCurrency(item.price)}
                </span>
                {item.max_boxes_per_menu && (
                  <span className="text-xs text-gray-500">
                    Max {item.max_boxes_per_menu} boxes
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(item)}
                  className="flex-1"
                >
                  <Edit2 size={16} className="mr-1" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(item._id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MenuItemsList;
```

---

## 📄 src\components\admin\orders\OrderActions.tsx

_Path: `src\components\admin\orders\OrderActions.tsx`_

```tsx
import React from 'react';

interface OrderActionsProps {
  // Add props here
}

export const OrderActions: React.FC<OrderActionsProps> = (props) => {
  return <div>{/* OrderActions Component */}</div>;
};
```

---

## 📄 src\components\admin\orders\OrderDetails.tsx

_Path: `src\components\admin\orders\OrderDetails.tsx`_

```tsx
import React from 'react';
import { Order } from '@types/order.types';
import { formatCurrency, formatDate } from '@utils/formatters';
import Button from '@components/common/Button';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Package,
  DollarSign,
  Calendar,
  Clock,
  Truck,
  CreditCard,
  FileText,
} from 'lucide-react';

interface OrderDetailsProps {
  order: Order;
  onStatusUpdate: (orderId: string, newStatus: string) => void;
  onClose: () => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  onStatusUpdate,
  onClose,
}) => {
  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'text-yellow-600 bg-yellow-50',
      confirmed: 'text-blue-600 bg-blue-50',
      preparing: 'text-purple-600 bg-purple-50',
      out_for_delivery: 'text-indigo-600 bg-indigo-50',
      delivered: 'text-green-600 bg-green-50',
      cancelled: 'text-red-600 bg-red-50',
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h2 className="font-heading text-3xl font-bold text-text">
            Order #{order.order_number}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Placed on {formatDate(order.created_at)}
          </p>
        </div>
        <div
          className={`px-4 py-2 rounded-full ${getStatusColor(order.status)}`}
        >
          <span className="font-semibold uppercase text-sm">
            {order.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Customer Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <User size={20} className="text-primary" />
          <span>Customer Information</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-3">
            <User size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium text-text">
                {order.user_name || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-text">
                {order.user_email || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium text-text">
                {order.user_phone || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar size={16} className="text-gray-400" />
            <div>
              <p className="text-gray-500">Order Date</p>
              <p className="font-medium text-text">
                {formatDate(order.created_at)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      {order.delivery_address && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
            <MapPin size={20} className="text-primary" />
            <span>Delivery Information</span>
          </h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Delivery Method</p>
              <p className="font-medium text-text capitalize">
                {order.delivery_method.replace('_', ' ')}
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Address</p>
              <p className="font-medium text-text">
                {order.delivery_address.street}
                <br />
                {order.delivery_address.suburb}, {order.delivery_address.state}{' '}
                {order.delivery_address.postcode}
              </p>
            </div>

            {order.delivery_instructions && (
              <div>
                <p className="text-gray-500 mb-1">Delivery Instructions</p>
                <p className="font-medium text-text italic">
                  {order.delivery_instructions}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order Items */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <Package size={20} className="text-primary" />
          <span>Order Items</span>
        </h3>

        <div className="space-y-3">
          {order.items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg"
            >
              <div className="flex-1">
                <p className="font-medium text-text">{item.item_name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="font-semibold text-primary">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}

          {order.sidelines && order.sidelines.length > 0 && (
            <>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Add-ons:
                </p>
              </div>
              {order.sidelines.map((sideline: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-text">
                      {sideline.item_name}
                    </p>
                    <p className="text-xs text-gray-500">Sideline</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      Qty: {sideline.quantity}
                    </p>
                    <p className="font-semibold text-primary">
                      {formatCurrency(sideline.price * sideline.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
          <DollarSign size={20} className="text-primary" />
          <span>Payment Summary</span>
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">
              {formatCurrency(order.subtotal)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee:</span>
            <span className="font-medium">
              {formatCurrency(order.delivery_fee)}
            </span>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-text text-lg">Total:</span>
              <span className="font-heading text-3xl font-bold text-primary">
                {formatCurrency(order.total)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Payment Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.payment_status === 'paid'
                    ? 'bg-green-100 text-green-800'
                    : order.payment_status === 'failed'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {order.payment_status.toUpperCase()}
              </span>
            </div>
          </div>

          {order.payment_intent_id && (
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Payment ID:</span>
              <span className="font-mono text-gray-700">
                {order.payment_intent_id}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {(order.notes || order.admin_notes) && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-text mb-4 flex items-center space-x-2">
            <FileText size={20} className="text-primary" />
            <span>Notes</span>
          </h3>

          {order.notes && (
            <div className="mb-3">
              <p className="text-sm text-gray-500 mb-1">Customer Notes:</p>
              <p className="text-sm text-text">{order.notes}</p>
            </div>
          )}

          {order.admin_notes && (
            <div>
              <p className="text-sm text-gray-500 mb-1">Admin Notes:</p>
              <p className="text-sm text-text">{order.admin_notes}</p>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3 pt-6 border-t border-gray-200">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Close
        </Button>

        {order.status !== 'delivered' && order.status !== 'cancelled' && (
          <div className="flex-1">
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={order.status}
              onChange={(e) => onStatusUpdate(order._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancel Order</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
```

---

## 📄 src\components\admin\orders\OrdersList.tsx

_Path: `src\components\admin\orders\OrdersList.tsx`_

```tsx
import React from 'react';
import { Order } from '@types/order.types';
import { formatCurrency, formatDate } from '@utils/formatters';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Eye, Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react';

interface OrdersListProps {
  orders: Order[];
  onViewOrder: (order: Order) => void;
  onStatusUpdate: (orderId: string, newStatus: string) => void;
  isLoading: boolean;
  isUpdating: boolean;
}

export const OrdersList: React.FC<OrdersListProps> = ({
  orders,
  onViewOrder,
  onStatusUpdate,
  isLoading,
  isUpdating,
}) => {
  const getStatusIcon = (status: string) => {
    const icons = {
      pending: <Clock className="text-yellow-500" size={20} />,
      confirmed: <CheckCircle className="text-blue-500" size={20} />,
      preparing: <Package className="text-purple-500" size={20} />,
      out_for_delivery: <Truck className="text-indigo-500" size={20} />,
      delivered: <CheckCircle className="text-green-500" size={20} />,
      cancelled: <XCircle className="text-red-500" size={20} />,
    };
    return icons[status as keyof typeof icons] || <Package size={20} />;
  };

  const getStatusBadgeColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      preparing: 'bg-purple-100 text-purple-800',
      out_for_delivery: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPaymentBadgeColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      paid: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800',
      partially_paid: 'bg-orange-100 text-orange-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getOrderTypeLabel = (type: string) => {
    const labels = {
      daily_menu: 'Daily Menu',
      weekly_subscription: 'Weekly Sub',
      special_catering: 'Catering',
    };
    return labels[type as keyof typeof labels] || type;
  };

  if (isLoading) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading orders..." />
      </Card>
    );
  }

  if (orders.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <Package className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <p className="text-gray-600 text-lg mb-2">No orders found</p>
          <p className="text-sm text-gray-500">
            Orders will appear here when customers place them
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order: any) => (
        <Card
          key={order._id}
          padding="lg"
          className="hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            {/* Left Section - Order Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(order.status)}
                  <h3 className="font-heading text-xl font-bold text-text">
                    #{order.order_number}
                  </h3>
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getOrderTypeLabel(order.order_type)}`}
                >
                  {getOrderTypeLabel(order.order_type)}
                </span>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(order.status)}`}
                >
                  {order.status.replace('_', ' ').toUpperCase()}
                </span>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPaymentBadgeColor(order.payment_status)}`}
                >
                  {order.payment_status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Customer</p>
                  <p className="font-semibold text-text">
                    {order.user_name || 'N/A'}
                  </p>
                  <p className="text-xs text-gray-500">{order.user_email}</p>
                </div>

                <div>
                  <p className="text-gray-500 mb-1">Date</p>
                  <p className="font-semibold text-text">
                    {formatDate(order.created_at)}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 mb-1">Total Amount</p>
                  <p className="font-heading text-2xl font-bold text-primary">
                    {formatCurrency(order.total_amount)}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
                <Package size={16} />
                <span>{order.items?.length || 0} items</span>
                {order.sidelines && order.sidelines.length > 0 && (
                  <>
                    <span>•</span>
                    <span>{order.sidelines.length} add-ons</span>
                  </>
                )}
                {order.delivery_method && (
                  <>
                    <span>•</span>
                    <span className="capitalize">
                      {order.delivery_method.replace('_', ' ')}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex flex-col space-y-2 ml-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => onViewOrder(order)}
              >
                <Eye size={16} className="mr-2" />
                View Details
              </Button>

              {order.status !== 'delivered' && order.status !== 'cancelled' && (
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={order.status}
                  onChange={(e) => onStatusUpdate(order._id, e.target.value)}
                  disabled={isUpdating}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="preparing">Preparing</option>
                  <option value="out_for_delivery">Out for Delivery</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancel</option>
                </select>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
```

---

## 📄 src\components\admin\sidelines\AddSideline.tsx

_Path: `src\components\admin\sidelines\AddSideline.tsx`_

```tsx
import React, { useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Upload, X, Plus } from 'lucide-react';

interface AddSidelineProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const AddSideline: React.FC<AddSidelineProps> = ({
  onSuccess,
  onCancel,
}) => {
  const { createSideline, isUpdating } = useAdminStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    sort_order: '',
    is_available: true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'error');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image size should be less than 5MB', 'error');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showToast('Please enter a sideline name', 'error');
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      showToast('Please enter a valid price', 'error');
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('price', formData.price);
      if (formData.description.trim()) {
        formDataToSend.append('description', formData.description.trim());
      }
      if (formData.sort_order) {
        formDataToSend.append('sort_order', formData.sort_order);
      }
      formDataToSend.append('is_available', String(formData.is_available));

      // Append image if selected
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      await createSideline(formDataToSend);
      showToast('Sideline created successfully', 'success');
      onSuccess();
    } catch (error: any) {
      showToast(error.message || 'Failed to create sideline', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Sideline Image (Optional)
        </label>

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload size={32} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Click to upload image</span>
            <span className="text-xs text-gray-400 mt-1">Max 5MB</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
        )}
      </div>

      {/* Name */}
      <Input
        type="text"
        label="Sideline Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="e.g., Extra Rice, Raita, Papad"
        required
      />

      {/* Price */}
      <Input
        type="number"
        step="0.01"
        label="Price (AUD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="2.50"
        required
      />

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description (Optional)
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={3}
          placeholder="Brief description of the add-on item..."
          maxLength={200}
        />
        <p className="text-xs text-gray-500 mt-1">
          {formData.description.length}/200 characters
        </p>
      </div>

      {/* Sort Order */}
      <Input
        type="number"
        label="Sort Order (Optional)"
        value={formData.sort_order}
        onChange={(e) =>
          setFormData({ ...formData, sort_order: e.target.value })
        }
        placeholder="1"
        helperText="Lower numbers appear first"
        min="0"
      />

      {/* Availability */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available}
            onChange={(e) =>
              setFormData({ ...formData, is_available: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700 font-medium">
            Available for ordering
          </span>
        </label>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Sidelines are add-on items that customers can
          include with their orders. Common examples: Extra Rice, Raita, Papad,
          Drinks, Desserts, etc.
        </p>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          isLoading={isUpdating}
          disabled={isUpdating}
        >
          <Plus size={20} className="mr-2" />
          {isUpdating ? 'Creating...' : 'Create Sideline'}
        </Button>
      </div>
    </form>
  );
};

export default AddSideline;
```

---

## 📄 src\components\admin\sidelines\EditSideline.tsx

_Path: `src\components\admin\sidelines\EditSideline.tsx`_

```tsx
import React, { useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Upload, X, Save } from 'lucide-react';
import { Sideline } from '@types/menu.types';

interface EditSidelineProps {
  sideline: Sideline;
  onSuccess: () => void;
  onCancel: () => void;
}

export const EditSideline: React.FC<EditSidelineProps> = ({
  sideline,
  onSuccess,
  onCancel,
}) => {
  const { updateSideline, isUpdating } = useAdminStore();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: sideline.name,
    price: String(sideline.price),
    description: sideline.description || '',
    sort_order:
      sideline.sort_order !== undefined ? String(sideline.sort_order) : '',
    is_available: sideline.is_available,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    sideline.image_url || ''
  );
  const [removeImage, setRemoveImage] = useState(false);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'error');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image size should be less than 5MB', 'error');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setRemoveImage(false);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    setRemoveImage(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showToast('Please enter a sideline name', 'error');
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      showToast('Please enter a valid price', 'error');
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Append only changed fields
      if (formData.name !== sideline.name)
        formDataToSend.append('name', formData.name.trim());
      if (Number(formData.price) !== sideline.price)
        formDataToSend.append('price', formData.price);
      if (formData.description !== (sideline.description || ''))
        formDataToSend.append('description', formData.description.trim());
      if (
        formData.sort_order &&
        Number(formData.sort_order) !== sideline.sort_order
      ) {
        formDataToSend.append('sort_order', formData.sort_order);
      }
      if (formData.is_available !== sideline.is_available)
        formDataToSend.append('is_available', String(formData.is_available));

      // Append image if changed
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      } else if (removeImage) {
        formDataToSend.append('remove_image', 'true');
      }

      await updateSideline(sideline._id, formDataToSend);
      showToast('Sideline updated successfully', 'success');
      onSuccess();
    } catch (error: any) {
      showToast(error.message || 'Failed to update sideline', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Sideline Image
        </label>

        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <Upload size={32} className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">
              Click to upload new image
            </span>
            <span className="text-xs text-gray-400 mt-1">Max 5MB</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </label>
        )}
      </div>

      {/* Name */}
      <Input
        type="text"
        label="Sideline Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="e.g., Extra Rice, Raita, Papad"
        required
      />

      {/* Price */}
      <Input
        type="number"
        step="0.01"
        label="Price (AUD)"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="2.50"
        required
      />

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          rows={3}
          placeholder="Brief description of the add-on item..."
          maxLength={200}
        />
        <p className="text-xs text-gray-500 mt-1">
          {formData.description.length}/200 characters
        </p>
      </div>

      {/* Sort Order */}
      <Input
        type="number"
        label="Sort Order"
        value={formData.sort_order}
        onChange={(e) =>
          setFormData({ ...formData, sort_order: e.target.value })
        }
        placeholder="1"
        helperText="Lower numbers appear first"
        min="0"
      />

      {/* Availability */}
      <div className="space-y-3">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_available}
            onChange={(e) =>
              setFormData({ ...formData, is_available: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700 font-medium">
            Available for ordering
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1"
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          isLoading={isUpdating}
          disabled={isUpdating}
        >
          <Save size={20} className="mr-2" />
          {isUpdating ? 'Updating...' : 'Update Sideline'}
        </Button>
      </div>
    </form>
  );
};

export default EditSideline;
```

---

## 📄 src\components\admin\sidelines\SidelinesList.tsx

_Path: `src\components\admin\sidelines\SidelinesList.tsx`_

```tsx
import React from 'react';
import { Sideline } from '@types/menu.types';
import { formatCurrency } from '@utils/formatters';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

interface SidelinesListProps {
  sidelines: Sideline[];
  onEdit: (sideline: Sideline) => void;
  onDelete: (sidelineId: string) => void;
  isLoading: boolean;
}

export const SidelinesList: React.FC<SidelinesListProps> = ({
  sidelines,
  onEdit,
  onDelete,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading sidelines..." />
      </Card>
    );
  }

  if (sidelines.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No sidelines found</p>
          <p className="text-sm text-gray-400">
            Click "Add Sideline" to create your first add-on item
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sidelines.map((sideline) => (
        <Card key={sideline._id} padding="none" className="overflow-hidden">
          {/* Image */}
          <div className="relative h-40 bg-gray-100">
            {sideline.image_url ? (
              <img
                src={sideline.image_url}
                alt={sideline.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400 text-3xl">🍱</span>
              </div>
            )}

            {/* Availability Badge */}
            <div className="absolute top-3 right-3">
              {sideline.is_available ? (
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                  <CheckCircle size={14} />
                  <span>Available</span>
                </div>
              ) : (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                  <XCircle size={14} />
                  <span>Unavailable</span>
                </div>
              )}
            </div>

            {/* Sort Order Badge */}
            {sideline.sort_order !== undefined && (
              <div className="absolute top-3 left-3 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                #{sideline.sort_order}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Name */}
            <h3 className="font-heading text-lg font-bold text-text mb-2 line-clamp-1">
              {sideline.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
              {sideline.description || 'No description available'}
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-primary">
                {formatCurrency(sideline.price)}
              </span>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(sideline)}
                className="flex-1"
              >
                <Edit2 size={16} className="mr-1" />
                Edit
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(sideline._id)}
                className="text-red-600 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SidelinesList;
```

---

## 📄 src\components\auth\LoginForm.tsx

_Path: `src\components\auth\LoginForm.tsx`_

```tsx
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Mail, Lock, Loader2 } from 'lucide-react';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { showToast } = useToast();

  // ✅ Get the return URL from state or default to home
  const from = location.state?.from || '/';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      await login(formData);
      showToast('Login successful!', 'success');

      // ✅ Navigate to the intended page or home
      navigate(from, { replace: true });
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || 'Login failed';
      showToast(errorMessage, 'error');
      setErrors({ general: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-heading text-4xl font-bold text-text mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-600">Sign in to your account to continue</p>

        {/* ✅ Show info if redirected from a protected page */}
        {from !== '/' && from !== '/login' && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              Please login to access that page
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
            {errors.general}
          </div>
        )}

        <Input
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
          leftIcon={<Mail size={20} />}
          error={errors.email}
          required
        />

        <Input
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter your password"
          leftIcon={<Lock size={20} />}
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-gray-600">Remember me</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-primary hover:text-primary-600 font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            to="/register"
            className="text-primary hover:text-primary-600 font-semibold"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
```

---

## 📄 src\components\auth\ProtectedRoute.tsx

_Path: `src\components\auth\ProtectedRoute.tsx`_

```tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';
import LoadingSpinner from '@components/common/LoadingSpinner';

const ProtectedRoute: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
```

---

## 📄 src\components\auth\RegisterForm.tsx

_Path: `src\components\auth\RegisterForm.tsx`_

```tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { RegisterData } from '@models/auth.types';
import {
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  AlertCircle,
  Info,
} from 'lucide-react';

interface RegisterFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
  redirectOnSuccess?: boolean;
  className?: string;
}

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
  general?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onCancel,
  showCancel = false,
  redirectOnSuccess = true,
  className = '',
}) => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [backendErrors, setBackendErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }

    // Clear backend errors when user makes changes
    if (backendErrors.length > 0) {
      setBackendErrors([]);
    }
  };

  // Format phone number to backend-expected format
  const formatPhoneForBackend = (phone: string): string => {
    // Remove all non-digits
    let cleaned = phone.replace(/\D/g, '');

    console.log('🔍 [DEBUG] Original phone:', phone);
    console.log('🔍 [DEBUG] Cleaned phone:', cleaned);

    // If starts with 0, replace with 61
    if (cleaned.startsWith('0')) {
      cleaned = '61' + cleaned.slice(1);
    }

    // If doesn't start with 61, add it
    if (!cleaned.startsWith('61')) {
      cleaned = '61' + cleaned;
    }

    // Add + prefix
    const formatted = '+' + cleaned;

    console.log('✅ [DEBUG] Formatted phone for backend:', formatted);

    return formatted;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    } else if (formData.first_name.trim().length < 2) {
      newErrors.first_name = 'First name must be at least 2 characters';
    } else if (formData.first_name.trim().length > 50) {
      newErrors.first_name = 'First name must be less than 50 characters';
    }

    // Last Name validation
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    } else if (formData.last_name.trim().length < 2) {
      newErrors.last_name = 'Last name must be at least 2 characters';
    } else if (formData.last_name.trim().length > 50) {
      newErrors.last_name = 'Last name must be less than 50 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (Australian mobile)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      // Accept formats: 04XX XXX XXX or 4XX XXX XXX or +614XX XXX XXX
      if (!/^(0[4-5]\d{8}|[4-5]\d{8}|61[4-5]\d{8})$/.test(cleanPhone)) {
        newErrors.phone =
          'Please enter a valid Australian mobile number (e.g., 0412 345 678)';
      }
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 100) {
      newErrors.password = 'Password must be less than 100 characters';
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter';
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms acceptance validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Parse FastAPI validation errors
  const parseBackendErrors = (error: any): string[] => {
    const errorMessages: string[] = [];

    console.log(
      '╔═══════════════════════════════════════════════════════════════'
    );
    console.log('║ 🔴 BACKEND ERROR ANALYSIS');
    console.log(
      '╠═══════════════════════════════════════════════════════════════'
    );

    console.log('║ Full Error Object (stringified):');
    console.log(JSON.stringify(error, null, 2));

    if (error.response) {
      console.log('║ Response Status:', error.response.status);
      console.log('║ Response StatusText:', error.response.statusText);
      console.log('║ Response Data (stringified):');
      console.log(JSON.stringify(error.response.data, null, 2));

      if (error.response.data) {
        console.log('║ Response Data Keys:', Object.keys(error.response.data));

        if (error.response.data.detail) {
          console.log('║ Detail (stringified):');
          console.log(JSON.stringify(error.response.data.detail, null, 2));
        }
      }
    }

    console.log(
      '╚═══════════════════════════════════════════════════════════════'
    );

    // Check if it's a FastAPI validation error (422)
    if (error.response?.status === 422 && error.response?.data?.detail) {
      const detail = error.response.data.detail;

      // FastAPI returns array of validation errors
      if (Array.isArray(detail)) {
        console.log(`📋 Found ${detail.length} validation errors`);

        detail.forEach((err: any, index: number) => {
          console.log(
            `   Error ${index + 1} (stringified):`,
            JSON.stringify(err, null, 2)
          );

          const field = err.loc[err.loc.length - 1];
          const message = err.msg;

          // Map field names to user-friendly names
          const fieldNames: Record<string, string> = {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'Email',
            phone: 'Phone Number',
            password: 'Password',
            role: 'Role',
          };

          const fieldName = fieldNames[field as string] || field;
          const errorMsg = `${fieldName}: ${message}`;
          errorMessages.push(errorMsg);
          console.log(`   ✅ Added error: ${errorMsg}`);

          // Also set field-specific error
          if (field && typeof field === 'string') {
            setErrors((prev) => ({
              ...prev,
              [field]: message,
            }));
          }
        });
      } else if (typeof detail === 'string') {
        console.log('📝 Detail is a string:', detail);
        errorMessages.push(detail);
      } else if (typeof detail === 'object' && detail !== null) {
        console.log(
          '📦 Detail is an object (stringified):',
          JSON.stringify(detail, null, 2)
        );
        errorMessages.push(JSON.stringify(detail));
      }
    }
    // Generic error message
    else if (error.response?.data?.message) {
      console.log(
        '📬 Using response.data.message:',
        error.response.data.message
      );
      errorMessages.push(error.response.data.message);
    } else if (error.message) {
      console.log('📨 Using error.message:', error.message);
      errorMessages.push(error.message);
    } else {
      console.log('❌ No recognizable error format, using generic message');
      errorMessages.push('Registration failed. Please try again.');
    }

    console.log('🎯 Final error messages:', errorMessages);
    return errorMessages;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous backend errors
    setBackendErrors([]);

    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // Format data for backend API
      const registrationData = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formatPhoneForBackend(formData.phone),
        password: formData.password,
      };

      console.log('═══════════════════════════════════════════════════');
      console.log('📤 SENDING REGISTRATION REQUEST');
      console.log('═══════════════════════════════════════════════════');
      console.log('Data being sent (stringified):');
      console.log(JSON.stringify(registrationData, null, 2));
      console.log('═══════════════════════════════════════════════════');

      await register(registrationData);

      console.log('✅ Registration successful!');
      showToast("Registration successful! Welcome to Bakar's Food!", 'success');

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }

      // Redirect if enabled
      if (redirectOnSuccess) {
        navigate('/');
      }
    } catch (error: any) {
      console.error('═══════════════════════════════════════════════════');
      console.error('❌ REGISTRATION FAILED');
      console.error('═══════════════════════════════════════════════════');

      // Parse and display backend errors
      const parsedErrors = parseBackendErrors(error);
      setBackendErrors(parsedErrors);

      // Show first error as toast
      if (parsedErrors.length > 0) {
        showToast(parsedErrors[0], 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate(-1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Backend Errors Display */}
      {backendErrors.length > 0 && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <div className="flex-1">
              <h3 className="font-semibold text-red-800 mb-2">
                Registration Failed
              </h3>
              <ul className="space-y-1">
                {backendErrors.map((error, index) => (
                  <li
                    key={index}
                    className="text-sm text-red-700 flex items-start space-x-2"
                  >
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Name Fields - Split into First and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          name="first_name"
          label="First Name"
          value={formData.first_name}
          onChange={handleChange}
          error={errors.first_name}
          leftIcon={<User size={20} />}
          placeholder="John"
          required
          disabled={isLoading}
        />

        <Input
          type="text"
          name="last_name"
          label="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          error={errors.last_name}
          leftIcon={<User size={20} />}
          placeholder="Doe"
          required
          disabled={isLoading}
        />
      </div>

      {/* Email */}
      <Input
        type="email"
        name="email"
        label="Email Address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        leftIcon={<Mail size={20} />}
        placeholder="your@email.com"
        required
        disabled={isLoading}
      />

      {/* Phone */}
      <div>
        <Input
          type="tel"
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          leftIcon={<Phone size={20} />}
          placeholder="0412 345 678"
          helperText="Australian mobile number"
          required
          disabled={isLoading}
        />
        {/* Phone Format Helper */}
        <div className="mt-2 flex items-start space-x-2 text-xs text-blue-600 bg-blue-50 rounded-lg p-3">
          <Info size={14} className="flex-shrink-0 mt-0.5" />
          <span>
            Accepted formats: <strong>0412 345 678</strong> or{' '}
            <strong>04 1234 5678</strong> or <strong>+61 412 345 678</strong>
          </span>
        </div>
      </div>

      {/* Password */}
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          leftIcon={<Lock size={20} />}
          placeholder="Minimum 8 characters"
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[42px] text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isLoading}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          leftIcon={<Lock size={20} />}
          placeholder="Re-enter password"
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-[42px] text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isLoading}
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-2">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
            disabled={isLoading}
          />
          <span className="text-sm text-gray-600">
            I agree to the{' '}
            <a
              href="/terms"
              target="_blank"
              className="text-primary font-semibold hover:underline"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              target="_blank"
              className="text-primary font-semibold hover:underline"
            >
              Privacy Policy
            </a>
          </span>
        </label>
        {errors.acceptTerms && (
          <div className="flex items-center space-x-2 text-red-500 text-sm">
            <AlertCircle size={16} />
            <span>{errors.acceptTerms}</span>
          </div>
        )}
      </div>

      {/* Password Requirements Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-semibold mb-2 flex items-center space-x-2">
          <Info size={16} />
          <span>Password Requirements:</span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-xs ml-1">
          <li
            className={
              formData.password.length >= 8
                ? 'text-green-600 font-semibold'
                : ''
            }
          >
            At least 8 characters long
          </li>
          <li
            className={
              /[A-Z]/.test(formData.password)
                ? 'text-green-600 font-semibold'
                : ''
            }
          >
            Contains uppercase letter (A-Z)
          </li>
          <li
            className={
              /[a-z]/.test(formData.password)
                ? 'text-green-600 font-semibold'
                : ''
            }
          >
            Contains lowercase letter (a-z)
          </li>
          <li
            className={
              /\d/.test(formData.password) ? 'text-green-600 font-semibold' : ''
            }
          >
            Contains number (0-9)
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth={!showCancel}
          isLoading={isLoading}
          disabled={isLoading}
          className={showCancel ? 'sm:flex-1' : ''}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>

        {showCancel && (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleCancel}
            disabled={isLoading}
            className="sm:flex-1"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
```

---

## 📄 src\components\auth\RoleGuard.tsx

_Path: `src\components\auth\RoleGuard.tsx`_

```tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

interface RoleGuardProps {
  requiredRole: 'customer' | 'admin';
  children?: React.ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ requiredRole, children }) => {
  const { role, user, isAuthenticated } = useAuthStore();

  // ✅ Debug logging
  console.log('🔐 RoleGuard Check:', {
    requiredRole,
    userRole: role,
    isAuthenticated,
    userEmail: user?.email,
    hasAccess: role === requiredRole,
  });

  // ✅ Check authentication first
  if (!isAuthenticated) {
    console.warn('⛔ Not authenticated - redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // ✅ Check role
  if (role !== requiredRole) {
    console.warn('⛔ Access denied - redirecting to home', {
      required: requiredRole,
      actual: role,
    });
    return <Navigate to="/" replace />;
  }

  console.log('✅ Access granted to', requiredRole, 'routes');

  // ✅ Use Outlet for nested routes, or children if provided
  return children ? <>{children}</> : <Outlet />;
};

export default RoleGuard;
```

---

## 📄 src\components\cart\CartItem.tsx

_Path: `src\components\cart\CartItem.tsx`_

```tsx
import React from 'react';

interface CartItemProps {
  // Add props here
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  return <div>{/* CartItem Component */}</div>;
};
```

---

## 📄 src\components\cart\CartSummary.tsx

_Path: `src\components\cart\CartSummary.tsx`_

```tsx
import React from 'react';

interface CartSummaryProps {
  // Add props here
}

export const CartSummary: React.FC<CartSummaryProps> = (props) => {
  return <div>{/* CartSummary Component */}</div>;
};
```

---

## 📄 src\components\cart\DeliverySelector.tsx

_Path: `src\components\cart\DeliverySelector.tsx`_

```tsx
import React from 'react';

interface DeliverySelectorProps {
  // Add props here
}

export const DeliverySelector: React.FC<DeliverySelectorProps> = (props) => {
  return <div>{/* DeliverySelector Component */}</div>;
};
```

---

## 📄 src\components\catering\CateringMenu.tsx

_Path: `src\components\catering\CateringMenu.tsx`_

```tsx
import React from 'react';

interface CateringMenuProps {
  // Add props here
}

export const CateringMenu: React.FC<CateringMenuProps> = (props) => {
  return <div>{/* CateringMenu Component */}</div>;
};
```

---

## 📄 src\components\catering\CateringSummary.tsx

_Path: `src\components\catering\CateringSummary.tsx`_

```tsx
import React from 'react';

interface CateringSummaryProps {
  // Add props here
}

export const CateringSummary: React.FC<CateringSummaryProps> = (props) => {
  return <div>{/* CateringSummary Component */}</div>;
};
```

---

## 📄 src\components\catering\EventDetails.tsx

_Path: `src\components\catering\EventDetails.tsx`_

```tsx
import React from 'react';

interface EventDetailsProps {
  // Add props here
}

export const EventDetails: React.FC<EventDetailsProps> = (props) => {
  return <div>{/* EventDetails Component */}</div>;
};
```

---

## 📄 src\components\catering\HeadCountCalculator.tsx

_Path: `src\components\catering\HeadCountCalculator.tsx`_

```tsx
import React from 'react';

interface HeadCountCalculatorProps {
  // Add props here
}

export const HeadCountCalculator: React.FC<HeadCountCalculatorProps> = (
  props
) => {
  return <div>{/* HeadCountCalculator Component */}</div>;
};
```

---

## 📄 src\components\checkout\AddressSelector.tsx

_Path: `src\components\checkout\AddressSelector.tsx`_

```tsx
import React from 'react';

interface AddressSelectorProps {
  // Add props here
}

export const AddressSelector: React.FC<AddressSelectorProps> = (props) => {
  return <div>{/* AddressSelector Component */}</div>;
};
```

---

## 📄 src\components\checkout\OrderReview.tsx

_Path: `src\components\checkout\OrderReview.tsx`_

```tsx
import React from 'react';

interface OrderReviewProps {
  // Add props here
}

export const OrderReview: React.FC<OrderReviewProps> = (props) => {
  return <div>{/* OrderReview Component */}</div>;
};
```

---

## 📄 src\components\checkout\PaymentForm.tsx

_Path: `src\components\checkout\PaymentForm.tsx`_

```tsx
import React from 'react';

interface PaymentFormProps {
  // Add props here
}

export const PaymentForm: React.FC<PaymentFormProps> = (props) => {
  return <div>{/* PaymentForm Component */}</div>;
};
```

---

## 📄 src\components\checkout\PlaceOrderButton.tsx

_Path: `src\components\checkout\PlaceOrderButton.tsx`_

```tsx
import React from 'react';

interface PlaceOrderButtonProps {
  // Add props here
}

export const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = (props) => {
  return <div>{/* PlaceOrderButton Component */}</div>;
};
```

---

## 📄 src\components\common\Button.tsx

_Path: `src\components\common\Button.tsx`_

```tsx
import React from 'react';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary hover:bg-primary-600 text-white focus:ring-primary shadow-md hover:shadow-lg',
    secondary:
      'bg-secondary hover:bg-secondary-600 text-white focus:ring-secondary',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary-50 focus:ring-primary',
    danger:
      'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
```

---

## 📄 src\components\common\Card.tsx

_Path: `src\components\common\Card.tsx`_

```tsx
import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = false,
  padding = 'md',
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-md transition-shadow duration-200',
        hoverable && 'hover:shadow-lg cursor-pointer',
        paddingClasses[padding],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
```

---

## 📄 src\components\common\Input.tsx

_Path: `src\components\common\Input.tsx`_

```tsx
import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, leftIcon, rightIcon, className, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={clsx(
              'w-full px-4 py-3 border rounded-lg transition-all duration-200',
              'focus:ring-2 focus:ring-primary focus:border-transparent outline-none',
              error ? 'border-red-500' : 'border-gray-300',
              leftIcon && 'pl-11',
              rightIcon && 'pr-11',
              'disabled:bg-gray-100 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
```

---

## 📄 src\components\common\LoadingSpinner.tsx

_Path: `src\components\common\LoadingSpinner.tsx`_

```tsx
import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  message,
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2
        className={clsx('animate-spin text-primary', sizeClasses[size])}
      />
      {message && <p className="text-gray-600 font-medium">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
```

---

## 📄 src\components\common\Modal.tsx

_Path: `src\components\common\Modal.tsx`_

```tsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={clsx(
            'relative w-full bg-white rounded-xl shadow-2xl transform transition-all',
            sizeClasses[size]
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 className="text-2xl font-heading font-bold text-text">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
```

---

## 📄 src\components\common\Toast.tsx

_Path: `src\components\common\Toast.tsx`_

```tsx
import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={24} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={24} />;
      default:
        return <Info className="text-blue-500" size={24} />;
    }
  };

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg border-2 shadow-lg animate-slide-in ${getStyles(toast.type)} min-w-[300px] max-w-md`}
          >
            {getIcon(toast.type)}
            <p className="flex-1 font-medium text-sm">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="hover:bg-white/20 rounded p-1 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
```

---

## 📄 src\components\layout\CartIcon.tsx

_Path: `src\components\layout\CartIcon.tsx`_

```tsx
import React from 'react';

interface CartIconProps {
  // Add props here
}

export const CartIcon: React.FC<CartIconProps> = (props) => {
  return <div>{/* CartIcon Component */}</div>;
};
```

---

## 📄 src\components\layout\Footer.tsx

_Path: `src\components\layout\Footer.tsx`_

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '@utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sydney's premier food delivery and catering service. Fresh,
              delicious meals delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/menu/daily"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Daily Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/menu/weekly"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Weekly Subscription
                </Link>
              </li>
              <li>
                <Link
                  to="/catering"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Special Catering
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Sunday
                <br />
                11:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {currentYear} Bakar's Food & Catering. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 📄 src\components\layout\Header.tsx

_Path: `src\components\layout\Header.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut, Settings } from 'lucide-react';
import { useAuthStore } from '@store/authStore';
import { useCartStore } from '@store/cartStore';
import Logo from './Logo';
import Button from '@components/common/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { isAuthenticated, user, logout } = useAuthStore();
  const cartStore = useCartStore();
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch cart on mount if authenticated
  useEffect(() => {
    if (isAuthenticated && !cartStore.cartSummary && !cartStore.isLoading) {
      cartStore.fetchCart().catch(console.error);
    }
  }, [isAuthenticated]);

  // Calculate cart count safely
  const cartItemCount = cartStore.cartSummary?.items_count || 0;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Daily Menu', path: '/menu/daily' },
    { name: 'Weekly Subscription', path: '/menu/weekly' },
    { name: 'Catering', path: '/catering' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon - Only show if authenticated */}
            {isAuthenticated && (
              <button
                onClick={() => navigate('/checkout')}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart size={24} className="text-text" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
            )}

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {user?.first_name?.charAt(0)?.toUpperCase() ||
                      user?.email?.charAt(0)?.toUpperCase() ||
                      'U'}
                  </div>
                  <span className="hidden lg:block font-medium text-text">
                    {user?.first_name || user?.email?.split('@')[0] || 'User'}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User size={18} />
                      <span>Profile</span>
                    </Link>

                    {user?.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings size={18} />
                        <span>Admin Dashboard</span>
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-red-600"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 font-medium transition-colors hover:bg-gray-50 rounded-lg ${
                  isActive(link.path)
                    ? 'text-primary bg-primary-50'
                    : 'text-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {!isAuthenticated && (
              <div className="flex flex-col space-y-2 mt-4 px-4">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    navigate('/login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    navigate('/register');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
```

---

## 📄 src\components\layout\Layout.tsx

_Path: `src\components\layout\Layout.tsx`_

```tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

---

## 📄 src\components\layout\Logo.tsx

_Path: `src\components\layout\Logo.tsx`_

```tsx
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const colorClass = variant === 'white' ? 'text-white' : 'text-primary';

  return (
    <div
      className={`font-heading font-bold ${sizeClasses[size]} ${colorClass}`}
    >
      <span className="tracking-tight">Bakar's</span>
      <span className="text-secondary ml-2">Food & Catering</span>
    </div>
  );
};

export default Logo;
```

---

## 📄 src\components\layout\Navigation.tsx

_Path: `src\components\layout\Navigation.tsx`_

```tsx
import React from 'react';

interface NavigationProps {
  // Add props here
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return <div>{/* Navigation Component */}</div>;
};
```

---

## 📄 src\components\layout\UserMenu.tsx

_Path: `src\components\layout\UserMenu.tsx`_

```tsx
import React from 'react';

interface UserMenuProps {
  // Add props here
}

export const UserMenu: React.FC<UserMenuProps> = (props) => {
  return <div>{/* UserMenu Component */}</div>;
};
```

---

## 📄 src\components\menu\CartSummary.tsx

_Path: `src\components\menu\CartSummary.tsx`_

```tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { formatCurrency } from '@utils/formatters';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';

interface CartSummaryProps {
  sticky?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ sticky = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const {
    items,
    sidelines,
    summary,
    isLoading,
    isUpdating,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    refreshCart,
  } = useCart();

  // Refresh cart on mount
  useEffect(() => {
    if (isAuthenticated) {
      refreshCart();
    }
  }, [isAuthenticated]);

  // Not authenticated state
  if (!isAuthenticated) {
    return (
      <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
        <div className="text-center py-8">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-500 mb-2">
            Login to view cart
          </h3>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/login')}
            fullWidth
          >
            Login Now
          </Button>
        </div>
      </Card>
    );
  }

  // Loading state
  if (isLoading && items.length === 0) {
    return (
      <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
        <div className="text-center py-8">
          <Loader2 className="mx-auto h-8 w-8 text-primary animate-spin mb-4" />
          <p className="text-sm text-gray-500">Loading cart...</p>
        </div>
      </Card>
    );
  }

  // Empty cart
  if (items.length === 0 && sidelines.length === 0) {
    return (
      <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
        <div className="text-center py-8">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-500 mb-2">
            Your cart is empty
          </h3>
          <p className="text-sm text-gray-400">Add items to get started</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={sticky ? 'sticky top-24' : ''} padding="lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="text-primary" size={24} />
          <h3 className="font-heading text-xl font-bold text-text">
            Your Cart
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={refreshCart}
            className="p-1 text-gray-400 hover:text-primary transition-colors"
            disabled={isUpdating}
          >
            <RefreshCw size={16} className={isUpdating ? 'animate-spin' : ''} />
          </button>
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {summary.item_count} {summary.item_count === 1 ? 'item' : 'items'}
          </span>
        </div>
      </div>

      {/* Cart items */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {items.map((item: any) => (
          <div
            key={item.item_id}
            className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0"
          >
            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-text text-sm mb-1">
                {item.item_name}
              </h4>
              <p className="text-xs text-gray-500 mb-1">{item.category}</p>
              <p className="text-primary font-semibold text-sm mb-2">
                {formatCurrency(item.price)}
              </p>

              {/* Quantity controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateCartQuantity(item.item_id, item.quantity - 1)
                  }
                  disabled={isUpdating}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors disabled:opacity-50"
                >
                  <Minus size={12} />
                </button>
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateCartQuantity(item.item_id, item.quantity + 1)
                  }
                  disabled={isUpdating}
                  className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors disabled:opacity-50"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeFromCart(item.item_id)}
              disabled={isUpdating}
              className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0 disabled:opacity-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        {/* Sidelines */}
        {sidelines.length > 0 && (
          <>
            <div className="pt-2 mt-2 border-t-2 border-gray-200">
              <h4 className="font-semibold text-text text-sm mb-3">Add-ons:</h4>
            </div>
            {sidelines.map((sideline: any) => (
              <div
                key={sideline.item_id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex-1">
                  <p className="font-medium text-text text-sm">
                    {sideline.item_name}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() =>
                        updateCartQuantity(
                          sideline.item_id,
                          sideline.quantity - 1,
                          true
                        )
                      }
                      disabled={isUpdating}
                      className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors disabled:opacity-50"
                    >
                      <Minus size={10} />
                    </button>
                    <span className="text-xs">Qty: {sideline.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartQuantity(
                          sideline.item_id,
                          sideline.quantity + 1,
                          true
                        )
                      }
                      disabled={isUpdating}
                      className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded hover:border-primary transition-colors disabled:opacity-50"
                    >
                      <Plus size={10} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-primary font-semibold text-sm">
                    {formatCurrency(sideline.subtotal)}
                  </span>
                  <button
                    onClick={() => removeFromCart(sideline.item_id, true)}
                    disabled={isUpdating}
                    className="ml-2 text-red-500 hover:text-red-700 disabled:opacity-50"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Summary */}
      <div className="space-y-2 mb-6 pt-4 border-t-2 border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">
            {formatCurrency(summary.subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery Fee:</span>
          <span className="font-medium">
            {summary.delivery_fee > 0
              ? formatCurrency(summary.delivery_fee)
              : 'FREE'}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (GST 10%):</span>
          <span className="font-medium">{formatCurrency(summary.tax)}</span>
        </div>

        <div className="pt-2 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-text">Total:</span>
            <span className="font-heading text-2xl font-bold text-primary">
              {formatCurrency(summary.total)}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <Button
          variant="primary"
          fullWidth
          size="lg"
          onClick={() => navigate('/checkout')}
          disabled={isUpdating}
        >
          {isUpdating ? (
            <>
              <Loader2 className="animate-spin mr-2" size={18} />
              Updating...
            </>
          ) : (
            'Proceed to Checkout'
          )}
        </Button>

        <button
          onClick={clearCart}
          disabled={isUpdating}
          className="w-full text-sm text-gray-600 hover:text-red-500 transition-colors py-2 disabled:opacity-50"
        >
          Clear Cart
        </button>
      </div>
    </Card>
  );
};

export default CartSummary;
```

---

## 📄 src\components\menu\CategoryFilter.tsx

_Path: `src\components\menu\CategoryFilter.tsx`_

```tsx
import React from 'react';

interface CategoryFilterProps {
  // Add props here
}

export const CategoryFilter: React.FC<CategoryFilterProps> = (props) => {
  return <div>{/* CategoryFilter Component */}</div>;
};
```

---

## 📄 src\components\menu\FilterBar.tsx

_Path: `src\components\menu\FilterBar.tsx`_

```tsx
import React from 'react';
import { MenuFilters } from '@types/menu.types';
import { Filter, X, Leaf } from 'lucide-react';

interface CategoryObject {
  id?: string;
  name: string;
  display_name?: string;
  description?: string;
  image_url?: string;
  is_active?: boolean;
  sort_order?: number;
}

interface FilterBarProps {
  categories: (string | CategoryObject)[]; // ✅ Accept both strings and objects
  activeFilters: MenuFilters;
  onFilterChange: (filters: Partial<MenuFilters>) => void;
  onClearFilters: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    activeFilters.category ||
    activeFilters.is_vegetarian !== undefined ||
    activeFilters.is_vegan !== undefined;

  // ✅ Helper to get category name (works for both strings and objects)
  const getCategoryName = (category: string | CategoryObject): string => {
    if (typeof category === 'string') {
      return category;
    }
    return category.display_name || category.name;
  };

  // ✅ Helper to get category value (for filtering)
  const getCategoryValue = (category: string | CategoryObject): string => {
    if (typeof category === 'string') {
      return category;
    }
    return category.name;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-primary" />
          <h3 className="font-semibold text-text">Filters</h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <X size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange({ category: undefined })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeFilters.category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category, index) => {
              const categoryName = getCategoryName(category);
              const categoryValue = getCategoryValue(category);

              return (
                <button
                  key={index}
                  onClick={() => onFilterChange({ category: categoryValue })}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilters.category === categoryValue
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoryName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dietary preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dietary Preferences
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onFilterChange({
                  is_vegetarian: activeFilters.is_vegetarian ? undefined : true,
                })
              }
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilters.is_vegetarian
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf size={16} />
              <span>Vegetarian</span>
            </button>

            <button
              onClick={() =>
                onFilterChange({
                  is_vegan: activeFilters.is_vegan ? undefined : true,
                })
              }
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilters.is_vegan
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Leaf size={16} />
              <span>Vegan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
```

---

## 📄 src\components\menu\MenuItemCard.tsx

_Path: `src\components\menu\MenuItemCard.tsx`_

```tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@types/menu.types';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { formatCurrency } from '@utils/formatters';
import { getImageUrl, handleImageError } from '@utils/images';
import {
  Plus,
  Minus,
  ShoppingCart,
  Leaf,
  AlertCircle,
  LogIn,
  Utensils,
} from 'lucide-react';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import { useToast } from '@components/common/Toast';

interface MenuItemCardProps {
  item: MenuItem;
  showQuickAdd?: boolean;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  showQuickAdd = true,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { addToCart, isUpdating } = useCart();
  const { isAuthenticated } = useAuthStore();
  const { showToast } = useToast();

  const handleAddToCart = async () => {
    if (!item.id) {
      console.error('❌ Item missing ID:', item);
      showToast('Error: Item data is invalid', 'error');
      return;
    }

    if (!isAuthenticated) {
      showToast('Please login to add items to cart', 'warning');
      navigate('/login');
      return;
    }

    if (quantity > 0) {
      try {
        await addToCart(item, quantity, specialInstructions);
        setQuantity(1);
        setSpecialInstructions('');
        setShowDetails(false);
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Get the proper image URL
  const imageUrl = getImageUrl(item.image_url);

  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    handleImageError(e);
  };

  const onImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
      padding="none"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex flex-col items-center justify-center">
            <Utensils className="text-gray-400 mb-2" size={32} />
            <span className="text-gray-400 text-sm">Loading...</span>
          </div>
        )}

        {/* Actual image */}
        <img
          src={imageUrl}
          alt={item.name}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? 'opacity-100 hover:scale-110' : 'opacity-0'
          }`}
          onLoad={onImageLoad}
          onError={onImageError}
          loading="lazy"
        />

        {/* Availability badge */}
        {!item.is_available && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
              Sold Out
            </span>
          </div>
        )}

        {/* Dietary badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {item.is_vegetarian && (
            <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
              <Leaf size={16} />
            </div>
          )}
          {item.is_vegan && (
            <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              VEGAN
            </div>
          )}
          {item.is_halal && (
            <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              HALAL
            </div>
          )}
        </div>

        {/* Spice level indicator */}
        {item.spice_level && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-white px-2 py-1 rounded-full shadow-md text-xs font-semibold">
              {item.spice_level === 'mild' && '🌶️ Mild'}
              {item.spice_level === 'medium' && '🌶️🌶️ Medium'}
              {item.spice_level === 'hot' && '🌶️🌶️🌶️ Hot'}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category tag */}
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-2">
          {item.category}
        </span>

        {/* Name and description */}
        <h3 className="font-heading text-xl font-bold text-text mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Allergens warning */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="flex items-start space-x-2 mb-3 text-xs text-orange-700 bg-orange-50 p-2 rounded">
            <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
            <span>Contains: {item.allergens.join(', ')}</span>
          </div>
        )}

        {/* Price and action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="font-heading text-2xl font-bold text-primary">
              {formatCurrency(item.price)}
            </span>
            {item.serving_size && (
              <span className="text-sm text-gray-500">
                / {item.serving_size}
              </span>
            )}
          </div>

          {showQuickAdd && item.is_available && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                if (!isAuthenticated) {
                  showToast('Please login to add items to cart', 'warning');
                  navigate('/login');
                } else {
                  setShowDetails(true);
                }
              }}
              disabled={isUpdating || !item.id}
            >
              {!isAuthenticated ? (
                <>
                  <LogIn size={16} className="mr-1" />
                  Login
                </>
              ) : (
                <>
                  <ShoppingCart size={16} className="mr-1" />
                  Add
                </>
              )}
            </Button>
          )}
        </div>

        {/* Expanded details */}
        {showDetails && isAuthenticated && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
            {/* Quantity selector */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-semibold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Special instructions */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={2}
                placeholder="e.g., Extra spicy, no onions..."
              />
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAddToCart}
                className="flex-1"
                disabled={isUpdating || !item.id}
              >
                {isUpdating
                  ? 'Adding...'
                  : `Add to Cart • ${formatCurrency(item.price * quantity)}`}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MenuItemCard;
```

---

## 📄 src\components\menu\MenuItemGrid.tsx

_Path: `src\components\menu\MenuItemGrid.tsx`_

```tsx
import React from 'react';

interface MenuItemGridProps {
  // Add props here
}

export const MenuItemGrid: React.FC<MenuItemGridProps> = (props) => {
  return <div>{/* MenuItemGrid Component */}</div>;
};
```

---

## 📄 src\components\menu\SidelinesPanel.tsx

_Path: `src\components\menu\SidelinesPanel.tsx`_

```tsx
import React from 'react';

interface SidelinesPanelProps {
  // Add props here
}

export const SidelinesPanel: React.FC<SidelinesPanelProps> = (props) => {
  return <div>{/* SidelinesPanel Component */}</div>;
};
```

---

## 📄 src\components\profile\AddressCard.tsx

_Path: `src\components\profile\AddressCard.tsx`_

```tsx
import React, { useState } from 'react';
import { useAddressStore } from '@store/addressStore';
import { useToast } from '@components/common/Toast';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import { MapPin, Edit, Trash2, Check } from 'lucide-react';
import { Address } from '@types/address.types';

interface AddressCardProps {
  address: Address;
}

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  const { setDefaultAddress, deleteAddress, isLoading } = useAddressStore();
  const { showToast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSetDefault = async () => {
    try {
      await setDefaultAddress(address._id);
      showToast('Default address updated', 'success');
    } catch (error: any) {
      showToast(error.message || 'Failed to update default address', 'error');
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this address?')) return;

    setIsDeleting(true);
    try {
      await deleteAddress(address._id);
      showToast('Address deleted successfully', 'success');
    } catch (error: any) {
      showToast(error.message || 'Failed to delete address', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card
      padding="lg"
      className={`relative ${
        address.is_default ? 'ring-2 ring-primary border-primary' : ''
      }`}
    >
      {address.is_default && (
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
          <Check size={14} />
          <span>Default</span>
        </div>
      )}

      <div className="flex items-start space-x-3 mb-4">
        <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
        <div className="flex-1">
          <h3 className="font-semibold text-text text-lg mb-2">
            {address.label}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {address.street}
            <br />
            {address.suburb}, {address.state} {address.postcode}
          </p>

          {address.delivery_instructions && (
            <p className="text-gray-500 text-xs mt-2 italic">
              📝 {address.delivery_instructions}
            </p>
          )}
        </div>
      </div>

      <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-100">
        {!address.is_default && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleSetDefault}
            disabled={isLoading}
            className="flex-1"
          >
            Set as Default
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          disabled={isDeleting}
          onClick={handleDelete}
          className="text-red-600 hover:bg-red-50"
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </Card>
  );
};

export default AddressCard;
```

---

## 📄 src\components\profile\AddressManager.tsx

_Path: `src\components\profile\AddressManager.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useAddressStore } from '@store/addressStore';
import { useToast } from '@components/common/Toast';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Modal from '@components/common/Modal';
import AddressCard from './AddressCard';
import { Plus } from 'lucide-react';
import Input from '@components/common/Input';

const AddressManager: React.FC = () => {
  const { addresses, fetchAddresses, addAddress, isLoading } =
    useAddressStore();
  const { showToast } = useToast();

  const [showAddModal, setShowAddModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: '',
    street: '',
    suburb: '',
    postcode: '',
    state: 'NSW',
    is_default: false,
    delivery_instructions: '',
  });

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addAddress(newAddress);
      showToast('Address added successfully', 'success');
      setShowAddModal(false);
      setNewAddress({
        label: '',
        street: '',
        suburb: '',
        postcode: '',
        state: 'NSW',
        is_default: false,
        delivery_instructions: '',
      });
    } catch (error: any) {
      showToast(error.message || 'Failed to add address', 'error');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-text">
          My Addresses
        </h2>
        <Button
          variant="primary"
          onClick={() => setShowAddModal(true)}
          size="md"
        >
          <Plus size={20} className="mr-2" />
          Add New Address
        </Button>
      </div>

      {isLoading ? (
        <Card padding="lg">
          <p className="text-center text-gray-500">Loading addresses...</p>
        </Card>
      ) : addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
        </div>
      ) : (
        <Card padding="lg">
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No addresses saved yet</p>
            <Button variant="outline" onClick={() => setShowAddModal(true)}>
              Add Your First Address
            </Button>
          </div>
        </Card>
      )}

      {/* Add Address Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Address"
      >
        <form onSubmit={handleAddAddress} className="space-y-4">
          <Input
            type="text"
            label="Label"
            value={newAddress.label}
            onChange={(e) =>
              setNewAddress({ ...newAddress, label: e.target.value })
            }
            placeholder="Home, Work, etc."
            required
          />

          <Input
            type="text"
            label="Street Address"
            value={newAddress.street}
            onChange={(e) =>
              setNewAddress({ ...newAddress, street: e.target.value })
            }
            placeholder="123 Main St"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Suburb"
              value={newAddress.suburb}
              onChange={(e) =>
                setNewAddress({ ...newAddress, suburb: e.target.value })
              }
              placeholder="Guildford"
              required
            />

            <Input
              type="text"
              label="Postcode"
              value={newAddress.postcode}
              onChange={(e) =>
                setNewAddress({ ...newAddress, postcode: e.target.value })
              }
              placeholder="2161"
              required
              maxLength={4}
            />
          </div>

          <Input
            type="text"
            label="Delivery Instructions (Optional)"
            value={newAddress.delivery_instructions}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                delivery_instructions: e.target.value,
              })
            }
            placeholder="Leave at door, ring bell, etc."
          />

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={newAddress.is_default}
              onChange={(e) =>
                setNewAddress({ ...newAddress, is_default: e.target.checked })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">
              Set as default address
            </span>
          </label>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowAddModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Add Address
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddressManager;
```

---

## 📄 src\components\profile\OrderHistory.tsx

_Path: `src\components\profile\OrderHistory.tsx`_

```tsx
import React, { useEffect } from 'react';
import { useOrderStore } from '@store/orderStore';
import { formatCurrency, formatDate } from '@utils/formatters';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { Package, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderHistory: React.FC = () => {
  const { orderHistory, fetchOrderHistory, isLoadingHistory } = useOrderStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderHistory();
  }, [fetchOrderHistory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      case 'pending':
      case 'confirmed':
        return 'text-blue-600 bg-blue-50';
      case 'preparing':
      case 'out_for_delivery':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={16} />;
      case 'cancelled':
        return <XCircle size={16} />;
      case 'preparing':
      case 'out_for_delivery':
        return <Clock size={16} />;
      default:
        return <Package size={16} />;
    }
  };

  if (isLoadingHistory) {
    return (
      <Card padding="lg">
        <LoadingSpinner message="Loading order history..." />
      </Card>
    );
  }

  if (orderHistory.length === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-12">
          <Package className="mx-auto h-20 w-20 text-gray-300 mb-4" />
          <h3 className="font-semibold text-gray-500 mb-2">No orders yet</h3>
          <p className="text-sm text-gray-400 mb-6">
            Start ordering to see your order history
          </p>
          <Button variant="primary" onClick={() => navigate('/menu/daily')}>
            Browse Menu
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-text">
        Order History
      </h2>

      <div className="space-y-4">
        {orderHistory.map((order) => (
          <Card
            key={order._id}
            padding="lg"
            className="hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-text">
                    Order #{order._id.slice(-8).toUpperCase()}
                  </h3>
                  <span
                    className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="capitalize">
                      {order.status.replace('_', ' ')}
                    </span>
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {formatDate(order.created_at)} •{' '}
                  {order.items.length + order.sidelines.length} items
                </p>

                <div className="space-y-1">
                  {order.items.slice(0, 2).map((item, index) => (
                    <p key={index} className="text-sm text-gray-700">
                      {item.quantity}x {item.menu_item.name}
                    </p>
                  ))}
                  {order.items.length > 2 && (
                    <p className="text-sm text-gray-500">
                      +{order.items.length - 2} more items
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end space-y-3">
                <div className="text-right">
                  <p className="font-heading text-2xl font-bold text-primary">
                    {formatCurrency(order.total)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {order.delivery_option === 'delivery'
                      ? 'Delivery'
                      : 'Pickup'}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/orders/${order._id}`)}
                >
                  <Eye size={16} className="mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
```

---

## 📄 src\components\profile\ProfileForm.tsx

_Path: `src\components\profile\ProfileForm.tsx`_

```tsx
import React, { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import { User, Mail, Phone, Save } from 'lucide-react';

const ProfileForm: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    full_name: user?.full_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await updateProfile(formData);
      showToast('Profile updated successfully', 'success');
    } catch (error: any) {
      showToast(error.message || 'Failed to update profile', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card padding="lg">
      <h2 className="font-heading text-2xl font-bold text-text mb-6">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          label="Full Name"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          leftIcon={<User size={20} />}
          placeholder="John Doe"
          required
        />

        <Input
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          leftIcon={<Mail size={20} />}
          placeholder="you@example.com"
          required
        />

        <Input
          type="tel"
          label="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          leftIcon={<Phone size={20} />}
          placeholder="04XX XXX XXX"
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          disabled={isLoading}
        >
          <Save size={20} className="mr-2" />
          Save Changes
        </Button>
      </form>
    </Card>
  );
};

export default ProfileForm;
```

---

## 📄 src\components\subscription\DeliverySchedule.tsx

_Path: `src\components\subscription\DeliverySchedule.tsx`_

```tsx
import React from 'react';

interface DeliveryScheduleProps {
  // Add props here
}

export const DeliverySchedule: React.FC<DeliveryScheduleProps> = (props) => {
  return <div>{/* DeliverySchedule Component */}</div>;
};
```

---

## 📄 src\components\subscription\MealSelection.tsx

_Path: `src\components\subscription\MealSelection.tsx`_

```tsx
import React from 'react';

interface MealSelectionProps {
  // Add props here
}

export const MealSelection: React.FC<MealSelectionProps> = (props) => {
  return <div>{/* MealSelection Component */}</div>;
};
```

---

## 📄 src\components\subscription\SubscriptionPlans.tsx

_Path: `src\components\subscription\SubscriptionPlans.tsx`_

```tsx
import React from 'react';

interface SubscriptionPlansProps {
  // Add props here
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = (props) => {
  return <div>{/* SubscriptionPlans Component */}</div>;
};
```

---

## 📄 src\components\subscription\SubscriptionSummary.tsx

_Path: `src\components\subscription\SubscriptionSummary.tsx`_

```tsx
import React from 'react';

interface SubscriptionSummaryProps {
  // Add props here
}

export const SubscriptionSummary: React.FC<SubscriptionSummaryProps> = (
  props
) => {
  return <div>{/* SubscriptionSummary Component */}</div>;
};
```

---

## 📄 src\hooks\useAuth.ts

_Path: `src\hooks\useAuth.ts`_

```typescript
import { useAuthStore } from '@store/authStore';

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
  } = useAuthStore();

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
  };
};
```

---

## 📄 src\hooks\useCart.ts

_Path: `src\hooks\useCart.ts`_

```typescript
import { useEffect } from 'react';
import { useCartStore } from '@store/cartStore';
import { useAuthStore } from '@store/authStore';
import { useToast } from '@components/common/Toast';
import { MenuItem, Sideline } from '@types/menu.types';

export const useCart = () => {
  const cartStore = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const { showToast } = useToast();

  // Fetch cart on mount if authenticated
  useEffect(() => {
    if (isAuthenticated && !cartStore.cartSummary && !cartStore.isLoading) {
      cartStore.fetchCart().catch(console.error);
    }
  }, [isAuthenticated]);

  /**
   * Add menu item to cart
   */
  const addToCart = async (
    menuItem: MenuItem,
    quantity: number = 1,
    specialInstructions?: string
  ) => {
    if (!isAuthenticated) {
      // For unauthenticated users, use local cart
      cartStore.addLocalItem(menuItem, quantity, specialInstructions);
      showToast(`${menuItem.name} added to cart!`, 'success');
      return;
    }

    try {
      await cartStore.addItem(menuItem, quantity, specialInstructions);
      showToast(`${menuItem.name} added to cart!`, 'success');
    } catch (error) {
      showToast('Failed to add item to cart', 'error');
    }
  };

  /**
   * Add sideline to cart
   */
  const addSideline = async (sideline: Sideline, quantity: number = 1) => {
    if (!isAuthenticated) {
      showToast('Please login to add items to cart', 'warning');
      return;
    }

    try {
      await cartStore.addSideline(sideline, quantity);
      showToast(`${sideline.name} added to cart!`, 'success');
    } catch (error) {
      showToast('Failed to add sideline to cart', 'error');
    }
  };

  /**
   * Remove item from cart
   */
  const removeFromCart = async (
    itemId: string,
    isSideline: boolean = false
  ) => {
    if (!isAuthenticated) {
      cartStore.removeLocalItem(itemId);
      showToast('Item removed from cart', 'info');
      return;
    }

    try {
      await cartStore.removeItem(itemId, isSideline);
      showToast('Item removed from cart', 'info');
    } catch (error) {
      showToast('Failed to remove item', 'error');
    }
  };

  /**
   * Update cart item quantity
   */
  const updateCartQuantity = async (
    itemId: string,
    quantity: number,
    isSideline: boolean = false
  ) => {
    if (!isAuthenticated) {
      cartStore.updateLocalQuantity(itemId, quantity);
      if (quantity === 0) {
        showToast('Item removed from cart', 'info');
      }
      return;
    }

    try {
      await cartStore.updateQuantity(itemId, quantity, isSideline);
      if (quantity === 0) {
        showToast('Item removed from cart', 'info');
      }
    } catch (error) {
      showToast('Failed to update quantity', 'error');
    }
  };

  /**
   * Clear the cart
   */
  const clearCart = async () => {
    if (!isAuthenticated) {
      cartStore.clearLocalCart();
      showToast('Cart cleared', 'info');
      return;
    }

    try {
      await cartStore.clearCart();
      showToast('Cart cleared', 'info');
    } catch (error) {
      showToast('Failed to clear cart', 'error');
    }
  };

  // Get cart data based on authentication status
  const cartSummary = isAuthenticated
    ? cartStore.cartSummary
    : cartStore.getLocalSummary();
  const items = isAuthenticated
    ? cartStore.cartSummary?.items || []
    : cartStore.localItems;
  const sidelines = isAuthenticated
    ? cartStore.cartSummary?.sidelines || []
    : cartStore.localSidelines;

  // Return formatted data for components
  return {
    // Cart items
    items,
    sidelines,

    // Summary
    summary: {
      item_count: cartSummary?.items_count || 0,
      subtotal: cartSummary?.subtotal || 0,
      delivery_fee: cartSummary?.delivery_fee || 0,
      tax: (cartSummary?.subtotal || 0) * 0.1, // 10% GST
      total: cartSummary?.total || 0,
    },

    // Loading states
    isLoading: cartStore.isLoading,
    isUpdating: cartStore.isUpdating,

    // Local state
    orderType: cartStore.orderType,
    deliveryOption: cartStore.deliveryOption,

    // Actions
    addToCart,
    addSideline,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    refreshCart: cartStore.fetchCart,
    setOrderType: cartStore.setOrderType,
    setDeliveryOption: cartStore.setDeliveryOption,
  };
};
```

---

## 📄 src\hooks\useDebounce.ts

_Path: `src\hooks\useDebounce.ts`_

```typescript
import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

---

## 📄 src\hooks\useMenu.ts

_Path: `src\hooks\useMenu.ts`_

```typescript
import { useEffect } from 'react';
import { useMenuStore } from '@store/menuStore';

export const useMenu = (
  orderType?: 'daily_menu' | 'weekly_subscription' | 'special_catering'
) => {
  const menuStore = useMenuStore();

  useEffect(() => {
    if (orderType === 'daily_menu') {
      menuStore.fetchDailyMenu();
    } else if (orderType === 'weekly_subscription') {
      menuStore.fetchWeeklyMenu();
    } else if (orderType === 'special_catering') {
      menuStore.fetchCateringMenu();
    }

    menuStore.fetchSidelines();
    menuStore.fetchCategories();
  }, [orderType]);

  return menuStore;
};
```

---

## 📄 src\hooks\useOrders.ts

_Path: `src\hooks\useOrders.ts`_

```typescript
import { useEffect } from 'react';
import { useOrderStore } from '@store/orderStore';
import { useToast } from './useToast'; // This will now properly import from Toast component

export const useOrders = () => {
  const orderStore = useOrderStore();
  const { showToast } = useToast();

  useEffect(() => {
    if (orderStore.orderHistory.length === 0) {
      orderStore.fetchOrderHistory();
    }
  }, []);

  const placeOrder = async (payload: any) => {
    try {
      const order = await orderStore.createOrder(payload);
      showToast('Order placed successfully!', 'success');
      return order;
    } catch (error: any) {
      showToast(error.message || 'Failed to place order', 'error');
      throw error;
    }
  };

  const cancelOrder = async (orderId: string, reason: string) => {
    try {
      await orderStore.cancelOrder(orderId, reason);
      showToast('Order cancelled successfully', 'success');
    } catch (error: any) {
      showToast(error.message || 'Failed to cancel order', 'error');
      throw error;
    }
  };

  return {
    ...orderStore,
    placeOrder,
    cancelOrder,
  };
};
```

---

## 📄 src\hooks\useToast.ts

_Path: `src\hooks\useToast.ts`_

```typescript
// src/hooks/useToast.ts
// Simply re-export the useToast hook from the Toast component
export { useToast, ToastProvider } from '@components/common/Toast';
```

---

## 📄 src\pages\admin\AdminDashboard.tsx

_Path: `src\pages\admin\AdminDashboard.tsx`_

```tsx
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
  Users,
  AlertCircle,
} from 'lucide-react';

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
    pending_orders: 0,
    completed_orders: 0,
    cancelled_orders: 0,
    today_revenue: 0,
    weekly_revenue: 0,
    monthly_revenue: 0,
    total_revenue: 0,
  };

  const statsCards = [
    {
      title: 'Total Orders',
      value: stats.total_orders || 0,
      icon: <ShoppingBag size={32} />,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+12%',
    },
    {
      title: 'Pending Orders',
      value: stats.pending_orders || 0,
      icon: <Clock size={32} />,
      color: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '-3%',
    },
    {
      title: "Today's Revenue",
      value: formatCurrency(stats.today_revenue || 0),
      icon: <DollarSign size={32} />,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+25%',
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(stats.total_revenue || 0),
      icon: <TrendingUp size={32} />,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+18%',
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
      count: 15,
      icon: <Package size={24} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Out for Delivery',
      count: 8,
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

  return (
    <div className="min-h-screen bg-[#F9F9F9] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

        {/* Quick Actions & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart Placeholder */}
          <div className="lg:col-span-2">
            <Card>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-6">
                Weekly Revenue
              </h3>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
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
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Growth</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="text-purple-600" size={20} />
                    <p className="font-['Playfair_Display'] text-2xl font-bold text-purple-600">
                      +12%
                    </p>
                  </div>
                </div>
              </div>

              {/* Simple bar chart mockup */}
              <div className="space-y-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (day, i) => {
                    const revenue = [450, 680, 520, 890, 1100, 950, 780][i];
                    const width = (revenue / 1100) * 100;
                    return (
                      <div key={day} className="flex items-center space-x-4">
                        <div className="w-12 text-sm font-medium text-gray-700">
                          {day}
                        </div>
                        <div className="flex-1">
                          <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-lg flex items-center justify-end px-3 transition-all duration-500"
                              style={{ width: `${width}%` }}
                            >
                              <span className="text-white font-semibold text-sm">
                                {formatCurrency(revenue)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-6">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/admin/orders')}
                  className="w-full"
                >
                  <ShoppingBag size={18} className="mr-2 inline" />
                  View All Orders
                </Button>

                <button
                  onClick={() => navigate('/admin/menu')}
                  className="w-full px-6 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
                >
                  <Package size={18} className="mr-2 inline" />
                  Manage Menu
                </button>

                <button
                  onClick={() => navigate('/admin/sidelines')}
                  className="w-full px-6 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors"
                >
                  <TrendingUp size={18} className="mr-2 inline" />
                  Manage Sidelines
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-[#2E2E2E] mb-4">
                  Performance Summary
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Completed Orders:</span>
                    <span className="font-semibold text-green-600">
                      {stats.completed_orders || 0}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cancelled Orders:</span>
                    <span className="font-semibold text-red-600">
                      {stats.cancelled_orders || 0}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-blue-600">
                      {stats.total_orders
                        ? (
                            ((stats.completed_orders || 0) /
                              stats.total_orders) *
                            100
                          ).toFixed(1)
                        : 0}
                      %
                    </span>
                  </div>
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
```

---

## 📄 src\pages\admin\MenuManagement.tsx

_Path: `src\pages\admin\MenuManagement.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { MenuItemsList } from '@components/admin/menu/MenuItemsList';
import { AddMenuItem } from '@components/admin/menu/AddMenuItem';
import { EditMenuItem } from '@components/admin/menu/EditMenuItem';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Modal from '@components/common/Modal';
import Input from '@components/common/Input';
import { Plus, Search, Filter, RefreshCcw } from 'lucide-react';
import { MenuItem } from '@types/menu.types';

const MenuManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    managedMenuItems,
    managedCategories,
    fetchManagedMenuItems,
    fetchManagedCategories,
    deleteMenuItem,
    isLoading,
  } = useAdminStore();

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      await Promise.all([fetchManagedMenuItems(), fetchManagedCategories()]);
    } catch (error) {
      showToast('Failed to load menu data', 'error');
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
    showToast('Menu items refreshed', 'success');
  };

  const handleDelete = async (itemId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this menu item? This action cannot be undone.'
      )
    ) {
      return;
    }

    try {
      await deleteMenuItem(itemId);
      showToast('Menu item deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete menu item', 'error');
    }
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
  };

  const handleCloseEdit = () => {
    setEditingItem(null);
    loadData();
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
    loadData();
  };

  // Filter menu items based on search and category
  const filteredItems = managedMenuItems.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === '' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (isLoading && managedMenuItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading menu items..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-text mb-2">
              Menu Management
            </h1>
            <p className="text-gray-600">Manage your restaurant menu items</p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCcw
                size={18}
                className={`mr-2 ${refreshing ? 'animate-spin' : ''}`}
              />
              Refresh
            </Button>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setShowAddModal(true)}
            >
              <Plus size={20} className="mr-2" />
              Add Menu Item
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {managedMenuItems.length}
              </h3>
              <p className="text-sm text-gray-600">Total Items</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                {managedMenuItems.filter((item) => item.is_available).length}
              </h3>
              <p className="text-sm text-gray-600">Available</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                {managedMenuItems.filter((item) => !item.is_available).length}
              </h3>
              <p className="text-sm text-gray-600">Unavailable</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">
                {managedCategories.length}
              </h3>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card padding="lg" className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  <option value="">All Categories</option>
                  {managedCategories.map((cat) => (
                    <option key={cat._id || cat.name} value={cat.name}>
                      {cat.display_name || cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory) && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                  Search: {searchQuery}
                </span>
              )}
              {selectedCategory && (
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary rounded-full text-sm">
                  Category: {selectedCategory}
                </span>
              )}
              <span className="text-sm text-gray-600 ml-2">
                ({filteredItems.length} results)
              </span>
            </div>
          )}
        </Card>

        {/* Menu Items List */}
        <MenuItemsList
          items={filteredItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />

        {/* Add Modal */}
        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Menu Item"
          size="lg"
        >
          <AddMenuItem
            onSuccess={handleCloseAdd}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={!!editingItem}
          onClose={() => setEditingItem(null)}
          title="Edit Menu Item"
          size="lg"
        >
          {editingItem && (
            <EditMenuItem
              item={editingItem}
              onSuccess={handleCloseEdit}
              onCancel={() => setEditingItem(null)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MenuManagement;
```

---

## 📄 src\pages\admin\OrderManagement.tsx

_Path: `src\pages\admin\OrderManagement.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { OrdersList } from '@components/admin/orders/OrdersList';
import { OrderDetails } from '@components/admin/orders/OrderDetails';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Modal from '@components/common/Modal';
import { Filter, RefreshCcw, Calendar, Download } from 'lucide-react';
import { Order } from '@types/order.types';

const OrderManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    allOrders,
    fetchAllOrders,
    updateOrderStatus,
    isLoading,
    isUpdating,
  } = useAdminStore();

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    date: '',
    order_type: '',
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      await fetchAllOrders(filters);
    } catch (error) {
      showToast('Failed to load orders', 'error');
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadOrders();
    setRefreshing(false);
    showToast('Orders refreshed', 'success');
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleApplyFilters = () => {
    loadOrders();
  };

  const handleClearFilters = () => {
    setFilters({ status: '', date: '', order_type: '' });
    fetchAllOrders();
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      showToast(`Order status updated to ${newStatus}`, 'success');
      loadOrders();
    } catch (error) {
      showToast('Failed to update order status', 'error');
    }
  };

  const handleExportOrders = () => {
    // Implementation for exporting orders to CSV
    showToast('Export feature coming soon', 'info');
  };

  if (isLoading && allOrders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading orders..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-text mb-2">
              Order Management
            </h1>
            <p className="text-gray-600">
              Manage and track all customer orders
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="md"
              onClick={handleExportOrders}
              disabled={allOrders.length === 0}
            >
              <Download size={18} className="mr-2" />
              Export
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCcw
                size={18}
                className={`mr-2 ${refreshing ? 'animate-spin' : ''}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card padding="lg" className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-primary" />
            <h3 className="font-semibold text-text">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="preparing">Preparing</option>
                <option value="out_for_delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Order Type Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Order Type
              </label>
              <select
                value={filters.order_type}
                onChange={(e) =>
                  handleFilterChange('order_type', e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="daily_menu">Daily Menu</option>
                <option value="weekly_subscription">Weekly Subscription</option>
                <option value="special_catering">Special Catering</option>
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Date
              </label>
              <input
                type="date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Actions */}
            <div className="flex items-end space-x-2">
              <Button
                variant="primary"
                onClick={handleApplyFilters}
                className="flex-1"
              >
                Apply
              </Button>
              <Button variant="ghost" onClick={handleClearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </Card>

        {/* Orders List */}
        <OrdersList
          orders={allOrders}
          onViewOrder={handleViewOrder}
          onStatusUpdate={handleStatusUpdate}
          isLoading={isLoading}
          isUpdating={isUpdating}
        />

        {/* Order Details Modal */}
        <Modal
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
          title="Order Details"
          size="xl"
        >
          {selectedOrder && (
            <OrderDetails
              order={selectedOrder}
              onStatusUpdate={handleStatusUpdate}
              onClose={() => setShowDetailsModal(false)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default OrderManagement;
```

---

## 📄 src\pages\admin\SidelinesManagement.tsx

_Path: `src\pages\admin\SidelinesManagement.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import { SidelinesList } from '@components/admin/sidelines/SidelinesList';
import { AddSideline } from '@components/admin/sidelines/AddSideline';
import { EditSideline } from '@components/admin/sidelines/EditSideline';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { Plus, Search } from 'lucide-react';
import { Sideline } from '@types/menu.types';

const SidelinesManagement: React.FC = () => {
  const { showToast } = useToast();
  const { managedSidelines, fetchManagedSidelines, deleteSideline, isLoading } =
    useAdminStore();

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSideline, setEditingSideline] = useState<Sideline | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadSidelines();
  }, []);

  const loadSidelines = async () => {
    try {
      await fetchManagedSidelines();
    } catch (error) {
      showToast('Failed to load sidelines', 'error');
    }
  };

  const handleDelete = async (sidelineId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this sideline? This action cannot be undone.'
      )
    ) {
      return;
    }

    try {
      await deleteSideline(sidelineId);
      showToast('Sideline deleted successfully', 'success');
    } catch (error) {
      showToast('Failed to delete sideline', 'error');
    }
  };

  const handleEdit = (sideline: Sideline) => {
    setEditingSideline(sideline);
  };

  const handleCloseEdit = () => {
    setEditingSideline(null);
    loadSidelines();
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
    loadSidelines();
  };

  // Filter sidelines based on search
  const filteredSidelines = managedSidelines.filter((sideline) =>
    sideline.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading && managedSidelines.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading sidelines..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-text mb-2">
              Sidelines Management
            </h1>
            <p className="text-gray-600">
              Manage add-ons and side items for orders
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={20} className="mr-2" />
            Add Sideline
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search sidelines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Sidelines List */}
        <SidelinesList
          sidelines={filteredSidelines}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />

        {/* Add Modal */}
        <Modal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Sideline"
          size="lg"
        >
          <AddSideline
            onSuccess={handleCloseAdd}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal>

        {/* Edit Modal */}
        <Modal
          isOpen={!!editingSideline}
          onClose={() => setEditingSideline(null)}
          title="Edit Sideline"
          size="lg"
        >
          {editingSideline && (
            <EditSideline
              sideline={editingSideline}
              onSuccess={handleCloseEdit}
              onCancel={() => setEditingSideline(null)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default SidelinesManagement;
```

---

## 📄 src\pages\customer\CateringPage.tsx

_Path: `src\pages\customer\CateringPage.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '@hooks/useMenu';
import { useCartStore } from '@store/cartStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import { Calendar, Users, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@components/common/Toast';
import { formatCurrency } from '@utils/formatters';

interface CateringPackage {
  id: string;
  name: string;
  price_per_head: number;
  description: string;
  rules: {
    rice: number;
    gravy: number;
    bbq?: number;
    dessert?: number;
  };
}

const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price_per_head: 25,
    description: 'Perfect for casual gatherings',
    rules: { rice: 1, gravy: 1 },
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price_per_head: 35,
    description: 'Ideal for special occasions',
    rules: { rice: 1, gravy: 2, bbq: 1 },
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price_per_head: 50,
    description: 'Ultimate luxury experience',
    rules: { rice: 2, gravy: 2, bbq: 2, dessert: 1 },
  },
];

const CateringPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const {
    cateringMenuItems,
    categories,
    activeFilters,
    isLoading,
    setFilters,
    clearFilters,
    getFilteredItems,
  } = useMenu('special_catering');

  const { setOrderType } = useCartStore();

  const [selectedPackage, setSelectedPackage] =
    useState<CateringPackage | null>(null);
  const [eventDetails, setEventDetails] = useState({
    event_date: '',
    event_time: '',
    head_count: 10,
    event_type: 'Birthday Party',
    venue_address: '',
    special_requirements: '',
    contact_name: '',
    contact_phone: '',
    contact_email: '',
  });
  const [selectedItems, setSelectedItems] = useState<{
    [category: string]: string[];
  }>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setOrderType('special_catering');
  }, []);

  const filteredItems = getFilteredItems('special_catering');

  const handlePackageSelect = (pkg: CateringPackage) => {
    setSelectedPackage(pkg);
    setSelectedItems({});
    showToast(`${pkg.name} selected`, 'success');
  };

  const handleItemSelect = (category: string, itemId: string) => {
    if (!selectedPackage) {
      showToast('Please select a package first', 'warning');
      return;
    }

    const categoryKey = category.toLowerCase();
    const maxItems =
      selectedPackage.rules[
        categoryKey as keyof typeof selectedPackage.rules
      ] || 0;

    if (maxItems === 0) {
      showToast(`${category} not included in this package`, 'warning');
      return;
    }

    const currentItems = selectedItems[category] || [];

    if (currentItems.includes(itemId)) {
      setSelectedItems({
        ...selectedItems,
        [category]: currentItems.filter((id) => id !== itemId),
      });
    } else {
      if (currentItems.length >= maxItems) {
        showToast(`Maximum ${maxItems} ${category} items allowed`, 'warning');
        return;
      }
      setSelectedItems({
        ...selectedItems,
        [category]: [...currentItems, itemId],
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!eventDetails.event_date)
      newErrors.event_date = 'Event date is required';
    if (!eventDetails.event_time)
      newErrors.event_time = 'Event time is required';
    if (eventDetails.head_count < 10)
      newErrors.head_count = 'Minimum 10 guests required';
    if (!eventDetails.venue_address.trim())
      newErrors.venue_address = 'Venue address is required';
    if (!eventDetails.contact_name.trim())
      newErrors.contact_name = 'Contact name is required';
    if (!eventDetails.contact_phone.trim())
      newErrors.contact_phone = 'Contact phone is required';
    if (!eventDetails.contact_email.trim())
      newErrors.contact_email = 'Contact email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToCheckout = () => {
    if (!selectedPackage) {
      showToast('Please select a catering package', 'error');
      return;
    }

    if (!validateForm()) {
      showToast('Please fill in all required event details', 'error');
      return;
    }

    // Check if all required items are selected
    const packageRules = selectedPackage.rules;
    for (const [category, count] of Object.entries(packageRules)) {
      const selectedCount = (
        selectedItems[category.charAt(0).toUpperCase() + category.slice(1)] ||
        []
      ).length;
      if (selectedCount < count) {
        showToast(`Please select ${count} ${category} items`, 'error');
        return;
      }
    }

    navigate('/checkout', {
      state: {
        cateringDetails: {
          package: selectedPackage,
          eventDetails,
          selectedItems,
        },
      },
    });
  };

  const totalAmount = selectedPackage
    ? selectedPackage.price_per_head * eventDetails.head_count
    : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading catering menu..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-text mb-4">
            Special Catering Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for weddings, corporate events, parties, and special
            occasions.
            <br />
            <span className="font-semibold text-primary">
              Minimum 10 people
            </span>
          </p>
        </div>

        {/* Package Selection */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-text mb-6">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATERING_PACKAGES.map((pkg) => (
              <Card
                key={pkg.id}
                className={`cursor-pointer transition-all ${
                  selectedPackage?.id === pkg.id
                    ? 'ring-4 ring-primary border-primary shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => handlePackageSelect(pkg)}
                padding="lg"
              >
                {selectedPackage?.id === pkg.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                )}

                <h3 className="font-heading text-2xl font-bold text-text mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {formatCurrency(pkg.price_per_head)}
                  </span>
                  <span className="text-gray-600 ml-2">per person</span>
                </div>

                <ul className="space-y-2 text-sm">
                  {pkg.rules.rice && <li>✓ {pkg.rules.rice} Rice dish</li>}
                  {pkg.rules.gravy && (
                    <li>✓ {pkg.rules.gravy} Gravy dish(es)</li>
                  )}
                  {pkg.rules.bbq && <li>✓ {pkg.rules.bbq} BBQ item(s)</li>}
                  {pkg.rules.dessert && <li>✓ {pkg.rules.dessert} Dessert</li>}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details Form */}
          <div className="lg:col-span-1">
            <Card padding="lg" className="sticky top-24">
              <h2 className="font-heading text-2xl font-bold text-text mb-6">
                Event Details
              </h2>

              <div className="space-y-4">
                <Input
                  type="text"
                  label="Contact Name"
                  value={eventDetails.contact_name}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_name: e.target.value,
                    })
                  }
                  error={errors.contact_name}
                  required
                />

                <Input
                  type="tel"
                  label="Contact Phone"
                  value={eventDetails.contact_phone}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_phone: e.target.value,
                    })
                  }
                  error={errors.contact_phone}
                  required
                />

                <Input
                  type="email"
                  label="Contact Email"
                  value={eventDetails.contact_email}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      contact_email: e.target.value,
                    })
                  }
                  error={errors.contact_email}
                  required
                />

                <Input
                  type="date"
                  label="Event Date"
                  value={eventDetails.event_date}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      event_date: e.target.value,
                    })
                  }
                  error={errors.event_date}
                  min={
                    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split('T')[0]
                  }
                  required
                />

                <Input
                  type="time"
                  label="Event Time"
                  value={eventDetails.event_time}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      event_time: e.target.value,
                    })
                  }
                  error={errors.event_time}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        setEventDetails({
                          ...eventDetails,
                          head_count: Math.max(10, eventDetails.head_count - 5),
                        })
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-semibold text-2xl">
                      {eventDetails.head_count}
                    </span>
                    <button
                      onClick={() =>
                        setEventDetails({
                          ...eventDetails,
                          head_count: eventDetails.head_count + 5,
                        })
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Input
                  type="text"
                  label="Venue Address"
                  value={eventDetails.venue_address}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      venue_address: e.target.value,
                    })
                  }
                  error={errors.venue_address}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    value={eventDetails.special_requirements}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        special_requirements: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>
              </div>

              {selectedPackage && (
                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-medium">
                        {selectedPackage.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Per Head:</span>
                      <span className="font-medium">
                        {formatCurrency(selectedPackage.price_per_head)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-medium">
                        {eventDetails.head_count}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-text">
                          Estimated Total:
                        </span>
                        <span className="font-heading text-3xl font-bold text-primary">
                          {formatCurrency(totalAmount)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={handleProceedToCheckout}
                  >
                    Request Quote
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Menu Selection */}
          <div className="lg:col-span-2 space-y-6">
            {selectedPackage ? (
              <>
                <FilterBar
                  categories={categories}
                  activeFilters={activeFilters}
                  onFilterChange={setFilters}
                  onClearFilters={clearFilters}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <MenuItemCard
                      key={item._id}
                      item={item}
                      showQuickAdd={false}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Card padding="lg">
                <div className="text-center py-16">
                  <Users className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-text mb-2">
                    Select a Package to Continue
                  </h3>
                  <p className="text-gray-600">
                    Choose from our catering packages to start selecting your
                    menu
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringPage;
```

---

## 📄 src\pages\customer\CheckoutPage.tsx

_Path: `src\pages\customer\CheckoutPage.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { useToast } from '@components/common/Toast';
import { ordersAPI } from '@api';
import { formatCurrency } from '@utils/formatters';
import {
  MapPin,
  Calendar,
  ArrowLeft,
  Truck,
  Store,
  CheckCircle,
  CreditCard,
  Package,
  Clock,
  User,
  FileText,
  ShoppingCart,
  Phone,
  Mail,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';

interface CheckoutState {
  cateringDetails?: any;
  subscriptionDetails?: any;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = useAuthStore();
  const {
    items = [],
    sidelines = [],
    summary = {
      item_count: 0,
      subtotal: 0,
      delivery_fee: 0,
      tax: 0,
      total: 0,
    },
    clearCart,
    isLoading: cartLoading,
  } = useCart();
  const { showToast } = useToast();

  const state = (location.state as CheckoutState) || {};
  const { cateringDetails, subscriptionDetails } = state;

  // State
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // New address form state
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: 'Home',
    street: '',
    suburb: '',
    postcode: '',
    state: 'NSW',
    delivery_instructions: '',
  });

  // Initialize customer info from user data
  useEffect(() => {
    if (user) {
      setCustomerInfo({
        name:
          user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`
            : user.full_name || user.email?.split('@')[0] || '',
        email: user.email || '',
        phone: user.phone || '',
      });

      // Set default address if available
      if (user.addresses && user.addresses.length > 0) {
        const defaultAddr = user.addresses.find((addr: any) => addr.is_default);
        setSelectedAddress(defaultAddr || user.addresses[0]);
      }
    }
  }, [user]);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/checkout' } });
      return;
    }

    // Set minimum delivery date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDeliveryDate(tomorrow.toISOString().split('T')[0]);

    // Set default time
    setDeliveryTime('12:00');
  }, [isAuthenticated, navigate]);

  // Helper function to safely get item data
  const getItemData = (item: any) => {
    // Handle different item structures
    if (item.menu_item) {
      return {
        id: item.menu_item.id || item.menu_item._id,
        name: item.menu_item.name || 'Unknown Item',
        price: item.menu_item.price || 0,
        quantity: item.quantity || 1,
      };
    } else if (item.item_name) {
      return {
        id: item.item_id,
        name: item.item_name || 'Unknown Item',
        price: item.price || 0,
        quantity: item.quantity || 1,
      };
    } else {
      return {
        id: item.id || item._id || Math.random().toString(),
        name: item.name || 'Unknown Item',
        price: item.price || 0,
        quantity: item.quantity || 1,
      };
    }
  };

  // Check if cart is empty (excluding loading state)
  const isCartEmpty =
    !cartLoading &&
    (!items || items.length === 0) &&
    !cateringDetails &&
    !subscriptionDetails;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (isCartEmpty) {
      showToast('Your cart is empty', 'error');
      navigate('/menu/daily');
      return;
    }

    if (
      deliveryMethod === 'delivery' &&
      !selectedAddress &&
      !showNewAddressForm
    ) {
      showToast('Please select or add a delivery address', 'error');
      return;
    }

    if (!deliveryDate || !deliveryTime) {
      showToast('Please select delivery/pickup date and time', 'error');
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      showToast('Please fill in all contact information', 'error');
      return;
    }

    setIsProcessing(true);

    try {
      let orderPayload: any = {};

      if (cateringDetails) {
        // Catering order
        orderPayload = {
          package_type: cateringDetails.package.id,
          guest_count: cateringDetails.eventDetails.head_count,
          event_date: cateringDetails.eventDetails.event_date,
          event_time: cateringDetails.eventDetails.event_time,
          venue_address: cateringDetails.eventDetails.venue_address,
          selected_items: cateringDetails.selectedItems,
          special_requests: specialInstructions,
          contact_info: customerInfo,
        };
      } else if (subscriptionDetails) {
        // Weekly subscription order
        orderPayload = {
          menu_selections: subscriptionDetails.meals.reduce(
            (acc: any, meal: any) => {
              acc[meal.id || meal._id] = 1;
              return acc;
            },
            {}
          ),
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_dates: [deliveryDate],
          delivery_address:
            deliveryMethod === 'delivery'
              ? showNewAddressForm
                ? newAddress
                : selectedAddress
              : null,
          is_express: false,
          delivery_instructions: specialInstructions,
          notes: '',
        };
      } else {
        // Daily order
        orderPayload = {
          items:
            items?.map((item: any) => {
              const itemData = getItemData(item);
              return {
                item_id: itemData.id,
                quantity: itemData.quantity,
              };
            }) || [],
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_method: deliveryMethod,
          delivery_address:
            deliveryMethod === 'delivery'
              ? showNewAddressForm
                ? newAddress
                : selectedAddress
              : null,
          delivery_date: deliveryDate,
          delivery_time: deliveryTime,
          delivery_instructions: specialInstructions,
          notes: '',
          contact_info: customerInfo,
        };
      }

      console.log('Submitting order:', orderPayload);

      // Create order based on type
      let orderResponse;
      if (cateringDetails) {
        orderResponse = await ordersAPI.createCateringOrder(orderPayload);
      } else if (subscriptionDetails) {
        orderResponse = await ordersAPI.createWeeklyOrder(orderPayload);
      } else {
        orderResponse = await ordersAPI.createDailyOrder(orderPayload);
      }

      const order = orderResponse.data.data;

      // Clear cart after successful order
      await clearCart();

      showToast('Order placed successfully!', 'success');

      // Navigate to order confirmation or home
      navigate('/', {
        state: { orderPlaced: true, orderId: order.id || order._id },
      });
    } catch (error: any) {
      console.error('Checkout error:', error);
      showToast(
        error.response?.data?.message ||
          'Failed to place order. Please try again.',
        'error'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  // Show loading while cart data is loading
  if (cartLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" message="Loading checkout..." />
      </div>
    );
  }

  // Show empty cart message
  if (isCartEmpty) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card padding="lg" className="text-center max-w-md">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-text mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some delicious items to your cart before checking out
          </p>
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigate('/menu/daily')}
          >
            Browse Menu
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-primary hover:text-primary-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <h1 className="font-heading text-4xl font-bold text-text mb-8">
          Complete Your Order
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <User size={24} className="text-primary" />
                  <span>Contact Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="Full Name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    label="Email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <Input
                    type="tel"
                    label="Phone"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    placeholder="04XX XXX XXX"
                    required
                  />
                </div>
              </Card>

              {/* Delivery Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Truck size={24} className="text-primary" />
                  <span>Delivery Method</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      deliveryMethod === 'delivery'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <MapPin
                      className={`mx-auto mb-2 ${
                        deliveryMethod === 'delivery'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                      size={32}
                    />
                    <p className="font-semibold text-text">Delivery</p>
                    <p className="text-sm text-gray-600">
                      {summary.delivery_fee === 0
                        ? 'FREE'
                        : formatCurrency(summary.delivery_fee)}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      deliveryMethod === 'pickup'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <Store
                      className={`mx-auto mb-2 ${
                        deliveryMethod === 'pickup'
                          ? 'text-primary'
                          : 'text-gray-400'
                      }`}
                      size={32}
                    />
                    <p className="font-semibold text-text">Pickup</p>
                    <p className="text-sm text-gray-600">FREE</p>
                  </button>
                </div>
              </Card>

              {/* Delivery Address - only show if delivery selected */}
              {deliveryMethod === 'delivery' && (
                <Card padding="lg">
                  <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                    <MapPin size={24} className="text-primary" />
                    <span>Delivery Address</span>
                  </h2>

                  {user?.addresses &&
                  user.addresses.length > 0 &&
                  !showNewAddressForm ? (
                    <div className="space-y-3">
                      {user.addresses.map((addr: any) => (
                        <label
                          key={addr._id || addr.id || Math.random()}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedAddress?.id === addr.id ||
                            selectedAddress?._id === addr._id
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="address"
                            checked={
                              selectedAddress?.id === addr.id ||
                              selectedAddress?._id === addr._id
                            }
                            onChange={() => setSelectedAddress(addr)}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-semibold text-text">
                              {addr.label || 'Address'}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {addr.street}, {addr.suburb} {addr.state}{' '}
                              {addr.postcode}
                            </p>
                            {addr.is_default && (
                              <span className="inline-block mt-1 px-2 py-1 bg-primary text-white text-xs rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                        </label>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        fullWidth
                        onClick={() => setShowNewAddressForm(true)}
                      >
                        Add New Address
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Input
                        type="text"
                        label="Street Address"
                        value={newAddress.street}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            street: e.target.value,
                          })
                        }
                        required={deliveryMethod === 'delivery'}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="Suburb"
                          value={newAddress.suburb}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              suburb: e.target.value,
                            })
                          }
                          required={deliveryMethod === 'delivery'}
                        />
                        <Input
                          type="text"
                          label="Postcode"
                          value={newAddress.postcode}
                          onChange={(e) =>
                            setNewAddress({
                              ...newAddress,
                              postcode: e.target.value,
                            })
                          }
                          maxLength={4}
                          required={deliveryMethod === 'delivery'}
                        />
                      </div>
                      {user?.addresses && user.addresses.length > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setShowNewAddressForm(false)}
                        >
                          Use Existing Address
                        </Button>
                      )}
                    </div>
                  )}
                </Card>
              )}

              {/* Delivery Time */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Calendar size={24} className="text-primary" />
                  <span>
                    {deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}{' '}
                    Schedule
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    label="Date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                  <Input
                    type="time"
                    label="Time"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    required
                  />
                </div>

                {deliveryMethod === 'pickup' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Pickup Location:</strong> Woodville Rd, Guildford
                      NSW 2161
                    </p>
                  </div>
                )}
              </Card>

              {/* Special Instructions */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <FileText size={24} className="text-primary" />
                  <span>Special Instructions (Optional)</span>
                </h2>

                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Any special requests or delivery instructions..."
                />
              </Card>

              {/* Payment Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <CreditCard size={24} className="text-primary" />
                  <span>Payment Method</span>
                </h2>

                <div className="space-y-3">
                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as 'card')
                      }
                      className="mr-3"
                    />
                    <CreditCard className="mr-3 text-gray-600" size={20} />
                    <span className="font-semibold">Card Payment</span>
                  </label>

                  <label
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'cash'
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as 'cash')
                      }
                      className="mr-3"
                    />
                    <span className="mr-3">💵</span>
                    <span className="font-semibold">
                      Cash on{' '}
                      {deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}
                    </span>
                  </label>
                </div>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <Card padding="lg" className="sticky top-24">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Package size={24} className="text-primary" />
                  <span>Order Summary</span>
                </h2>

                {/* Items */}
                {items && items.length > 0 && (
                  <div className="space-y-3 mb-4">
                    <p className="text-sm font-semibold text-gray-700">
                      Items:
                    </p>
                    {items.map((item: any, index: number) => {
                      const itemData = getItemData(item);
                      return (
                        <div
                          key={itemData.id || index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-600">
                            {itemData.quantity}x {itemData.name}
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(itemData.price * itemData.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Sidelines */}
                {sidelines && sidelines.length > 0 && (
                  <>
                    <div className="border-t pt-3 mb-3">
                      <p className="text-sm font-semibold mb-2">Add-ons:</p>
                      {sidelines.map((item: any, index: number) => {
                        const sidelineData = item.sideline || item;
                        return (
                          <div
                            key={sidelineData.id || sidelineData._id || index}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-gray-600">
                              {item.quantity || 1}x{' '}
                              {sidelineData.name || 'Add-on'}
                            </span>
                            <span className="font-semibold">
                              {formatCurrency(
                                (sidelineData.price || 0) * (item.quantity || 1)
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* Summary */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">
                      {formatCurrency(summary.subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-semibold">
                      {deliveryMethod === 'pickup' || summary.delivery_fee === 0
                        ? 'FREE'
                        : formatCurrency(summary.delivery_fee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (GST 10%):</span>
                    <span className="font-semibold">
                      {formatCurrency(summary.tax)}
                    </span>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-text">
                        Total:
                      </span>
                      <span className="font-heading text-3xl font-bold text-primary">
                        {formatCurrency(summary.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="lg"
                  className="mt-6"
                  disabled={isProcessing}
                  isLoading={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>

                {/* Security Note */}
                <div className="mt-4 flex items-start space-x-2 text-xs text-gray-600">
                  <CheckCircle
                    size={16}
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <p>Your payment information is secure and encrypted</p>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
```

---

## 📄 src\pages\customer\DailyMenuPage.tsx

_Path: `src\pages\customer\DailyMenuPage.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import { useMenuStore } from '@store/menuStore';
import { useAuthStore } from '@store/authStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import CartSummary from '@components/menu/CartSummary';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import {
  Package,
  RefreshCcw,
  AlertCircle,
  Truck,
  Award,
  Clock,
  Shield,
  MapPin,
  ChefHat,
  Sparkles,
} from 'lucide-react';
import { useToast } from '@components/common/Toast';

const DailyMenuPage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const {
    dailyMenuItems,
    categories,
    activeFilters,
    isLoading,
    error,
    fetchDailyMenu,
    fetchCategories,
    setFilters,
    clearFilters,
    getFilteredItems,
  } = useMenuStore();
  const { showToast } = useToast();

  const [retryCount, setRetryCount] = useState(0);

  // Fetch data on mount
  useEffect(() => {
    loadMenuData();
  }, []);

  // Load menu data
  const loadMenuData = async () => {
    try {
      await Promise.all([fetchDailyMenu(), fetchCategories()]);
    } catch (error) {
      console.error('Failed to load menu data:', error);
    }
  };

  // Retry loading
  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    loadMenuData();
  };

  // Get filtered items
  const filteredItems = getFilteredItems('daily_menu');

  // Loading state
  if (isLoading && dailyMenuItems.length === 0) {
    return (
      <div className="container-custom py-12">
        <LoadingSpinner message="Loading daily menu..." />
      </div>
    );
  }

  // Error state
  if (error && dailyMenuItems.length === 0) {
    return (
      <div className="container-custom py-12">
        <Card padding="lg" className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-text mb-4">
            Failed to Load Menu
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center space-x-2"
          >
            <RefreshCcw size={20} />
            <span>Retry Loading</span>
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-text mb-4">
            Daily Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh meals prepared daily. Order for pickup or delivery within 6km
            of Guildford.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2 text-sm">
            <Package size={16} className="text-primary" />
            <span className="text-gray-600">
              Delivery available within 6km of Guildford • $10 delivery fee
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Filters */}
            <FilterBar
              categories={categories}
              activeFilters={activeFilters}
              onFilterChange={setFilters}
              onClearFilters={clearFilters}
            />

            {/* Menu Items Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <MenuItemCard
                    key={item._id || item.id}
                    item={item}
                    showQuickAdd={isAuthenticated}
                  />
                ))}
              </div>
            ) : (
              <Card padding="lg">
                <div className="text-center py-12">
                  <Package className="mx-auto h-20 w-20 text-gray-300 mb-4" />
                  <h3 className="font-semibold text-gray-500 mb-2 text-xl">
                    {dailyMenuItems.length === 0
                      ? 'No menu items available'
                      : 'No items match your filters'}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {dailyMenuItems.length === 0
                      ? 'Please check back later or contact us.'
                      : 'Try adjusting your filters to see more items.'}
                  </p>
                  {activeFilters.category ||
                  activeFilters.is_vegetarian ||
                  activeFilters.is_vegan ? (
                    <button
                      onClick={clearFilters}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                    >
                      Clear Filters
                    </button>
                  ) : (
                    <button
                      onClick={handleRetry}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center space-x-2"
                    >
                      <RefreshCcw size={18} />
                      <span>Refresh Menu</span>
                    </button>
                  )}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar - Cart Summary */}
          <div className="lg:col-span-4">
            <CartSummary sticky />
          </div>
        </div>

        {/* Info Cards with Professional Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Fresh Daily Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Fresh Daily
            </h3>
            <p className="text-gray-600 text-sm">
              All meals prepared daily with quality ingredients
            </p>
          </Card>

          {/* Fast Delivery Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Quick delivery or pickup available within 6km radius
            </p>
          </Card>

          {/* Quality Guaranteed Card */}
          <Card
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-text mb-2">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              Satisfaction guaranteed on your every order
            </p>
          </Card>
        </div>

        {/* Additional Feature Cards */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-8">
          <h2 className="font-heading text-2xl font-bold text-text mb-6 text-center">
            Why Choose Our Daily Menu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Order Anytime */}
            <div className="flex items-start space-x-3">
              <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Order Anytime</h4>
                <p className="text-sm text-gray-600">
                  11:00 AM - 9:00 PM, 7 days a week
                </p>
              </div>
            </div>

            {/* Free Delivery */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Free Delivery</h4>
                <p className="text-sm text-gray-600">
                  On orders above $50 within 6km
                </p>
              </div>
            </div>

            {/* Safe & Hygienic */}
            <div className="flex items-start space-x-3">
              <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">
                  Safe & Hygienic
                </h4>
                <p className="text-sm text-gray-600">
                  Strict quality control standards
                </p>
              </div>
            </div>

            {/* Best Quality */}
            <div className="flex items-start space-x-3">
              <Sparkles className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-text mb-1">Best Quality</h4>
                <p className="text-sm text-gray-600">
                  Premium ingredients only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMenuPage;
```

---

## 📄 src\pages\customer\ProfilePage.tsx

_Path: `src\pages\customer\ProfilePage.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useAddressStore } from '@store/addressStore';
import { useOrderStore } from '@store/orderStore';
import { useToast } from '@components/common/Toast';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Modal from '@components/common/Modal';
import {
  User,
  MapPin,
  Package,
  Settings,
  Bell,
  CreditCard,
  Edit2,
  Trash2,
  Plus,
  Check,
  X,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react';
import { formatCurrency, formatDate } from '@utils/formatters';

const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const {
    addresses,
    fetchAddresses,
    addAddress,
    deleteAddress,
    setDefaultAddress,
  } = useAddressStore();
  const { orderHistory, fetchOrderHistory } = useOrderStore();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<
    'profile' | 'addresses' | 'orders'
  >('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    full_name: user?.full_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  // Address form state
  const [addressForm, setAddressForm] = useState({
    label: '',
    street: '',
    suburb: '',
    postcode: '',
    state: 'NSW',
    delivery_instructions: '',
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([fetchAddresses(), fetchOrderHistory()]);
      } catch (error) {
        showToast('Failed to load profile data', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(profileForm);
      showToast('Profile updated successfully', 'success');
      setIsEditingProfile(false);
    } catch (error) {
      showToast('Failed to update profile', 'error');
    }
  };

  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addAddress(addressForm);
      showToast('Address added successfully', 'success');
      setIsAddingAddress(false);
      setAddressForm({
        label: '',
        street: '',
        suburb: '',
        postcode: '',
        state: 'NSW',
        delivery_instructions: '',
      });
    } catch (error) {
      showToast('Failed to add address', 'error');
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        await deleteAddress(addressId);
        showToast('Address deleted successfully', 'success');
      } catch (error) {
        showToast('Failed to delete address', 'error');
      }
    }
  };

  const handleSetDefaultAddress = async (addressId: string) => {
    try {
      await setDefaultAddress(addressId);
      showToast('Default address updated', 'success');
    } catch (error) {
      showToast('Failed to update default address', 'error');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading profile..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold text-text mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card padding="md">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {user?.full_name?.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-semibold text-text text-lg">
                  {user?.full_name}
                </h3>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} />
                  <span className="font-medium">Personal Info</span>
                </button>

                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'addresses'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MapPin size={20} />
                  <span className="font-medium">Addresses</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package size={20} />
                  <span className="font-medium">Order History</span>
                </button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-text">
                    Personal Information
                  </h2>
                  {!isEditingProfile && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditingProfile(true)}
                    >
                      <Edit2 size={16} className="mr-2" />
                      Edit
                    </Button>
                  )}
                </div>

                {isEditingProfile ? (
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <Input
                      type="text"
                      label="Full Name"
                      value={profileForm.full_name}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          full_name: e.target.value,
                        })
                      }
                      leftIcon={<User size={20} />}
                      required
                    />

                    <Input
                      type="email"
                      label="Email Address"
                      value={profileForm.email}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          email: e.target.value,
                        })
                      }
                      leftIcon={<Mail size={20} />}
                      required
                    />

                    <Input
                      type="tel"
                      label="Phone Number"
                      value={profileForm.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          phone: e.target.value,
                        })
                      }
                      leftIcon={<Phone size={20} />}
                      required
                    />

                    <div className="flex space-x-3">
                      <Button type="submit" variant="primary">
                        <Check size={16} className="mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditingProfile(false);
                          setProfileForm({
                            full_name: user?.full_name || '',
                            email: user?.email || '',
                            phone: user?.phone || '',
                          });
                        }}
                      >
                        <X size={16} className="mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <User className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-semibold text-text">
                          {user?.full_name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <Mail className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-semibold text-text">{user?.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
                      <Phone className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-semibold text-text">{user?.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 py-4">
                      <Calendar className="text-gray-400" size={24} />
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="font-semibold text-text">
                          {formatDate(user?.created_at || '')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <Card padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-bold text-text">
                      Saved Addresses
                    </h2>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsAddingAddress(true)}
                    >
                      <Plus size={16} className="mr-2" />
                      Add Address
                    </Button>
                  </div>

                  {addresses.length === 0 ? (
                    <div className="text-center py-12">
                      <MapPin className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-600 mb-4">
                        No saved addresses yet
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsAddingAddress(true)}
                      >
                        Add Your First Address
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div
                          key={address._id}
                          className={`border-2 rounded-lg p-4 transition-all ${
                            address.is_default
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-text mb-1">
                                {address.label}
                              </h3>
                              {address.is_default && (
                                <span className="inline-block px-2 py-1 bg-primary text-white text-xs rounded-full">
                                  Default
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => handleDeleteAddress(address._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <p className="text-sm text-gray-700 mb-3">
                            {address.street}
                            <br />
                            {address.suburb}, {address.state} {address.postcode}
                          </p>

                          {!address.is_default && (
                            <Button
                              variant="outline"
                              size="sm"
                              fullWidth
                              onClick={() =>
                                handleSetDefaultAddress(address._id)
                              }
                            >
                              Set as Default
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-6">
                  Order History
                </h2>

                {orderHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-gray-600 mb-4">No orders yet</p>
                    <Button
                      variant="primary"
                      onClick={() => (window.location.href = '/menu/daily')}
                    >
                      Start Ordering
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div
                        key={order._id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-semibold text-text">
                              Order #{order._id.slice(-8)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {formatDate(order.created_at)}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === 'delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'cancelled'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status.toUpperCase().replace('_', ' ')}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-sm mb-3">
                          <p className="text-gray-600">
                            {order.items.length} item(s)
                          </p>
                          <p className="font-semibold text-text">
                            {formatCurrency(order.total)}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          fullWidth
                          onClick={() =>
                            (window.location.href = `/orders/${order._id}`)
                          }
                        >
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Add Address Modal */}
      <Modal
        isOpen={isAddingAddress}
        onClose={() => setIsAddingAddress(false)}
        title="Add New Address"
      >
        <form onSubmit={handleAddAddress} className="space-y-4">
          <Input
            type="text"
            label="Label (e.g., Home, Work)"
            value={addressForm.label}
            onChange={(e) =>
              setAddressForm({ ...addressForm, label: e.target.value })
            }
            required
          />

          <Input
            type="text"
            label="Street Address"
            value={addressForm.street}
            onChange={(e) =>
              setAddressForm({ ...addressForm, street: e.target.value })
            }
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Suburb"
              value={addressForm.suburb}
              onChange={(e) =>
                setAddressForm({ ...addressForm, suburb: e.target.value })
              }
              required
            />

            <Input
              type="text"
              label="Postcode"
              value={addressForm.postcode}
              onChange={(e) =>
                setAddressForm({ ...addressForm, postcode: e.target.value })
              }
              maxLength={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              State
            </label>
            <select
              value={addressForm.state}
              onChange={(e) =>
                setAddressForm({ ...addressForm, state: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="NSW">NSW</option>
              <option value="VIC">VIC</option>
              <option value="QLD">QLD</option>
              <option value="SA">SA</option>
              <option value="WA">WA</option>
              <option value="TAS">TAS</option>
              <option value="ACT">ACT</option>
              <option value="NT">NT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Delivery Instructions (Optional)
            </label>
            <textarea
              value={addressForm.delivery_instructions}
              onChange={(e) =>
                setAddressForm({
                  ...addressForm,
                  delivery_instructions: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          <div className="flex space-x-3">
            <Button type="submit" variant="primary" fullWidth>
              Add Address
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddingAddress(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
```

---

## 📄 src\pages\customer\WeeklySubscriptionPage.tsx

_Path: `src\pages\customer\WeeklySubscriptionPage.tsx`_

```tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI } from '@api/endpoints/menu';
import { useToast } from '@components/common/Toast';
import {
  Calendar,
  Package,
  CheckCircle,
  Info,
  MapPin,
  Store,
  Leaf,
  X,
  Plus,
  AlertCircle,
  Truck,
  Clock,
} from 'lucide-react';

// ===========================
// TYPE DEFINITIONS
// ===========================

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string;
  is_available: boolean;
  is_vegetarian: boolean;
  is_vegan: boolean;
  serving_size?: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  shortName: string;
  description: string;
  mealsPerDelivery: number;
  totalMeals: number;
  duration: 'weekly' | 'fortnightly' | 'monthly';
  deliveries: number;
  pricePerMeal: number;
  totalPrice: number;
  regularPrice: number;
  savings: number;
  features: string[];
  badge?: string;
  popular?: boolean;
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
};

// ===========================
// SUBSCRIPTION PLANS DATA (Business Logic - Not from Backend)
// ===========================

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'weekly-10',
    name: 'Weekly 10-Box Deal',
    shortName: 'Weekly',
    description: 'Perfect for singles or couples',
    mealsPerDelivery: 10,
    totalMeals: 10,
    duration: 'weekly',
    deliveries: 1,
    pricePerMeal: 9.9, // From backend docs: $99 / 10 meals
    totalPrice: 99.0,
    regularPrice: 150.0,
    savings: 51.0,
    badge: 'POPULAR',
    popular: true,
    features: [
      '10 meals per week',
      'Free delivery within 6km',
      'Flexible menu selection',
      'Max 2 boxes per menu item',
      'Cancel anytime',
    ],
  },
  {
    id: 'fortnight-20',
    name: 'Fortnight 20-Box Deal',
    shortName: 'Fortnightly',
    description: 'Great value for small families',
    mealsPerDelivery: 10,
    totalMeals: 20,
    duration: 'fortnightly',
    deliveries: 2,
    pricePerMeal: 9.9, // From backend docs: $198 / 20 meals
    totalPrice: 198.0,
    regularPrice: 300.0,
    savings: 102.0,
    badge: 'BEST VALUE',
    popular: true,
    features: [
      '20 meals over 2 weeks',
      '2 deliveries (10 meals each)',
      'Free delivery on both days',
      'Priority support',
      'Mix & match menu',
    ],
  },
  {
    id: 'monthly-40',
    name: 'Monthly 40-Box Deal',
    shortName: 'Monthly',
    description: 'Maximum savings for families',
    mealsPerDelivery: 10,
    totalMeals: 40,
    duration: 'monthly',
    deliveries: 4,
    pricePerMeal: 9.9, // From backend docs: $396 / 40 meals
    totalPrice: 396.0,
    regularPrice: 600.0,
    savings: 204.0,
    badge: 'MAX SAVINGS',
    popular: false,
    features: [
      '40 meals over 4 weeks',
      '4 deliveries (10 meals each)',
      'Free delivery all month',
      'Premium menu access',
      'Dedicated support',
      'Exclusive recipes',
    ],
  },
];

// ===========================
// SIMPLE COMPONENTS
// ===========================

// Loading Spinner Component
const LoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#FF6B35]"></div>
    {message && <p className="mt-4 text-gray-600">{message}</p>}
  </div>
);

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  size = 'md',
  className = '',
}) => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-[#FF6B35] text-white hover:bg-[#E55A2B] focus:ring-[#FF6B35] disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white focus:ring-[#FF6B35] disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed',
    ghost:
      'text-[#FF6B35] hover:bg-[#FFF5F2] focus:ring-[#FF6B35] disabled:text-gray-300 disabled:cursor-not-allowed',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  onClick,
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
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// ===========================
// PLAN CARD COMPONENT
// ===========================

interface PlanCardProps {
  plan: SubscriptionPlan;
  isSelected: boolean;
  onSelect: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isSelected, onSelect }) => {
  const savingsPercentage = Math.round(
    (plan.savings / plan.regularPrice) * 100
  );

  return (
    <Card
      className={`cursor-pointer transition-all relative transform hover:scale-102 ${
        isSelected
          ? 'ring-4 ring-[#FF6B35] border-[#FF6B35] shadow-2xl scale-105'
          : 'hover:shadow-xl border-gray-200'
      }`}
      onClick={() => onSelect(plan.id)}
      padding="lg"
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">
          {plan.badge}
        </div>
      )}

      {/* Selection Indicator */}
      <div className="flex justify-end mb-3">
        <div
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? 'border-[#FF6B35] bg-[#FF6B35] scale-110'
              : 'border-gray-300 hover:border-[#FF6B35]'
          }`}
        >
          {isSelected && <CheckCircle className="h-5 w-5 text-white" />}
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? 'bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] shadow-lg'
              : 'bg-[#FFF5F2]'
          }`}
        >
          <Package
            className={isSelected ? 'text-white' : 'text-[#FF6B35]'}
            size={48}
          />
        </div>
      </div>

      {/* Plan Details */}
      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] text-center mb-2">
        {plan.name}
      </h3>
      <p className="font-['Montserrat'] text-sm text-gray-600 text-center mb-6 min-h-[40px]">
        {plan.description}
      </p>

      {/* Pricing */}
      <div className="text-center mb-6 bg-gradient-to-br from-gray-50 to-[#FFF5F2] rounded-xl p-5 border border-gray-100">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-gray-400 line-through text-lg font-['Montserrat']">
            {formatCurrency(plan.regularPrice)}
          </span>
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            SAVE {savingsPercentage}%
          </span>
        </div>
        <div className="font-['Playfair_Display'] text-5xl font-bold text-[#FF6B35] mb-2">
          {formatCurrency(plan.totalPrice)}
        </div>
        <div className="text-sm text-gray-600 font-['Montserrat'] mb-1">
          {formatCurrency(plan.pricePerMeal)} per meal
        </div>
        <div className="text-xs text-gray-500 font-['Montserrat'] mt-3 pt-3 border-t border-gray-200">
          {plan.totalMeals} meals • {plan.deliveries}{' '}
          {plan.deliveries === 1 ? 'delivery' : 'deliveries'}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 text-sm">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 font-['Montserrat']">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Select Button */}
      <Button
        variant={isSelected ? 'primary' : 'outline'}
        fullWidth
        size="lg"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(plan.id);
        }}
      >
        {isSelected ? (
          <span className="flex items-center justify-center space-x-2">
            <CheckCircle size={20} />
            <span>Selected</span>
          </span>
        ) : (
          'Select Plan'
        )}
      </Button>
    </Card>
  );
};

// ===========================
// MEAL CARD COMPONENT
// ===========================

interface MealCardProps {
  meal: MenuItem;
  isSelected: boolean;
  onSelect: (mealId: string) => void;
  disabled?: boolean;
}

const MealCard: React.FC<MealCardProps> = ({
  meal,
  isSelected,
  onSelect,
  disabled,
}) => {
  return (
    <Card
      className={`cursor-pointer transition-all relative overflow-hidden ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : isSelected
            ? 'ring-4 ring-[#FF6B35] border-[#FF6B35] shadow-lg'
            : 'hover:shadow-xl hover:scale-102 border-gray-200'
      }`}
      onClick={() => !disabled && onSelect(meal._id)}
      padding="none"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={
            meal.image_url ||
            'https://via.placeholder.com/400x300?text=No+Image'
          }
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://via.placeholder.com/400x300?text=No+Image';
          }}
        />

        {/* Selection Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-[#FF6B35] bg-opacity-30 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-[#FF6B35] text-white rounded-full p-4 shadow-2xl animate-pulse">
              <CheckCircle size={40} strokeWidth={3} />
            </div>
          </div>
        )}

        {/* Dietary Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {meal.is_vegetarian && (
            <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
              <Leaf size={16} />
            </div>
          )}
          {meal.is_vegan && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              VEGAN
            </div>
          )}
        </div>

        {/* Availability Badge */}
        {!meal.is_available && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              SOLD OUT
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 bg-[#FFF5F2] text-[#FF6B35] text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
          {meal.category}
        </span>

        {/* Name */}
        <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-xl mb-2 line-clamp-1">
          {meal.name}
        </h3>

        {/* Description */}
        <p className="font-['Montserrat'] text-sm text-gray-600 line-clamp-2 mb-4 min-h-[40px]">
          {meal.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#FF6B35] font-['Playfair_Display'] font-bold text-2xl">
              {formatCurrency(meal.price)}
            </div>
            {meal.serving_size && (
              <div className="text-xs text-gray-500 font-['Montserrat'] mt-1">
                {meal.serving_size}
              </div>
            )}
          </div>
          {isSelected && (
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center space-x-1">
              <CheckCircle size={14} />
              <span>ADDED</span>
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

// ===========================
// MAIN PAGE COMPONENT
// ===========================

const WeeklySubscriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  // State
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [selectedMealIds, setSelectedMealIds] = useState<string[]>([]);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Get selected plan
  const selectedPlan = SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId);

  // ✅ Fetch menu items from backend API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setIsLoading(true);

        // Fetch weekly menu from backend
        const response = await menuAPI.getWeeklyMenu();
        const menuData = response.data.data;

        // Set menu items from API response
        if (menuData && menuData.items) {
          setMenuItems(menuData.items);
        } else if (Array.isArray(menuData)) {
          setMenuItems(menuData);
        }

        setError(null);
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message ||
          'Failed to load menu items. Please try again.';
        setError(errorMessage);
        showToast(errorMessage, 'error');
        console.error('Error loading menu:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle plan selection
  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    setSelectedMealIds([]);
    showToast(
      `${SUBSCRIPTION_PLANS.find((p) => p.id === planId)?.shortName} plan selected`,
      'success'
    );
  };

  // Handle meal selection
  const handleMealSelect = (mealId: string) => {
    if (!selectedPlan) {
      showToast('Please select a plan first', 'warning');
      return;
    }

    if (selectedMealIds.includes(mealId)) {
      setSelectedMealIds(selectedMealIds.filter((id) => id !== mealId));
      showToast('Meal removed', 'info');
    } else {
      if (selectedMealIds.length >= selectedPlan.totalMeals) {
        showToast(
          `You can only select ${selectedPlan.totalMeals} meals for this plan`,
          'warning'
        );
      } else {
        setSelectedMealIds([...selectedMealIds, mealId]);
        showToast('Meal added', 'success');
      }
    }
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    if (!selectedPlan) {
      showToast('Please select a subscription plan', 'error');
      return;
    }

    if (selectedMealIds.length !== selectedPlan.totalMeals) {
      showToast(
        `Please select ${selectedPlan.totalMeals} meals to continue`,
        'error'
      );
      return;
    }

    const selectedMeals = menuItems.filter((item) =>
      selectedMealIds.includes(item._id)
    );

    // Navigate to checkout with subscription details
    navigate('/checkout', {
      state: {
        subscriptionDetails: {
          plan: selectedPlan,
          meals: selectedMeals,
          deliveryOption,
        },
      },
    });
  };

  // Calculate progress
  const progress = selectedPlan
    ? Math.round((selectedMealIds.length / selectedPlan.totalMeals) * 100)
    : 0;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <LoadingSpinner message="Loading subscription plans..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <Card padding="lg" className="max-w-md text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-2">
            Oops! Something went wrong
          </h2>
          <p className="font-['Montserrat'] text-gray-600 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PAGE HEADER */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
            Weekly Meal <span className="text-[#FF6B35]">Subscriptions</span>
          </h1>
          <p className="font-['Montserrat'] text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our meal plans and enjoy fresh, delicious meals
            delivered regularly.
            <br />
            <span className="font-semibold text-[#FF6B35]">
              Save up to 35%
            </span>{' '}
            with our flexible subscription packages!
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4">
            {/* Step 1 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlanId ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlanId
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                1
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Choose Plan
              </span>
            </div>

            <div
              className={`w-20 h-1 rounded transition-all ${selectedPlanId ? 'bg-[#FF6B35]' : 'bg-gray-300'}`}
            ></div>

            {/* Step 2 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlanId && selectedMealIds.length > 0 ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlanId && selectedMealIds.length > 0
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                2
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Select Meals
              </span>
            </div>

            <div
              className={`w-20 h-1 rounded transition-all ${selectedPlan && selectedMealIds.length === selectedPlan.totalMeals ? 'bg-[#FF6B35]' : 'bg-gray-300'}`}
            ></div>

            {/* Step 3 */}
            <div
              className={`flex items-center space-x-3 ${selectedPlan && selectedMealIds.length === selectedPlan.totalMeals ? 'text-[#FF6B35]' : 'text-gray-400'}`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-['Playfair_Display'] font-bold text-xl transition-all ${
                  selectedPlan &&
                  selectedMealIds.length === selectedPlan.totalMeals
                    ? 'bg-[#FF6B35] text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                }`}
              >
                3
              </div>
              <span className="font-['Montserrat'] font-semibold hidden sm:inline">
                Checkout
              </span>
            </div>
          </div>
        </div>

        {/* DELIVERY OPTIONS */}
        <div className="max-w-xl mx-auto mb-12">
          <Card padding="sm" className="shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setDeliveryOption('delivery')}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-['Montserrat'] font-semibold transition-all ${
                  deliveryOption === 'delivery'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Truck size={22} />
                <span>Delivery</span>
              </button>

              <button
                onClick={() => setDeliveryOption('pickup')}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-['Montserrat'] font-semibold transition-all ${
                  deliveryOption === 'pickup'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Store size={22} />
                <span>Pickup</span>
              </button>
            </div>
          </Card>

          {deliveryOption === 'delivery' && (
            <p className="font-['Montserrat'] text-sm text-gray-600 text-center mt-4 flex items-center justify-center space-x-2">
              <MapPin size={16} className="text-[#FF6B35]" />
              <span>Free delivery within 6km of Guildford 2161</span>
            </p>
          )}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT/CENTER COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            {/* SUBSCRIPTION PLANS */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E] mb-8">
                Choose Your Subscription Plan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    isSelected={selectedPlanId === plan.id}
                    onSelect={handlePlanSelect}
                  />
                ))}
              </div>
            </div>

            {/* MEAL SELECTION */}
            {selectedPlan && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#2E2E2E]">
                      Select Your Meals
                    </h2>
                    <p className="font-['Montserrat'] text-gray-600 mt-2">
                      Choose {selectedPlan.totalMeals} delicious meals from our
                      weekly menu
                    </p>
                  </div>

                  {selectedMealIds.length === selectedPlan.totalMeals && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-4 py-2 rounded-full">
                      <CheckCircle size={24} />
                      <span className="font-['Montserrat'] font-semibold">
                        Complete!
                      </span>
                    </div>
                  )}
                </div>

                {/* Selection Progress */}
                <Card
                  padding="md"
                  className="mb-8 bg-gradient-to-br from-white to-[#FFF5F2]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Montserrat'] text-sm font-semibold text-[#2E2E2E]">
                      Meals Selected:{' '}
                      <span className="text-[#FF6B35]">
                        {selectedMealIds.length}
                      </span>{' '}
                      / {selectedPlan.totalMeals}
                    </span>
                    <span className="font-['Montserrat'] text-sm font-bold text-[#FF6B35]">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] h-4 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </Card>

                {/* Meal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems.map((meal) => (
                    <MealCard
                      key={meal._id}
                      meal={meal}
                      isSelected={selectedMealIds.includes(meal._id)}
                      onSelect={handleMealSelect}
                      disabled={
                        !meal.is_available ||
                        (!selectedMealIds.includes(meal._id) &&
                          selectedMealIds.length >= selectedPlan.totalMeals)
                      }
                    />
                  ))}
                </div>

                {menuItems.length === 0 && (
                  <Card padding="lg">
                    <div className="text-center py-16">
                      <Package className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-2">
                        No Meals Available
                      </h3>
                      <p className="font-['Montserrat'] text-gray-500">
                        Check back soon for our delicious weekly menu!
                      </p>
                    </div>
                  </Card>
                )}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card padding="lg" className="shadow-xl">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#2E2E2E] mb-6 pb-4 border-b-2 border-gray-100">
                  Order Summary
                </h3>

                {selectedPlan ? (
                  <div className="space-y-6">
                    {/* Selected Plan */}
                    <div className="pb-6 border-b border-gray-200">
                      <div className="flex items-start space-x-3 mb-4">
                        <Calendar
                          className="text-[#FF6B35] flex-shrink-0 mt-1"
                          size={24}
                        />
                        <div>
                          <span className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-lg block mb-2">
                            {selectedPlan.name}
                          </span>
                          <span className="font-['Montserrat'] text-sm text-gray-600">
                            {selectedPlan.description}
                          </span>
                        </div>
                      </div>

                      <div className="font-['Montserrat'] text-xs text-gray-500 space-y-2 bg-gray-50 rounded-lg p-3">
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>{selectedPlan.totalMeals} meals total</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>
                            {selectedPlan.deliveries}{' '}
                            {selectedPlan.deliveries === 1
                              ? 'delivery'
                              : 'deliveries'}
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></span>
                          <span>
                            {selectedPlan.mealsPerDelivery} meals per delivery
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Selected Meals Summary */}
                    {selectedMealIds.length > 0 && (
                      <div className="pb-6 border-b border-gray-200">
                        <h4 className="font-['Montserrat'] font-bold text-[#2E2E2E] mb-4 text-sm flex items-center justify-between">
                          <span>Selected Meals ({selectedMealIds.length})</span>
                          {selectedMealIds.length > 0 && (
                            <button
                              onClick={() => setSelectedMealIds([])}
                              className="text-red-500 hover:text-red-700 text-xs"
                            >
                              Clear All
                            </button>
                          )}
                        </h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                          {selectedMealIds.map((mealId) => {
                            const meal = menuItems.find(
                              (m) => m._id === mealId
                            );
                            if (!meal) return null;
                            return (
                              <div
                                key={mealId}
                                className="flex items-center justify-between text-xs bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                              >
                                <span className="font-['Montserrat'] text-gray-700 flex-1 mr-2">
                                  {meal.name}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleMealSelect(mealId);
                                  }}
                                  className="text-red-500 hover:text-red-700 flex-shrink-0 p-1 hover:bg-red-50 rounded"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Pricing Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-gray-600">Regular Price:</span>
                        <span className="line-through text-gray-400 font-medium">
                          {formatCurrency(selectedPlan.regularPrice)}
                        </span>
                      </div>

                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-green-600 font-semibold">
                          You Save:
                        </span>
                        <span className="font-bold text-green-600">
                          -{formatCurrency(selectedPlan.savings)}
                        </span>
                      </div>

                      <div className="flex justify-between font-['Montserrat'] text-sm">
                        <span className="text-gray-600">Delivery Fee:</span>
                        <span className="font-bold text-green-600">FREE</span>
                      </div>

                      <div className="pt-4 border-t-2 border-[#FF6B35]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-['Playfair_Display'] font-bold text-[#2E2E2E] text-xl">
                            Total:
                          </span>
                          <span className="font-['Playfair_Display'] text-4xl font-bold text-[#FF6B35]">
                            {formatCurrency(selectedPlan.totalPrice)}
                          </span>
                        </div>
                        <div className="font-['Montserrat'] text-xs text-gray-500 text-right">
                          {formatCurrency(selectedPlan.pricePerMeal)} per meal
                        </div>
                      </div>
                    </div>

                    {/* Delivery Option Display */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center space-x-3 font-['Montserrat'] text-sm text-blue-900">
                        {deliveryOption === 'delivery' ? (
                          <>
                            <Truck size={20} className="text-blue-600" />
                            <div>
                              <div className="font-bold">Free Delivery</div>
                              <div className="text-xs text-blue-700">
                                Within 6km radius
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <Store size={20} className="text-blue-600" />
                            <div>
                              <div className="font-bold">Store Pickup</div>
                              <div className="text-xs text-blue-700">
                                Guildford 2161
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
                      <div className="flex items-start space-x-3 font-['Montserrat'] text-xs text-amber-900">
                        <Clock
                          size={16}
                          className="flex-shrink-0 mt-0.5 text-amber-600"
                        />
                        <p className="leading-relaxed">
                          <strong className="block mb-1">
                            Fresh Meals, On Time
                          </strong>
                          Meals are prepared fresh and delivered on your
                          selected days. You can customize your delivery
                          schedule at checkout.
                        </p>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      variant="primary"
                      fullWidth
                      size="lg"
                      onClick={handleProceedToCheckout}
                      disabled={
                        !selectedPlan ||
                        selectedMealIds.length !== selectedPlan.totalMeals
                      }
                      className="shadow-2xl hover:shadow-3xl transition-shadow font-['Montserrat']"
                    >
                      {selectedMealIds.length === selectedPlan.totalMeals ? (
                        <span className="flex items-center justify-center space-x-2">
                          <CheckCircle size={20} />
                          <span>Proceed to Checkout</span>
                        </span>
                      ) : (
                        `Select ${selectedPlan.totalMeals - selectedMealIds.length} More ${selectedPlan.totalMeals - selectedMealIds.length === 1 ? 'Meal' : 'Meals'}`
                      )}
                    </Button>

                    {/* Security Note */}
                    <p className="font-['Montserrat'] text-xs text-gray-500 text-center flex items-center justify-center space-x-2">
                      <span>🔒</span>
                      <span>Secure checkout • Cancel anytime</span>
                    </p>
                  </div>
                ) : (
                  // Empty State
                  <div className="text-center py-16">
                    <Package className="mx-auto h-20 w-20 text-gray-300 mb-6" />
                    <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#2E2E2E] mb-2">
                      No Plan Selected
                    </h4>
                    <p className="font-['Montserrat'] text-sm text-gray-500 mb-6">
                      Choose a subscription plan to see your order summary
                    </p>
                    <div className="text-left space-y-2">
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Flexible meal selection</span>
                      </p>
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Free delivery included</span>
                      </p>
                      <p className="font-['Montserrat'] text-xs text-gray-600 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span>Cancel anytime</span>
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mt-24 pt-16 border-t-2 border-gray-200">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] text-center mb-4">
            Why Subscribe to Our{' '}
            <span className="text-[#FF6B35]">Meal Plans?</span>
          </h2>
          <p className="font-['Montserrat'] text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join hundreds of satisfied customers enjoying convenient, delicious
            meals every week
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">💰</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Save Money
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                Up to 35% off regular menu prices with our subscription packages
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">⏰</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Save Time
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                No more daily menu decisions. Your meals are planned and ready
                to enjoy
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">🍱</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Fresh Quality
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                All meals prepared fresh daily with premium, authentic
                ingredients
              </p>
            </Card>

            <Card
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-5xl">🔄</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-xl">
                Flexible Plans
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 leading-relaxed">
                Change meals, pause, or cancel your subscription anytime, no
                questions asked
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] text-center mb-4">
            Frequently Asked <span className="text-[#FF6B35]">Questions</span>
          </h2>
          <p className="font-['Montserrat'] text-gray-600 text-center mb-12">
            Everything you need to know about our meal subscriptions
          </p>

          <div className="space-y-4">
            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Can I change my meal selections?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Yes! You can update your meal selections up to 24 hours before
                your scheduled delivery. Simply log into your account and make
                changes to your upcoming orders.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>What if I need to skip a week?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                You can pause or skip deliveries anytime from your account
                dashboard. There are no penalties or fees for pausing your
                subscription.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Are dietary restrictions accommodated?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Absolutely! Our menu includes vegetarian, vegan, and various
                dietary-friendly options, all clearly marked with icons. You can
                filter meals based on your dietary preferences.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>How does delivery work?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                We offer free delivery within 6km of Guildford 2161. Meals are
                delivered fresh on your chosen days each week. You'll receive
                delivery notifications via WhatsApp with tracking information.
              </p>
            </Card>

            <Card padding="lg" className="hover:shadow-lg transition-shadow">
              <h3 className="font-['Playfair_Display'] font-bold text-[#2E2E2E] mb-3 text-lg flex items-center space-x-2">
                <span className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  Q
                </span>
                <span>Can I cancel my subscription?</span>
              </h3>
              <p className="font-['Montserrat'] text-sm text-gray-600 ml-10 leading-relaxed">
                Yes, you can cancel your subscription at any time with no
                cancellation fees. Your subscription will remain active until
                the end of your current billing period.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 mb-12">
          <Card
            padding="lg"
            className="bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] text-white text-center shadow-2xl"
          >
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-4">
              Ready to Start Your Subscription?
            </h2>
            <p className="font-['Montserrat'] text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of food lovers and enjoy delicious, hassle-free
              meals every week
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-[#FF6B35] hover:bg-gray-100 border-white font-['Montserrat'] font-bold px-12"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Choose Your Plan Now
            </Button>
          </Card>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FF6B35;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E55A2B;
        }
      `}</style>
    </div>
  );
};

export default WeeklySubscriptionPage;
```

---

## 📄 src\routes\AdminRoutes.tsx

_Path: `src\routes\AdminRoutes.tsx`_

```tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AdminRoutes: React.FC = () => {
  return <Routes>{/* Add routes here */}</Routes>;
};

export default AdminRoutes;
```

---

## 📄 src\routes\CustomerRoutes.tsx

_Path: `src\routes\CustomerRoutes.tsx`_

```tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const CustomerRoutes: React.FC = () => {
  return <Routes>{/* Add routes here */}</Routes>;
};

export default CustomerRoutes;
```

---

## 📄 src\routes\index.tsx

_Path: `src\routes\index.tsx`_

```tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ProtectedRoute from '@components/auth/ProtectedRoute';
import RoleGuard from '@components/auth/RoleGuard';

// Public Pages
import HomePage from '@pages/public/HomePage';
import LoginPage from '@pages/public/LoginPage';
import RegisterPage from '@pages/public/RegisterPage';
import ContactPage from '@pages/public/ContactPage';

// Customer Pages
import DailyMenuPage from '@pages/customer/DailyMenuPage';
import WeeklySubscriptionPage from '@pages/customer/WeeklySubscriptionPage';
import CateringPage from '@pages/customer/CateringPage';
import CheckoutPage from '@pages/customer/CheckoutPage';
import ProfilePage from '@pages/customer/ProfilePage';

// Admin Pages
import AdminDashboard from '@pages/admin/AdminDashboard';
import OrderManagement from '@pages/admin/OrderManagement';
import MenuManagement from '@pages/admin/MenuManagement';
import SidelinesManagement from '@pages/admin/SidelinesManagement';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes - No Authentication Required */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Menu Pages - Accessible without login */}
        <Route path="/menu/daily" element={<DailyMenuPage />} />
        <Route path="/menu/weekly" element={<WeeklySubscriptionPage />} />
        <Route path="/catering" element={<CateringPage />} />

        {/* ✅ Protected Customer Routes - Login Required */}
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleGuard requiredRole="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
            <Route path="/admin/sidelines" element={<SidelinesManagement />} />
          </Route>
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
```

---

## 📄 src\routes\PublicRoutes.tsx

_Path: `src\routes\PublicRoutes.tsx`_

```tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const PublicRoutes: React.FC = () => {
  return <Routes>{/* Add routes here */}</Routes>;
};

export default PublicRoutes;
```

---

## 📄 src\store\addressStore.ts

_Path: `src\store\addressStore.ts`_

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { deliveryAPI } from '@api/endpoints/delivery';
import {
  Address,
  CreateAddressPayload,
  DeliveryValidation,
} from '@types/address.types';

interface AddressState {
  addresses: Address[];
  defaultAddress: Address | null;
  deliveryValidation: DeliveryValidation | null;

  // Loading states
  isLoading: boolean;
  isValidating: boolean;
  error: string | null;

  // Actions
  fetchAddresses: () => Promise<void>;
  addAddress: (payload: CreateAddressPayload) => Promise<Address>;
  updateAddress: (
    addressId: string,
    payload: Partial<CreateAddressPayload>
  ) => Promise<void>;
  deleteAddress: (addressId: string) => Promise<void>;
  setDefaultAddress: (addressId: string) => Promise<void>;
  validateDeliveryArea: (addressId: string) => Promise<DeliveryValidation>;
  calculateDeliveryFee: (
    addressId: string
  ) => Promise<{ fee: number; distance_km: number }>;
  clearError: () => void;
}

export const useAddressStore = create<AddressState>()(
  persist(
    (set, get) => ({
      addresses: [],
      defaultAddress: null,
      deliveryValidation: null,
      isLoading: false,
      isValidating: false,
      error: null,

      fetchAddresses: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await deliveryAPI.getAddresses();
          const addresses = response.data.data || [];
          const defaultAddr =
            addresses.find((addr: Address) => addr.is_default) || null;

          set({
            addresses,
            defaultAddress: defaultAddr,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || 'Failed to fetch addresses',
            isLoading: false,
          });
        }
      },

      addAddress: async (payload: CreateAddressPayload) => {
        set({ isLoading: true, error: null });
        try {
          const response = await deliveryAPI.createAddress(payload);
          const newAddress = response.data.data;

          const { addresses } = get();
          set({
            addresses: [...addresses, newAddress],
            defaultAddress: newAddress.is_default
              ? newAddress
              : get().defaultAddress,
            isLoading: false,
          });

          return newAddress;
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || 'Failed to add address';
          set({
            error: errorMessage,
            isLoading: false,
          });
          throw new Error(errorMessage);
        }
      },

      updateAddress: async (
        addressId: string,
        payload: Partial<CreateAddressPayload>
      ) => {
        set({ isLoading: true, error: null });
        try {
          const response = await deliveryAPI.updateAddress(addressId, payload);
          const updatedAddress = response.data.data;

          const { addresses } = get();
          const updatedAddresses = addresses.map((addr) =>
            addr._id === addressId ? updatedAddress : addr
          );

          set({
            addresses: updatedAddresses,
            defaultAddress: updatedAddress.is_default
              ? updatedAddress
              : get().defaultAddress,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || 'Failed to update address',
            isLoading: false,
          });
          throw error;
        }
      },

      deleteAddress: async (addressId: string) => {
        set({ isLoading: true, error: null });
        try {
          await deliveryAPI.deleteAddress(addressId);

          const { addresses } = get();
          const filteredAddresses = addresses.filter(
            (addr) => addr._id !== addressId
          );

          set({
            addresses: filteredAddresses,
            defaultAddress:
              get().defaultAddress?._id === addressId
                ? filteredAddresses.find((addr) => addr.is_default) || null
                : get().defaultAddress,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error: error.response?.data?.message || 'Failed to delete address',
            isLoading: false,
          });
          throw error;
        }
      },

      setDefaultAddress: async (addressId: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await deliveryAPI.setDefaultAddress(addressId);
          const updatedAddress = response.data.data;

          const { addresses } = get();
          const updatedAddresses = addresses.map((addr) => ({
            ...addr,
            is_default: addr._id === addressId,
          }));

          set({
            addresses: updatedAddresses,
            defaultAddress: updatedAddress,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error:
              error.response?.data?.message || 'Failed to set default address',
            isLoading: false,
          });
          throw error;
        }
      },

      validateDeliveryArea: async (addressId: string) => {
        set({ isValidating: true, error: null });
        try {
          const response = await deliveryAPI.validateDelivery(addressId);
          const validation = response.data.data;

          set({
            deliveryValidation: validation,
            isValidating: false,
          });

          return validation;
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || 'Failed to validate delivery area';
          set({
            error: errorMessage,
            isValidating: false,
          });
          throw new Error(errorMessage);
        }
      },

      calculateDeliveryFee: async (addressId: string) => {
        set({ isValidating: true, error: null });
        try {
          const response = await deliveryAPI.calculateDeliveryFee(addressId);
          const result = response.data.data;

          set({ isValidating: false });
          return result;
        } catch (error: any) {
          set({
            error:
              error.response?.data?.message ||
              'Failed to calculate delivery fee',
            isValidating: false,
          });
          throw error;
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'bakars-addresses',
      partialize: (state) => ({
        addresses: state.addresses,
        defaultAddress: state.defaultAddress,
      }),
    }
  )
);
```

---

## 📄 src\store\adminStore.ts

_Path: `src\store\adminStore.ts`_

```typescript
import { create } from 'zustand';
import { adminAPI } from '@api/endpoints/admin';
import { menuAPI } from '@api/endpoints/menu';
import { Order } from '@types/order.types';
import { MenuItem, Sideline } from '@types/menu.types';

interface AdminState {
  // Orders
  allOrders: Order[];
  orderStats: any | null;

  // Menu
  managedMenuItems: MenuItem[];
  managedSidelines: Sideline[];
  managedCategories: any[];

  // Loading
  isLoading: boolean;
  isUpdating: boolean;
  error: string | null;

  // Actions
  fetchAllOrders: (filters?: any) => Promise<void>;
  fetchDashboardStats: () => Promise<void>;
  updateOrderStatus: (orderId: string, status: string) => Promise<void>;

  fetchManagedMenuItems: () => Promise<void>;
  fetchManagedSidelines: () => Promise<void>;
  fetchManagedCategories: () => Promise<void>;

  createMenuItem: (data: FormData) => Promise<void>;
  updateMenuItem: (itemId: string, data: FormData) => Promise<void>;
  deleteMenuItem: (itemId: string) => Promise<void>;

  createSideline: (data: FormData) => Promise<void>;
  updateSideline: (sidelineId: string, data: FormData) => Promise<void>;
  deleteSideline: (sidelineId: string) => Promise<void>;

  clearError: () => void;
}

export const useAdminStore = create<AdminState>((set, get) => ({
  allOrders: [],
  orderStats: null,
  managedMenuItems: [],
  managedSidelines: [],
  managedCategories: [],
  isLoading: false,
  isUpdating: false,
  error: null,

  // ✅ Fetch all orders from backend
  fetchAllOrders: async (filters?: any) => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching all orders...');
      const response = await adminAPI.getAllOrders(filters);

      // ✅ Unwrap response properly
      const ordersData = response.data.data || response.data;
      const orders = Array.isArray(ordersData) ? ordersData : [];

      console.log('✅ Orders loaded:', orders.length);

      set({
        allOrders: orders,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch orders:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch orders',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch dashboard stats with fallback
  fetchDashboardStats: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching dashboard stats...');
      const response = await adminAPI.getDashboardStats();

      console.log('📦 Dashboard response:', response.data);

      // ✅ Unwrap response properly
      const statsData = response.data.data || response.data;

      console.log('✅ Stats loaded:', statsData);

      // ✅ Provide default values if stats are null/undefined
      set({
        orderStats: statsData || {
          total_orders: 0,
          pending_orders: 0,
          completed_orders: 0,
          cancelled_orders: 0,
          today_revenue: 0,
          weekly_revenue: 0,
          monthly_revenue: 0,
          total_revenue: 0,
        },
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch dashboard stats:', error);

      // ✅ Set default stats on error
      set({
        orderStats: {
          total_orders: 0,
          pending_orders: 0,
          completed_orders: 0,
          cancelled_orders: 0,
          today_revenue: 0,
          weekly_revenue: 0,
          monthly_revenue: 0,
          total_revenue: 0,
        },
        error: error.response?.data?.message || 'Failed to fetch stats',
        isLoading: false,
      });
    }
  },

  // ✅ Update order status
  updateOrderStatus: async (orderId: string, status: string) => {
    set({ isUpdating: true, error: null });
    try {
      console.log(`📡 Updating order ${orderId} to ${status}...`);
      const response = await adminAPI.updateOrderStatus(orderId, status);
      const updatedOrder = response.data.data || response.data;

      const { allOrders } = get();
      set({
        allOrders: allOrders.map((order) =>
          order._id === orderId ? updatedOrder : order
        ),
        isUpdating: false,
      });

      console.log('✅ Order status updated');
    } catch (error: any) {
      console.error('❌ Failed to update order:', error);
      set({
        error: error.response?.data?.message || 'Failed to update order',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Fetch managed menu items
  fetchManagedMenuItems: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching menu items...');
      const response = await adminAPI.getAllMenuItems();

      const menuData = response.data.data || response.data;
      const items = Array.isArray(menuData) ? menuData : [];

      console.log('✅ Menu items loaded:', items.length);

      set({
        managedMenuItems: items,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch menu items:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch menu items',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch managed sidelines
  fetchManagedSidelines: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching sidelines...');
      const response = await adminAPI.getAllSidelines();

      const sidelinesData = response.data.data || response.data;
      const sidelines = Array.isArray(sidelinesData) ? sidelinesData : [];

      console.log('✅ Sidelines loaded:', sidelines.length);

      set({
        managedSidelines: sidelines,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch sidelines:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch sidelines',
        isLoading: false,
      });
    }
  },

  // ✅ Fetch managed categories
  fetchManagedCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log('📡 Fetching categories...');
      const response = await menuAPI.getCategories();

      const categoriesData = response.data.data || response.data;
      const categories = Array.isArray(categoriesData) ? categoriesData : [];

      console.log('✅ Categories loaded:', categories);

      set({
        managedCategories: categories,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch categories:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch categories',
        isLoading: false,
      });
    }
  },

  // ✅ Create menu item
  createMenuItem: async (data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      console.log('📡 Creating menu item...');
      const response = await adminAPI.createMenuItem(data);
      const newItem = response.data.data || response.data;

      console.log('✅ Menu item created:', newItem);

      set({
        managedMenuItems: [...get().managedMenuItems, newItem],
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to create menu item:', error);
      set({
        error: error.response?.data?.message || 'Failed to create menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update menu item
  updateMenuItem: async (itemId: string, data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateMenuItem(itemId, data);
      const updatedItem = response.data.data || response.data;
      set({
        managedMenuItems: get().managedMenuItems.map((item) =>
          item._id === itemId ? updatedItem : item
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to update menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete menu item
  deleteMenuItem: async (itemId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteMenuItem(itemId);
      set({
        managedMenuItems: get().managedMenuItems.filter(
          (item) => item._id !== itemId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete menu item',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Create sideline
  createSideline: async (data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createSideline(data);
      const newSideline = response.data.data || response.data;
      set({
        managedSidelines: [...get().managedSidelines, newSideline],
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to create sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update sideline
  updateSideline: async (sidelineId: string, data: FormData) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateSideline(sidelineId, data);
      const updatedSideline = response.data.data || response.data;
      set({
        managedSidelines: get().managedSidelines.map((sideline) =>
          sideline._id === sidelineId ? updatedSideline : sideline
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to update sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete sideline
  deleteSideline: async (sidelineId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteSideline(sidelineId);
      set({
        managedSidelines: get().managedSidelines.filter(
          (s) => s._id !== sidelineId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete sideline',
        isUpdating: false,
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));
```

---

## 📄 src\store\authStore.ts

_Path: `src\store\authStore.ts`_

```typescript
import { create } from 'zustand';
import { authAPI } from '@api/endpoints/auth';
import { User, LoginCredentials, RegisterData } from '../types/auth.types'; // ✅ Fixed: Use relative import

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  role: 'customer' | 'admin' | null;

  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  role: null,

  login: async (credentials: LoginCredentials) => {
    try {
      console.log('🔑 Attempting login...');
      const response = await authAPI.login(credentials);

      // ✅ Unwrap response properly
      const authData = response.data.data || response.data;
      console.log('📦 Auth data:', authData);

      const { access_token, user } = authData;

      // ✅ Extract role from user object
      const userRole = user.role;
      console.log('👤 User role:', userRole);

      // Store token
      localStorage.setItem('bakars_auth_token', access_token);

      // ✅ Decode JWT to verify role (optional extra check)
      try {
        const tokenPayload = JSON.parse(atob(access_token.split('.')[1]));
        console.log('🔓 JWT Payload:', tokenPayload);

        // If role is in JWT, use it as fallback
        const finalRole =
          userRole || tokenPayload.role || tokenPayload.user_role;
        console.log('✅ Final role:', finalRole);

        set({
          user,
          isAuthenticated: true,
          role: finalRole,
          isLoading: false,
        });
      } catch (jwtError) {
        console.warn('⚠️ Could not decode JWT, using user.role');
        set({
          user,
          isAuthenticated: true,
          role: userRole,
          isLoading: false,
        });
      }

      console.log('✅ Login successful');
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      console.error('❌ Error response:', error.response?.data);
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (data: RegisterData) => {
    try {
      console.log('📝 Attempting registration...');
      console.log('📤 Registration data:', data);

      const response = await authAPI.register(data);

      // ✅ Unwrap response properly
      const authData = response.data.data || response.data;
      console.log('✅ Registration response:', authData);

      const { access_token, user } = authData;

      // Store token
      localStorage.setItem('bakars_auth_token', access_token);

      set({
        user,
        isAuthenticated: true,
        role: user.role,
        isLoading: false,
      });

      console.log('✅ Registration successful');
    } catch (error: any) {
      console.error('❌ Registration failed:', error);
      console.error('❌ Error response:', error.response?.data);
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    console.log('👋 Logging out...');
    localStorage.removeItem('bakars_auth_token');
    set({
      user: null,
      isAuthenticated: false,
      role: null,
      isLoading: false,
    });
  },

  checkAuth: async () => {
    const token = localStorage.getItem('bakars_auth_token');

    if (!token) {
      console.log('❌ No token found');
      set({ isLoading: false, isAuthenticated: false });
      return;
    }

    try {
      console.log('🔍 Checking authentication...');
      const response = await authAPI.getProfile();
      const user = response.data.data || response.data;

      console.log('✅ User authenticated:', user.email, 'Role:', user.role);

      set({
        user,
        isAuthenticated: true,
        role: user.role,
        isLoading: false,
      });
    } catch (error) {
      console.error('❌ Auth check failed:', error);
      localStorage.removeItem('bakars_auth_token');
      set({
        user: null,
        isAuthenticated: false,
        role: null,
        isLoading: false,
      });
    }
  },

  updateProfile: async (data: Partial<User>) => {
    try {
      const response = await authAPI.updateProfile(data);
      const updatedUser = response.data.data || response.data;
      set({ user: updatedUser });
    } catch (error) {
      throw error;
    }
  },
}));
```

---

## 📄 src\store\cartStore.ts

_Path: `src\store\cartStore.ts`_

```typescript
import { create } from 'zustand';
import { cartAPI, CartSummary } from '@api/endpoints/cart';
import { MenuItem, Sideline } from '@types/menu.types';

// Define the structure for cart items stored locally
interface LocalCartItem {
  menu_item: MenuItem;
  quantity: number;
  special_instructions?: string;
}

interface LocalSidelineItem {
  sideline: Sideline;
  quantity: number;
}

interface CartStore {
  // Cart data from backend
  cartSummary: CartSummary | null;

  // Local cart data (for unauthenticated users)
  localItems: LocalCartItem[];
  localSidelines: LocalSidelineItem[];

  // Loading states
  isLoading: boolean;
  isUpdating: boolean;
  error: string | null;

  // Order type and delivery option (local state)
  orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering' | null;
  deliveryOption: 'delivery' | 'pickup';

  // Actions
  fetchCart: () => Promise<void>;
  addItem: (
    item: MenuItem,
    quantity: number,
    specialInstructions?: string
  ) => Promise<void>;
  addSideline: (sideline: Sideline, quantity: number) => Promise<void>;
  updateQuantity: (
    itemId: string,
    quantity: number,
    isSideline?: boolean
  ) => Promise<void>;
  removeItem: (itemId: string, isSideline?: boolean) => Promise<void>;
  clearCart: () => Promise<void>;

  // Local state setters
  setOrderType: (
    type: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => void;
  setDeliveryOption: (option: 'delivery' | 'pickup') => void;
  clearError: () => void;

  // Local cart operations (for unauthenticated users)
  addLocalItem: (
    item: MenuItem,
    quantity: number,
    specialInstructions?: string
  ) => void;
  removeLocalItem: (itemId: string) => void;
  updateLocalQuantity: (itemId: string, quantity: number) => void;
  clearLocalCart: () => void;

  // Computed values for local cart
  getLocalSummary: () => CartSummary;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartSummary: null,
  localItems: [],
  localSidelines: [],
  isLoading: false,
  isUpdating: false,
  error: null,
  orderType: null,
  deliveryOption: 'delivery',

  /**
   * Fetch cart from backend
   */
  fetchCart: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await cartAPI.getCartSummary();
      set({
        cartSummary: response.data.data,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('Failed to fetch cart:', error);
      // Don't set error for 404 (empty cart)
      if (error.response?.status !== 404) {
        set({
          error: error.response?.data?.message || 'Failed to fetch cart',
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    }
  },

  /**
   * Add menu item to cart - FIXED to use item.id
   */
  addItem: async (
    item: MenuItem,
    quantity: number,
    specialInstructions?: string
  ) => {
    set({ isUpdating: true, error: null });

    // Validate item has an ID
    if (!item.id) {
      console.error('❌ Item missing ID:', item);
      set({
        error: 'Invalid item: missing ID',
        isUpdating: false,
      });
      throw new Error('Invalid item: missing ID');
    }

    try {
      console.log('🛒 Adding item to cart:', { itemId: item.id, quantity });
      const response = await cartAPI.addToCart(item.id, quantity, false);
      console.log('✅ Item added successfully:', response.data);

      set({
        cartSummary: response.data.data,
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to add item:', error);
      console.error('Error response:', error.response?.data);

      // If not authenticated, add to local cart
      if (error.response?.status === 401) {
        get().addLocalItem(item, quantity, specialInstructions);
        set({ isUpdating: false });
      } else {
        set({
          error: error.response?.data?.message || 'Failed to add item to cart',
          isUpdating: false,
        });
        throw error;
      }
    }
  },

  /**
   * Add sideline to cart - FIXED to use sideline.id
   */
  addSideline: async (sideline: Sideline, quantity: number) => {
    set({ isUpdating: true, error: null });

    if (!sideline.id) {
      console.error('❌ Sideline missing ID:', sideline);
      set({
        error: 'Invalid sideline: missing ID',
        isUpdating: false,
      });
      throw new Error('Invalid sideline: missing ID');
    }

    try {
      const response = await cartAPI.addToCart(sideline.id, quantity, true);
      set({
        cartSummary: response.data.data,
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('Failed to add sideline:', error);
      set({
        error:
          error.response?.data?.message || 'Failed to add sideline to cart',
        isUpdating: false,
      });
      throw error;
    }
  },

  /**
   * Update item quantity in cart
   */
  updateQuantity: async (
    itemId: string,
    quantity: number,
    isSideline: boolean = false
  ) => {
    if (quantity <= 0) {
      await get().removeItem(itemId, isSideline);
      return;
    }

    set({ isUpdating: true, error: null });
    try {
      const response = await cartAPI.updateCartItem(
        itemId,
        quantity,
        isSideline
      );
      set({
        cartSummary: response.data.data,
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('Failed to update quantity:', error);
      // If not authenticated, update local cart
      if (error.response?.status === 401) {
        get().updateLocalQuantity(itemId, quantity);
        set({ isUpdating: false });
      } else {
        set({
          error: error.response?.data?.message || 'Failed to update quantity',
          isUpdating: false,
        });
        throw error;
      }
    }
  },

  /**
   * Remove item from cart
   */
  removeItem: async (itemId: string, isSideline: boolean = false) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await cartAPI.removeFromCart(itemId, isSideline);
      set({
        cartSummary: response.data.data,
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('Failed to remove item:', error);
      // If not authenticated, remove from local cart
      if (error.response?.status === 401) {
        get().removeLocalItem(itemId);
        set({ isUpdating: false });
      } else {
        set({
          error: error.response?.data?.message || 'Failed to remove item',
          isUpdating: false,
        });
        throw error;
      }
    }
  },

  /**
   * Clear entire cart
   */
  clearCart: async () => {
    set({ isUpdating: true, error: null });
    try {
      await cartAPI.clearCart();
      set({
        cartSummary: null,
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('Failed to clear cart:', error);
      // If not authenticated, clear local cart
      if (error.response?.status === 401) {
        get().clearLocalCart();
        set({ isUpdating: false });
      } else {
        set({
          error: error.response?.data?.message || 'Failed to clear cart',
          isUpdating: false,
        });
        throw error;
      }
    }
  },

  /**
   * Local cart operations (for unauthenticated users)
   */
  addLocalItem: (
    item: MenuItem,
    quantity: number,
    specialInstructions?: string
  ) => {
    const currentItems = get().localItems;
    const existingItem = currentItems.find((i) => i.menu_item.id === item.id);

    if (existingItem) {
      set({
        localItems: currentItems.map((i) =>
          i.menu_item.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        ),
      });
    } else {
      set({
        localItems: [
          ...currentItems,
          {
            menu_item: item,
            quantity,
            special_instructions: specialInstructions,
          },
        ],
      });
    }
  },

  removeLocalItem: (itemId: string) => {
    set({
      localItems: get().localItems.filter((i) => i.menu_item.id !== itemId),
    });
  },

  updateLocalQuantity: (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeLocalItem(itemId);
      return;
    }
    set({
      localItems: get().localItems.map((i) =>
        i.menu_item.id === itemId ? { ...i, quantity } : i
      ),
    });
  },

  clearLocalCart: () => {
    set({ localItems: [], localSidelines: [] });
  },

  getLocalSummary: () => {
    const items = get().localItems;
    const sidelines = get().localSidelines;
    const deliveryOption = get().deliveryOption;

    const subtotal =
      items.reduce(
        (sum, item) => sum + item.menu_item.price * item.quantity,
        0
      ) +
      sidelines.reduce(
        (sum, item) => sum + item.sideline.price * item.quantity,
        0
      );

    const delivery_fee =
      deliveryOption === 'pickup' ? 0 : subtotal >= 50 ? 0 : 10;
    const total = subtotal + delivery_fee;
    const items_count =
      items.reduce((sum, item) => sum + item.quantity, 0) +
      sidelines.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items: items.map((i) => ({
        item_id: i.menu_item.id,
        item_name: i.menu_item.name,
        category: i.menu_item.category,
        quantity: i.quantity,
        price: i.menu_item.price,
        subtotal: i.menu_item.price * i.quantity,
      })),
      sidelines: sidelines.map((s) => ({
        item_id: s.sideline.id,
        item_name: s.sideline.name,
        quantity: s.quantity,
        price: s.sideline.price,
        subtotal: s.sideline.price * s.quantity,
      })),
      subtotal,
      delivery_fee,
      total,
      items_count,
    };
  },

  /**
   * Set order type (local state)
   */
  setOrderType: (
    type: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => {
    set({ orderType: type });
  },

  /**
   * Set delivery option (local state)
   */
  setDeliveryOption: (option: 'delivery' | 'pickup') => {
    set({ deliveryOption: option });
  },

  /**
   * Clear error
   */
  clearError: () => {
    set({ error: null });
  },
}));
```

---

## 📄 src\store\menuStore.ts

_Path: `src\store\menuStore.ts`_

```typescript
import { create } from 'zustand';
import { menuAPI } from '@api/endpoints/menu';
import {
  MenuItem,
  Sideline,
  MenuFilters,
  MenuCategory,
} from '@types/menu.types';

// ✅ ============================================
// NORMALIZATION FUNCTIONS
// ============================================

/**
 * Normalize menu item to ensure both id and _id exist
 * and image URLs are properly formatted
 */
const normalizeMenuItem = (item: any): MenuItem => {
  // Ensure both id and _id exist
  const itemId = item.id || item._id;

  if (!itemId) {
    console.error('❌ Item missing both id and _id:', item);
  }

  // Normalize the item
  const normalized: MenuItem = {
    ...item,
    id: itemId,
    _id: itemId,
    // Ensure required fields have defaults
    name: item.name || 'Unnamed Item',
    description: item.description || '',
    category: item.category || 'other',
    price: Number(item.price) || 0,
    image_url: item.image_url || undefined,
    is_available: item.is_available !== false,
    is_available_for_daily: item.is_available_for_daily !== false,
    is_available_for_weekly: item.is_available_for_weekly !== false,
    is_available_for_catering: item.is_available_for_catering !== false,
    max_boxes_per_menu: item.max_boxes_per_menu || 2,
    allergens: Array.isArray(item.allergens) ? item.allergens : [],
    spice_level: item.spice_level || undefined,
    is_vegetarian: item.is_vegetarian === true,
    is_vegan: item.is_vegan === true,
    is_halal: item.is_halal !== false,
    nutritional_info: item.nutritional_info || undefined,
    serving_size: item.serving_size || undefined,
    created_at: item.created_at || new Date().toISOString(),
    updated_at: item.updated_at || new Date().toISOString(),
  };

  // Debug log in development
  if (import.meta.env.DEV) {
    console.log('🔧 Normalized menu item:', {
      originalId: item.id,
      original_Id: item._id,
      normalizedId: normalized.id,
      normalized_Id: normalized._id,
      name: normalized.name,
      imageUrl: normalized.image_url,
      isAvailableForDaily: normalized.is_available_for_daily,
    });
  }

  return normalized;
};

/**
 * Normalize sideline to ensure both id and _id exist
 */
const normalizeSideline = (item: any): Sideline => {
  const itemId = item.id || item._id;

  return {
    ...item,
    id: itemId,
    _id: itemId,
    name: item.name || 'Unnamed Sideline',
    description: item.description || undefined,
    price: Number(item.price) || 0,
    image_url: item.image_url || undefined,
    is_available: item.is_available !== false,
    sort_order: item.sort_order || 0,
    created_at: item.created_at || new Date().toISOString(),
    updated_at: item.updated_at || new Date().toISOString(),
  };
};

// ✅ ============================================
// MENU STORE INTERFACE
// ============================================

interface MenuState {
  // Menu items by type
  dailyMenuItems: MenuItem[];
  weeklyMenuItems: MenuItem[];
  cateringMenuItems: MenuItem[];

  // Sidelines
  sidelines: Sideline[];

  // Categories
  categories: string[];

  // Filters
  activeFilters: MenuFilters;
  searchQuery: string;

  // Loading states
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchDailyMenu: () => Promise<void>;
  fetchWeeklyMenu: (deliveryDate?: string) => Promise<void>;
  fetchCateringMenu: () => Promise<void>;
  fetchSidelines: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  searchMenuItems: (query: string) => Promise<void>;
  setFilters: (filters: Partial<MenuFilters>) => void;
  clearFilters: () => void;
  getFilteredItems: (
    orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => MenuItem[];
}

// ✅ ============================================
// MENU STORE IMPLEMENTATION
// ============================================

export const useMenuStore = create<MenuState>((set, get) => ({
  dailyMenuItems: [],
  weeklyMenuItems: [],
  cateringMenuItems: [],
  sidelines: [],
  categories: [],
  activeFilters: {},
  searchQuery: '',
  isLoading: false,
  error: null,

  // ✅ FETCH DAILY MENU
  fetchDailyMenu: async () => {
    set({ isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Fetching daily menu from API...');
      const response = await menuAPI.getDailyMenu();

      console.log('📦 [MenuStore] Raw API response:', response);

      let items: any[] = [];

      // ✅ Handle different response structures
      if (response.data?.data && Array.isArray(response.data.data)) {
        items = response.data.data;
        console.log('✅ [MenuStore] Using response.data.data');
      } else if (response.data?.items && Array.isArray(response.data.items)) {
        items = response.data.items;
        console.log('✅ [MenuStore] Using response.data.items');
      } else if (Array.isArray(response.data)) {
        items = response.data;
        console.log('✅ [MenuStore] Using response.data directly');
      } else {
        console.warn('⚠️ [MenuStore] Unknown response structure:', response);
      }

      // ✅ Normalize ALL items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(
        `📦 [MenuStore] Normalized ${normalizedItems.length} daily menu items`
      );

      if (normalizedItems.length > 0) {
        console.log('📦 [MenuStore] Sample normalized item:', {
          id: normalizedItems[0].id,
          _id: normalizedItems[0]._id,
          name: normalizedItems[0].name,
          imageUrl: normalizedItems[0].image_url,
          isAvailable: normalizedItems[0].is_available,
          isAvailableForDaily: normalizedItems[0].is_available_for_daily,
        });
      } else {
        console.warn('⚠️ [MenuStore] No daily menu items found!');
      }

      set({
        dailyMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch daily menu:', error);
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          'Failed to fetch daily menu',
        isLoading: false,
        dailyMenuItems: [], // Clear items on error
      });
    }
  },

  // ✅ FETCH WEEKLY MENU
  fetchWeeklyMenu: async (deliveryDate?: string) => {
    set({ isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Fetching weekly menu...');

      const response = await menuAPI.getWeeklyMenu(deliveryDate);

      console.log('📦 [MenuStore] Weekly menu response:', response);

      const menuData = response.data?.data || response.data;

      let items: any[] = [];

      if (Array.isArray(menuData)) {
        items = menuData;
      } else if (menuData?.items && Array.isArray(menuData.items)) {
        items = menuData.items;
      }

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(
        `✅ [MenuStore] Weekly menu: ${normalizedItems.length} items`
      );

      set({
        weeklyMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch weekly menu:', error);
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          'Failed to fetch weekly menu',
        isLoading: false,
        weeklyMenuItems: [],
      });
    }
  },

  // ✅ FETCH CATERING MENU
  fetchCateringMenu: async () => {
    set({ isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Fetching catering menu...');
      const response = await menuAPI.getCateringMenu();

      const menuData = response.data?.data || response.data;
      let items = Array.isArray(menuData) ? menuData : [];

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`✅ [MenuStore] Catering items: ${normalizedItems.length}`);

      set({
        cateringMenuItems: normalizedItems,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch catering menu:', error);
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          'Failed to fetch catering menu',
        isLoading: false,
        cateringMenuItems: [],
      });
    }
  },

  // ✅ FETCH SIDELINES
  fetchSidelines: async () => {
    try {
      console.log('🔍 [MenuStore] Fetching sidelines...');
      const response = await menuAPI.getSidelines();

      console.log('📦 [MenuStore] Sidelines response:', response.data);

      const sidelinesData = response.data?.data || response.data;
      let items = Array.isArray(sidelinesData) ? sidelinesData : [];

      // ✅ Normalize all sidelines
      const normalizedItems = items.map(normalizeSideline);

      console.log(`✅ [MenuStore] Sidelines: ${normalizedItems.length}`);

      set({ sidelines: normalizedItems });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch sidelines:', error);
    }
  },

  // ✅ FETCH CATEGORIES
  fetchCategories: async () => {
    try {
      console.log('🔍 [MenuStore] Fetching categories...');
      const response = await menuAPI.getCategories();

      console.log('📦 [MenuStore] Categories response:', response.data);

      const categoriesData = response.data?.data || response.data;

      let items: string[] = [];

      if (Array.isArray(categoriesData)) {
        items = categoriesData.map((cat: any) => {
          if (typeof cat === 'string') {
            return cat;
          }
          return cat.name || cat.display_name || String(cat);
        });
      }

      console.log('✅ [MenuStore] Categories:', items);

      set({ categories: items });
    } catch (error: any) {
      console.error('❌ [MenuStore] Failed to fetch categories:', error);
    }
  },

  // ✅ SEARCH MENU ITEMS
  searchMenuItems: async (query: string) => {
    set({ searchQuery: query, isLoading: true, error: null });

    try {
      console.log('🔍 [MenuStore] Searching for:', query);
      const response = await menuAPI.searchMenuItems(query);

      const searchData = response.data?.data || response.data;
      let items = Array.isArray(searchData) ? searchData : [];

      // ✅ Normalize all items
      const normalizedItems = items.map(normalizeMenuItem);

      console.log(`✅ [MenuStore] Search results: ${normalizedItems.length}`);

      // Categorize items by order type
      set({
        dailyMenuItems: normalizedItems.filter(
          (item) => item.is_available_for_daily
        ),
        weeklyMenuItems: normalizedItems.filter(
          (item) => item.is_available_for_weekly
        ),
        cateringMenuItems: normalizedItems.filter(
          (item) => item.is_available_for_catering
        ),
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      console.error('❌ [MenuStore] Search failed:', error);
      set({
        error:
          error.response?.data?.message || error.message || 'Search failed',
        isLoading: false,
      });
    }
  },

  // ✅ SET FILTERS
  setFilters: (filters: Partial<MenuFilters>) => {
    console.log('🔍 [MenuStore] Setting filters:', filters);
    set((state) => ({
      activeFilters: { ...state.activeFilters, ...filters },
    }));
  },

  // ✅ CLEAR FILTERS
  clearFilters: () => {
    console.log('🔍 [MenuStore] Clearing all filters');
    set({ activeFilters: {}, searchQuery: '' });
  },

  // ✅ GET FILTERED ITEMS
  getFilteredItems: (
    orderType: 'daily_menu' | 'weekly_subscription' | 'special_catering'
  ) => {
    const { activeFilters, searchQuery } = get();

    let items: MenuItem[] = [];

    switch (orderType) {
      case 'daily_menu':
        items = get().dailyMenuItems;
        break;
      case 'weekly_subscription':
        items = get().weeklyMenuItems;
        break;
      case 'special_catering':
        items = get().cateringMenuItems;
        break;
    }

    console.log(`📦 [MenuStore] Filtering ${orderType}: ${items.length} items`);
    console.log(`📦 [MenuStore] Active filters:`, activeFilters);

    // Apply filters
    let filtered = items;

    // Category filter
    if (activeFilters.category) {
      filtered = filtered.filter(
        (item) => item.category === activeFilters.category
      );
      console.log(
        `  🔹 After category filter (${activeFilters.category}): ${filtered.length}`
      );
    }

    // Vegetarian filter
    if (activeFilters.is_vegetarian !== undefined) {
      filtered = filtered.filter(
        (item) => item.is_vegetarian === activeFilters.is_vegetarian
      );
      console.log(`  🔹 After vegetarian filter: ${filtered.length}`);
    }

    // Vegan filter
    if (activeFilters.is_vegan !== undefined) {
      filtered = filtered.filter(
        (item) => item.is_vegan === activeFilters.is_vegan
      );
      console.log(`  🔹 After vegan filter: ${filtered.length}`);
    }

    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
      );
      console.log(`  🔹 After search filter ("${query}"): ${filtered.length}`);
    }

    console.log(
      `✅ [MenuStore] Final filtered count: ${filtered.length} items`
    );

    return filtered;
  },
}));
```

---

## 📄 src\store\orderStore.ts

_Path: `src\store\orderStore.ts`_

```typescript
import { create } from 'zustand';
import { ordersAPI } from '@api/endpoints/orders';
import { Order, CreateOrderPayload, OrderTracking } from '@types/order.types';
import { PaginatedResponse } from '@types/common.types';

interface OrderState {
  // Current order being created
  currentOrder: Order | null;

  // Order history
  orderHistory: Order[];
  orderHistoryTotal: number;
  orderHistoryPage: number;

  // Order tracking
  trackingInfo: OrderTracking | null;

  // Loading states
  isPlacingOrder: boolean;
  isLoadingHistory: boolean;
  isTracking: boolean;
  error: string | null;

  // Actions
  createOrder: (payload: CreateOrderPayload) => Promise<Order>;
  fetchOrderHistory: (page?: number) => Promise<void>;
  fetchOrderById: (orderId: string) => Promise<void>;
  trackOrder: (orderId: string) => Promise<void>;
  cancelOrder: (orderId: string, reason: string) => Promise<void>;
  clearCurrentOrder: () => void;
  clearError: () => void;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  currentOrder: null,
  orderHistory: [],
  orderHistoryTotal: 0,
  orderHistoryPage: 1,
  trackingInfo: null,
  isPlacingOrder: false,
  isLoadingHistory: false,
  isTracking: false,
  error: null,

  createOrder: async (payload: CreateOrderPayload) => {
    set({ isPlacingOrder: true, error: null });
    try {
      const response = await ordersAPI.createOrder(payload);
      const order = response.data.data;

      set({
        currentOrder: order,
        isPlacingOrder: false,
      });

      return order;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Failed to create order';
      set({
        error: errorMessage,
        isPlacingOrder: false,
      });
      throw new Error(errorMessage);
    }
  },

  fetchOrderHistory: async (page = 1) => {
    set({ isLoadingHistory: true, error: null });
    try {
      const response = await ordersAPI.getOrderHistory(page, 10);
      const data: PaginatedResponse<Order> = response.data.data;

      set({
        orderHistory: data.items,
        orderHistoryTotal: data.total,
        orderHistoryPage: page,
        isLoadingHistory: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch order history',
        isLoadingHistory: false,
      });
    }
  },

  fetchOrderById: async (orderId: string) => {
    set({ isLoadingHistory: true, error: null });
    try {
      const response = await ordersAPI.getOrderById(orderId);
      set({
        currentOrder: response.data.data,
        isLoadingHistory: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch order details',
        isLoadingHistory: false,
      });
    }
  },

  trackOrder: async (orderId: string) => {
    set({ isTracking: true, error: null });
    try {
      const response = await ordersAPI.trackOrder(orderId);
      set({
        trackingInfo: response.data.data,
        isTracking: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to track order',
        isTracking: false,
      });
    }
  },

  cancelOrder: async (orderId: string, reason: string) => {
    set({ isPlacingOrder: true, error: null });
    try {
      const response = await ordersAPI.cancelOrder(orderId, reason);
      const cancelledOrder = response.data.data;

      // Update order history if the cancelled order is in the list
      const { orderHistory } = get();
      const updatedHistory = orderHistory.map((order) =>
        order._id === orderId ? cancelledOrder : order
      );

      set({
        orderHistory: updatedHistory,
        currentOrder:
          get().currentOrder?._id === orderId
            ? cancelledOrder
            : get().currentOrder,
        isPlacingOrder: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to cancel order',
        isPlacingOrder: false,
      });
      throw error;
    }
  },

  clearCurrentOrder: () => {
    set({ currentOrder: null, trackingInfo: null });
  },

  clearError: () => {
    set({ error: null });
  },
}));
```

---

## 📄 src\styles\globals.css

_Path: `src\styles\globals.css`_

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-text font-body antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading;
  }
}

@layer components {
  /* Custom Button Styles */
  .btn-primary {
    @apply bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg;
  }

  .btn-secondary {
    @apply bg-secondary hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200;
  }

  .btn-outline {
    @apply border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200;
  }

  /* Card Styles */
  .card {
    @apply bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200;
  }

  /* Input Styles */
  .input-field {
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200;
  }

  /* Container */
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ff6b35;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff4800;
}
```

---

## 📄 src\types\address.types.ts

_Path: `src\types\address.types.ts`_

```typescript
export interface Address {
  _id: string;
  user_id: string;
  label: string;
  street: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
  is_default: boolean;
  delivery_instructions?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateAddressPayload {
  label: string;
  street: string;
  suburb: string;
  postcode: string;
  state: string;
  country?: string;
  is_default?: boolean;
  delivery_instructions?: string;
}

export interface DeliveryValidation {
  is_valid: boolean;
  distance_km: number;
  delivery_fee: number;
  estimated_time_minutes: number;
  message?: string;
}
```

---

## 📄 src\types\auth.types.ts

_Path: `src\types\auth.types.ts`_

```typescript
export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  role: 'customer' | 'admin';
  addresses: Address[];
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  suburb: string;
  postcode: string;
  state: string;
  is_default: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// ✅ FIXED: Make role optional with proper typing
export interface RegisterData {
  email: string;
  password: string;
  full_name: string;
  phone: string;
  role?: 'customer' | 'admin'; // ✅ Optional with union type
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}
```

---

## 📄 src\types\cart.types.ts

_Path: `src\types\cart.types.ts`_

```typescript
import { MenuItem, Sideline } from './menu.types';
import { Address } from './auth.types';

export interface CartItem {
  menu_item: MenuItem;
  quantity: number;
  special_instructions?: string;
}

export interface CartSideline {
  sideline: Sideline;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  sidelines: CartSideline[];
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering';
  delivery_option: 'pickup' | 'delivery';
  selected_address?: Address;
  delivery_date?: string;
  delivery_time_slot?: string;
  special_instructions?: string;
}

export interface CartSummary {
  subtotal: number;
  delivery_fee: number;
  tax: number;
  total: number;
  item_count: number;
}

export interface WeeklySubscriptionSelection {
  plan_type: 'weekly' | 'fortnightly' | 'monthly';
  meals_per_week: number;
  selected_meals: { [key: string]: MenuItem[] }; // day => meals
  start_date: string;
  delivery_days: string[];
}

export interface CateringDetails {
  event_date: string;
  event_time: string;
  head_count: number;
  event_type: string;
  venue_address: string;
  special_requirements?: string;
}
```

---

## 📄 src\types\common.types.ts

_Path: `src\types\common.types.ts`_

```typescript
// Common types used across the application

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
}

export type OrderType =
  | 'daily_menu'
  | 'weekly_subscription'
  | 'special_catering';
export type DeliveryOption = 'pickup' | 'delivery';
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type PaymentMethod = 'card' | 'cash';
export type UserRole = 'customer' | 'admin';
```

---

## 📄 src\types\menu.types.ts

_Path: `src\types\menu.types.ts`_

```typescript
export interface MenuItem {
  _id: string; // MongoDB ID
  id: string; // Also support 'id' field for compatibility
  name: string;
  description: string;
  category: string;
  price: number;
  image_url?: string; // ✅ This can be null/undefined
  is_available: boolean;
  is_available_for_daily: boolean;
  is_available_for_weekly: boolean;
  is_available_for_catering: boolean;
  max_boxes_per_menu?: number;
  nutritional_info?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  allergens?: string[];
  spice_level?: 'mild' | 'medium' | 'hot';
  is_vegetarian: boolean;
  is_vegan?: boolean;
  is_halal?: boolean;
  serving_size?: string;
  created_at: string;
  updated_at: string;
}

export interface Sideline {
  _id: string;
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  is_available: boolean;
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

export interface MenuCategory {
  _id: string;
  id: string;
  name: string;
  display_name: string;
  description?: string;
  image_url?: string;
  is_active: boolean;
  sort_order: number;
}

export interface MenuFilters {
  category?: string;
  is_vegetarian?: boolean;
  is_vegan?: boolean;
  search?: string;
  order_type?: 'daily_menu' | 'weekly_subscription' | 'special_catering';
}
```

---

## 📄 src\types\order.types.ts

_Path: `src\types\order.types.ts`_

```typescript
import { CartItem, CartSideline } from './cart.types';
import { Address } from './auth.types';

export interface Order {
  _id: string;
  user_id: string;
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering';
  items: CartItem[];
  sidelines: CartSideline[];
  delivery_option: 'pickup' | 'delivery';
  delivery_address?: Address;
  delivery_date: string;
  delivery_time_slot?: string;
  status:
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'out_for_delivery'
    | 'delivered'
    | 'cancelled';
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method: 'card' | 'cash';
  payment_intent_id?: string;
  subtotal: number;
  delivery_fee: number;
  tax: number;
  total: number;
  special_instructions?: string;
  cancellation_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateOrderPayload {
  order_type: 'daily_menu' | 'weekly_subscription' | 'special_catering';
  items: {
    menu_item_id: string;
    quantity: number;
    special_instructions?: string;
  }[];
  sidelines?: { sideline_id: string; quantity: number }[];
  delivery_option: 'pickup' | 'delivery';
  delivery_address_id?: string;
  delivery_date: string;
  delivery_time_slot?: string;
  payment_method: 'card' | 'cash';
  special_instructions?: string;
}

export interface OrderTracking {
  order_id: string;
  status: string;
  estimated_delivery_time?: string;
  driver_location?: {
    lat: number;
    lng: number;
  };
  status_history: {
    status: string;
    timestamp: string;
    note?: string;
  }[];
}
```

---

## 📄 src\utils\constants.ts

_Path: `src\utils\constants.ts`_

```typescript
/**
 * Application constants
 */

export const APP_NAME = "Bakar's Food & Catering";

export const BUSINESS_INFO = {
  address: 'Guildford 2161, Sydney, Australia',
  phone: import.meta.env.VITE_WHATSAPP_NUMBER || '+61XXXXXXXXX',
  email: 'info@bakarsfood.com.au',
  deliveryRadius: 6, // km
};

export const ORDER_TYPES = {
  DAILY_MENU: 'daily_menu',
  WEEKLY_SUBSCRIPTION: 'weekly_subscription',
  SPECIAL_CATERING: 'special_catering',
} as const;

export const DELIVERY_OPTIONS = {
  PICKUP: 'pickup',
  DELIVERY: 'delivery',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

export const PAYMENT_METHODS = {
  CARD: 'card',
  CASH: 'cash',
} as const;

export const DELIVERY_TIME_SLOTS = [
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '1:00 PM - 2:00 PM',
  '6:00 PM - 7:00 PM',
  '7:00 PM - 8:00 PM',
  '8:00 PM - 9:00 PM',
];

export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const SUBSCRIPTION_PLANS = {
  WEEKLY: { meals: 7, discount: 0 },
  FORTNIGHTLY: { meals: 14, discount: 5 },
  MONTHLY: { meals: 30, discount: 10 },
};

export const TAX_RATE = 0.1; // 10% GST

export const MIN_ORDER_VALUE = 15; // AUD

export const DELIVERY_FEE_PER_KM = 2.5; // AUD per km

export const FREE_DELIVERY_THRESHOLD = 50; // AUD
```

---

## 📄 src\utils\formatters.ts

_Path: `src\utils\formatters.ts`_

```typescript
import { format, parseISO } from 'date-fns';

/**
 * Format currency values to AUD
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
};

/**
 * Format date to readable string
 */
export const formatDate = (
  date: string | Date,
  formatStr: string = 'PPP'
): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    return 'Invalid date';
  }
};

/**
 * Format time to 12-hour format
 */
export const formatTime = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'h:mm a');
  } catch (error) {
    return 'Invalid time';
  }
};

/**
 * Format distance in kilometers
 */
export const formatDistance = (distanceKm: number): string => {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)}m`;
  }
  return `${distanceKm.toFixed(1)}km`;
};

/**
 * Format phone number to Australian format
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`;
  }

  if (cleaned.length === 11 && cleaned.startsWith('61')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Get initials from full name
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
```

---

## 📄 src\utils\images.ts

_Path: `src\utils\images.ts`_

```typescript
/**
 * Image utility functions with comprehensive error handling and fallbacks
 */

// Get environment variables
const CDN_URL =
  import.meta.env.VITE_CDN_URL || import.meta.env.VITE_R2_PUBLIC_URL || '';
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// High-quality food image fallbacks from Unsplash
const FALLBACK_IMAGES = {
  food: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format',
  curry:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format',
  rice: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=400&h=300&fit=crop&auto=format',
  bbq: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format',
  default:
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&auto=format',
};

// Placeholder for loading state
const PLACEHOLDER_IMAGE =
  'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Loading...';

// SVG placeholder as base64 (last resort fallback)
const SVG_PLACEHOLDER = `data:image/svg+xml;base64,${btoa(`
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f3f4f6"/>
  <g>
    <rect x="150" y="100" width="100" height="80" fill="none" stroke="#9ca3af" stroke-width="3" rx="10"/>
    <circle cx="175" cy="130" r="8" fill="#9ca3af"/>
    <circle cx="225" cy="130" r="8" fill="#9ca3af"/>
    <path d="M175 155 Q200 170 225 155" stroke="#9ca3af" stroke-width="3" fill="none"/>
  </g>
  <text x="50%" y="220" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">No Image Available</text>
</svg>
`)}`;

/**
 * Get the full image URL with comprehensive fallback handling
 * @param imageUrl - The image URL from the API (can be relative or absolute)
 * @param category - Optional category for better fallback selection
 * @returns Absolute image URL or fallback
 */
export const getImageUrl = (
  imageUrl?: string | null,
  category?: string
): string => {
  // Debug logging in development
  if (import.meta.env.DEV) {
    console.log('🖼️ [getImageUrl] Processing:', {
      input: imageUrl,
      category,
      CDN_URL,
      API_URL,
    });
  }

  // Case 1: No image URL provided - return category-specific or default fallback
  if (
    !imageUrl ||
    imageUrl.trim() === '' ||
    imageUrl === 'null' ||
    imageUrl === 'undefined'
  ) {
    const fallback = getCategoryFallback(category);
    if (import.meta.env.DEV) {
      console.log(
        '⚠️ [getImageUrl] No URL provided, using fallback:',
        fallback
      );
    }
    return fallback;
  }

  // Case 2: Already a full URL (http/https)
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    if (import.meta.env.DEV) {
      console.log('✅ [getImageUrl] Full URL detected:', imageUrl);
    }
    return imageUrl;
  }

  // Case 3: Data URL (base64)
  if (imageUrl.startsWith('data:')) {
    if (import.meta.env.DEV) {
      console.log('✅ [getImageUrl] Data URL detected');
    }
    return imageUrl;
  }

  // Case 4: Construct full URL from relative path
  let fullUrl = '';

  // Clean the image URL (remove any leading/trailing whitespace)
  const cleanImageUrl = imageUrl.trim();

  // If we have a CDN URL, use it
  if (CDN_URL) {
    // Remove leading slash from image URL if present
    const imagePath = cleanImageUrl.startsWith('/')
      ? cleanImageUrl.substring(1)
      : cleanImageUrl;

    // Ensure CDN URL doesn't end with slash
    const baseUrl = CDN_URL.endsWith('/') ? CDN_URL.slice(0, -1) : CDN_URL;

    fullUrl = `${baseUrl}/${imagePath}`;
  }
  // Otherwise, use API URL as fallback
  else {
    // If the path doesn't start with /, assume it needs /static/ prefix
    if (!cleanImageUrl.startsWith('/')) {
      fullUrl = `${API_URL}/static/${cleanImageUrl}`;
    } else {
      fullUrl = `${API_URL}${cleanImageUrl}`;
    }
  }

  if (import.meta.env.DEV) {
    console.log('✅ [getImageUrl] Constructed URL:', fullUrl);
  }

  return fullUrl;
};

/**
 * Get category-specific fallback image
 * @param category - The food category
 * @returns Appropriate fallback image URL
 */
const getCategoryFallback = (category?: string): string => {
  if (!category) return FALLBACK_IMAGES.default;

  const lowerCategory = category.toLowerCase();

  if (lowerCategory.includes('rice')) return FALLBACK_IMAGES.rice;
  if (lowerCategory.includes('curry')) return FALLBACK_IMAGES.curry;
  if (lowerCategory.includes('bbq') || lowerCategory.includes('grill'))
    return FALLBACK_IMAGES.bbq;

  return FALLBACK_IMAGES.default;
};

/**
 * Handle image loading errors with multi-level fallback
 * @param event - The error event from img element
 * @param category - Optional category for better fallback
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: string
): void => {
  const target = event.currentTarget;
  const currentSrc = target.src;

  console.error('❌ [handleImageError] Image failed to load:', currentSrc);

  // Track which fallback level we're at using data attribute
  const fallbackLevel = parseInt(target.dataset.fallbackLevel || '0', 10);

  if (fallbackLevel === 0) {
    // Level 1: Try category-specific fallback
    const categoryFallback = getCategoryFallback(category);
    console.log(
      '🔄 [handleImageError] Trying category fallback:',
      categoryFallback
    );
    target.src = categoryFallback;
    target.dataset.fallbackLevel = '1';
  } else if (fallbackLevel === 1) {
    // Level 2: Try generic food fallback
    console.log('🔄 [handleImageError] Trying generic fallback');
    target.src = FALLBACK_IMAGES.default;
    target.dataset.fallbackLevel = '2';
  } else if (fallbackLevel === 2) {
    // Level 3: Try placeholder service
    console.log('🔄 [handleImageError] Trying placeholder service');
    target.src = PLACEHOLDER_IMAGE;
    target.dataset.fallbackLevel = '3';
  } else {
    // Level 4: Final fallback to SVG
    console.log('🔄 [handleImageError] Using SVG fallback');
    target.src = SVG_PLACEHOLDER;
    target.onerror = null; // Prevent infinite loop
  }
};

/**
 * Preload an image to check if it's valid
 * @param src - Image source URL
 * @returns Promise that resolves if image loads successfully
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      console.log('✅ [preloadImage] Successfully loaded:', src);
      resolve();
    };

    img.onerror = () => {
      console.error('❌ [preloadImage] Failed to load:', src);
      reject(new Error(`Failed to load image: ${src}`));
    };

    img.src = src;
  });
};

/**
 * Check if image URL is valid format
 * @param url - URL to check
 * @returns Boolean indicating if URL appears to be valid image
 */
export const isValidImageUrl = (url?: string | null): boolean => {
  if (!url || url.trim() === '') return false;

  // Check for common image extensions
  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
    '.svg',
    '.bmp',
    '.ico',
  ];
  const hasImageExtension = imageExtensions.some((ext) =>
    url.toLowerCase().includes(ext)
  );

  // Check for data URLs
  const isDataUrl = url.startsWith('data:image/');

  // Check for known image services
  const isImageService =
    url.includes('unsplash.com') ||
    url.includes('placeholder.com') ||
    url.includes('cloudflarestorage.com') ||
    url.includes('r2.dev') ||
    url.includes('imagekit.io') ||
    url.includes('cloudinary.com');

  return hasImageExtension || isDataUrl || isImageService;
};

/**
 * Get optimized image URL with transformations (for Cloudflare Images)
 * @param imageUrl - Original image URL
 * @param options - Transformation options
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  imageUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
    format?: 'auto' | 'webp' | 'avif' | 'json';
  } = {}
): string => {
  // Get the base URL
  const baseUrl = getImageUrl(imageUrl);

  // If it's not a Cloudflare URL, return as-is
  if (
    !baseUrl.includes('cloudflarestorage.com') &&
    !baseUrl.includes('imagedelivery.net')
  ) {
    return baseUrl;
  }

  // Build transformation parameters for Cloudflare Images
  const params: string[] = [];

  if (options.width) params.push(`w=${options.width}`);
  if (options.height) params.push(`h=${options.height}`);
  if (options.quality) params.push(`q=${options.quality}`);
  if (options.fit) params.push(`fit=${options.fit}`);
  if (options.format) params.push(`f=${options.format}`);

  // If no transformations, return original
  if (params.length === 0) {
    return baseUrl;
  }

  // Check if URL already has query parameters
  const separator = baseUrl.includes('?') ? '&' : '?';

  return `${baseUrl}${separator}${params.join('&')}`;
};

/**
 * Get placeholder image for loading states
 * @returns Placeholder image URL
 */
export const getPlaceholderImage = (): string => {
  return PLACEHOLDER_IMAGE;
};

/**
 * Get error fallback image
 * @param category - Optional category for specific fallback
 * @returns Error fallback image URL
 */
export const getErrorFallbackImage = (category?: string): string => {
  return getCategoryFallback(category);
};

/**
 * Generate image srcset for responsive images
 * @param imageUrl - Base image URL
 * @param sizes - Array of widths to generate
 * @returns srcset string for img element
 */
export const generateSrcSet = (
  imageUrl: string,
  sizes: number[] = [320, 640, 960, 1280, 1920]
): string => {
  const baseUrl = getImageUrl(imageUrl);

  // If it's not a Cloudflare URL, return empty (no srcset)
  if (
    !baseUrl.includes('cloudflarestorage.com') &&
    !baseUrl.includes('imagedelivery.net')
  ) {
    return '';
  }

  return sizes
    .map((size) => {
      const optimizedUrl = getOptimizedImageUrl(baseUrl, { width: size });
      return `${optimizedUrl} ${size}w`;
    })
    .join(', ');
};

// Export default for convenience
export default {
  getImageUrl,
  handleImageError,
  preloadImage,
  isValidImageUrl,
  getOptimizedImageUrl,
  getPlaceholderImage,
  getErrorFallbackImage,
  generateSrcSet,
};
```

---

## 📄 src\utils\storage.ts

_Path: `src\utils\storage.ts`_

```typescript
/**
 * Local storage utility with type safety
 */

const STORAGE_KEYS = {
  AUTH_TOKEN: 'bakars_auth_token',
  CART: 'bakars_cart',
  USER_PREFERENCES: 'bakars_preferences',
} as const;

export const storage = {
  /**
   * Set item in localStorage
   */
  setItem: <T>(key: string, value: T): void => {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  /**
   * Get item from localStorage
   */
  getItem: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },

  /**
   * Clear all localStorage
   */
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  // Predefined key methods
  keys: STORAGE_KEYS,
};
```

---

## 📄 src\utils\validators.ts

_Path: `src\utils\validators.ts`_

```typescript
/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Australian phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  // Australian mobile: 04XX XXX XXX or 614XX XXX XXX
  // Australian landline: 0X XXXX XXXX or 61X XXXX XXXX
  return /^(04\d{8}|614\d{8}|0[2-8]\d{8}|61[2-8]\d{8})$/.test(cleaned);
};

/**
 * Validate password strength
 */
export const isValidPassword = (
  password: string
): { valid: boolean; message?: string } => {
  if (password.length < 8) {
    return {
      valid: false,
      message: 'Password must be at least 8 characters long',
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one uppercase letter',
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one lowercase letter',
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      valid: false,
      message: 'Password must contain at least one number',
    };
  }

  return { valid: true };
};

/**
 * Validate postcode
 */
export const isValidPostcode = (postcode: string): boolean => {
  return /^\d{4}$/.test(postcode);
};

/**
 * Validate required field
 */
export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};
```

---

## 📄 src\App.tsx

_Path: `src\App.tsx`_

```tsx
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
```

---

## 📄 src\main.tsx

_Path: `src\main.tsx`_

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---
