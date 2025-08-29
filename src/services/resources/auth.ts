import { AUTH_LOGOUT_URL, AUTH_REFRESH_URL, AUTH_SIGN_IN_URL, AUTH_SIGN_UP_URL, apiClient } from '../api';

import { IBaseResponse, ITokens, IUser } from '@/types';

export interface AuthRequest {
  email: string;
  password: string;
}

export interface ISignUpRequest extends AuthRequest {
  name: string;
  phone: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser | null;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export const auth = {
  signup: (data: ISignUpRequest): Promise<IBaseResponse<IAuthResponse>> => apiClient.post(AUTH_SIGN_UP_URL, data),
  signin: (data: AuthRequest): Promise<IBaseResponse<IAuthResponse>> => apiClient.post(AUTH_SIGN_IN_URL, data),
  logout: (): Promise<boolean> => apiClient.delete(AUTH_LOGOUT_URL),
  // TODO: проверить
  refreshTokens: (data: IRefreshTokenRequest): Promise<IBaseResponse<ITokens>> =>
    apiClient.post(AUTH_REFRESH_URL, data),
};
