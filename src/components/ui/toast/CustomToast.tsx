import Toast, { BaseToast } from 'react-native-toast-message';

import { Radius } from '@/const';
import { useTheme } from '@/providers/ThemeProvider';
import { CustomToastType } from '@/types';

export const CustomToast = () => {
  const { theme } = useTheme();

  const getToastStyles = (type: CustomToastType) => {
    const colors = {
      success: theme.colors.success,
      error: theme.colors.error,
      info: theme.colors.info,
      warning: theme.colors.warning,
    };

    return {
      style: {
        borderLeftColor: colors[type],
        backgroundColor: theme.colors.background,
        borderRadius: Radius.sm,
        marginHorizontal: 16,
        height: 70,
      },
      contentContainerStyle: {
        paddingHorizontal: 12,
      },
      text1Style: {
        fontSize: 14,
        fontWeight: 600,
        color: colors[type],
      },
      text2Style: {
        fontSize: 12,
        color: colors[type],
      },
    };
  };

  const toastConfig = {
    success: (props: any) => (
      <BaseToast {...props} {...getToastStyles('success')} text1NumberOfLines={2} text2NumberOfLines={3} />
    ),
    error: (props: any) => (
      <BaseToast {...props} {...getToastStyles('error')} text1NumberOfLines={2} text2NumberOfLines={3} />
    ),
    info: (props: any) => (
      <BaseToast {...props} {...getToastStyles('info')} text1NumberOfLines={2} text2NumberOfLines={3} />
    ),
    warning: (props: any) => (
      <BaseToast {...props} {...getToastStyles('warning')} text1NumberOfLines={2} text2NumberOfLines={3} />
    ),
  };

  return <Toast config={toastConfig} />;
};
