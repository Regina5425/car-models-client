import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { AppState, useColorScheme } from 'react-native';

import { Theme, darkTheme, lightTheme } from '@/const';

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDark: false,
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    const subscription = AppState.addEventListener('change', () => {
      setIsDark(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, [colorScheme]);

  const theme = isDark ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={{ isDark, theme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
