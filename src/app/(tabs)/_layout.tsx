import { Tabs } from 'expo-router';

import { Platform } from 'react-native';

import { CartIcon, FavouritesIcon, HomeIcon, UserIcon } from '@/assets/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF8368',
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
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
