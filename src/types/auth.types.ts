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
