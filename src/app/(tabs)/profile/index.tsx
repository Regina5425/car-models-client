import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/providers/ThemeProvider';

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.primary }}>Профиль</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
