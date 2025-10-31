# Frontend Project Documentation

_Generated on: 2025-10-31 18:59:02_

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
- [contact.ts](#src\api\endpoints\contactts)
- [delivery.ts](#src\api\endpoints\deliveryts)
- [menu.ts](#src\api\endpoints\menuts)
- [notifications.ts](#src\api\endpoints\notificationsts)
- [orders.ts](#src\api\endpoints\ordersts)
- [payments.ts](#src\api\endpoints\paymentsts)
- [index.ts](#src\api\indexts)
- [AdminSidebar.tsx](#src\components\admin\adminsidebartsx)
- [CategoryForm.tsx](#src\components\admin\categories\categoryformtsx)
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
- [Pagination.tsx](#src\components\common\paginationtsx)
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
- [CategoryManagement.tsx](#src\pages\admin\categorymanagementtsx)
- [MealPlanManagement.tsx](#src\pages\admin\mealplanmanagementtsx)
- [MenuManagement.tsx](#src\pages\admin\menumanagementtsx)
- [OrderManagement.tsx](#src\pages\admin\ordermanagementtsx)
- [SidelinesManagement.tsx](#src\pages\admin\sidelinesmanagementtsx)
- [CartPage.tsx](#src\pages\customer\cartpagetsx)
- [CateringPage.tsx](#src\pages\customer\cateringpagetsx)
- [CheckoutPage.tsx](#src\pages\customer\checkoutpagetsx)
- [DailyMenuPage.tsx](#src\pages\customer\dailymenupagetsx)
- [MealsSubscriptionPage.tsx](#src\pages\customer\mealssubscriptionpagetsx)
- [ProfilePage.tsx](#src\pages\customer\profilepagetsx)
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
- [admin.types.ts](#src\types\admintypests)
- [auth.types.ts](#src\types\authtypests)
- [cart.types.ts](#src\types\carttypests)
- [common.types.ts](#src\types\commontypests)
- [menu.types.ts](#src\types\menutypests)
- [order.types.ts](#src\types\ordertypests)
- [subscription.types.ts](#src\types\subscriptiontypests)
- [constants.ts](#src\utils\constantsts)
- [formatters.ts](#src\utils\formattersts)
- [images.ts](#src\utils\imagests)
- [storage.ts](#src\utils\storagets)
- [validators.ts](#src\utils\validatorsts)
- [tailwind.config.js](#tailwindconfigjs)
- [tsconfig.json](#tsconfigjson)
- [vite.config.ts](#viteconfigts)

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
    "build": "vite build",
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
    "framer-motion": "^12.23.24",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.446.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.65.0",
    "react-leaflet": "^4.2.1",
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
      "@api": ["./src/api/index"],
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
import { MenuItem, Sideline, MenuCategory } from '@models/menu.types';
import { MealSubscriptionPlan, DeliveryZone } from '@models/subscription.types';
import { Order } from '@models/order.types';
import { ApiResponse } from '@models/common.types';
import { DashboardStats } from '@models/admin.types';

export const adminAPI = {
  /**
   * Get dashboard statistics
   */
  getDashboardStats: () =>
    apiClient.get<ApiResponse<DashboardStats>>('/admin/dashboard'),

  /**
   * Get all orders with optional filters
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

    const query = params.toString();
    const suffix = query ? `?${query}` : '';

    return apiClient.get<ApiResponse<Order[]>>(`/admin/orders${suffix}`);
  },

  /**
   * Update order status (admin only)
   */
  updateOrderStatus: (orderId: string, status: string, admin_notes?: string) =>
    apiClient.patch<ApiResponse<Order>>(`/admin/orders/${orderId}/status`, {
      status,
      admin_notes,
    }),

  /**
   * Menu items (admin)
   */
  createMenuItem: (data: FormData) =>
    apiClient.post<ApiResponse<MenuItem>>('/admin/menu-items', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateMenuItem: (itemId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuItem>>(`/admin/menu-items/${itemId}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  deleteMenuItem: (itemId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/menu-items/${itemId}`),
  getAllMenuItems: (
    page: number = 1,
    pageSize: number = 1000,
    category?: string
  ) => {
    const params = new URLSearchParams();
    params.append('include_unavailable', 'true');
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    if (category) params.append('category', category);
    return apiClient.get<
      ApiResponse<{
        items: MenuItem[];
        total: number;
        page: number;
        page_size: number;
        total_pages: number;
      }>
    >(`/admin/menu-items?${params.toString()}`);
  },

  /**
   * Sidelines (admin)
   */
  createSideline: (data: FormData) =>
    apiClient.post<ApiResponse<Sideline>>('/admin/sidelines', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateSideline: (sidelineId: string, data: FormData) =>
    apiClient.put<ApiResponse<Sideline>>(
      `/admin/sidelines/${sidelineId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),
  deleteSideline: (sidelineId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/sidelines/${sidelineId}`),
  getAllSidelines: (page: number = 1, pageSize: number = 1000) => {
    const params = new URLSearchParams();
    params.append('include_unavailable', 'true');
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    return apiClient.get<
      ApiResponse<{
        items: Sideline[];
        total: number;
        page: number;
        page_size: number;
        total_pages: number;
      }>
    >(`/admin/sidelines?${params.toString()}`);
  },

  /**
   * Categories (admin)
   */
  getAllCategories: (page: number = 1, pageSize: number = 1000) => {
    const params = new URLSearchParams();
    params.append('include_inactive', 'true');
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    return apiClient.get<
      ApiResponse<{
        categories: MenuCategory[];
        total: number;
        page: number;
        page_size: number;
        total_pages: number;
      }>
    >(`/admin/categories?${params.toString()}`);
  },
  createCategory: (data: FormData) =>
    apiClient.post<ApiResponse<MenuCategory>>('/admin/categories', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateCategory: (categoryId: string, data: FormData) =>
    apiClient.put<ApiResponse<MenuCategory>>(
      `/admin/categories/${categoryId}`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    ),
  deleteCategory: (categoryId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/categories/${categoryId}`),

  /**
   * Meal subscription plans (admin)
   */
  getMealPlans: (tab?: string, includeInactive: boolean = true) => {
    const params = new URLSearchParams();
    if (tab) params.append('tab', tab);
    if (!includeInactive) params.append('include_inactive', 'false');
    const suffix = params.size ? `?${params.toString()}` : '';
    return apiClient.get<ApiResponse<MealSubscriptionPlan[]>>(
      `/admin/meal-plans${suffix}`
    );
  },
  createMealPlan: (payload: Partial<MealSubscriptionPlan>) =>
    apiClient.post<ApiResponse<MealSubscriptionPlan>>(
      '/admin/meal-plans',
      payload
    ),
  updateMealPlan: (planId: string, payload: Partial<MealSubscriptionPlan>) =>
    apiClient.put<ApiResponse<MealSubscriptionPlan>>(
      `/admin/meal-plans/${planId}`,
      payload
    ),
  deleteMealPlan: (planId: string) =>
    apiClient.delete<ApiResponse<void>>(`/admin/meal-plans/${planId}`),

  /**
   * Delivery zones (admin)
   */
  getDeliveryZones: (
    includeInactive: boolean = true,
    page: number = 1,
    pageSize: number = 1000
  ) => {
    const params = new URLSearchParams();
    if (!includeInactive) params.append('include_inactive', 'false');
    else params.append('include_inactive', 'true');
    params.append('page', String(page));
    params.append('page_size', String(pageSize));
    return apiClient.get<
      ApiResponse<{
        zones: DeliveryZone[];
        total: number;
        page: number;
        page_size: number;
        total_pages: number;
      }>
    >(`/admin/delivery-zones?${params.toString()}`);
  },
  createDeliveryZone: (payload: Partial<DeliveryZone>) =>
    apiClient.post<ApiResponse<DeliveryZone>>('/admin/delivery-zones', payload),
  updateDeliveryZone: (zoneId: string, payload: Partial<DeliveryZone>) =>
    apiClient.put<ApiResponse<DeliveryZone>>(
      `/admin/delivery-zones/${zoneId}`,
      payload
    ),
  deleteDeliveryZone: (zoneId: string, permanent: boolean = false) =>
    apiClient.delete<ApiResponse<void>>(
      `/admin/delivery-zones/${zoneId}?permanent=${String(permanent)}`
    ),
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
} from '@models/auth.types';

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
import { ApiResponse } from '@models/common.types';

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

## 📄 src\api\endpoints\contact.ts

_Path: `src\api\endpoints\contact.ts`_

```typescript
import apiClient from '../client';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const contactAPI = {
  async sendMessage(payload: ContactPayload) {
    const response = await apiClient.post('/contact', payload);
    return response.data;
  },
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
  DeliveryAvailability,
  DeliveryValidation,
} from '@models/address.types';
import { DeliveryZone } from '@models/subscription.types';
import { ApiResponse } from '@models/common.types';

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

  /**
   * Check delivery availability for an address
   */
  checkAvailability: (
    address: string,
    orderType: 'daily' | 'weekly' | 'catering'
  ) =>
    apiClient.post<ApiResponse<DeliveryAvailability>>(
      '/delivery/check-availability',
      {
        address,
        order_type: orderType,
      }
    ),

  /**
   * Get configured delivery zones with pricing
   */
  getDeliveryZones: () =>
    apiClient.get<ApiResponse<DeliveryZone[]>>('/delivery/zones'),
};
```

---

## 📄 src\api\endpoints\menu.ts

_Path: `src\api\endpoints\menu.ts`_

```typescript
import apiClient from '../client';
import { MenuItem, Sideline, MenuFilters } from '@models/menu.types';
import { MealSubscriptionPlan } from '@models/subscription.types';
import { ApiResponse } from '@models/common.types';

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

    // Add filter for weekly available items
    if (filters?.order_type === 'meal_subscription') {
      params.append('is_available_for_weekly', 'true');
    }

    return apiClient.get<ApiResponse<MenuItem[]>>(
      `/menu/daily?${params.toString()}`
    );
  },

  /**
   * Get configurable meal subscription plans
   */
  getMealSubscriptionPlans: (tab?: string) => {
    const params = tab ? `?tab=${encodeURIComponent(tab)}` : '';
    return apiClient.get<ApiResponse<MealSubscriptionPlan[]>>(
      `/menu/subscription/plans${params}`
    );
  },

  /**
   * Get weekly menu items with improved error handling
   */
  getWeeklyMenu: (delivery_date?: string) => {
    // If no date provided, use next Monday
    if (!delivery_date) {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
      const nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + daysUntilMonday);
      delivery_date = nextMonday.toISOString().split('T')[0];
    }

    const params = `?delivery_date=${delivery_date}`;

    console.log('🔍 Fetching weekly menu for date:', delivery_date);

    return apiClient
      .get<ApiResponse<any>>(`/menu/weekly${params}`)
      .catch((error) => {
        // If 404, don't throw - let the component handle it
        if (error.response?.status === 404) {
          console.log('📝 No weekly menu found for date:', delivery_date);
          // Return a valid but empty response structure
          return {
            data: {
              success: true,
              data: {
                delivery_date,
                menu_rotation: null,
                items: [],
              },
            },
            status: 404,
            statusText: 'Not Found',
            headers: {},
            config: error.config,
          };
        }
        // Re-throw other errors
        throw error;
      });
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
import { ApiResponse } from '@models/common.types';

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
import { Order, OrderTracking } from '@models/order.types';
import { ApiResponse } from '@models/common.types';

export const ordersAPI = {
  /**
   * Create daily order
   */
  createDailyOrder: (payload: any) =>
    apiClient.post<ApiResponse<Order>>('/orders/daily', payload),

  /**
   * Create meal subscription order
   */
  createMealSubscriptionOrder: (payload: any) =>
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
import { ApiResponse } from '@models/common.types';

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
export { contactAPI } from './endpoints/contact';

export { default as apiClient } from './client';
```

---

## 📄 src\components\admin\categories\CategoryForm.tsx

_Path: `src\components\admin\categories\CategoryForm.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { MenuCategory } from '@models/menu.types';

export interface CategoryFormValues {
  name: string;
  display_name: string;
  description: string;
  is_active: boolean;
  sort_order?: number;
  imageFile: File | null;
}

interface CategoryFormProps {
  mode: 'create' | 'edit';
  initialValues: CategoryFormValues;
  existingCategory?: MenuCategory | null;
  isSubmitting: boolean;
  onSubmit: (values: CategoryFormValues) => Promise<void>;
  onCancel: () => void;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({
  mode,
  initialValues,
  existingCategory,
  isSubmitting,
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = useState<CategoryFormValues>(initialValues);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange =
    (field: keyof CategoryFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        field === 'sort_order'
          ? event.target.value === ''
            ? undefined
            : Number(event.target.value)
          : event.target.value;
      setValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      is_active: event.target.checked,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setValues((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          label="Internal Name"
          value={values.name}
          onChange={handleChange('name')}
          placeholder="e.g., daily_specials"
          required={mode === 'create'}
          disabled={mode === 'edit'}
        />
        <Input
          type="text"
          label="Display Name"
          value={values.display_name}
          onChange={handleChange('display_name')}
          placeholder="Visible label for customers"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-2">
          Description
        </label>
        <textarea
          value={values.description}
          onChange={handleChange('description')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Optional description shown to customers"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="number"
          label="Sort Order"
          value={values.sort_order ?? ''}
          onChange={handleChange('sort_order')}
          placeholder="Optional ordering number"
          min={0}
        />

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-text">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-600"
          />
          {existingCategory?.image_url && !values.imageFile && (
            <div className="flex items-center space-x-3">
              <img
                src={existingCategory.image_url}
                alt={existingCategory.display_name}
                className="w-16 h-16 rounded-lg object-cover border"
              />
              <span className="text-xs text-gray-500">
                Current image – upload a new file to replace
              </span>
            </div>
          )}
          {values.imageFile && (
            <div className="text-xs text-gray-500">
              Selected file: {values.imageFile.name}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <input
          id="category-active"
          type="checkbox"
          checked={values.is_active}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <label htmlFor="category-active" className="text-sm text-gray-700">
          Category is active and visible to customers
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary" isLoading={isSubmitting}>
          {mode === 'create' ? 'Create Category' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};
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
      count: orderStats?.confirmed_orders || 0,
      icon: <Package size={24} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Out for Delivery',
      count: orderStats?.out_for_delivery_orders || 0,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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

export const RevenueChart: React.FC = () => {
  const { orderStats } = useAdminStore();

  const weeklyBreakdown =
    orderStats?.weekly_revenue_breakdown &&
    orderStats.weekly_revenue_breakdown.length
      ? orderStats.weekly_revenue_breakdown
      : [
          { label: 'Mon', date: '', total: 0 },
          { label: 'Tue', date: '', total: 0 },
          { label: 'Wed', date: '', total: 0 },
          { label: 'Thu', date: '', total: 0 },
          { label: 'Fri', date: '', total: 0 },
          { label: 'Sat', date: '', total: 0 },
          { label: 'Sun', date: '', total: 0 },
        ];

  const maxRevenue = Math.max(
    ...weeklyBreakdown.map((day) => day.total || 0),
    1
  );

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
          <p className="text-sm font-semibold text-green-600">
            {formatPercent(orderStats?.monthly_growth_percent)}
          </p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Growth</p>
          <div className="flex items-center space-x-1">
            <TrendingUp className="text-purple-600" size={20} />
            <p className="font-heading text-2xl font-bold text-purple-600">
              {formatPercent(orderStats?.weekly_growth_percent)}
            </p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {weeklyBreakdown.map((day) => {
          const revenue = day.total || 0;
          const width =
            revenue > 0 ? Math.max((revenue / maxRevenue) * 100, 8) : 0;

          return (
            <div key={day.label} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-700">
                {day.label}
              </div>
              <div className="flex-1">
                <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-600 rounded-lg transition-all duration-500 flex items-center justify-end px-3"
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
          <span className="text-sm text-gray-700">Meals Subscription</span>
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
          label="Max Boxes Per Meal Plan"
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
import { MenuItem } from '@models/menu.types';

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
          <span className="text-sm text-gray-700">Meals Subscription</span>
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
          label="Max Boxes Per Meal Plan"
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
import React, { useEffect, useMemo, useState } from 'react';
import { MenuItem } from '@models/menu.types';
import { formatCurrency } from '@utils/formatters';
import { getImageUrl, handleImageError } from '@utils/images';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Pagination from '@components/common/Pagination';
import {
  Edit2,
  Trash2,
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
  const ITEMS_PER_PAGE = 9;
  const [imageLoadStates, setImageLoadStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedItems.map((item) => {
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

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
        showSummary
        className="mt-6"
      />
    </>
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

export const OrderActions: React.FC<OrderActionsProps> = () => {
  return <div>{/* OrderActions Component */}</div>;
};
```

---

## 📄 src\components\admin\orders\OrderDetails.tsx

_Path: `src\components\admin\orders\OrderDetails.tsx`_

```tsx
import React from 'react';
import { Order } from '@models/order.types';
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
  const deliveryMethod =
    order.delivery_method || order.delivery_option || 'delivery';

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
                {deliveryMethod.replace('_', ' ')}
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
import { Order } from '@models/order.types';
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
      meal_subscription: 'Meals Subscription',
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
import { Sideline } from '@models/menu.types';

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
import { Sideline } from '@models/menu.types';
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

## 📄 src\components\admin\AdminSidebar.tsx

_Path: `src\components\admin\AdminSidebar.tsx`_

```tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Utensils,
  Salad,
  Tags,
  CalendarRange,
} from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin',
  },
  {
    label: 'Orders',
    icon: ShoppingBag,
    path: '/admin/orders',
  },
  {
    label: 'Menu Items',
    icon: Utensils,
    path: '/admin/menu',
  },
  {
    label: 'Sidelines',
    icon: Salad,
    path: '/admin/sidelines',
  },
  {
    label: 'Meal Plans',
    icon: CalendarRange,
    path: '/admin/meal-plans',
  },
  {
    label: 'Categories',
    icon: Tags,
    path: '/admin/categories',
  },
];

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="hidden sm:block group fixed left-0 top-20 z-30 h-[calc(100vh-5rem)]">
      <div className="h-full w-16 group-hover:w-64 transition-all duration-300 ease-in-out bg-white border-r border-gray-200 shadow-lg rounded-tr-2xl rounded-br-2xl overflow-hidden">
        <div className="flex flex-col h-full py-6">
          <div className="px-4 pb-6 border-b border-gray-100 hidden group-hover:block">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              Admin
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              Control Center
            </p>
          </div>

          <nav className="flex-1 space-y-1 mt-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={item.label}
                  className={clsx(
                    'flex items-center mx-2 px-4 py-3 rounded-xl transition-all duration-200',
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  <Icon size={20} />
                  <span className="ml-3 text-sm font-semibold hidden group-hover:block">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="px-4 pt-4 mt-auto hidden group-hover:block">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
              Tips
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Hover over the sidebar to reveal full navigation labels. Use the
              categories section to organise menu items quickly.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
```

---

## 📄 src\components\auth\LoginForm.tsx

_Path: `src\components\auth\LoginForm.tsx`_

```tsx
import { useState, type FC } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { useCart } from '@hooks/useCart';
import { useToast } from '@components/common/Toast';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import { Mail, Lock, Loader2 } from 'lucide-react';

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // ✅ Get the return URL and check for pending cart item
  const from = location.state?.from || '/';
  const hasPendingCartItem = location.state?.pendingCartItem || false;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ Add pending item to cart after successful login
  const addPendingItemToCart = async () => {
    const pendingItemStr = localStorage.getItem('bakars_pending_cart_item');
    if (pendingItemStr) {
      try {
        const pendingItem = JSON.parse(pendingItemStr);

        // Check if the item is not too old (24 hours)
        const itemDate = new Date(pendingItem.timestamp);
        const now = new Date();
        const hoursDiff =
          (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          await addToCart(
            pendingItem.item,
            pendingItem.quantity,
            pendingItem.specialInstructions
          );
          showToast(`${pendingItem.item.name} added to cart!`, 'success');
        }

        // Clear the pending item
        localStorage.removeItem('bakars_pending_cart_item');
      } catch (error) {
        console.error('Failed to add pending item to cart:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      await login(formData);
      showToast('Login successful!', 'success');

      // ✅ Add pending cart item if exists
      if (hasPendingCartItem) {
        await addPendingItemToCart();
      }

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

        {/* ✅ Show info if there's a pending cart item */}
        {hasPendingCartItem && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-800">
              Login to add your selected item to cart
            </p>
          </div>
        )}
        {/* Show info if redirected from a protected page */}
        {from !== '/' && from !== '/login' && !hasPendingCartItem && (
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
            state={{ from: from, pendingCartItem: hasPendingCartItem }}
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
        <LoadingSpinner size="lg" />
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
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import { useCart } from '@hooks/useCart';
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
  const location = useLocation();
  const { register } = useAuth();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // ✅ Get the return URL and check for pending cart item
  const from = location.state?.from || '/';
  const hasPendingCartItem = location.state?.pendingCartItem || false;

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

  // ✅ Add pending item to cart after successful registration
  const addPendingItemToCart = async () => {
    const pendingItemStr = localStorage.getItem('bakars_pending_cart_item');
    if (pendingItemStr) {
      try {
        const pendingItem = JSON.parse(pendingItemStr);

        // Check if the item is not too old (24 hours)
        const itemDate = new Date(pendingItem.timestamp);
        const now = new Date();
        const hoursDiff =
          (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);

        if (hoursDiff < 24) {
          await addToCart(
            pendingItem.item,
            pendingItem.quantity,
            pendingItem.specialInstructions
          );
          showToast(`${pendingItem.item.name} added to cart!`, 'success');
        }

        // Clear the pending item
        localStorage.removeItem('bakars_pending_cart_item');
      } catch (error) {
        console.error('Failed to add pending item to cart:', error);
      }
    }
  };

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

    console.log('📞 [DEBUG] Original phone:', phone);
    console.log('📞 [DEBUG] Cleaned phone:', cleaned);

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
      '═══════════════════════════════════════════════════════════════'
    );
    console.log('║ 🔍 BACKEND ERROR ANALYSIS');
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
        console.log(`🔴 Found ${detail.length} validation errors`);

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
        console.log('🟡 Detail is a string:', detail);
        errorMessages.push(detail);
      } else if (typeof detail === 'object' && detail !== null) {
        console.log(
          '🟢 Detail is an object (stringified):',
          JSON.stringify(detail, null, 2)
        );
        errorMessages.push(JSON.stringify(detail));
      }
    }
    // Generic error message
    else if (error.response?.data?.message) {
      console.log(
        '🟨 Using response.data.message:',
        error.response.data.message
      );
      errorMessages.push(error.response.data.message);
    } else if (error.message) {
      console.log('🟦 Using error.message:', error.message);
      errorMessages.push(error.message);
    } else {
      console.log('⚠️ No recognizable error format, using generic message');
      errorMessages.push('Registration failed. Please try again.');
    }

    console.log('📋 Final error messages:', errorMessages);
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
      const registrationData: RegisterData = {
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

      // ✅ Check for pending cart item
      if (hasPendingCartItem) {
        await addPendingItemToCart();
      }

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }

      // ✅ Redirect to the intended page or home
      if (redirectOnSuccess) {
        navigate(from, { replace: true });
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
      {/* Show info if there's a pending cart item */}
      {hasPendingCartItem && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-green-800">
            Sign up to add your selected item to cart
          </p>
        </div>
      )}

      {/* Show info if redirected from a protected page */}
      {from !== '/' && from !== '/register' && !hasPendingCartItem && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            Please sign up to access that page
          </p>
        </div>
      )}

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

export const CartItem: React.FC<CartItemProps> = () => {
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

export const CartSummary: React.FC<CartSummaryProps> = () => {
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

export const DeliverySelector: React.FC<DeliverySelectorProps> = () => {
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

export const CateringMenu: React.FC<CateringMenuProps> = () => {
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

export const CateringSummary: React.FC<CateringSummaryProps> = () => {
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

export const EventDetails: React.FC<EventDetailsProps> = () => {
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

export const HeadCountCalculator: React.FC<HeadCountCalculatorProps> = () => {
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

export const AddressSelector: React.FC<AddressSelectorProps> = () => {
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

export const OrderReview: React.FC<OrderReviewProps> = () => {
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

export const PaymentForm: React.FC<PaymentFormProps> = () => {
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

export const PlaceOrderButton: React.FC<PlaceOrderButtonProps> = () => {
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
import { createPortal } from 'react-dom';
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

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className={clsx(
            'relative w-full bg-white rounded-xl shadow-2xl transform transition-all flex flex-col overflow-hidden max-h-[calc(100vh-3rem)]',
            sizeClasses[size]
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
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
          <div className="p-6 overflow-y-auto flex-1">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
```

---

## 📄 src\components\common\Pagination.tsx

_Path: `src\components\common\Pagination.tsx`_

```tsx
import React from 'react';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
  showSummary?: boolean;
}

const getPageNumbers = (currentPage: number, totalPages: number): number[] => {
  const maxButtons = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxButtons - 1);

  // Adjust start if we are close to the end
  start = Math.max(1, end - maxButtons + 1);

  const pages: number[] = [];
  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }
  return pages;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  className,
  showSummary = false,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const firstItemIndex = (currentPage - 1) * pageSize + 1;
  const lastItemIndex = Math.min(currentPage * pageSize, totalItems);

  const changePage = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const renderEllipsisBefore = pageNumbers[0] > 1;
  const renderEllipsisAfter = pageNumbers[pageNumbers.length - 1] < totalPages;

  return (
    <div
      className={clsx(
        'flex flex-col gap-3 items-center justify-between md:flex-row',
        className
      )}
    >
      {showSummary && (
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">{firstItemIndex}</span> to{' '}
          <span className="font-semibold">{lastItemIndex}</span> of{' '}
          <span className="font-semibold">{totalItems}</span> items
        </div>
      )}

      <nav className="flex items-center space-x-1" aria-label="Pagination">
        <button
          type="button"
          className={clsx(
            'px-3 py-1.5 text-sm rounded-md border transition-colors',
            isFirstPage
              ? 'text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50'
              : 'border-gray-200 text-gray-700 hover:bg-primary hover:text-white'
          )}
          onClick={() => changePage(currentPage - 1)}
          disabled={isFirstPage}
        >
          Prev
        </button>

        {renderEllipsisBefore && (
          <>
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              onClick={() => changePage(1)}
            >
              1
            </button>
            <span className="px-2 text-gray-400">…</span>
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            className={clsx(
              'px-3 py-1.5 text-sm rounded-md border transition-colors',
              page === currentPage
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 text-gray-700 hover:bg-primary hover:text-white'
            )}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}

        {renderEllipsisAfter && (
          <>
            <span className="px-2 text-gray-400">…</span>
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-colors"
              onClick={() => changePage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          type="button"
          className={clsx(
            'px-3 py-1.5 text-sm rounded-md border transition-colors',
            isLastPage
              ? 'text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50'
              : 'border-gray-200 text-gray-700 hover:bg-primary hover:text-white'
          )}
          onClick={() => changePage(currentPage + 1)}
          disabled={isLastPage}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
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
      <div className="fixed inset-x-0 top-8 z-50 flex justify-center pointer-events-none px-4">
        <div className="space-y-3 w-full max-w-md">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-center space-x-3 px-4 py-3 rounded-lg border-2 shadow-lg animate-slide-in ${getStyles(toast.type)} w-full`}
            >
              {getIcon(toast.type)}
              <p className="flex-1 font-medium text-sm text-center">
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="hover:bg-white/20 rounded p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
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

export const CartIcon: React.FC<CartIconProps> = () => {
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
                  to="/menu/meals"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Meals Subscription
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
    { name: 'Meals Subscription', path: '/menu/meals' },
    { name: 'Catering', path: '/catering' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md relative">
      <div className="container-custom">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 min-w-0">
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
          <div className="flex items-center gap-3 ml-auto">
            {/* Cart Icon - Only show if authenticated */}
            {isAuthenticated && (
              <button
                onClick={() => navigate('/cart')} // ✅ CHANGED: Navigate to /cart instead of /checkout
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute inset-x-0 top-full bg-white shadow-lg border-t border-gray-200">
          <div className="container-custom py-4">
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
          </div>
        </nav>
      )}
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
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();

  // Only show footer on home page
  const showFooter = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {showFooter && <Footer />}
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
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const colorClass = variant === 'white' ? 'text-white' : 'text-primary';

  return (
    <div
      className={`font-heading font-bold leading-tight ${sizeClasses[size]} ${colorClass}`}
    >
      <span className="tracking-tight whitespace-nowrap">Bakar's</span>
      <span className="text-secondary block sm:inline sm:ml-2 whitespace-nowrap">
        Food & Catering
      </span>
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

export const Navigation: React.FC<NavigationProps> = () => {
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

export const UserMenu: React.FC<UserMenuProps> = () => {
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

  // Only show cart if authenticated
  if (!isAuthenticated) {
    return null;
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

export const CategoryFilter: React.FC<CategoryFilterProps> = () => {
  return <div>{/* CategoryFilter Component */}</div>;
};
```

---

## 📄 src\components\menu\FilterBar.tsx

_Path: `src\components\menu\FilterBar.tsx`_

```tsx
import React from 'react';
import { MenuFilters } from '@models/menu.types';
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
import { MenuItem } from '@models/menu.types';
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
  Utensils,
  X,
} from 'lucide-react';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
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
  const [showDetailsModal, setShowDetailsModal] = useState(false);
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
      // Save the pending cart item
      const pendingItem = {
        item: item,
        quantity: quantity,
        specialInstructions: specialInstructions,
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem(
        'bakars_pending_cart_item',
        JSON.stringify(pendingItem)
      );

      showToast('Please login to add items to cart', 'warning');
      navigate('/login', {
        state: { from: '/menu/daily', pendingCartItem: true },
      });
      return;
    }

    if (quantity > 0) {
      try {
        await addToCart(item, quantity, specialInstructions);
        // Reset form and close modal
        setQuantity(1);
        setSpecialInstructions('');
        setShowDetailsModal(false);
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    }
  };

  const handleQuickAdd = () => {
    if (!isAuthenticated) {
      // Save the pending cart item with default quantity
      const pendingItem = {
        item: item,
        quantity: 1,
        specialInstructions: '',
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem(
        'bakars_pending_cart_item',
        JSON.stringify(pendingItem)
      );

      showToast('Please login to add items to cart', 'warning');
      navigate('/login', {
        state: { from: '/menu/daily', pendingCartItem: true },
      });
      return;
    }

    // If authenticated, open the modal
    setShowDetailsModal(true);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    // Reset to default values when closing
    setQuantity(1);
    setSpecialInstructions('');
  };

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
    <>
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
                onClick={handleQuickAdd}
                disabled={isUpdating || !item.id}
              >
                <ShoppingCart size={16} className="mr-1" />
                Add
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Add to Cart Modal */}
      <Modal
        isOpen={showDetailsModal}
        onClose={handleCloseModal}
        title={item.name}
        size="md"
      >
        <div className="space-y-6">
          {/* Item Image in Modal */}
          {item.image_url && (
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {/* Dietary badges in modal */}
              <div className="absolute top-3 right-3 flex space-x-2">
                {item.is_vegetarian && (
                  <div className="bg-green-500 text-white p-1.5 rounded-full">
                    <Leaf size={14} />
                  </div>
                )}
                {item.is_vegan && (
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    VEGAN
                  </span>
                )}
                {item.is_halal && (
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    HALAL
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Item Details */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full">
                {item.category}
              </span>
              {item.spice_level && (
                <span className="text-xs text-gray-600">
                  {item.spice_level === 'mild' && '🌶️ Mild'}
                  {item.spice_level === 'medium' && '🌶️🌶️ Medium'}
                  {item.spice_level === 'hot' && '🌶️🌶️🌶️ Hot'}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>

            {/* Allergens in modal */}
            {item.allergens && item.allergens.length > 0 && (
              <div className="flex items-start space-x-2 mt-3 text-xs text-orange-700 bg-orange-50 p-2 rounded">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>Contains: {item.allergens.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-medium text-text mb-3">
              Quantity
            </label>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={decrementQuantity}
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
              >
                <Minus size={20} />
              </button>
              <span className="w-16 text-center font-semibold text-2xl">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Special Instructions (Optional)
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={3}
              placeholder="e.g., Extra spicy, no onions..."
            />
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Price per item:</span>
              <span className="font-semibold">
                {formatCurrency(item.price)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-heading text-2xl font-bold text-primary">
                {formatCurrency(item.price * quantity)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="lg"
              onClick={handleCloseModal}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              className="flex-1"
              disabled={isUpdating || !item.id}
              isLoading={isUpdating}
            >
              {isUpdating ? (
                'Adding...'
              ) : (
                <>
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart • {formatCurrency(item.price * quantity)}
                </>
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </>
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

export const MenuItemGrid: React.FC<MenuItemGridProps> = () => {
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

export const SidelinesPanel: React.FC<SidelinesPanelProps> = () => {
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
import { Address } from '@models/address.types';

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
import Modal from '@components/common/Modal';
import type { Order } from '@models/order.types';

const OrderHistory: React.FC = () => {
  const { orderHistory, fetchOrderHistory, isLoadingHistory } = useOrderStore();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<Order | null>(null);

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
    <>
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
                    onClick={() => {
                      setSelectedOrder(order as unknown as Order);
                      setIsOrderModalOpen(true);
                    }}
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

      {/* Order Details Modal */}
      <Modal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        title={
          selectedOrder
            ? `Order #${selectedOrder._id?.slice(-8)}`
            : 'Order Details'
        }
      >
        {!selectedOrder ? (
          <div className="py-6 text-center text-gray-600">
            No order selected.
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Placed on</p>
                <p className="font-medium">
                  {formatDate(selectedOrder.created_at)}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedOrder.status === 'delivered'
                    ? 'bg-green-100 text-green-800'
                    : selectedOrder.status === 'cancelled'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                }`}
              >
                {selectedOrder.status?.toUpperCase().replace('_', ' ')}
              </span>
            </div>

            <div className="divide-y border rounded">
              {[
                ...(selectedOrder.items || []),
                ...(selectedOrder.sidelines || []),
              ].map((it: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 text-sm"
                >
                  <div className="text-gray-700">
                    {it.item_name || it.name}
                    {it.category ? (
                      <span className="text-gray-400"> • {it.category}</span>
                    ) : null}
                  </div>
                  <div className="text-gray-600">x{it.quantity}</div>
                  <div className="font-medium">
                    {formatCurrency(
                      it.subtotal ?? (it.price || 0) * (it.quantity || 1)
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">
                {formatCurrency(selectedOrder.subtotal || 0)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium">
                {formatCurrency(selectedOrder.delivery_fee || 0)}
              </span>
            </div>
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">
                {formatCurrency(
                  (selectedOrder as any).total ??
                    (selectedOrder as any).total_amount ??
                    0
                )}
              </span>
            </div>

            <div className="pt-2 text-xs text-gray-500">
              Delivery method:{' '}
              {String(
                (selectedOrder as any).delivery_option ||
                  (selectedOrder as any).delivery_method ||
                  'N/A'
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default OrderHistory;

// Inline order details modal rendering at the bottom
// Render modal via a portal-like placement within this component tree
// to avoid external wiring.
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

export const DeliverySchedule: React.FC<DeliveryScheduleProps> = () => {
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

export const MealSelection: React.FC<MealSelectionProps> = () => {
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

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = () => {
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

export const SubscriptionSummary: React.FC<SubscriptionSummaryProps> = () => {
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
import { MenuItem, Sideline } from '@models/menu.types';

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
  orderType?: 'daily_menu' | 'meal_subscription' | 'special_catering'
) => {
  const menuStore = useMenuStore();

  useEffect(() => {
    if (orderType === 'daily_menu') {
      menuStore.fetchDailyMenu();
    } else if (orderType === 'meal_subscription') {
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
                    <div
                      key={day.label}
                      className="flex items-center space-x-4"
                    >
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
                  <p className="text-sm text-gray-600 mb-1">
                    Active Subscriptions
                  </p>
                  <p className="font-heading text-3xl font-bold text-primary">
                    {stats.active_subscriptions || 0}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">
                    Upcoming Catering Events
                  </p>
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
                  <span className="text-sm text-gray-500">
                    Completed Orders
                  </span>
                  <span className="text-2xl font-semibold text-green-600">
                    {stats.completed_orders || 0}
                  </span>
                </div>
                <div className="flex flex-col bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <span className="text-sm text-gray-500">
                    Cancelled Orders
                  </span>
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
```

---

## 📄 src\pages\admin\CategoryManagement.tsx

_Path: `src\pages\admin\CategoryManagement.tsx`_

```tsx
import React, { useEffect, useMemo, useState } from 'react';
import { MenuCategory } from '@models/menu.types';
import { useAdminStore } from '@store/adminStore';
import { useToast } from '@components/common/Toast';
import AdminSidebar from '@components/admin/AdminSidebar';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import LoadingSpinner from '@components/common/LoadingSpinner';
import {
  CategoryForm,
  CategoryFormValues,
} from '@components/admin/categories/CategoryForm';
import { Layers, FolderPlus, Pencil, Trash2, RefreshCcw } from 'lucide-react';

const createInitialFormValues = (
  categories: MenuCategory[]
): CategoryFormValues => ({
  name: '',
  display_name: '',
  description: '',
  is_active: true,
  sort_order: categories.length + 1,
  imageFile: null,
});

const mapCategoryToFormValues = (
  category: MenuCategory
): CategoryFormValues => ({
  name: category.name,
  display_name: category.display_name,
  description: category.description || '',
  is_active: category.is_active,
  sort_order: category.sort_order,
  imageFile: null,
});

const CategoryManagement: React.FC = () => {
  const {
    managedCategories,
    fetchManagedCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    isLoading,
    isUpdating,
  } = useAdminStore();
  const { showToast } = useToast();

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<MenuCategory | null>(
    null
  );
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchManagedCategories().catch((error) => {
      console.error('Failed to load categories', error);
    });
  }, [fetchManagedCategories]);

  const sortedCategories = useMemo(
    () =>
      [...managedCategories].sort((a, b) => {
        const orderA = a.sort_order ?? 0;
        const orderB = b.sort_order ?? 0;
        if (orderA === orderB) {
          return a.display_name.localeCompare(b.display_name);
        }
        return orderA - orderB;
      }),
    [managedCategories]
  );

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchManagedCategories();
      showToast('Categories refreshed', 'success');
    } catch (error) {
      console.error('Failed to refresh categories', error);
      showToast('Failed to refresh categories', 'error');
    } finally {
      setRefreshing(false);
    }
  };

  const handleCreateCategory = async (values: CategoryFormValues) => {
    try {
      await createCategory({
        name: values.name,
        display_name: values.display_name,
        description: values.description,
        is_active: values.is_active,
        sort_order:
          values.sort_order !== undefined
            ? Number(values.sort_order)
            : undefined,
        imageFile: values.imageFile,
      });
      setShowAddModal(false);
      showToast('Category created successfully', 'success');
    } catch (error) {
      showToast('Failed to create category', 'error');
    }
  };

  const handleUpdateCategory = async (values: CategoryFormValues) => {
    if (!editingCategory) return;

    try {
      await updateCategory(editingCategory._id, {
        display_name: values.display_name,
        description: values.description,
        is_active: values.is_active,
        sort_order:
          values.sort_order !== undefined
            ? Number(values.sort_order)
            : undefined,
        imageFile: values.imageFile ?? undefined,
      });
      setEditingCategory(null);
      showToast('Category updated successfully', 'success');
    } catch (error) {
      showToast('Failed to update category', 'error');
    }
  };

  const handleDeleteCategory = async (category: MenuCategory) => {
    const confirmed = window.confirm(
      `Delete category "${category.display_name}"? This cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteCategory(category._id);
      showToast('Category deleted', 'success');
    } catch (error) {
      showToast('Failed to delete category', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <AdminSidebar />
      <div className="py-8 px-4 sm:px-6 lg:px-8 pl-20 md:pl-28">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#2E2E2E] mb-2 flex items-center space-x-3">
                <Layers className="text-primary" size={32} />
                <span>Category Management</span>
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Create and maintain the categories that customers see on the
                menu. Categories can be re-used across daily, weekly, and
                catering experiences.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center"
              >
                <RefreshCcw
                  size={18}
                  className={refreshing ? 'animate-spin mr-2' : 'mr-2'}
                />
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </Button>
              <Button
                variant="primary"
                className="flex items-center"
                onClick={() => setShowAddModal(true)}
              >
                <FolderPlus size={18} className="mr-2" />
                Add Category
              </Button>
            </div>
          </header>

          <Card>
            {isLoading && managedCategories.length === 0 ? (
              <div className="py-16">
                <LoadingSpinner message="Loading categories..." />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Internal Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Sort Order
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Updated
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedCategories.length === 0 ? (
                      <tr>
                        <td
                          className="px-4 py-6 text-center text-sm text-gray-500"
                          colSpan={6}
                        >
                          No categories found. Create your first category to
                          organise menu items.
                        </td>
                      </tr>
                    ) : (
                      sortedCategories.map((category) => (
                        <tr key={category._id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              {category.image_url ? (
                                <img
                                  src={category.image_url}
                                  alt={category.display_name}
                                  className="w-12 h-12 rounded-lg object-cover border"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-semibold">
                                  {category.display_name
                                    .charAt(0)
                                    .toUpperCase()}
                                </div>
                              )}
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {category.display_name}
                                </p>
                                {category.description && (
                                  <p className="text-sm text-gray-500 max-w-xs truncate">
                                    {category.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                            {category.name}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            {category.sort_order ?? '—'}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                category.is_active
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-200 text-gray-600'
                              }`}
                            >
                              {category.is_active ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            {category.updated_at
                              ? new Date(
                                  category.updated_at
                                ).toLocaleDateString()
                              : '—'}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex items-center text-sm"
                                onClick={() => setEditingCategory(category)}
                              >
                                <Pencil size={16} className="mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="flex items-center text-sm text-red-600 hover:text-red-700"
                                onClick={() => handleDeleteCategory(category)}
                              >
                                <Trash2 size={16} className="mr-1" />
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Add Category Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Category"
        size="md"
      >
        <CategoryForm
          mode="create"
          initialValues={createInitialFormValues(managedCategories)}
          isSubmitting={isUpdating}
          onSubmit={handleCreateCategory}
          onCancel={() => setShowAddModal(false)}
        />
      </Modal>

      {/* Edit Category Modal */}
      <Modal
        isOpen={!!editingCategory}
        onClose={() => setEditingCategory(null)}
        title="Edit Category"
        size="md"
      >
        {editingCategory && (
          <CategoryForm
            mode="edit"
            initialValues={mapCategoryToFormValues(editingCategory)}
            existingCategory={editingCategory}
            isSubmitting={isUpdating}
            onSubmit={handleUpdateCategory}
            onCancel={() => setEditingCategory(null)}
          />
        )}
      </Modal>
    </div>
  );
};

export default CategoryManagement;
```

---

## 📄 src\pages\admin\MealPlanManagement.tsx

_Path: `src\pages\admin\MealPlanManagement.tsx`_

```tsx
import React, { useEffect, useMemo, useState } from 'react';
import { useAdminStore } from '@store/adminStore';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import Modal from '@components/common/Modal';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';
import { MealSubscriptionPlan, DeliveryZone } from '@models/subscription.types';

type PlanFormState = Partial<MealSubscriptionPlan> & {
  suburbs?: string;
};

type ZoneFormState = {
  _id?: string;
  postcode: string;
  zone_label?: string;
  suburbs: string;
  base_delivery_fee: string;
  express_delivery_fee?: string;
  notes?: string;
  is_active: boolean;
};

const PLAN_TABS: Array<{ value: string; label: string }> = [
  { value: 'regular', label: 'Regular Order' },
  { value: 'weekly', label: 'Weekly Plan' },
  { value: 'fortnight', label: 'Fortnight Plan' },
  { value: 'monthly', label: 'Monthly Plan' },
];

const WEEK_DAYS: Array<{ value: string; label: string }> = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

const DAY_SEQUENCE = WEEK_DAYS.map((day) => day.value);
const defaultPlanForm: PlanFormState = {
  code: '',
  name: '',
  tab: 'weekly',
  description: '',
  included_meals: 10,
  deliveries_per_cycle: 2,
  boxes_per_delivery: 5,
  max_boxes_per_meal: 2,
  price_per_plan: 99,
  price_per_box: 9.9,
  allow_multiple: true,
  min_boxes_delivery: 4,
  min_boxes_pickup: 1,
  display_badge: '',
  display_order: 0,
  highlight: false,
  is_active: true,
  available_delivery_days: [],
  menu_item_ids_by_day: {},
};

const defaultZoneForm: ZoneFormState = {
  postcode: '',
  zone_label: '',
  suburbs: '',
  base_delivery_fee: '10',
  express_delivery_fee: '',
  notes: '',
  is_active: true,
};

const formatCurrency = (value: number | undefined) =>
  value !== undefined
    ? new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
      }).format(value)
    : '-';

const MealPlanManagement: React.FC = () => {
  const { showToast } = useToast();
  const {
    mealPlans,
    deliveryZones,
    managedMenuItems,
    fetchMealPlans,
    fetchDeliveryZones,
    fetchManagedMenuItems,
    createMealPlan,
    updateMealPlan,
    deleteMealPlan,
    createDeliveryZone,
    updateDeliveryZone,
    deleteDeliveryZone,
    isLoading,
    isUpdating,
    error,
    clearError,
  } = useAdminStore();

  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [zoneModalOpen, setZoneModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<MealSubscriptionPlan | null>(
    null
  );
  const [planForm, setPlanForm] = useState<PlanFormState>(defaultPlanForm);
  const [zoneForm, setZoneForm] = useState<ZoneFormState>(defaultZoneForm);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [dayMenuSelections, setDayMenuSelections] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    fetchMealPlans().catch(console.error);
    fetchDeliveryZones().catch(console.error);
    fetchManagedMenuItems().catch(console.error);
  }, []);

  useEffect(() => {
    if (error) {
      showToast(error, 'error');
      clearError();
    }
  }, [error]);

  const sortedMenuItems = useMemo(
    () =>
      [...(managedMenuItems ?? [])].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    [managedMenuItems]
  );
  const multiSelectSize = Math.min(
    10,
    Math.max(4, sortedMenuItems.length || 0)
  );

  const sortedPlans = useMemo(
    () =>
      [...mealPlans].sort(
        (a, b) =>
          (a.display_order ?? 0) - (b.display_order ?? 0) ||
          a.name.localeCompare(b.name)
      ),
    [mealPlans]
  );

  const handleOpenPlanModal = (plan?: MealSubscriptionPlan) => {
    if (plan) {
      setEditingPlan(plan);
      const planDaysRaw =
        Array.isArray(plan.available_delivery_days) &&
        plan.available_delivery_days.length > 0
          ? plan.available_delivery_days
          : Object.keys(plan.menu_item_ids_by_day ?? {});
      const normalizedDays = planDaysRaw
        .map((day) => day?.toString().toLowerCase())
        .filter((day): day is string => !!day && DAY_SEQUENCE.includes(day));
      normalizedDays.sort(
        (a, b) => DAY_SEQUENCE.indexOf(a) - DAY_SEQUENCE.indexOf(b)
      );

      const idMapping = plan.menu_item_ids_by_day ?? {};
      const fallbackMapping = plan.menu_items_by_day ?? {};
      const normalizedMenus: Record<string, string[]> = {};
      normalizedDays.forEach((day) => {
        const idsFromMapping = Array.isArray(idMapping[day])
          ? idMapping[day]
          : [];
        let resolvedIds = idsFromMapping.map((id) => id.toString());
        if (resolvedIds.length === 0 && Array.isArray(fallbackMapping[day])) {
          resolvedIds = (fallbackMapping[day] ?? []).map(
            (item) => item._id || item.id
          );
        }
        normalizedMenus[day] = Array.from(new Set(resolvedIds));
      });

      setSelectedDays(normalizedDays);
      setDayMenuSelections(normalizedMenus);
      setPlanForm({
        ...plan,
        suburbs: Array.isArray(plan.metadata?.suburbs)
          ? (plan.metadata?.suburbs as string[]).join(', ')
          : '',
        available_delivery_days: normalizedDays,
        menu_item_ids_by_day: normalizedMenus,
      });
    } else {
      setEditingPlan(null);
      setPlanForm({ ...defaultPlanForm });
      setSelectedDays([]);
      setDayMenuSelections({});
    }
    setPlanModalOpen(true);
  };

  const handlePlanFormChange = (
    field: keyof PlanFormState,
    value: string | number | boolean
  ) => {
    setPlanForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleDaySelection = (day: string) => {
    const normalizedDay = day.toLowerCase();
    const orderIndex = (value: string) => DAY_SEQUENCE.indexOf(value);

    setSelectedDays((prev) => {
      const isSelected = prev.includes(normalizedDay);
      if (isSelected) {
        const updated = prev.filter((value) => value !== normalizedDay);
        setDayMenuSelections((current) => {
          const updatedMenus = { ...current };
          delete updatedMenus[normalizedDay];
          return updatedMenus;
        });
        return updated;
      }
      const updated = [...prev, normalizedDay].sort(
        (a, b) => orderIndex(a) - orderIndex(b)
      );
      return updated;
    });
  };

  const handleDayMenuSelectChange = (day: string, values: string[]) => {
    const normalizedDay = day.toLowerCase();
    const uniqueValues = Array.from(
      new Set(values.map((value) => value.toString()))
    );
    setDayMenuSelections((prev) => ({
      ...prev,
      [normalizedDay]: uniqueValues,
    }));
  };

  const getDayLabel = (day: string) =>
    WEEK_DAYS.find((option) => option.value === day)?.label ?? day;

  const handleSubmitPlan = async () => {
    const { suburbs: _suburbs, ...planBase } = planForm;

    const payload: Partial<MealSubscriptionPlan> = {
      ...planBase,
      included_meals: Number(planForm.included_meals ?? 0),
      deliveries_per_cycle: Number(planForm.deliveries_per_cycle ?? 0),
      boxes_per_delivery: Number(planForm.boxes_per_delivery ?? 0),
      max_boxes_per_meal:
        planForm.max_boxes_per_meal !== undefined &&
        planForm.max_boxes_per_meal !== null
          ? Number(planForm.max_boxes_per_meal)
          : null,
      price_per_plan: Number(planForm.price_per_plan ?? 0),
      price_per_box:
        planForm.price_per_box !== undefined && planForm.price_per_box !== null
          ? Number(planForm.price_per_box)
          : null,
      min_boxes_delivery:
        planForm.min_boxes_delivery !== undefined &&
        planForm.min_boxes_delivery !== null
          ? Number(planForm.min_boxes_delivery)
          : null,
      min_boxes_pickup:
        planForm.min_boxes_pickup !== undefined &&
        planForm.min_boxes_pickup !== null
          ? Number(planForm.min_boxes_pickup)
          : null,
    };

    if (payload.code) {
      payload.code = payload.code.trim();
    }

    if (!payload.code || !payload.name) {
      showToast('Plan name and code are required.', 'error');
      return;
    }

    const normalizedDays = [...selectedDays].sort(
      (a, b) => DAY_SEQUENCE.indexOf(a) - DAY_SEQUENCE.indexOf(b)
    );

    if (normalizedDays.length === 0) {
      showToast('Select at least one delivery day for this plan.', 'error');
      return;
    }

    const expectedDeliveries = Number(planForm.deliveries_per_cycle ?? 0);
    if (
      expectedDeliveries > 0 &&
      planForm.tab !== 'regular' &&
      normalizedDays.length !== expectedDeliveries
    ) {
      showToast(
        `This plan expects ${expectedDeliveries} delivery day${
          expectedDeliveries === 1 ? '' : 's'
        }. Adjust the selection before saving.`,
        'error'
      );
      return;
    }

    const menuMapping: Record<string, string[]> = {};
    for (const day of normalizedDays) {
      const selections = dayMenuSelections[day] ?? [];
      if (selections.length === 0) {
        showToast(
          `Assign at least one menu item for ${getDayLabel(day)}.`,
          'error'
        );
        return;
      }
      menuMapping[day] = selections;
    }

    payload.available_delivery_days = normalizedDays;
    payload.menu_item_ids_by_day = menuMapping;

    try {
      if (editingPlan?._id) {
        await updateMealPlan(editingPlan._id, payload);
        showToast('Plan updated successfully', 'success');
      } else {
        await createMealPlan(payload);
        showToast('Plan created successfully', 'success');
      }
      setPlanModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePlan = async (planId: string) => {
    if (!window.confirm('Are you sure you want to delete this meal plan?')) {
      return;
    }
    try {
      await deleteMealPlan(planId);
      showToast('Plan deleted', 'success');
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpenZoneModal = (zone?: DeliveryZone) => {
    if (zone) {
      setZoneForm({
        _id: zone._id,
        postcode: zone.postcode,
        zone_label: zone.zone_label ?? '',
        suburbs: zone.suburbs.join(', '),
        base_delivery_fee: String(zone.base_delivery_fee ?? 0),
        express_delivery_fee: zone.express_delivery_fee
          ? String(zone.express_delivery_fee)
          : '',
        notes: zone.notes ?? '',
        is_active: zone.is_active,
      });
    } else {
      setZoneForm(defaultZoneForm);
    }
    setZoneModalOpen(true);
  };

  const handleSubmitZone = async () => {
    if (!zoneForm.postcode) {
      showToast('Postcode is required.', 'error');
      return;
    }

    const suburbsArray = zoneForm.suburbs
      ? zoneForm.suburbs
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    const payload: Partial<DeliveryZone> = {
      postcode: zoneForm.postcode,
      zone_label: zoneForm.zone_label,
      suburbs: suburbsArray,
      base_delivery_fee: Number(zoneForm.base_delivery_fee || 0),
      express_delivery_fee: zoneForm.express_delivery_fee
        ? Number(zoneForm.express_delivery_fee)
        : undefined,
      notes: zoneForm.notes,
      is_active: zoneForm.is_active,
    };

    try {
      if (zoneForm._id) {
        await updateDeliveryZone(zoneForm._id, payload);
        showToast('Delivery zone updated successfully', 'success');
      } else {
        await createDeliveryZone(payload);
        showToast('Delivery zone created successfully', 'success');
      }
      setZoneModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteZone = async (zoneId: string) => {
    if (
      !window.confirm(
        'Are you sure you want to remove this delivery zone from availability?'
      )
    ) {
      return;
    }
    try {
      await deleteDeliveryZone(zoneId, false);
      showToast('Delivery zone deactivated', 'success');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-text">
            Meal Plan & Delivery Configuration
          </h1>
          <p className="text-gray-600 mt-2">
            Control customer-facing meal deals, delivery pricing, and regional
            coverage.
          </p>
        </div>
        {(isLoading || isUpdating) && (
          <LoadingSpinner size="md" message="Saving changes..." />
        )}
      </div>

      {/* Meal Plans Section */}
      <Card className="p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text">
              Meal Subscription Plans
            </h2>
            <p className="text-sm text-gray-500">
              Create and manage weekly, fortnightly, monthly, and regular deals
              displayed to customers.
            </p>
          </div>
          <Button variant="primary" onClick={() => handleOpenPlanModal()}>
            Add Meal Plan
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tab
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Included Meals
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Highlight
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedPlans.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-6 text-center text-gray-500 italic"
                  >
                    No meal plans configured yet.
                  </td>
                </tr>
              )}
              {sortedPlans.map((plan) => (
                <tr key={plan._id}>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-text">{plan.name}</div>
                    <div className="text-xs text-gray-500">{plan.code}</div>
                    {(plan.available_delivery_days?.length ?? 0) > 0 && (
                      <div className="text-xs text-gray-500 mt-1">
                        Delivery days:{' '}
                        {plan.available_delivery_days
                          ?.map((day) => {
                            const label = getDayLabel(day);
                            const count =
                              plan.menu_item_ids_by_day?.[day]?.length ??
                              plan.menu_items_by_day?.[day]?.length ??
                              0;
                            return count > 0 ? `${label} (${count})` : label;
                          })
                          .join(', ')}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 capitalize text-sm text-gray-700">
                    {plan.tab}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {plan.included_meals ?? 0}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {formatCurrency(plan.price_per_plan)}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {plan.highlight ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                        Highlighted
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {plan.is_active ? (
                      <span className="text-emerald-600 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-gray-400">Hidden</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenPlanModal(plan)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeletePlan(plan._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Delivery Zones Section */}
      <Card className="p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text">
              Delivery Zones & Postal Codes
            </h2>
            <p className="text-sm text-gray-500">
              Configure base delivery fees per postcode and control
              availability.
            </p>
          </div>
          <Button variant="primary" onClick={() => handleOpenZoneModal()}>
            Add Delivery Zone
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Postcode
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Zone
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Suburbs
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Base Fee
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Express Fee
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveryZones.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-6 text-center text-gray-500 italic"
                  >
                    No delivery zones configured yet.
                  </td>
                </tr>
              )}
              {deliveryZones.map((zone) => (
                <tr key={zone._id}>
                  <td className="px-4 py-3 text-sm font-medium text-text">
                    {zone.postcode}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {zone.zone_label || '—'}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {zone.suburbs.join(', ')}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {formatCurrency(zone.base_delivery_fee)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {zone.express_delivery_fee
                      ? formatCurrency(zone.express_delivery_fee)
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {zone.is_active ? (
                      <span className="text-emerald-600 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-gray-400">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenZoneModal(zone)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteZone(zone._id)}
                    >
                      Deactivate
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Plan Modal */}
      <Modal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
        title={editingPlan ? 'Edit Meal Plan' : 'Create Meal Plan'}
        size="xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Plan Name"
            value={planForm.name ?? ''}
            onChange={(e) => handlePlanFormChange('name', e.target.value)}
            required
          />
          <Input
            label="Plan Code"
            value={planForm.code ?? ''}
            onChange={(e) => handlePlanFormChange('code', e.target.value)}
            helperText="Slug used by the system (e.g., weekly_10)"
            required
          />
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Display Tab
            <select
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={planForm.tab ?? 'weekly'}
              onChange={(e) => handlePlanFormChange('tab', e.target.value)}
            >
              {PLAN_TABS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <Input
            label="Display Badge"
            value={planForm.display_badge ?? ''}
            onChange={(e) =>
              handlePlanFormChange('display_badge', e.target.value)
            }
            placeholder="e.g., Best Value"
          />
          <Input
            label="Included Meals"
            type="number"
            min={0}
            value={planForm.included_meals ?? 0}
            onChange={(e) =>
              handlePlanFormChange('included_meals', Number(e.target.value))
            }
          />
          <Input
            label="Deliveries per Cycle"
            type="number"
            min={0}
            value={planForm.deliveries_per_cycle ?? 0}
            onChange={(e) =>
              handlePlanFormChange(
                'deliveries_per_cycle',
                Number(e.target.value)
              )
            }
          />
          <Input
            label="Boxes per Delivery"
            type="number"
            min={0}
            value={planForm.boxes_per_delivery ?? 0}
            onChange={(e) =>
              handlePlanFormChange('boxes_per_delivery', Number(e.target.value))
            }
          />
          <Input
            label="Max Boxes per Meal"
            type="number"
            min={0}
            value={planForm.max_boxes_per_meal ?? 0}
            onChange={(e) =>
              handlePlanFormChange('max_boxes_per_meal', Number(e.target.value))
            }
          />
          <Input
            label="Plan Price"
            type="number"
            min={0}
            step="0.01"
            value={planForm.price_per_plan ?? 0}
            onChange={(e) =>
              handlePlanFormChange('price_per_plan', Number(e.target.value))
            }
          />
          <Input
            label="Price per Meal"
            type="number"
            min={0}
            step="0.01"
            value={planForm.price_per_box ?? 0}
            onChange={(e) =>
              handlePlanFormChange('price_per_box', Number(e.target.value))
            }
          />
          <Input
            label="Min Boxes (Delivery)"
            type="number"
            min={0}
            value={planForm.min_boxes_delivery ?? 0}
            onChange={(e) =>
              handlePlanFormChange('min_boxes_delivery', Number(e.target.value))
            }
          />
          <Input
            label="Min Boxes (Pickup)"
            type="number"
            min={0}
            value={planForm.min_boxes_pickup ?? 0}
            onChange={(e) =>
              handlePlanFormChange('min_boxes_pickup', Number(e.target.value))
            }
          />
          <Input
            label="Display Order"
            type="number"
            value={planForm.display_order ?? 0}
            onChange={(e) =>
              handlePlanFormChange('display_order', Number(e.target.value))
            }
          />
          <div className="md:col-span-2 border-t border-gray-200 pt-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-text text-sm">
                  Delivery days & curated menus
                </h3>
                <p className="text-xs text-gray-500">
                  Select which weekdays this plan runs and assign the dishes
                  customers can choose from on each day.
                </p>
              </div>
              {planForm.deliveries_per_cycle ? (
                <div className="text-xs text-gray-500">
                  Expected deliveries per cycle:{' '}
                  <span className="font-semibold text-text">
                    {planForm.deliveries_per_cycle}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
              {WEEK_DAYS.map((day) => {
                const isChecked = selectedDays.includes(day.value);
                return (
                  <label
                    key={day.value}
                    className={`flex items-center space-x-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                      isChecked
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-200 text-gray-600 hover:border-primary/60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={isChecked}
                      onChange={() => toggleDaySelection(day.value)}
                    />
                    <span>{day.label}</span>
                  </label>
                );
              })}
            </div>

            {selectedDays.length === 0 && (
              <p className="text-xs text-amber-600 mt-3">
                Select at least one delivery day to configure the menu.
              </p>
            )}

            {selectedDays.length > 0 && (
              <div className="mt-4 space-y-4">
                {selectedDays.map((day) => (
                  <div
                    key={day}
                    className="rounded-lg border border-gray-200 p-3 bg-white/60"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm text-text">
                        {getDayLabel(day)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {dayMenuSelections[day]?.length ?? 0} item
                        {(dayMenuSelections[day]?.length ?? 0) === 1
                          ? ''
                          : 's'}{' '}
                        selected
                      </div>
                    </div>
                    {sortedMenuItems.length > 0 ? (
                      <select
                        multiple
                        size={multiSelectSize}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={dayMenuSelections[day] ?? []}
                        onChange={(e) =>
                          handleDayMenuSelectChange(
                            day,
                            Array.from(e.target.selectedOptions).map(
                              (option) => option.value
                            )
                          )
                        }
                      >
                        {sortedMenuItems.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name} • {item.category}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="mt-2 text-xs text-amber-600">
                        No menu items available yet. Add dishes from the Menu
                        Management section first.
                      </div>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Hold Ctrl (or Command on Mac) to select multiple dishes.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.allow_multiple ?? true}
              onChange={(e) =>
                handlePlanFormChange('allow_multiple', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">
              Allow customers to choose multiple plans
            </span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.highlight ?? false}
              onChange={(e) =>
                handlePlanFormChange('highlight', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">Highlight this plan</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={planForm.is_active ?? true}
              onChange={(e) =>
                handlePlanFormChange('is_active', e.target.checked)
              }
            />
            <span className="text-sm text-gray-700">Plan is active</span>
          </label>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="ghost" onClick={() => setPlanModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitPlan}>
            {editingPlan ? 'Save Changes' : 'Create Plan'}
          </Button>
        </div>
      </Modal>

      {/* Delivery Zone Modal */}
      <Modal
        isOpen={zoneModalOpen}
        onClose={() => setZoneModalOpen(false)}
        title={zoneForm._id ? 'Edit Delivery Zone' : 'Add Delivery Zone'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Postcode"
            value={zoneForm.postcode}
            onChange={(e) =>
              setZoneForm((prev) => ({ ...prev, postcode: e.target.value }))
            }
            required
          />
          <Input
            label="Zone Label"
            value={zoneForm.zone_label ?? ''}
            onChange={(e) =>
              setZoneForm((prev) => ({ ...prev, zone_label: e.target.value }))
            }
            placeholder="e.g., Zone 1 (0-14km)"
          />
          <label className="flex flex-col text-sm font-medium text-gray-700 md:col-span-2">
            Suburbs (comma separated)
            <textarea
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={zoneForm.suburbs}
              onChange={(e) =>
                setZoneForm((prev) => ({ ...prev, suburbs: e.target.value }))
              }
            />
          </label>
          <Input
            label="Base Delivery Fee"
            type="number"
            step="0.01"
            value={zoneForm.base_delivery_fee}
            onChange={(e) =>
              setZoneForm((prev) => ({
                ...prev,
                base_delivery_fee: e.target.value,
              }))
            }
          />
          <Input
            label="Express Delivery Fee"
            type="number"
            step="0.01"
            value={zoneForm.express_delivery_fee ?? ''}
            onChange={(e) =>
              setZoneForm((prev) => ({
                ...prev,
                express_delivery_fee: e.target.value,
              }))
            }
          />
          <label className="flex flex-col text-sm font-medium text-gray-700 md:col-span-2">
            Notes
            <textarea
              className="mt-1 rounded-lg border border-gray-300 px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={zoneForm.notes ?? ''}
              onChange={(e) =>
                setZoneForm((prev) => ({ ...prev, notes: e.target.value }))
              }
            />
          </label>
          <label className="flex items-center space-x-2 mt-2 md:col-span-2">
            <input
              type="checkbox"
              checked={zoneForm.is_active}
              onChange={(e) =>
                setZoneForm((prev) => ({
                  ...prev,
                  is_active: e.target.checked,
                }))
              }
            />
            <span className="text-sm text-gray-700">Zone is active</span>
          </label>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="ghost" onClick={() => setZoneModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitZone}>
            {zoneForm._id ? 'Save Changes' : 'Create Zone'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MealPlanManagement;
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
import {
  Plus,
  Search,
  Filter,
  RefreshCcw,
  Eye,
  EyeOff,
  Info,
} from 'lucide-react';
import { MenuItem } from '@models/menu.types';

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
  const [showUnavailable, setShowUnavailable] = useState(true); // ✅ DEFAULT: Show ALL items including unavailable
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      console.log('🔄 Loading menu management data...');
      await Promise.all([fetchManagedMenuItems(), fetchManagedCategories()]);
      console.log('✅ Menu management data loaded');
    } catch (error) {
      console.error('❌ Failed to load menu data:', error);
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
    loadData(); // Refresh data after edit
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
    loadData(); // Refresh data after add
  };

  // ✅ FIXED: Filter menu items - Admin sees ALL items by default
  const filteredItems = managedMenuItems.filter((item) => {
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === '' || item.category === selectedCategory;

    // ✅ FIXED: Only filter by availability if admin chooses to hide unavailable items
    const matchesAvailability = showUnavailable || item.is_available;

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  // ✅ Calculate stats including ALL items (don't filter managedMenuItems)
  const totalItems = managedMenuItems.length;
  const availableItems = managedMenuItems.filter(
    (item) => item.is_available
  ).length;
  const unavailableItems = managedMenuItems.filter(
    (item) => !item.is_available
  ).length;

  console.log('📊 Menu Management Stats:', {
    total: totalItems,
    available: availableItems,
    unavailable: unavailableItems,
    filtered: filteredItems.length,
    showingUnavailable: showUnavailable,
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

        {/* ✅ Stats Cards - Shows counts of ALL items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {totalItems}
              </h3>
              <p className="text-sm text-gray-600">Total Items</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                {availableItems}
              </h3>
              <p className="text-sm text-gray-600">Available</p>
            </div>
          </Card>

          <Card padding="lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                {unavailableItems}
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

            {/* ✅ FIXED: Availability Toggle - Default shows all */}
            <div className="md:w-auto">
              <button
                onClick={() => setShowUnavailable(!showUnavailable)}
                className={`flex items-center space-x-2 px-4 py-3 border-2 rounded-lg transition-all ${
                  showUnavailable
                    ? 'border-primary bg-primary text-white'
                    : 'border-orange-500 bg-orange-500 text-white'
                }`}
              >
                {showUnavailable ? (
                  <>
                    <Eye size={20} />
                    <span>Showing All</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={20} />
                    <span>Available Only</span>
                  </>
                )}
              </button>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory || !showUnavailable) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setShowUnavailable(true);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory || !showUnavailable) && (
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
              {!showUnavailable && (
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm">
                  Available Only
                </span>
              )}
              <span className="text-sm text-gray-600 ml-2">
                ({filteredItems.length} of {managedMenuItems.length} items)
              </span>
            </div>
          )}

          {/* ✅ IMPROVED: Info Message for Admin */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800 flex items-start space-x-2">
              <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Admin View:</strong> You can see and manage ALL menu
                items regardless of their availability status. Items marked as{' '}
                <span className="font-semibold">unavailable</span> will not be
                shown to customers but remain visible here for management. Use
                the toggle above to filter your view.
              </span>
            </p>
          </div>
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
import { Order } from '@models/order.types';

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
                <option value="meal_subscription">Meals Subscription</option>
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
import { Sideline } from '@models/menu.types';

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

## 📄 src\pages\customer\CartPage.tsx

_Path: `src\pages\customer\CartPage.tsx`_

```tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@hooks/useCart';
import { useAuthStore } from '@store/authStore';
import { formatCurrency } from '@utils/formatters';
import { getImageUrl, handleImageError } from '@utils/images';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  X,
  ArrowLeft,
  Tag,
  Truck,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { showToast } = useToast();
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

  const [voucherCode, setVoucherCode] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    refreshCart();
  }, [isAuthenticated]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
      setSelectAll(false);
    } else {
      const allItemIds = new Set([
        ...items.map((item: any) => item.item_id),
        ...sidelines.map((item: any) => item.item_id + '_sideline'),
      ]);
      setSelectedItems(allItemIds);
      setSelectAll(true);
    }
  };

  const handleSelectItem = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);

    // Update selectAll state
    const totalItems = items.length + sidelines.length;
    setSelectAll(newSelected.size === totalItems && totalItems > 0);
  };

  const handleDeleteSelected = async () => {
    if (selectedItems.size === 0) {
      showToast('Please select items to delete', 'warning');
      return;
    }

    if (!window.confirm(`Delete ${selectedItems.size} selected item(s)?`)) {
      return;
    }

    for (const itemId of selectedItems) {
      const isSideline = itemId.endsWith('_sideline');
      const actualId = isSideline ? itemId.replace('_sideline', '') : itemId;
      await removeFromCart(actualId, isSideline);
    }

    setSelectedItems(new Set());
    setSelectAll(false);
    showToast('Selected items removed', 'success');
  };

  const handleQuantityChange = async (
    itemId: string,
    newQuantity: number,
    isSideline: boolean = false
  ) => {
    if (newQuantity === 0) {
      if (window.confirm('Remove this item from cart?')) {
        await removeFromCart(itemId, isSideline);
      }
    } else {
      await updateCartQuantity(itemId, newQuantity, isSideline);
    }
  };

  const handleApplyVoucher = () => {
    if (!voucherCode.trim()) {
      showToast('Please enter a voucher code', 'warning');
      return;
    }
    // TODO: Implement voucher validation
    showToast('Voucher code applied!', 'success');
  };

  const handleProceedToCheckout = () => {
    if (items.length === 0 && sidelines.length === 0) {
      showToast('Your cart is empty', 'warning');
      return;
    }
    navigate('/checkout');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <LoadingSpinner size="lg" message="Loading cart..." />
      </div>
    );
  }

  const isCartEmpty = items.length === 0 && sidelines.length === 0;

  if (isCartEmpty) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container-custom">
          <Card padding="lg" className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="mx-auto h-24 w-24 text-gray-300 mb-6" />
            <h2 className="font-heading text-3xl font-bold text-text mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/menu/daily')}
            >
              Start Shopping
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-primary hover:text-primary-600 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </button>
          <h1 className="font-heading text-4xl font-bold text-text">
            Shopping Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              {/* Select All & Delete Selected */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-600">
                      SELECT ALL ({items.length + sidelines.length} ITEM(S))
                    </span>
                  </label>
                </div>

                {selectedItems.size > 0 && (
                  <button
                    onClick={handleDeleteSelected}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={18} />
                    <span>DELETE</span>
                  </button>
                )}
              </div>

              {/* Main Items */}
              <div className="space-y-4">
                {items.map((item: any) => (
                  <div
                    key={item.item_id}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(item.item_id)}
                        onChange={() => handleSelectItem(item.item_id)}
                        className="mt-8 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />

                      {/* Item Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={getImageUrl(item.image_url)}
                          alt={item.item_name}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-text mb-1">
                              {item.item_name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {item.category}
                            </p>

                            {/* Special instructions if any */}
                            {item.special_instructions && (
                              <p className="text-xs text-gray-600 italic mb-2">
                                Note: {item.special_instructions}
                              </p>
                            )}

                            {/* Price */}
                            <div className="flex items-center space-x-3">
                              <span className="font-heading text-xl font-bold text-primary">
                                {formatCurrency(item.price)}
                              </span>
                              {item.original_price &&
                                item.original_price > item.price && (
                                  <span className="text-sm text-gray-400 line-through">
                                    {formatCurrency(item.original_price)}
                                  </span>
                                )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col items-end space-y-2">
                            <button
                              onClick={() => removeFromCart(item.item_id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-2 py-1">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.item_id,
                                    item.quantity - 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                disabled={isUpdating}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-10 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.item_id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                disabled={isUpdating}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Sidelines */}
                {sidelines.length > 0 && (
                  <>
                    <div className="py-2 my-2">
                      <h3 className="font-semibold text-gray-700">Add-ons</h3>
                    </div>
                    {sidelines.map((item: any) => (
                      <div
                        key={item.item_id}
                        className="border-b border-gray-100 pb-4 last:border-0"
                      >
                        <div className="flex items-start space-x-4">
                          <input
                            type="checkbox"
                            checked={selectedItems.has(
                              item.item_id + '_sideline'
                            )}
                            onChange={() =>
                              handleSelectItem(item.item_id + '_sideline')
                            }
                            className="mt-6 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />

                          {/* Item Image */}
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={getImageUrl(item.image_url)}
                              alt={item.item_name}
                              className="w-full h-full object-cover"
                              onError={handleImageError}
                            />
                          </div>

                          {/* Item Details */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-text text-sm mb-1">
                                  {item.item_name}
                                </h3>
                                <span className="font-heading text-lg font-bold text-primary">
                                  {formatCurrency(item.price)}
                                </span>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col items-end space-y-2">
                                <button
                                  onClick={() =>
                                    removeFromCart(item.item_id, true)
                                  }
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={16} />
                                </button>

                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-2 bg-gray-50 rounded-lg px-2 py-1">
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.item_id,
                                        item.quantity - 1,
                                        true
                                      )
                                    }
                                    className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                    disabled={isUpdating}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-8 text-center text-sm font-semibold">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.item_id,
                                        item.quantity + 1,
                                        true
                                      )
                                    }
                                    className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-colors"
                                    disabled={isUpdating}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card padding="lg" className="sticky top-24">
              <h2 className="font-heading text-2xl font-bold text-text mb-6">
                Order Summary
              </h2>

              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({summary.item_count} items)</span>
                  <span className="font-semibold">
                    {formatCurrency(summary.subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping Fee</span>
                  <span className="font-semibold">
                    {summary.delivery_fee > 0
                      ? formatCurrency(summary.delivery_fee)
                      : formatCurrency(0)}
                  </span>
                </div>
              </div>

              {/* Voucher Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter Voucher Code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button
                    variant="primary"
                    onClick={handleApplyVoucher}
                    disabled={!voucherCode.trim()}
                  >
                    APPLY
                  </Button>
                </div>
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-text">Total</span>
                  <span className="font-heading text-3xl font-bold text-primary">
                    {formatCurrency(summary.total)}
                  </span>
                </div>

                {/* Proceed to Checkout */}
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleProceedToCheckout}
                  disabled={isCartEmpty}
                >
                  PROCEED TO CHECKOUT({summary.item_count})
                </Button>
              </div>

              {/* Info Messages */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <Truck
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>Free delivery on orders above $50 within 6km</p>
                </div>

                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>100% secure payment</p>
                </div>

                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <AlertCircle
                    className="text-blue-500 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <p>Need help? Contact us at support@bakars.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
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
import { useAddressStore } from '@store/addressStore';
import { useToast } from '@components/common/Toast';
import { ordersAPI } from '@api';
import { deliveryAPI } from '@api/endpoints/delivery';
import { MealSubscriptionSelection } from '@models/cart.types';
import { formatCurrency } from '@utils/formatters';
import { Address, DeliveryAvailability } from '@models/address.types';
import { DAILY_DELIVERY_FEE } from '@utils/constants';
import {
  MapPin,
  Calendar,
  ArrowLeft,
  Truck,
  Store,
  CheckCircle,
  CreditCard,
  Package,
  FileText,
  ShoppingCart,
} from 'lucide-react';
import Button from '@components/common/Button';
import Card from '@components/common/Card';
import Input from '@components/common/Input';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Modal from '@components/common/Modal';

const DEFAULT_COUNTRY = 'Australia';

const getInitialAddressForm = () => ({
  label: 'Home',
  street: '',
  suburb: '',
  postcode: '',
  state: 'NSW',
  country: DEFAULT_COUNTRY,
  is_default: false,
  delivery_instructions: '',
});

interface CheckoutState {
  cateringDetails?: any;
  subscriptionDetails?: MealSubscriptionSelection;
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
  const {
    addresses,
    fetchAddresses,
    addAddress,
    calculateDeliveryFee,
    isLoading: addressStoreLoading,
    isValidating: isCalculatingDeliveryFee,
    error: addressStoreError,
    clearError: clearAddressError,
  } = useAddressStore();

  const state = (location.state as CheckoutState) || {};
  const { cateringDetails, subscriptionDetails } = state;

  useEffect(() => {
    if (subscriptionDetails) {
      setDeliveryMethod(subscriptionDetails.fulfilment);
    }
  }, [subscriptionDetails]);

  // State
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>(
    'delivery'
  );
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [deliveryFee, setDeliveryFee] = useState(
    summary.delivery_fee ?? DAILY_DELIVERY_FEE
  );
  const [addressError, setAddressError] = useState<string | null>(null);

  // Address modal state
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSavingAddress, setIsSavingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState(getInitialAddressForm);

  // Fetch saved addresses on mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchAddresses().catch((error: any) => {
        console.error('Failed to fetch addresses:', error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const selectedAddressId = selectedAddress?._id ?? '';

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      setSelectedAddress(null);
      return;
    }

    if (
      !selectedAddressId ||
      !addresses.some((addr) => addr._id === selectedAddressId)
    ) {
      const nextAddress =
        addresses.find((addr) => addr.is_default) || addresses[0];
      setSelectedAddress(nextAddress);
    }
  }, [addresses, selectedAddressId]);

  useEffect(() => {
    if (
      deliveryMethod === 'delivery' &&
      !addressStoreLoading &&
      addresses.length === 0
    ) {
      setIsAddressModalOpen(true);
    }
  }, [deliveryMethod, addressStoreLoading, addresses.length]);

  useEffect(() => {
    const evaluateDeliveryFee = async () => {
      if (deliveryMethod !== 'delivery') {
        setAddressError(null);
        setDeliveryFee(0);
        return;
      }

      if (!selectedAddressId || !selectedAddress) {
        setAddressError(null);
        setDeliveryFee(0);
        return;
      }

      clearAddressError();
      setAddressError(null);

      const isDailyOrder = !subscriptionDetails && !cateringDetails;

      if (isDailyOrder) {
        try {
          const formattedAddress = [
            selectedAddress.street,
            selectedAddress.suburb,
            selectedAddress.state,
            selectedAddress.postcode,
            selectedAddress.country || DEFAULT_COUNTRY,
          ]
            .filter(Boolean)
            .join(', ');

          const availabilityResponse = await deliveryAPI.checkAvailability(
            formattedAddress,
            'daily'
          );
          const availability = availabilityResponse.data.data as
            | DeliveryAvailability
            | undefined;

          if (availability?.available) {
            const fee =
              availability.delivery_fee !== undefined
                ? availability.delivery_fee
                : DAILY_DELIVERY_FEE;
            setDeliveryFee(fee);
          } else {
            const message =
              availability?.message ||
              availabilityResponse.data.message ||
              'Delivery service is not available for this address.';
            setAddressError(message);
            setDeliveryFee(0);
          }
        } catch (error: any) {
          console.error('Delivery availability check failed:', error);
          const message =
            error?.response?.data?.message ||
            error?.response?.data?.detail ||
            error?.message ||
            'Delivery service is not available for this address.';
          setAddressError(message);
          setDeliveryFee(0);
        }
        return;
      }

      try {
        const result = await calculateDeliveryFee(selectedAddressId);
        if (result && typeof result.fee === 'number') {
          setDeliveryFee(result.fee);
        }
      } catch (error: any) {
        console.error('Delivery fee calculation failed:', error);
        const message =
          error?.response?.data?.message ||
          error?.response?.data?.detail ||
          error?.message ||
          'Delivery service is not available for this address.';
        setAddressError(message);
        setDeliveryFee(0);
      }
    };

    evaluateDeliveryFee();
  }, [
    selectedAddressId,
    selectedAddress,
    deliveryMethod,
    calculateDeliveryFee,
    clearAddressError,
    subscriptionDetails,
    cateringDetails,
  ]);

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

  const handleSaveAddress = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedPayload = {
      label: newAddress.label.trim() || 'Home',
      street: newAddress.street.trim(),
      suburb: newAddress.suburb.trim(),
      postcode: newAddress.postcode.trim(),
      state: newAddress.state.trim() || 'NSW',
      country: newAddress.country || DEFAULT_COUNTRY,
      is_default: newAddress.is_default || addresses.length === 0,
      delivery_instructions:
        newAddress.delivery_instructions?.trim() || undefined,
    };

    if (
      !trimmedPayload.street ||
      !trimmedPayload.suburb ||
      !trimmedPayload.postcode
    ) {
      showToast('Please complete the required address fields.', 'error');
      return;
    }

    setIsSavingAddress(true);
    try {
      const createdAddress = await addAddress(trimmedPayload);
      setIsAddressModalOpen(false);
      setNewAddress(getInitialAddressForm());
      setSelectedAddress(createdAddress);
      showToast('Address saved successfully', 'success');
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        error?.message ||
        'Failed to save address';
      showToast(message, 'error');
    } finally {
      setIsSavingAddress(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (isCartEmpty) {
      showToast('Your cart is empty', 'error');
      navigate('/menu/daily');
      return;
    }

    if (subscriptionDetails) {
      if (subscriptionDetails.fulfilment === 'delivery' && !selectedAddress) {
        showToast('Please select a delivery address', 'error');
        return;
      }
    } else {
      if (deliveryMethod === 'delivery' && !selectedAddress) {
        showToast('Please select or add a delivery address', 'error');
        return;
      }

      if (!deliveryDate || !deliveryTime) {
        showToast('Please select delivery/pickup date and time', 'error');
        return;
      }
    }

    if (
      addressError &&
      ((subscriptionDetails && subscriptionDetails.fulfilment === 'delivery') ||
        (!subscriptionDetails && deliveryMethod === 'delivery'))
    ) {
      showToast(addressError, 'error');
      return;
    }

    setIsProcessing(true);

    try {
      let orderPayload: any = {};
      const deliveryAddressId = selectedAddressId;
      const backendDeliveryMethod =
        deliveryMethod === 'delivery' ? 'standard' : 'pickup';

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
        };
      } else if (subscriptionDetails) {
        const plan = subscriptionDetails.plan;
        const planId = (plan as any)._id || (plan as any).id;

        const planSelections = [
          {
            plan_id: planId,
            quantity: subscriptionDetails.planQuantity,
          },
        ];

        const deliverySlots = subscriptionDetails.schedule.map((slot) => ({
          delivery_date: slot.date,
          menu_items: slot.items.reduce(
            (acc: Record<string, number>, entry) => {
              const id = (entry.item as any)._id || entry.item.id;
              if (id) {
                acc[id] = entry.quantity;
              }
              return acc;
            },
            {} as Record<string, number>
          ),
        }));

        orderPayload = {
          plan_selections: planSelections,
          delivery_slots: deliverySlots,
          sidelines:
            sidelines?.map((s: any) => {
              const sidelineData = s.sideline || s;
              return {
                item_id: sidelineData.id || sidelineData._id,
                quantity: s.quantity || 1,
              };
            }) || [],
          delivery_address_id:
            subscriptionDetails.fulfilment === 'delivery'
              ? deliveryAddressId
              : undefined,
          fulfilment_method: subscriptionDetails.fulfilment,
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
          delivery_method: backendDeliveryMethod,
          delivery_address_id:
            backendDeliveryMethod === 'standard'
              ? deliveryAddressId
              : undefined,
          delivery_instructions: specialInstructions,
          notes: '',
        };
      }

      console.log('Submitting order:', orderPayload);

      // Create order based on type
      let orderResponse;
      if (cateringDetails) {
        orderResponse = await ordersAPI.createCateringOrder(orderPayload);
      } else if (subscriptionDetails) {
        orderResponse =
          await ordersAPI.createMealSubscriptionOrder(orderPayload);
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
          error.response?.data?.detail ||
          'Failed to place order. Please try again.',
        'error'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const subtotalAmount = summary.subtotal;
  const taxAmount =
    summary.tax !== undefined ? summary.tax : subtotalAmount * 0.1;
  const effectiveDeliveryFee = deliveryMethod === 'delivery' ? deliveryFee : 0;
  const totalAmount = subtotalAmount + taxAmount + effectiveDeliveryFee;

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
              {/* Delivery Method */}
              <Card padding="lg">
                <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center space-x-2">
                  <Truck size={24} className="text-primary" />
                  <span>Delivery Method</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      {deliveryMethod === 'delivery'
                        ? isCalculatingDeliveryFee
                          ? 'Calculating...'
                          : effectiveDeliveryFee === 0
                            ? 'FREE'
                            : formatCurrency(effectiveDeliveryFee)
                        : formatCurrency(effectiveDeliveryFee)}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMethod('pickup');
                      setIsAddressModalOpen(false);
                    }}
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin size={24} className="text-primary" />
                      <h2 className="font-heading text-2xl font-bold text-text">
                        Delivery Address
                      </h2>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const initialForm = getInitialAddressForm();
                        initialForm.is_default = addresses.length === 0;
                        setNewAddress(initialForm);
                        setIsAddressModalOpen(true);
                      }}
                    >
                      Add Address
                    </Button>
                  </div>

                  {addressStoreLoading ? (
                    <div className="py-6">
                      <LoadingSpinner message="Loading saved addresses..." />
                    </div>
                  ) : addresses.length > 0 ? (
                    <div className="space-y-3">
                      {addresses.map((addr) => (
                        <label
                          key={addr._id}
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            (selectedAddressId &&
                              selectedAddressId === addr._id) ||
                            (!selectedAddressId && addr.is_default)
                              ? 'border-primary bg-primary-50'
                              : 'border-gray-200 hover:border-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="address"
                            checked={selectedAddressId === addr._id}
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
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-3">
                        You have not saved any delivery addresses yet.
                      </p>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          const initialForm = getInitialAddressForm();
                          initialForm.is_default = true;
                          setNewAddress(initialForm);
                          setIsAddressModalOpen(true);
                        }}
                      >
                        Add Your First Address
                      </Button>
                    </div>
                  )}

                  {(addressError || addressStoreError) && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {addressError ||
                        addressStoreError ||
                        'Delivery service is not available for this address.'}
                    </div>
                  )}

                  {deliveryMethod === 'delivery' &&
                    addresses.length > 0 &&
                    !addressError && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
                        {isCalculatingDeliveryFee
                          ? 'Calculating delivery fee for the selected address...'
                          : `Calculated delivery fee: ${formatCurrency(effectiveDeliveryFee)}`}
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
                      {formatCurrency(subtotalAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-semibold">
                      {deliveryMethod === 'pickup' || effectiveDeliveryFee === 0
                        ? 'FREE'
                        : formatCurrency(effectiveDeliveryFee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (GST 10%):</span>
                    <span className="font-semibold">
                      {formatCurrency(taxAmount)}
                    </span>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-text">
                        Total:
                      </span>
                      <span className="font-heading text-3xl font-bold text-primary">
                        {formatCurrency(totalAmount)}
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
        <Modal
          isOpen={isAddressModalOpen}
          onClose={() => {
            if (!isSavingAddress) {
              setIsAddressModalOpen(false);
            }
          }}
          title="Add New Address"
          size="md"
        >
          <form onSubmit={handleSaveAddress} className="space-y-4">
            <Input
              type="text"
              label="Label"
              value={newAddress.label}
              onChange={(e) =>
                setNewAddress((prev) => ({ ...prev, label: e.target.value }))
              }
              placeholder="Home, Work, etc."
              required
            />

            <Input
              type="text"
              label="Street Address"
              value={newAddress.street}
              onChange={(e) =>
                setNewAddress((prev) => ({ ...prev, street: e.target.value }))
              }
              placeholder="45 Railway Terrace"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                label="Suburb"
                value={newAddress.suburb}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, suburb: e.target.value }))
                }
                placeholder="Guildford"
                required
              />
              <Input
                type="text"
                label="Postcode"
                value={newAddress.postcode}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    postcode: e.target.value,
                  }))
                }
                placeholder="2161"
                maxLength={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                label="State"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress((prev) => ({ ...prev, state: e.target.value }))
                }
                placeholder="NSW"
                required
              />
              <Input
                type="text"
                label="Country"
                value={newAddress.country}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    country: e.target.value,
                  }))
                }
                placeholder="Australia"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Instructions (Optional)
              </label>
              <textarea
                value={newAddress.delivery_instructions}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    delivery_instructions: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                rows={3}
                placeholder="Gate is on Palmer St; buzz 45 then wait."
              />
            </div>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newAddress.is_default}
                onChange={(e) =>
                  setNewAddress((prev) => ({
                    ...prev,
                    is_default: e.target.checked,
                  }))
                }
                className="rounded border-gray-300 text-primary focus:ring-primary"
                disabled={addresses.length === 0 && newAddress.is_default}
              />
              <span className="text-sm text-gray-700">
                Set as default delivery address
              </span>
            </label>

            <div className="flex space-x-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  if (!isSavingAddress) {
                    setIsAddressModalOpen(false);
                  }
                }}
                disabled={isSavingAddress}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                disabled={isSavingAddress}
                isLoading={isSavingAddress}
              >
                Save Address
              </Button>
            </div>
          </form>
        </Modal>
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
import React, { useEffect, useMemo, useState } from 'react';
import { useMenuStore } from '@store/menuStore';
import MenuItemCard from '@components/menu/MenuItemCard';
import FilterBar from '@components/menu/FilterBar';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Card from '@components/common/Card';
import { Package, RefreshCcw, AlertCircle } from 'lucide-react';
import Pagination from '@components/common/Pagination';

const DailyMenuPage: React.FC = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

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
    loadMenuData();
  };

  // Get filtered items
  const filteredItems = getFilteredItems('daily_menu');
  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  // Reset pagination when filters or data change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    dailyMenuItems.length,
    activeFilters.category,
    activeFilters.is_vegetarian,
    activeFilters.is_vegan,
    activeFilters.order_type,
  ]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text mb-4">
            Daily Menu
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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

        {/* Main Content - Now full width */}
        <div className="space-y-6">
          {/* Filters */}
          <FilterBar
            categories={categories}
            activeFilters={activeFilters}
            onFilterChange={setFilters}
            onClearFilters={clearFilters}
          />

          {/* Menu Items Grid - Adjusted for full width */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedItems.map((item) => (
                <MenuItemCard
                  key={item._id || item.id}
                  item={item}
                  showQuickAdd={true} // Always show Add button
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

          {filteredItems.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              pageSize={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
              showSummary
              className="pt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyMenuPage;
```

---

## 📄 src\pages\customer\MealsSubscriptionPage.tsx

_Path: `src\pages\customer\MealsSubscriptionPage.tsx`_

```tsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { menuAPI } from '@api/endpoints/menu';
import { MealSubscriptionPlan } from '@models/subscription.types';
import { MenuItem } from '@models/menu.types';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import LoadingSpinner from '@components/common/LoadingSpinner';
import { useToast } from '@components/common/Toast';
import { formatCurrency } from '@utils/formatters';
import {
  CalendarRange,
  CheckCircle2,
  ChevronLeft,
  Edit2,
  Info,
  Package,
  Truck,
  Utensils,
} from 'lucide-react';
import clsx from 'clsx';

type FulfilmentMethod = 'delivery' | 'pickup';

interface DeliveryOption {
  date: string;
  label: string;
  weekIndex: number;
}

interface ScheduledItem {
  item: MenuItem;
  quantity: number;
}

interface SubscriptionReviewPayload {
  plan: MealSubscriptionPlan;
  planQuantity: number;
  fulfilment: FulfilmentMethod;
  schedule: Array<{ date: string; items: ScheduledItem[] }>;
  includedBoxes: number;
  totalBoxes: number;
  extraBoxes: number;
  maxPerMeal?: number | null;
}

const INDEX_TO_WEEKDAY_NAME = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

const WEEKDAY_NAME_TO_INDEX: Record<string, number> =
  INDEX_TO_WEEKDAY_NAME.reduce<Record<string, number>>((acc, name, index) => {
    acc[name] = index;
    return acc;
  }, {});

const DEFAULT_DELIVERY_DAYS = ['monday', 'thursday'];

const normalizeDeliveryDays = (days?: string[]): string[] => {
  if (!Array.isArray(days)) {
    return [];
  }
  const normalized: string[] = [];
  const seen = new Set<string>();
  for (const day of days) {
    const normalizedDay = day?.toString().toLowerCase();
    if (
      normalizedDay &&
      WEEKDAY_NAME_TO_INDEX[normalizedDay] !== undefined &&
      !seen.has(normalizedDay)
    ) {
      seen.add(normalizedDay);
      normalized.push(normalizedDay);
    }
  }
  return normalized;
};

const resolvePlanDeliveryDays = (plan?: MealSubscriptionPlan): string[] => {
  if (!plan) {
    return [];
  }
  const available = normalizeDeliveryDays(plan.available_delivery_days ?? []);
  if (available.length > 0) {
    return available;
  }
  const mappedDays = normalizeDeliveryDays(
    Object.keys(plan.menu_item_ids_by_day ?? {})
  );
  if (mappedDays.length > 0) {
    return mappedDays;
  }
  return normalizeDeliveryDays(Object.keys(plan.menu_items_by_day ?? {}));
};

const getDayKeyFromDate = (isoDate: string): string => {
  const candidate = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(candidate.getTime())) {
    return 'monday';
  }
  const index = candidate.getDay();
  return INDEX_TO_WEEKDAY_NAME[index] ?? 'monday';
};

const generateUpcomingDeliveryDates = (
  weeks: number = 6,
  allowedDays?: string[]
): DeliveryOption[] => {
  const results: DeliveryOption[] = [];
  const daysToUse = (() => {
    const normalized = normalizeDeliveryDays(allowedDays);
    if (normalized.length > 0) {
      return normalized;
    }
    return [...DEFAULT_DELIVERY_DAYS];
  })();
  const allowedIndices = daysToUse.map(
    (day) => WEEKDAY_NAME_TO_INDEX[day] ?? WEEKDAY_NAME_TO_INDEX['monday']
  );
  const allowedIndexSet = new Set(allowedIndices);

  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  let currentWeekIndex = -1;
  const seenWeeks = new Set<string>();
  const maxIterations = weeks * 14 + 14;
  let iterations = 0;

  while (
    results.length < daysToUse.length * weeks &&
    iterations < maxIterations
  ) {
    const day = cursor.getDay();
    if (allowedIndexSet.has(day)) {
      const weekAnchor = new Date(cursor);
      weekAnchor.setHours(0, 0, 0, 0);
      weekAnchor.setDate(cursor.getDate() - day);
      const weekKey = weekAnchor.toISOString().split('T')[0];
      if (!seenWeeks.has(weekKey)) {
        seenWeeks.add(weekKey);
        currentWeekIndex += 1;
      }
      const formatted = cursor.toLocaleDateString('en-AU', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });

      results.push({
        date: cursor.toISOString().split('T')[0],
        label: formatted,
        weekIndex: currentWeekIndex,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return results;
};

const MealsSubscriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [isLoadingPlans, setIsLoadingPlans] = useState<boolean>(true);
  const [plans, setPlans] = useState<MealSubscriptionPlan[]>([]);
  const [activeTab, setActiveTab] = useState<string>('regular');
  const [currentStep, setCurrentStep] = useState<
    'plans' | 'schedule' | 'review'
  >('plans');

  const [modalPlan, setModalPlan] = useState<MealSubscriptionPlan | null>(null);
  const [modalQuantity, setModalQuantity] = useState<number>(1);
  const [modalFulfilment, setModalFulfilment] =
    useState<FulfilmentMethod>('delivery');
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<{
    plan: MealSubscriptionPlan;
    quantity: number;
    fulfilment: FulfilmentMethod;
  } | null>(null);

  const planDeliveryDays = useMemo(
    () =>
      selectedPlanDetails?.plan
        ? resolvePlanDeliveryDays(selectedPlanDetails.plan)
        : undefined,
    [selectedPlanDetails?.plan]
  );

  const upcomingDates = useMemo(
    () => generateUpcomingDeliveryDates(6, planDeliveryDays),
    [planDeliveryDays]
  );
  const loadedMenusRef = useRef<Set<string>>(new Set());

  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [menusByDate, setMenusByDate] = useState<Record<string, MenuItem[]>>(
    {}
  );
  const [menuLoadingState, setMenuLoadingState] = useState<
    Record<string, boolean>
  >({});
  const [selectedMeals, setSelectedMeals] = useState<
    Record<string, Record<string, number>>
  >({});

  const planTabs = useMemo(() => {
    const tabOrder = ['regular', 'weekly', 'fortnight', 'monthly'];
    const uniqueTabs = Array.from(new Set(plans.map((plan) => plan.tab)));
    return uniqueTabs.sort((a, b) => tabOrder.indexOf(a) - tabOrder.indexOf(b));
  }, [plans]);

  const plansByActiveTab = useMemo(
    () => plans.filter((plan) => plan.tab === activeTab),
    [plans, activeTab]
  );

  useEffect(() => {
    const loadPlans = async () => {
      setIsLoadingPlans(true);
      try {
        const response = await menuAPI.getMealSubscriptionPlans();
        const payload = response.data.data || response.data;
        const activePlans = Array.isArray(payload)
          ? payload.filter((plan) => plan.is_active)
          : [];
        setPlans(
          activePlans.sort(
            (a, b) =>
              (a.display_order ?? 0) - (b.display_order ?? 0) ||
              a.name.localeCompare(b.name)
          )
        );

        if (activePlans.length > 0) {
          const defaultTab =
            activePlans.find((plan) => plan.tab === 'weekly')?.tab ||
            activePlans[0].tab;
          setActiveTab(defaultTab);
        }
      } catch (error) {
        console.error(error);
        showToast('Failed to load meal subscription plans', 'error');
      } finally {
        setIsLoadingPlans(false);
      }
    };

    loadPlans();
  }, []);

  const fetchMenuForDate = useCallback(
    async (date: string, planOverride?: MealSubscriptionPlan | null) => {
      if (!date) {
        return;
      }

      const plan = planOverride ?? selectedPlanDetails?.plan ?? null;
      const dayKey = getDayKeyFromDate(date);

      if (plan) {
        const planMenus = plan.menu_items_by_day?.[dayKey];
        if (Array.isArray(planMenus) && planMenus.length > 0) {
          loadedMenusRef.current.add(date);
          setMenusByDate((prev) => ({ ...prev, [date]: planMenus }));
          setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
          return;
        }

        const planMenuIds = plan.menu_item_ids_by_day?.[dayKey];
        if (Array.isArray(planMenuIds) && planMenuIds.length > 0) {
          loadedMenusRef.current.add(date);
          setMenuLoadingState((prev) => ({ ...prev, [date]: true }));
          try {
            const items = await Promise.all(
              planMenuIds.map(async (id) => {
                try {
                  const response = await menuAPI.getMenuItemById(id);
                  return response.data?.data || response.data;
                } catch (error) {
                  console.error(error);
                  return null;
                }
              })
            );
            setMenusByDate((prev) => ({
              ...prev,
              [date]: items.filter((item): item is MenuItem => !!item),
            }));
          } catch (error) {
            console.error(error);
            showToast(`Unable to load menu for ${date}`, 'error');
          } finally {
            setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
          }
          return;
        }
      }

      if (loadedMenusRef.current.has(date)) {
        return;
      }

      loadedMenusRef.current.add(date);
      setMenuLoadingState((prev) => ({ ...prev, [date]: true }));

      try {
        const response = await menuAPI.getWeeklyMenu(date);
        const items =
          response.data?.data?.items ??
          response.data?.data ??
          response.data ??
          [];
        setMenusByDate((prev) => ({ ...prev, [date]: items }));
      } catch (error) {
        console.error(error);
        showToast(`Unable to load menu for ${date}`, 'error');
      } finally {
        setMenuLoadingState((prev) => ({ ...prev, [date]: false }));
      }
    },
    [showToast, selectedPlanDetails]
  );

  const includedBoxes = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    return (
      (selectedPlanDetails.plan.included_meals || 0) *
      selectedPlanDetails.quantity
    );
  }, [selectedPlanDetails]);

  const selectedBoxes = useMemo(() => {
    return Object.values(selectedMeals).reduce((total, menuMap) => {
      return (
        total +
        Object.values(menuMap).reduce((sum, quantity) => sum + quantity, 0)
      );
    }, 0);
  }, [selectedMeals]);

  const extraBoxes = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const extras = selectedBoxes - includedBoxes;
    return extras > 0 ? extras : 0;
  }, [selectedBoxes, includedBoxes, selectedPlanDetails]);

  const requiredDeliveries = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const planDeliveries = selectedPlanDetails.plan.deliveries_per_cycle || 0;
    return selectedPlanDetails.plan.tab === 'regular' ? 0 : planDeliveries;
  }, [selectedPlanDetails]);

  const minBoxesRequired = useMemo(() => {
    if (!selectedPlanDetails) return 0;
    const plan = selectedPlanDetails.plan;
    if (plan.tab !== 'regular') return includedBoxes;
    return selectedPlanDetails.fulfilment === 'delivery'
      ? (plan.min_boxes_delivery ?? 4)
      : (plan.min_boxes_pickup ?? 1);
  }, [selectedPlanDetails, includedBoxes]);

  const handleOpenPlanModal = (plan: MealSubscriptionPlan) => {
    setModalPlan(plan);
    setModalQuantity(1);
    setModalFulfilment('delivery');
  };

  const resetScheduleState = useCallback(
    async (
      plan: MealSubscriptionPlan,
      quantity: number,
      fulfilment: FulfilmentMethod
    ) => {
      const planDays = resolvePlanDeliveryDays(plan);
      const planUpcomingDates = generateUpcomingDeliveryDates(6, planDays);

      loadedMenusRef.current.clear();
      setMenusByDate({});
      setMenuLoadingState({});
      setSelectedMeals({});
      setSelectedDates([]);
      setActiveDate(null);

      setSelectedPlanDetails({ plan, quantity, fulfilment });
      setCurrentStep('schedule');

      let initialDates: string[] = [];
      if (plan.tab === 'regular') {
        initialDates = planUpcomingDates.length
          ? [planUpcomingDates[0].date]
          : [];
      } else if (plan.deliveries_per_cycle && plan.deliveries_per_cycle > 0) {
        initialDates = planUpcomingDates
          .slice(0, plan.deliveries_per_cycle)
          .map((option) => option.date);
      } else if (planUpcomingDates.length > 0) {
        initialDates = [planUpcomingDates[0].date];
      }

      if (initialDates.length > 0) {
        setSelectedDates(initialDates);
        setActiveDate(initialDates[0]);
        await Promise.all(
          initialDates.map((date) => fetchMenuForDate(date, plan))
        );
      }
    },
    [fetchMenuForDate]
  );

  const handleConfirmPlan = async () => {
    if (!modalPlan) return;
    await resetScheduleState(modalPlan, modalQuantity, modalFulfilment);
    setModalPlan(null);
  };

  const handleChangePlan = () => {
    setSelectedPlanDetails(null);
    setSelectedDates([]);
    setSelectedMeals({});
    setActiveDate(null);
    setMenusByDate({});
    setMenuLoadingState({});
    loadedMenusRef.current.clear();
    setCurrentStep('plans');
  };

  const handleToggleDate = (date: string) => {
    if (!selectedPlanDetails) return;

    const isSelected = selectedDates.includes(date);
    if (isSelected) {
      const remaining = selectedDates.filter((d) => d !== date);
      setSelectedDates(remaining);
      setSelectedMeals((prev) => {
        const updated = { ...prev };
        delete updated[date];
        return updated;
      });
      if (activeDate === date) {
        setActiveDate(remaining[0] ?? null);
      }
      return;
    }

    if (requiredDeliveries > 0 && selectedDates.length >= requiredDeliveries) {
      showToast(
        `This plan includes ${requiredDeliveries} delivery day${
          requiredDeliveries > 1 ? 's' : ''
        }. Deselect another date to choose a new one.`,
        'info'
      );
      return;
    }

    const updatedDates = [...selectedDates, date].sort();
    setSelectedDates(updatedDates);
    setActiveDate(date);
    fetchMenuForDate(date, selectedPlanDetails.plan);
  };

  const handleAdjustMealQuantity = (
    date: string,
    item: MenuItem,
    delta: number
  ) => {
    if (!selectedPlanDetails) {
      showToast('Select a meal subscription plan first', 'warning');
      return;
    }

    if (!selectedDates.includes(date)) {
      showToast('Please choose a delivery day before adding meals', 'info');
      return;
    }

    setSelectedMeals((prev) => {
      const existingForDate = prev[date] || {};
      const itemId = item._id || item.id;
      const currentQuantity = existingForDate[itemId] || 0;
      const nextQuantity = Math.max(0, currentQuantity + delta);

      const maxPerMeal =
        selectedPlanDetails.plan.max_boxes_per_meal &&
        selectedPlanDetails.plan.max_boxes_per_meal > 0
          ? selectedPlanDetails.plan.max_boxes_per_meal *
            selectedPlanDetails.quantity
          : null;

      if (maxPerMeal && nextQuantity > maxPerMeal) {
        showToast(
          `This plan allows up to ${maxPerMeal} boxes per dish.`,
          'warning'
        );
        return prev;
      }

      const updatedForDate = { ...existingForDate };
      if (nextQuantity === 0) {
        delete updatedForDate[itemId];
      } else {
        updatedForDate[itemId] = nextQuantity;
      }

      const updated = { ...prev };
      if (Object.keys(updatedForDate).length === 0) {
        delete updated[date];
      } else {
        updated[date] = updatedForDate;
      }
      return updated;
    });
  };

  const scheduleReady = useMemo(() => {
    if (!selectedPlanDetails) return false;
    if (selectedPlanDetails.plan.tab !== 'regular' && requiredDeliveries > 0) {
      if (selectedDates.length !== requiredDeliveries) return false;
    } else if (selectedPlanDetails.plan.tab === 'regular') {
      if (selectedDates.length === 0) return false;
    }

    if (selectedBoxes < minBoxesRequired) return false;

    const allDatesHaveMeals = selectedDates.every((date) => {
      const items = selectedMeals[date];
      if (!items) return false;
      const dateTotal = Object.values(items).reduce((sum, qty) => sum + qty, 0);
      return dateTotal > 0;
    });

    return allDatesHaveMeals;
  }, [
    selectedPlanDetails,
    selectedDates,
    selectedMeals,
    requiredDeliveries,
    minBoxesRequired,
    selectedBoxes,
  ]);

  const handleProceedToReview = () => {
    if (!scheduleReady) {
      showToast(
        'Please complete your meal selections before continuing.',
        'info'
      );
      return;
    }
    setCurrentStep('review');
  };

  const handleProceedToCheckout = () => {
    if (!selectedPlanDetails) return;

    const schedule = selectedDates.map((date) => {
      const selections = selectedMeals[date] || {};
      const items: ScheduledItem[] = Object.entries(selections)
        .map(([itemId, quantity]) => {
          const menu = menusByDate[date]?.find(
            (menuItem) => (menuItem._id || menuItem.id) === itemId
          );
          if (!menu) return null;
          return { item: menu, quantity };
        })
        .filter(Boolean) as ScheduledItem[];
      return { date, items };
    });

    const payload: SubscriptionReviewPayload = {
      plan: selectedPlanDetails.plan,
      planQuantity: selectedPlanDetails.quantity,
      fulfilment: selectedPlanDetails.fulfilment,
      schedule,
      includedBoxes,
      totalBoxes: selectedBoxes,
      extraBoxes,
      maxPerMeal: selectedPlanDetails.plan.max_boxes_per_meal,
    };

    navigate('/checkout', {
      state: {
        subscriptionDetails: payload,
      },
    });
  };

  const renderPlanCard = (plan: MealSubscriptionPlan) => {
    const includedMeals = plan.included_meals || 0;
    const deliveries = plan.deliveries_per_cycle || 0;
    const planDays = resolvePlanDeliveryDays(plan);
    const formatDayLabel = (day: string) =>
      day.charAt(0).toUpperCase() + day.slice(1);
    const daySummaries = planDays.map((day) => {
      const configuredCount =
        plan.menu_item_ids_by_day?.[day]?.length ??
        plan.menu_items_by_day?.[day]?.length ??
        0;
      return configuredCount > 0
        ? `${formatDayLabel(day)} (${configuredCount})`
        : formatDayLabel(day);
    });

    return (
      <Card
        key={plan._id}
        hoverable
        onClick={() => handleOpenPlanModal(plan)}
        className={clsx(
          'border border-transparent transition-all duration-200 hover:border-primary/40 group'
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-heading font-semibold text-text mb-1">
              {plan.name}
            </h3>
            <p className="text-sm text-gray-500">{plan.description}</p>
          </div>
          {plan.display_badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {plan.display_badge}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <Utensils className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">{includedMeals}</p>
              <p>Meals included</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CalendarRange className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">
                {deliveries || 'Flexible'}
              </p>
              <p>Delivery {deliveries === 1 ? 'day' : 'days'}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Package className="text-primary" size={18} />
            <div>
              <p className="font-semibold text-text">
                {formatCurrency(plan.price_per_plan || 0)}
              </p>
              <p>Total plan price</p>
            </div>
          </div>
          {planDays.length > 0 && (
            <div className="flex items-center space-x-3 sm:col-span-2">
              <Truck className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-text">
                  {daySummaries.join(' • ')}
                </p>
                <p>Configured delivery days</p>
              </div>
            </div>
          )}
          {plan.price_per_box ? (
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="text-primary" size={18} />
              <div>
                <p className="font-semibold text-text">
                  {formatCurrency(plan.price_per_box)}
                </p>
                <p>Per meal after discount</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Click to customise this plan
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      </Card>
    );
  };

  const renderPlanSelectionStep = () => (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-heading font-bold text-text">
          Meals Subscription Plans
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that suits your lifestyle. Configure weekly,
          fortnight, monthly, or regular orders and customise the meals
          delivered to your door.
        </p>
      </div>

      <div className="flex justify-center space-x-3">
        {planTabs.map((tab) => (
          <button
            key={tab}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-colors',
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'regular'
              ? 'Regular Order'
              : tab === 'weekly'
                ? 'Weekly Plan'
                : tab === 'fortnight'
                  ? 'Fortnight Plan'
                  : 'Monthly Plan'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plansByActiveTab.map(renderPlanCard)}
      </div>

      <Card className="bg-primary-50 border-primary/20">
        <div className="flex items-start space-x-3">
          <Info className="text-primary mt-1" size={20} />
          <div>
            <h3 className="font-semibold text-text">How it works</h3>
            <p className="text-sm text-gray-600 mt-1">
              Select a plan to see its detailed terms and conditions. After
              choosing a plan you&apos;ll pick delivery days, customise meals,
              and review your schedule before finishing at checkout.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderScheduleStep = () => {
    if (!selectedPlanDetails) return null;

    const plan = selectedPlanDetails.plan;
    const maxPerMeal =
      plan.max_boxes_per_meal && plan.max_boxes_per_meal > 0
        ? plan.max_boxes_per_meal * selectedPlanDetails.quantity
        : null;

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={handleChangePlan}
              className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
            >
              <ChevronLeft size={16} className="mr-1" />
              Change plan
            </button>
            <h2 className="text-3xl font-heading font-bold text-text mt-2">
              Build your {plan.name}
            </h2>
            <p className="text-gray-600">
              Select delivery days and customise meals. Included boxes:{' '}
              <span className="font-semibold text-text">{includedBoxes}</span>
            </p>
          </div>
          <div className="bg-primary/10 px-5 py-3 rounded-lg text-primary font-semibold">
            {formatCurrency(plan.price_per_plan || 0)} per cycle
          </div>
        </div>

        <Card className="border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-text">
                Select delivery days
              </h3>
              <p className="text-sm text-gray-500">
                {plan.tab === 'regular'
                  ? 'Choose your preferred delivery or pickup days.'
                  : `This plan includes ${requiredDeliveries} delivery day${
                      requiredDeliveries > 1 ? 's' : ''
                    } each cycle.`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {upcomingDates.map((option) => {
              const isSelected = selectedDates.includes(option.date);
              const isDisabled =
                !isSelected &&
                requiredDeliveries > 0 &&
                selectedDates.length >= requiredDeliveries;

              return (
                <button
                  key={option.date}
                  onClick={() => handleToggleDate(option.date)}
                  className={clsx(
                    'px-4 py-2 rounded-full border transition-colors text-sm font-semibold',
                    isSelected
                      ? 'bg-primary text-white border-primary shadow'
                      : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary',
                    isDisabled && 'opacity-40 cursor-not-allowed'
                  )}
                  disabled={isDisabled}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-6 items-start">
          <Card className="border border-gray-100">
            <h3 className="text-lg font-semibold text-text mb-4">Summary</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Selected deliveries</span>
                <span className="font-semibold text-text">
                  {selectedDates.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total boxes selected</span>
                <span className="font-semibold text-text">{selectedBoxes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Included boxes</span>
                <span className="font-semibold text-text">{includedBoxes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Extra boxes</span>
                <span
                  className={clsx(
                    'font-semibold',
                    extraBoxes > 0 ? 'text-primary' : 'text-text'
                  )}
                >
                  {extraBoxes}
                </span>
              </div>
              {plan.tab === 'regular' && (
                <div className="text-xs text-gray-500">
                  Minimum boxes for {selectedPlanDetails.fulfilment}:
                  <span className="ml-1 font-semibold text-text">
                    {minBoxesRequired}
                  </span>
                </div>
              )}
              {maxPerMeal && (
                <div className="text-xs text-gray-500">
                  Maximum boxes per dish: {maxPerMeal}
                </div>
              )}
            </div>
          </Card>

          <Card className="border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">
                {activeDate
                  ? `Meals for ${new Date(activeDate).toLocaleDateString(
                      'en-AU',
                      {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'short',
                      }
                    )}`
                  : 'Select a delivery day'}
              </h3>
              {activeDate && (
                <span className="text-xs text-gray-500">
                  Click a day to switch menus
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedDates.map((date) => (
                <button
                  key={date}
                  onClick={() => {
                    setActiveDate(date);
                    fetchMenuForDate(date, selectedPlanDetails?.plan);
                  }}
                  className={clsx(
                    'px-3 py-1 rounded-full text-xs font-semibold transition-colors',
                    activeDate === date
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  {new Date(date).toLocaleDateString('en-AU', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  })}
                </button>
              ))}
            </div>

            {!activeDate && (
              <div className="py-12 text-center text-gray-500">
                Select a delivery day to view menu options.
              </div>
            )}

            {activeDate && menuLoadingState[activeDate] && (
              <div className="py-12 text-center">
                <LoadingSpinner message="Loading meals..." />
              </div>
            )}

            {activeDate &&
              !menuLoadingState[activeDate] &&
              (menusByDate[activeDate]?.length || 0) === 0 && (
                <div className="py-12 text-center text-gray-500">
                  Menu not available for this date yet. Please choose another
                  day.
                </div>
              )}

            {activeDate &&
              !menuLoadingState[activeDate] &&
              (menusByDate[activeDate]?.length || 0) > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menusByDate[activeDate]?.map((item) => {
                    const itemId = item._id || item.id;
                    const currentCount =
                      selectedMeals[activeDate]?.[itemId] || 0;

                    return (
                      <div
                        key={itemId}
                        className="border border-gray-200 rounded-lg p-4 flex flex-col space-y-3"
                      >
                        <div>
                          <h4 className="font-semibold text-text">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{formatCurrency(item.price)}</span>
                          <span>
                            Max{' '}
                            {plan.max_boxes_per_meal
                              ? plan.max_boxes_per_meal *
                                selectedPlanDetails.quantity
                              : '—'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleAdjustMealQuantity(activeDate, item, -1)
                            }
                          >
                            -
                          </Button>
                          <span className="text-xl font-semibold text-text">
                            {currentCount}
                          </span>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleAdjustMealQuantity(activeDate, item, 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex items-center space-x-2">
            <Truck size={16} className="text-primary" />
            <span>
              Delivery fees are calculated per delivery day based on your
              postcode during checkout.
            </span>
          </div>
          <div className="space-x-3">
            <Button variant="outline" onClick={handleChangePlan}>
              Change Plan
            </Button>
            <Button
              variant="primary"
              onClick={handleProceedToReview}
              disabled={!scheduleReady}
            >
              Review Selection
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderReviewStep = () => {
    if (!selectedPlanDetails) return null;

    const plan = selectedPlanDetails.plan;

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() => setCurrentStep('schedule')}
              className="inline-flex items-center text-primary text-sm font-semibold hover:underline"
            >
              <ChevronLeft size={16} className="mr-1" />
              Edit meals
            </button>
            <h2 className="text-3xl font-heading font-bold text-text mt-2">
              Review your subscription
            </h2>
            <p className="text-gray-600">
              Confirm your schedule, selected meals, and plan details.
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Plan price</div>
            <div className="text-3xl font-heading font-bold text-primary">
              {formatCurrency(plan.price_per_plan || 0)}
            </div>
          </div>
        </div>

        <Card className="border border-gray-100">
          <h3 className="text-lg font-semibold text-text mb-4">Plan summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <div className="text-xs uppercase text-gray-400">Plan</div>
              <div className="font-semibold text-text mt-1">{plan.name}</div>
              <div className="text-xs text-gray-500">
                Qty: {selectedPlanDetails.quantity}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">Fulfilment</div>
              <div className="font-semibold text-text mt-1 capitalize">
                {selectedPlanDetails.fulfilment}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">
                Included boxes
              </div>
              <div className="font-semibold text-text mt-1">
                {includedBoxes}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase text-gray-400">Extra boxes</div>
              <div
                className={clsx(
                  'font-semibold mt-1',
                  extraBoxes > 0 ? 'text-primary' : 'text-text'
                )}
              >
                {extraBoxes}
              </div>
            </div>
          </div>
        </Card>

        <Card className="border border-gray-100">
          <h3 className="text-lg font-semibold text-text mb-4">
            Delivery schedule & meals
          </h3>
          <div className="space-y-4">
            {selectedDates.map((date) => {
              const selections = selectedMeals[date] || {};
              const items: ScheduledItem[] = Object.entries(selections)
                .map(([itemId, quantity]) => {
                  const menu = menusByDate[date]?.find(
                    (menuItem) => (menuItem._id || menuItem.id) === itemId
                  );
                  if (!menu) return null;
                  return { item: menu, quantity };
                })
                .filter(Boolean) as ScheduledItem[];

              return (
                <div
                  key={date}
                  className="border border-gray-200 rounded-lg p-4 text-sm text-gray-600"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <CalendarRange className="text-primary" size={18} />
                      <span className="font-semibold text-text">
                        {new Date(date).toLocaleDateString('en-AU', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {items.reduce((sum, entry) => sum + entry.quantity, 0)}{' '}
                      boxes
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {items.map(({ item, quantity }) => (
                      <div
                        key={item._id || item.id}
                        className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between"
                      >
                        <span className="font-medium text-text">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          x{quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="border border-gray-100">
          <div className="flex items-start space-x-3">
            <Truck className="text-primary mt-1" size={18} />
            <div className="text-sm text-gray-600">
              <p>
                Delivery charges are based on your postcode and multiplied by
                the number of delivery days selected. Pickup orders will not
                incur a delivery fee.
              </p>
              <p className="mt-2">
                You&apos;ll confirm your address and review final pricing at
                checkout.
              </p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setCurrentStep('schedule')}>
            <Edit2 size={18} className="mr-2" />
            Edit meals
          </Button>
          <Button variant="primary" onClick={handleProceedToCheckout}>
            Continue to Checkout
          </Button>
        </div>
      </div>
    );
  };
  if (isLoadingPlans) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner message="Loading meal subscriptions..." />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom space-y-12">
        <div className="flex items-center space-x-3 text-sm">
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'plans'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            1. Choose Plan
          </span>
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'schedule'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            2. Meals & Schedule
          </span>
          <span
            className={clsx(
              'px-3 py-1 rounded-full',
              currentStep === 'review'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 border border-gray-200'
            )}
          >
            3. Review
          </span>
        </div>

        {currentStep === 'plans' && renderPlanSelectionStep()}
        {currentStep === 'schedule' && renderScheduleStep()}
        {currentStep === 'review' && renderReviewStep()}
      </div>

      <Modal
        isOpen={!!modalPlan}
        onClose={() => setModalPlan(null)}
        title={modalPlan ? modalPlan.name : 'Plan Details'}
        size="lg"
      >
        {modalPlan && (
          <div className="space-y-6">
            <div className="text-sm text-gray-600 space-y-2">
              <p>{modalPlan.description}</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  {modalPlan.included_meals || 0} meals included (
                  {modalPlan.deliveries_per_cycle || 0} delivery day
                  {modalPlan.deliveries_per_cycle === 1 ? '' : 's'}).
                </li>
                <li>
                  Base price:{' '}
                  <span className="font-semibold text-text">
                    {formatCurrency(modalPlan.price_per_plan || 0)}
                  </span>
                </li>
                {modalPlan.price_per_box && (
                  <li>
                    Per meal after discount:{' '}
                    <span className="font-semibold text-text">
                      {formatCurrency(modalPlan.price_per_box)}
                    </span>
                  </li>
                )}
                {modalPlan.max_boxes_per_meal && (
                  <li>
                    {modalPlan.max_boxes_per_meal} boxes per dish per plan.
                  </li>
                )}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modalPlan.allow_multiple && (
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Number of plans
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={modalQuantity}
                    onChange={(e) =>
                      setModalQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {modalPlan.tab === 'regular' && (
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Fulfilment method
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setModalFulfilment('delivery')}
                      className={clsx(
                        'flex-1 px-3 py-2 rounded-lg border text-sm font-semibold transition-colors',
                        modalFulfilment === 'delivery'
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                      )}
                    >
                      Delivery
                    </button>
                    <button
                      onClick={() => setModalFulfilment('pickup')}
                      className={clsx(
                        'flex-1 px-3 py-2 rounded-lg border text-sm font-semibold transition-colors',
                        modalFulfilment === 'pickup'
                          ? 'bg-primary text-white border-primary'
                          : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                      )}
                    >
                      Pickup
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Minimum boxes: {modalPlan.min_boxes_delivery ?? 4} for
                    delivery,
                    {modalPlan.min_boxes_pickup ?? 1} for pickup.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="ghost" onClick={() => setModalPlan(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmPlan}>
                Continue
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MealsSubscriptionPage;
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
import type { Order } from '@models/order.types';

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
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

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
                          onClick={() => {
                            setSelectedOrder(order as unknown as Order);
                            setIsOrderModalOpen(true);
                          }}
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

          {/* Order Details Modal moved outside Add Address Modal */}

          <Input
            type="text"
            label="Street Address"
            value={addressForm.street}
            onChange={(e) =>
              setAddressForm({ ...addressForm, street: e.target.value })
            }
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
import ProtectedRoute from '@components/auth/ProtectedRoute';
import DailyMenuPage from '@pages/customer/DailyMenuPage';
import MealsSubscriptionPage from '@pages/customer/MealsSubscriptionPage';
import CateringPage from '@pages/customer/CateringPage';
import CartPage from '@pages/customer/CartPage';
import CheckoutPage from '@pages/customer/CheckoutPage';
import ProfilePage from '@pages/customer/ProfilePage';

const CustomerRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/menu/daily" element={<DailyMenuPage />} />
      <Route path="/menu/meals" element={<MealsSubscriptionPage />} />
      <Route path="/catering" element={<CateringPage />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
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
import MealsSubscriptionPage from '@pages/customer/MealsSubscriptionPage';
import CateringPage from '@pages/customer/CateringPage';
import CheckoutPage from '@pages/customer/CheckoutPage';
import ProfilePage from '@pages/customer/ProfilePage';

// Admin Pages
import AdminDashboard from '@pages/admin/AdminDashboard';
import OrderManagement from '@pages/admin/OrderManagement';
import MenuManagement from '@pages/admin/MenuManagement';
import SidelinesManagement from '@pages/admin/SidelinesManagement';
import MealPlanManagement from '@pages/admin/MealPlanManagement';

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
        <Route path="/menu/meals" element={<MealsSubscriptionPage />} />
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
            <Route path="/admin/meal-plans" element={<MealPlanManagement />} />
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
} from '@models/address.types';

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
import { Order } from '@models/order.types';
import { MenuItem, Sideline, MenuCategory } from '@models/menu.types';
import { MealSubscriptionPlan, DeliveryZone } from '@models/subscription.types';
import { DashboardStats } from '@models/admin.types';

interface AdminState {
  // Orders
  allOrders: Order[];
  orderStats: DashboardStats | null;

  // Menu
  managedMenuItems: MenuItem[];
  managedSidelines: Sideline[];
  managedCategories: MenuCategory[];
  mealPlans: MealSubscriptionPlan[];
  deliveryZones: DeliveryZone[];

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

  createCategory: (payload: CreateCategoryInput) => Promise<void>;
  updateCategory: (
    categoryId: string,
    payload: UpdateCategoryInput
  ) => Promise<void>;
  deleteCategory: (categoryId: string) => Promise<void>;

  fetchMealPlans: (tab?: string, includeInactive?: boolean) => Promise<void>;
  createMealPlan: (payload: Partial<MealSubscriptionPlan>) => Promise<void>;
  updateMealPlan: (
    planId: string,
    payload: Partial<MealSubscriptionPlan>
  ) => Promise<void>;
  deleteMealPlan: (planId: string) => Promise<void>;

  fetchDeliveryZones: (includeInactive?: boolean) => Promise<void>;
  createDeliveryZone: (payload: Partial<DeliveryZone>) => Promise<void>;
  updateDeliveryZone: (
    zoneId: string,
    payload: Partial<DeliveryZone>
  ) => Promise<void>;
  deleteDeliveryZone: (zoneId: string, permanent?: boolean) => Promise<void>;

  clearError: () => void;
}

type CreateCategoryInput = {
  name: string;
  display_name: string;
  description?: string;
  is_active: boolean;
  sort_order?: number;
  imageFile?: File | null;
};

type UpdateCategoryInput = {
  display_name?: string;
  description?: string;
  is_active?: boolean;
  sort_order?: number;
  imageFile?: File | null;
};

const createEmptyDashboardStats = (): DashboardStats => ({
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
});

export const useAdminStore = create<AdminState>((set, get) => ({
  allOrders: [],
  orderStats: null,
  managedMenuItems: [],
  managedSidelines: [],
  managedCategories: [],
  mealPlans: [],
  deliveryZones: [],
  isLoading: false,
  isUpdating: false,
  error: null,

  // ✅ Fetch all orders from backend
  fetchAllOrders: async (filters?: any) => {
    set({ isLoading: true, error: null });
    try {
      console.log('[ADMIN] Fetching all orders...');
      const response = await adminAPI.getAllOrders(filters);

      const payload = response.data?.data ?? response.data;
      let orders: Order[] = [];
      let totalOrders = 0;

      if (Array.isArray(payload)) {
        orders = payload as Order[];
        totalOrders = orders.length;
      } else if (payload && typeof payload === 'object') {
        const payloadObj = payload as any;
        if (Array.isArray(payloadObj.orders)) {
          orders = payloadObj.orders as Order[];
          totalOrders =
            typeof payloadObj.total === 'number'
              ? payloadObj.total
              : payloadObj.orders.length;
        } else if (Array.isArray(payloadObj.data)) {
          orders = payloadObj.data as Order[];
          totalOrders = orders.length;
        }
      }

      console.log('[ADMIN] Orders loaded:', orders.length, 'of', totalOrders);

      set({
        allOrders: orders,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('[ADMIN] Failed to fetch orders:', error);
      set({
        error: error.response?.data?.message || 'Failed to fetch orders',
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

  // ✅ FIXED: Fetch ALL menu items for admin (including unavailable)
  fetchManagedMenuItems: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log(
        '📡 [ADMIN] Fetching ALL menu items (including unavailable)...'
      );

      // Use admin API that includes unavailable items
      const response = await adminAPI.getAllMenuItems(1, 1000);
      console.log('📦 [ADMIN] Raw response:', response);

      const payload = response.data?.data ?? response.data;
      let items: MenuItem[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.items)
          ? (payload as any).items
          : [];

      // If admin endpoint doesn't exist or returns empty, fallback to regular endpoint
      if (items.length === 0) {
        console.log(
          '⚠️ [ADMIN] Admin endpoint empty, trying fallback to daily menu...'
        );
        try {
          const fallbackResponse = await menuAPI.getDailyMenu();
          const fallbackData =
            fallbackResponse.data.data || fallbackResponse.data;
          items = Array.isArray(fallbackData) ? fallbackData : [];
          console.log('✅ [ADMIN] Fallback loaded:', items.length, 'items');
        } catch (fallbackError) {
          console.error('❌ [ADMIN] Fallback also failed:', fallbackError);
        }
      }

      // Log availability status for debugging
      const availableCount = items.filter((item) => item.is_available).length;
      const unavailableCount = items.filter(
        (item) => !item.is_available
      ).length;

      console.log('✅ [ADMIN] All menu items loaded:', items.length);
      console.log(
        `📊 [ADMIN] Available: ${availableCount}, Unavailable: ${unavailableCount}`
      );

      // Log sample items for debugging
      if (items.length > 0) {
        console.log(
          '📦 [ADMIN] Sample items:',
          items.slice(0, 3).map((item) => ({
            id: item._id,
            name: item.name,
            is_available: item.is_available,
            category: item.category,
          }))
        );
      }

      set({
        managedMenuItems: items, // Store ALL items without filtering
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ [ADMIN] Failed to fetch menu items:', error);
      console.error('Error details:', error.response?.data);

      // Even on error, try to use cached data if available
      set({
        error: error.response?.data?.message || 'Failed to fetch menu items',
        isLoading: false,
      });
    }
  },

  // ✅ FIXED: Fetch ALL sidelines for admin (including unavailable)
  fetchManagedSidelines: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log(
        '📡 [ADMIN] Fetching ALL sidelines (including unavailable)...'
      );
      const response = await adminAPI.getAllSidelines(1, 1000);

      const payload = response.data?.data ?? response.data;
      let sidelines: Sideline[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.items)
          ? (payload as any).items
          : [];

      // If admin endpoint doesn't exist or returns empty, fallback
      if (sidelines.length === 0) {
        console.log('⚠️ [ADMIN] Admin endpoint empty, trying fallback...');
        try {
          const fallbackResponse = await menuAPI.getSidelines();
          const fallbackData =
            fallbackResponse.data.data || fallbackResponse.data;
          sidelines = Array.isArray(fallbackData) ? fallbackData : [];
        } catch (fallbackError) {
          console.error('❌ [ADMIN] Fallback failed:', fallbackError);
        }
      }

      // Log availability status
      const availableCount = sidelines.filter(
        (item) => item.is_available
      ).length;
      const unavailableCount = sidelines.filter(
        (item) => !item.is_available
      ).length;
      console.log(
        `📊 [ADMIN] Sidelines - Available: ${availableCount}, Unavailable: ${unavailableCount}`
      );

      set({
        managedSidelines: sidelines, // Store ALL items without filtering
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ [ADMIN] Failed to fetch sidelines:', error);
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
      console.log('📡 [ADMIN] Fetching categories...');
      const response = await adminAPI.getAllCategories(1, 1000);

      const payload = response.data?.data ?? response.data;
      const categories: MenuCategory[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.categories)
          ? (payload as any).categories
          : [];

      console.log('✅ Categories loaded:', categories.length);

      set({
        managedCategories: categories,
        isLoading: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to fetch categories:', error);
      set({
        managedCategories: [],
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

      // Log form data for debugging
      for (let [key, value] of data.entries()) {
        console.log(`  ${key}: ${value}`);
      }

      const response = await adminAPI.createMenuItem(data);
      const newItem = response.data.data || response.data;

      console.log('✅ Menu item created:', newItem);

      // Refresh the entire list to ensure consistency
      await get().fetchManagedMenuItems();

      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to create menu item:', error);
      console.error('Error details:', error.response?.data);
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
      console.log('📡 Updating menu item:', itemId);

      // Log form data for debugging
      for (let [key, value] of data.entries()) {
        console.log(`  ${key}: ${value}`);
      }

      const response = await adminAPI.updateMenuItem(itemId, data);
      const updatedItem = response.data.data || response.data;

      console.log('✅ Menu item updated:', updatedItem);

      // Update the item in the list WITHOUT filtering
      const currentItems = get().managedMenuItems;
      set({
        managedMenuItems: currentItems.map((item) =>
          item._id === itemId ? updatedItem : item
        ),
        isUpdating: false,
      });

      // Optional: Refresh entire list to ensure consistency
      // await get().fetchManagedMenuItems();
    } catch (error: any) {
      console.error('❌ Failed to update menu item:', error);
      console.error('Error details:', error.response?.data);
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

      // Refresh the entire list
      await get().fetchManagedSidelines();

      set({ isUpdating: false });
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

      // Update the item in the list WITHOUT filtering
      const currentSidelines = get().managedSidelines;
      set({
        managedSidelines: currentSidelines.map((sideline) =>
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

  // ✅ Create category
  createCategory: async (payload: CreateCategoryInput) => {
    set({ isUpdating: true, error: null });
    try {
      const formData = new FormData();
      formData.append('name', payload.name.trim());
      formData.append('display_name', payload.display_name.trim());
      if (payload.description)
        formData.append('description', payload.description.trim());
      formData.append('is_active', String(payload.is_active));
      if (payload.sort_order !== undefined && payload.sort_order !== null) {
        formData.append('sort_order', String(payload.sort_order));
      }
      if (payload.imageFile) {
        formData.append('image', payload.imageFile);
      }

      await adminAPI.createCategory(formData);
      await get().fetchManagedCategories();
      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to create category:', error);
      set({
        error: error.response?.data?.message || 'Failed to create category',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Update category
  updateCategory: async (categoryId: string, payload: UpdateCategoryInput) => {
    set({ isUpdating: true, error: null });
    try {
      const formData = new FormData();
      if (payload.display_name !== undefined) {
        formData.append('display_name', payload.display_name.trim());
      }
      if (payload.description !== undefined) {
        formData.append('description', payload.description.trim());
      }
      if (payload.is_active !== undefined) {
        formData.append('is_active', String(payload.is_active));
      }
      if (payload.sort_order !== undefined && payload.sort_order !== null) {
        formData.append('sort_order', String(payload.sort_order));
      }
      if (payload.imageFile) {
        formData.append('image', payload.imageFile);
      }

      await adminAPI.updateCategory(categoryId, formData);
      await get().fetchManagedCategories();
      set({ isUpdating: false });
    } catch (error: any) {
      console.error('❌ Failed to update category:', error);
      set({
        error: error.response?.data?.message || 'Failed to update category',
        isUpdating: false,
      });
      throw error;
    }
  },

  // ✅ Delete category
  deleteCategory: async (categoryId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteCategory(categoryId);
      set({
        managedCategories: get().managedCategories.filter(
          (category) => category._id !== categoryId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      console.error('❌ Failed to delete category:', error);
      set({
        error: error.response?.data?.message || 'Failed to delete category',
        isUpdating: false,
      });
      throw error;
    }
  },

  fetchMealPlans: async (tab?: string, includeInactive: boolean = true) => {
    set({ isLoading: true, error: null });
    try {
      const response = await adminAPI.getMealPlans(tab, includeInactive);
      const plans = response.data.data || response.data;
      set({
        mealPlans: Array.isArray(plans) ? plans : [],
        isLoading: false,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to fetch meal plans';
      set({
        error: message,
        isLoading: false,
      });
      throw error;
    }
  },

  createMealPlan: async (payload: Partial<MealSubscriptionPlan>) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createMealPlan(payload);
      const plan = response.data.data || response.data;
      if (plan) {
        set({
          mealPlans: [
            plan,
            ...get().mealPlans.filter((p) => p._id !== plan._id),
          ],
          isUpdating: false,
        });
      } else {
        set({ isUpdating: false });
      }
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to create meal plan';
      set({
        error: message,
        isUpdating: false,
      });
      throw error;
    }
  },

  updateMealPlan: async (
    planId: string,
    payload: Partial<MealSubscriptionPlan>
  ) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateMealPlan(planId, payload);
      const updated = response.data.data || response.data;
      if (!updated) {
        set({ isUpdating: false });
        return;
      }
      set({
        mealPlans: get().mealPlans.map((plan) =>
          plan._id === planId ? updated : plan
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      const message =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to update meal plan';
      set({
        error: message,
        isUpdating: false,
      });
      throw error;
    }
  },

  deleteMealPlan: async (planId: string) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteMealPlan(planId);
      set({
        mealPlans: get().mealPlans.filter((plan) => plan._id !== planId),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to delete meal plan',
        isUpdating: false,
      });
      throw error;
    }
  },

  fetchDeliveryZones: async (includeInactive: boolean = true) => {
    set({ isLoading: true, error: null });
    try {
      const response = await adminAPI.getDeliveryZones(
        includeInactive,
        1,
        1000
      );
      const payload = response.data?.data ?? response.data;
      const zones: DeliveryZone[] = Array.isArray(payload)
        ? (payload as any)
        : Array.isArray((payload as any)?.zones)
          ? (payload as any).zones
          : [];
      set({
        deliveryZones: zones,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to fetch delivery zones',
        isLoading: false,
      });
      throw error;
    }
  },

  createDeliveryZone: async (payload: Partial<DeliveryZone>) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.createDeliveryZone(payload);
      const zone = response.data.data || response.data;
      if (zone) {
        set({
          deliveryZones: [
            zone,
            ...get().deliveryZones.filter((z) => z._id !== zone._id),
          ],
          isUpdating: false,
        });
      } else {
        set({ isUpdating: false });
      }
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to create delivery zone',
        isUpdating: false,
      });
      throw error;
    }
  },

  updateDeliveryZone: async (
    zoneId: string,
    payload: Partial<DeliveryZone>
  ) => {
    set({ isUpdating: true, error: null });
    try {
      const response = await adminAPI.updateDeliveryZone(zoneId, payload);
      const updated = response.data.data || response.data;
      if (!updated) {
        set({ isUpdating: false });
        return;
      }
      set({
        deliveryZones: get().deliveryZones.map((zone) =>
          zone._id === zoneId ? updated : zone
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to update delivery zone',
        isUpdating: false,
      });
      throw error;
    }
  },

  deleteDeliveryZone: async (zoneId: string, permanent: boolean = false) => {
    set({ isUpdating: true, error: null });
    try {
      await adminAPI.deleteDeliveryZone(zoneId, permanent);
      set({
        deliveryZones: get().deliveryZones.filter(
          (zone) => zone._id !== zoneId
        ),
        isUpdating: false,
      });
    } catch (error: any) {
      set({
        error:
          error.response?.data?.message || 'Failed to delete delivery zone',
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
import {
  User,
  LoginCredentials,
  RegisterData,
  AuthResponse,
} from '../types/auth.types';

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
      const rawData = response.data as AuthResponse & { data?: AuthResponse };
      const authData = rawData.data ?? rawData;
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
      const rawData = response.data as AuthResponse & { data?: AuthResponse };
      const authData = rawData.data ?? rawData;
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
      const rawUser = response.data as User & { data?: User };
      const user = rawUser.data ?? rawUser;

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
      const rawUser = response.data as User & { data?: User };
      const updatedUser = rawUser.data ?? rawUser;
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
import { MenuItem, Sideline } from '@models/menu.types';
import { DAILY_DELIVERY_FEE } from '@utils/constants';

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
  orderType: 'daily_menu' | 'meal_subscription' | 'special_catering' | null;
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
    type: 'daily_menu' | 'meal_subscription' | 'special_catering'
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

    const delivery_fee = deliveryOption === 'pickup' ? 0 : DAILY_DELIVERY_FEE;
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
    type: 'daily_menu' | 'meal_subscription' | 'special_catering'
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
} from '@models/menu.types';

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
    orderType: 'daily_menu' | 'meal_subscription' | 'special_catering'
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
    orderType: 'daily_menu' | 'meal_subscription' | 'special_catering'
  ) => {
    const { activeFilters, searchQuery } = get();

    let items: MenuItem[] = [];

    switch (orderType) {
      case 'daily_menu':
        items = get().dailyMenuItems;
        break;
      case 'meal_subscription':
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
import { Order, CreateOrderPayload, OrderTracking } from '@models/order.types';
import { PaginatedResponse } from '@models/common.types';

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
      const payload = response?.data?.data || {};

      // Backend returns { orders, total, page, page_size }
      // Older FE expected PaginatedResponse with { items, total, page }
      const rawOrders = payload.orders || payload.items || [];

      // Normalize backend order shape to frontend Order type
      const mapped: Order[] = rawOrders.map((o: any) => ({
        ...o,
        _id: o._id || o.id,
        total: o.total ?? o.total_amount,
        delivery_option: o.delivery_option ?? o.delivery_method,
      }));

      set({
        orderHistory: Array.isArray(mapped) ? mapped : [],
        orderHistoryTotal:
          payload.total ?? (Array.isArray(mapped) ? mapped.length : 0),
        orderHistoryPage: page,
        isLoadingHistory: false,
      });
    } catch (error: any) {
      set({
        error:
          error?.response?.data?.message || 'Failed to fetch order history',
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
    overflow-x: hidden;
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
    @apply w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
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
  user_id?: string;
  label: string;
  street: string;
  suburb: string;
  postcode: string;
  state: string;
  country: string;
  is_default: boolean;
  delivery_instructions?: string;
  latitude?: number;
  longitude?: number;
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
  latitude?: number;
  longitude?: number;
}

export interface DeliveryValidation {
  is_valid: boolean;
  distance_km: number;
  delivery_fee: number;
  estimated_time_minutes: number;
  message?: string;
}

export interface DeliveryAvailability {
  available: boolean;
  distance_km?: number;
  delivery_fee?: number;
  suburb?: string;
  postcode?: string;
  message?: string;
}
```

---

## 📄 src\types\admin.types.ts

_Path: `src\types\admin.types.ts`_

```typescript
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
```

---

## 📄 src\types\auth.types.ts

_Path: `src\types\auth.types.ts`_

```typescript
export interface User {
  id: string;
  email: string;
  phone: string;
  role: 'customer' | 'admin';
  addresses: Address[];
  created_at: string;
  updated_at: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  suburb: string;
  postcode: string;
  state: string;
  is_default: boolean;
  instructions?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  phone: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  role?: 'customer' | 'admin';
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
import { MealSubscriptionPlan } from './subscription.types';

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
  order_type: 'daily_menu' | 'meal_subscription' | 'special_catering';
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

export interface MealSubscriptionSelection {
  plan: MealSubscriptionPlan;
  planQuantity: number;
  fulfilment: 'delivery' | 'pickup';
  schedule: Array<{
    date: string;
    items: { item: MenuItem; quantity: number }[];
  }>;
  includedBoxes: number;
  totalBoxes: number;
  extraBoxes: number;
  maxPerMeal?: number | null;
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

export type OrderType = 'daily_menu' | 'meal_subscription' | 'special_catering';
export type DeliveryOption = 'pickup' | 'delivery';
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';
export type PaymentStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded'
  | 'paid';
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
  created_at?: string;
  updated_at?: string;
}

export interface MenuFilters {
  category?: string;
  is_vegetarian?: boolean;
  is_vegan?: boolean;
  search?: string;
  order_type?: 'daily_menu' | 'meal_subscription' | 'special_catering';
}
```

---

## 📄 src\types\order.types.ts

_Path: `src\types\order.types.ts`_

```typescript
import { CartItem, CartSideline } from './cart.types';
import { Address } from './auth.types';

export type OrderType = 'daily_menu' | 'meal_subscription' | 'special_catering';
export type DeliveryOption = 'pickup' | 'delivery';
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';
export type PaymentStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded'
  | 'paid';
export type PaymentMethod = 'card' | 'cash';

export interface OrderStatusHistoryEntry {
  status: string;
  timestamp: string;
  note?: string;
  updated_by?: string;
}

export interface Order {
  _id: string;
  user_id: string;
  order_type: OrderType;
  items: CartItem[];
  sidelines: CartSideline[];
  delivery_option: DeliveryOption;
  delivery_address?: Address;
  delivery_date: string;
  delivery_time_slot?: string;
  status: OrderStatus;
  payment_status: PaymentStatus;
  payment_method: PaymentMethod;
  payment_intent_id?: string;
  subtotal: number;
  delivery_fee: number;
  tax: number;
  total: number;
  special_instructions?: string;
  cancellation_reason?: string;
  notes?: string;
  admin_notes?: string;
  delivery_method?: DeliveryOption | string;
  delivery_instructions?: string;
  order_number?: string;
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  created_at: string;
  updated_at: string;
  status_history?: OrderStatusHistoryEntry[];
}

export interface CreateOrderPayload {
  order_type: OrderType;
  items: {
    menu_item_id: string;
    quantity: number;
    special_instructions?: string;
  }[];
  sidelines?: { sideline_id: string; quantity: number }[];
  delivery_option: DeliveryOption;
  delivery_address_id?: string;
  delivery_date: string;
  delivery_time_slot?: string;
  payment_method: PaymentMethod;
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
  status_history: OrderStatusHistoryEntry[];
}
```

---

## 📄 src\types\subscription.types.ts

_Path: `src\types\subscription.types.ts`_

```typescript
import { MenuItem } from './menu.types';

export interface MealSubscriptionPlan {
  _id: string;
  code: string;
  name: string;
  tab: string;
  description?: string;
  short_description?: string;
  included_meals: number;
  deliveries_per_cycle: number;
  boxes_per_delivery: number;
  max_boxes_per_meal?: number | null;
  price_per_plan: number;
  price_per_box?: number | null;
  allow_multiple: boolean;
  min_boxes_delivery?: number | null;
  min_boxes_pickup?: number | null;
  display_badge?: string;
  display_order: number;
  extra_box_price?: number | null;
  highlight: boolean;
  is_active: boolean;
  metadata?: Record<string, unknown>;
  available_delivery_days?: string[];
  menu_item_ids_by_day?: Record<string, string[]>;
  menu_items_by_day?: Record<string, MenuItem[]>;
  created_at: string;
  updated_at: string;
}

export interface DeliveryZone {
  _id: string;
  postcode: string;
  zone_label?: string | null;
  suburbs: string[];
  state: string;
  distance_from_business?: number | null;
  base_delivery_fee: number;
  express_delivery_fee?: number | null;
  max_delivery_days?: number | null;
  notes?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PlanSelectionInput {
  plan_id: string;
  quantity: number;
}

export interface DeliverySlotInput {
  delivery_date: string;
  menu_items: Record<string, number>;
  notes?: string;
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
  MEAL_SUBSCRIPTION: 'meal_subscription',
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
export const DAILY_DELIVERY_FEE = 10; // AUD

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
import { useEffect } from 'react';
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
import MealsSubscriptionPage from '@pages/customer/MealsSubscriptionPage';
import CateringPage from '@pages/customer/CateringPage';
import CartPage from '@pages/customer/CartPage';
import CheckoutPage from '@pages/customer/CheckoutPage';
import ProfilePage from '@pages/customer/ProfilePage';

// Admin Pages
import AdminDashboard from '@pages/admin/AdminDashboard';
import MenuManagement from '@pages/admin/MenuManagement';
import OrderManagement from '@pages/admin/OrderManagement';
import SidelinesManagement from '@pages/admin/SidelinesManagement';
import CategoryManagement from '@pages/admin/CategoryManagement';
import MealPlanManagement from '@pages/admin/MealPlanManagement';

function App() {
  const { checkAuth, isLoading } = useAuthStore();

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
            <Route path="menu/meals" element={<MealsSubscriptionPage />} />
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
              <Route path="admin/categories" element={<CategoryManagement />} />
              <Route path="admin/meal-plans" element={<MealPlanManagement />} />
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
