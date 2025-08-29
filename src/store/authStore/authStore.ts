import { AuthInitialState, IAuthState } from '../types';
import { StateCreator, create } from 'zustand';

// import { createJSONStorage, persist } from 'zustand/middleware';

const initialState: AuthInitialState = {
  user: null,
};

// TODO: доработать если необходимо
const authCreator: StateCreator<IAuthState> = (set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
});

const useAuthStore = create<IAuthState>()(authCreator);

// пример с persist
// const useAuthStore = create<IAuthState>()(
//   persist(authCreator, {
//     name: 'auth-storage',
//     storage: createJSONStorage(() => AsyncStorage),
//     partialize: (state) => ({ accessToken: state.accessToken, refreshToken: state.refreshToken }),
//   }),
// );

// custom selectors
export const useAuthUser = () => useAuthStore((state) => state.user);
export const useSetAuthUser = () => useAuthStore.getState().setUser;
