import apiClient from '../client';
import { LoginCredentials, RegisterData, AuthResponse, User } from '@models/auth.types';

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

