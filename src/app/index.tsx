import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Appearance, Pressable, Text, View } from 'react-native';

import { useThemeStore } from '@/store/useThemeStore';

export default function App() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const getEffectiveTheme = () => {
    if (theme === 'system') {
      return `system (${Appearance.getColorScheme()})`;
    }
    return theme;
  };

  return (
    <View className='flex-1 items-center justify-center bg-white dark:bg-black'>
      <Text className='text-[24px] text-accent-pink dark:text-accent-pink-dark'>
        Open up App.tsx to start working on your app!
      </Text>
      <Text className='text-primary dark:text-primary-dark'>{getEffectiveTheme()}</Text>
      <Link className='text-accent-yellow dark:text-accent-yellow-dark' href={'/login'}>
        Go to login
      </Link>

      <Pressable onPress={() => setTheme('light')} className='bg-blue-500 p-2 m-1'>
        <Text className='text-white'>Light Theme</Text>
      </Pressable>

      <Pressable onPress={() => setTheme('dark')} className='bg-blue-500 p-2 m-1'>
        <Text className='text-white'>Dark Theme</Text>
      </Pressable>

      <Pressable onPress={() => setTheme('system')} className='bg-blue-500 p-2 m-1'>
        <Text className='text-white'>System Theme</Text>
      </Pressable>

      <Pressable onPress={toggleTheme} className='bg-error dark:bg-success-dark p-2 m-1'>
        <Text className='text-white'>Toggle Theme</Text>
      </Pressable>

      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}
