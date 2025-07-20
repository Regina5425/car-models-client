import { useEffect } from 'react';

import { Stack } from 'expo-router';

import { Appearance, View } from 'react-native';

import '../../global.css';
import { useColorScheme } from 'nativewind';

import { useThemeStore } from '@/store';

// здесь например можно подключить шрифты и все что нужно до загрузки приложения
export default function RootLayout() {
  const hydrateTheme = useThemeStore((state) => state.hydrateTheme);
  const getEffectiveTheme = useThemeStore((state) => state.getEffectiveTheme);
  const { setColorScheme } = useColorScheme();
  const usedTheme = getEffectiveTheme();

  useEffect(() => {
    hydrateTheme();

    // Слушатель изменений системной темы
    const listener = Appearance.addChangeListener(hydrateTheme);

    return () => listener.remove();
  }, [hydrateTheme, setColorScheme, getEffectiveTheme]);

  return (
    <View className={usedTheme === 'dark' ? 'dark flex-1' : 'flex-1'}>
      <Stack />
    </View>
  );
}
