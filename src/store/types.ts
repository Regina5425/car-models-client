import { IUser } from '@/types';

export interface AuthInitialState {
  user: IUser | null;
}

export interface AuthActions {
  setUser: (user: IUser | null) => void;
}

export interface IAuthState extends AuthInitialState, AuthActions {}
