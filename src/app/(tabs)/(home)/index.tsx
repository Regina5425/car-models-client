import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// import { Padding, Radius } from '@/const';
import { useTheme } from '@/providers/ThemeProvider';

export default function HomeScreen() {
  const { theme } = useTheme();

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
  // button: {
  //   padding: Padding.p16,
  //   borderRadius: Radius.r20,
  //   width: 190,
  //   height: 58,
  // },
  // signButton: {
  //   padding: Padding.p16,
  //   borderRadius: Radius.r8,
  //   width: 330,
  //   height: 50,
  // },
});
