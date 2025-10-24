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
