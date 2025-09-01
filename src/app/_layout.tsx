import { useCallback, useEffect, useState } from 'react';

import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CustomToast } from '@/components/ui';
import { QueryProvider, ThemeProvider } from '@/providers';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Здесь можно загружать шрифты, делать API запросы и т.д.
      } catch (err) {
        console.warn(err);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryProvider>
      <ThemeProvider>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='+not-found' options={{ headerShown: false }} />
          </Stack>
          <StatusBar style='auto' />
          <CustomToast />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
