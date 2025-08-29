import { getAccessToken } from '../helpers/auth.helper';
import { handleErrors } from '../helpers/error.helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { AS_DEVICE_FINGERPRINT } from '@/const';
import { generateDeviceFingerprint } from '@/utils';

const SERVER_URL = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.0.101:4200';
const API_URL = `${SERVER_URL}/api`;

export const apiClient = axios.create({
  baseURL: API_URL,
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

apiClient.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
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
  async (error: AxiosError) => {
    return handleErrors(error);
  },
);
