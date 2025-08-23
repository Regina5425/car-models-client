import { IUser } from '@/types';

export interface AuthInitialState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthActions {
  setAccessToken: (token: string | null) => void;
  setRefreshToken: (token: string | null) => void;
  setUser: (user: IUser | null) => void;
  fetchUser?: () => Promise<void>;
}

export interface IAuthState extends AuthInitialState, AuthActions {}
