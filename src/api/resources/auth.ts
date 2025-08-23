import { apiClient } from '../apiClient';
import { AUTH_SIGN_UP_URL } from '../apiUrls';

import { IBaseResponse, IUser } from '@/types';

export interface AuthRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface AuthResponse {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

//TODO: написать остальные запросы
export const auth = {
  signup: (data: AuthRequest): Promise<IBaseResponse<AuthResponse>> => apiClient.post(AUTH_SIGN_UP_URL, data),
};
