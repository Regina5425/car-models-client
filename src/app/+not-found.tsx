import { Link } from 'expo-router';

import { Image, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Radius } from '@/const';
import { useTheme } from '@/providers/ThemeProvider';

export default function NotFoundScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.primary }]}>404</Text>
      <Image source={require('../../assets/img/model.png')} style={styles.image} />
      <Link href={'/'} style={[styles.link, { color: theme.colors.primary, backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.linkText, { color: theme.colors.white }]}>На главную</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: Radius.sm,
  },
  image: {
    width: 300,
    height: 180,
  },
  text: {
    fontSize: 48,
    fontWeight: 600,
    marginBottom: 50,
  },
  linkText: {
    textAlign: 'center',
  },
});
