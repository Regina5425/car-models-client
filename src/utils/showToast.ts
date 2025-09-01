import Toast from 'react-native-toast-message';

import { CustomToastType, IToastConfig } from '@/types';

export const showToast = (
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
};

export const toast = {
  success: (text1: string, text2?: string, options?: any) => showToast('success', text1, text2, options),

  error: (text1: string, text2?: string, options?: any) =>
    showToast('error', text1, text2, { visibilityTime: 5000, ...options }),

  hide: () => Toast.hide(),
};
