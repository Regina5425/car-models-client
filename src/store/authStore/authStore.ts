import { AuthInitialState, IAuthState } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { AS_AUTH_STORAGE } from '@/const';

const initialState: AuthInitialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

// TODO: доработать если необходимо
const authCreator: StateCreator<IAuthState> = (set) => ({
  ...initialState,
  setAccessToken: (accessToken) => set({ accessToken }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  setUser: (user) => set({ user }),
  // fetchUser: () => {}, // async fetch example
});

const useAuthStore = create<IAuthState>()(
  persist(authCreator, {
    name: AS_AUTH_STORAGE,
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({ accessToken: state.accessToken, refreshToken: state.refreshToken }),
  }),
);

// custom selectors
export const useAuthAccessToken = () => useAuthStore((state) => state.accessToken);
export const useAuthRefreshToken = () => useAuthStore((state) => state.refreshToken);
export const useAuthUser = () => useAuthStore((state) => state.user);
export const useSetAccessToken = () => useAuthStore.getState().setAccessToken;
export const useSetRefreshToken = () => useAuthStore.getState().setRefreshToken;
export const useSetAuthUser = () => useAuthStore.getState().setUser;
