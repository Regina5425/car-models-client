import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';

import '../src/styles/global.css';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-[24px]'>Open up App.tsx to start working on your app!</Text>
      <Link href={'/login'}>Go to login</Link>
      <StatusBar style='auto' />
    </View>
  );
}
