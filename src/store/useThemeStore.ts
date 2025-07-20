import { Appearance } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import { STORAGE_KEY } from '@/const';
import { Theme } from '@/types';

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  hydrateTheme: () => Promise<void>;
  getEffectiveTheme: () => 'light' | 'dark';
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'system',

  setTheme: (theme) => {
    set({ theme });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ theme })).catch((e) =>
      console.error('Ошибка сохранения темы', e),
    );
  },

  toggleTheme: () => {
    const { theme } = get();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    get().setTheme(newTheme);
  },

  hydrateTheme: async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { theme } = JSON.parse(stored);
        set({ theme });
      } else {
        set({ theme: 'system' });
      }
    } catch (e) {
      console.error('Ошибка загрузки темы', e);
    }
  },

  getEffectiveTheme: () => {
    const { theme } = get();
    if (theme === 'system') {
      return Appearance.getColorScheme() ?? 'light';
    }
    return theme;
  },
}));
