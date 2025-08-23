import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { AS_DEVICE_FINGERPRINT } from '@/const';
import { generateDeviceFingerprint } from '@/utils';

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://192.168.0.101:4200/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use(async (config) => {
  try {
    let deviceFingerprint = await AsyncStorage.getItem(AS_DEVICE_FINGERPRINT);

    if (!deviceFingerprint) {
      deviceFingerprint = await generateDeviceFingerprint();
      await AsyncStorage.setItem(AS_DEVICE_FINGERPRINT, deviceFingerprint);
    }

    config.headers['x-device-fingerprint'] = deviceFingerprint;
  } catch (err) {
    console.error('Failed to set device fingerprint header:', err);
  }

  return config;
});

apiClient.interceptors.request.use((config) => {
  if (config.data && typeof config.data === 'object') {
    config.data = JSON.stringify(config.data);
  }

  return config;
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Сервер ответил с ошибкой (4xx, 5xx)
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      console.error('Network Error:', error.message);
      console.error('Request was:', error.request);
    } else {
      // Ошибка в настройке запроса
      console.error('Request Error:', error.message);
    }

    return Promise.reject(error);
  },
);
