import { JSX, ReactNode } from 'react';

import { ActivityIndicator, Pressable, PressableProps, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Font } from '@/const';
import { useTheme } from '@/providers/ThemeProvider';

type Props = {
  children: ReactNode;
  onPress: () => void;
  icon?: JSX.Element;
  isLoading?: boolean;
  style?: ViewStyle;
};

export const Button = ({ children, onPress, icon, isLoading, style, ...props }: PressableProps & Props) => {
  const { theme } = useTheme();

  return (
    <Pressable {...props} onPress={onPress}>
      <View style={[style, { backgroundColor: theme.colors.accent }]}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={theme.colors.white} />
        ) : (
          <View style={styles.flex}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text style={[styles.text, { color: theme.colors.white }]}>{children}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    fontSize: Font.sm,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
