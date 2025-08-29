import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';

import api from '../resources';
import { IAuthResponse } from '../resources/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AS_ACCESS_TOKEN, AS_REFRESH_TOKEN, AS_USER_STORAGE } from '@/const';
import { ITokens } from '@/types';

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(AS_ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokensStorage = async (data: ITokens) => {
  await setItemAsync(AS_ACCESS_TOKEN, data.accessToken);
  await setItemAsync(AS_REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = async () => {
  await deleteItemAsync(AS_ACCESS_TOKEN);
  await deleteItemAsync(AS_REFRESH_TOKEN);
};

export const getUserStorage = async () => {
  try {
    return JSON.parse((await AsyncStorage.getItem(AS_USER_STORAGE)) || '{}');
  } catch (e) {
    console.log('Error from get user from storage:', e);
    return null;
  }
};

export const saveUserStorage = async (data: IAuthResponse) => {
  await saveTokensStorage(data);
  try {
    await AsyncStorage.setItem(AS_USER_STORAGE, JSON.stringify(data.user));
  } catch (e) {
    console.error('Error set user storage: ', e);
    return;
  }
};

export const getNewTokens = async () => {
  try {
    const refreshToken = await getItemAsync(AS_REFRESH_TOKEN);

    if (refreshToken) {
      const response = await api.auth.refreshTokens({ refreshToken });

      if (response.data.accessToken) {
        await saveTokensStorage(response.data);
      }

      return response;
    }

    return null;
  } catch (e) {
    console.log('Error getting new tokens:', e);
  }
};
