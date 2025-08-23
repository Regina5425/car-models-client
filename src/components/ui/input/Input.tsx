import { useState } from 'react';

import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import EyeClosedIcon from '@/assets/icons/eye-closed';
import EyeOpenedIcon from '@/assets/icons/eye-opened';
import SearchIcon from '@/assets/icons/search';
import { Font, Padding, Radius } from '@/const';
import { useTheme } from '@/providers/ThemeProvider';

type Props = {
  isPassword?: boolean;
  isSearch?: boolean;
};

export const Input = ({ isPassword, isSearch, ...props }: TextInputProps & Props) => {
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.input, color: theme.colors.primary }]}
        placeholderTextColor={theme.colors.secondary}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...props}
      />
      {isPassword && (
        <Pressable onPress={() => setIsPasswordVisible((state) => !state)} style={styles.eyeIcon}>
          {isPasswordVisible ? (
            <EyeOpenedIcon color={theme.colors.secondary} />
          ) : (
            <EyeClosedIcon color={theme.colors.secondary} />
          )}
        </Pressable>
      )}
      {isSearch && (
        <View style={styles.searchIcon}>
          <SearchIcon color={theme.colors.icon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: Padding.p16,
    paddingRight: 42,
    width: 330,
    height: 50,
    borderRadius: Radius.r8,
    fontSize: Font.sm,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  searchIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
