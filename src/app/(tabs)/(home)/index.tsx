import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/providers/ThemeProvider';

export default function HomeScreen() {
  const { theme } = useTheme();

  // const { data, isLoading } = useQuery({
  //   queryKey: ['model'],
  //   queryFn: async () => {
  //     return await api.model.getAll();
  //   },
  // });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.primary }}>Главная страница</Text>
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
