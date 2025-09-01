import { useCallback } from 'react';

import Toast from 'react-native-toast-message';

import { CustomToastType, IToastConfig } from '@/types';

export const useToast = () => {
  const showToast = useCallback(
    (
      type: CustomToastType,
      text1: string,
      text2?: string,
      options?: Omit<IToastConfig, 'type' | 'text1' | 'text2'>,
    ) => {
      Toast.show({
        type,
        text1,
        text2,
        visibilityTime: 4000,
        position: 'top',
        ...options,
      });
    },
    [],
  );

  const showSuccess = useCallback(
    (message: string, title?: string, options?: Omit<IToastConfig, 'type' | 'text1' | 'text2'>) => {
      showToast('success', title || 'Успешно', message, options);
    },
    [showToast],
  );

  const showError = useCallback(
    (message: string, title?: string, options?: Omit<IToastConfig, 'type' | 'text1' | 'text2'>) => {
      showToast('error', title || 'Ошибка', message, {
        visibilityTime: 5000,
        ...options,
      });
    },
    [showToast],
  );

  const showInfo = useCallback(
    (message: string, title?: string, options?: Omit<IToastConfig, 'type' | 'text1' | 'text2'>) => {
      showToast('info', title || 'Информация', message, options);
    },
    [showToast],
  );

  const showWarning = useCallback(
    (message: string, title?: string, options?: Omit<IToastConfig, 'type' | 'text1' | 'text2'>) => {
      showToast('warning', title || 'Внимание', message, options);
    },
    [showToast],
  );

  const hideToast = useCallback(() => {
    Toast.hide();
  }, []);

  return {
    showToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    hideToast,
  };
};
