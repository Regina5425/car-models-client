import { Tabs } from 'expo-router';

import { Platform } from 'react-native';

import { CartIcon, FavouritesIcon, HomeIcon, UserIcon } from '@/assets/icons';
import { useTheme } from '@/providers/ThemeProvider';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accent,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 7,
          marginBottom: 5,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: theme.colors.tabbar,
          },
          android: {
            backgroundColor: theme.colors.tabbar,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Избранное',
          tabBarIcon: ({ color }) => <FavouritesIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='orders'
        options={{
          title: 'Заказы',
          tabBarIcon: ({ color }) => <CartIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'Профиль',
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
