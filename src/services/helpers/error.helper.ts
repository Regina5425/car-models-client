import { apiClient } from '../api';
import { deleteTokensStorage, getNewTokens } from './auth.helper';
import { AxiosError, AxiosRequestConfig } from 'axios';

import { toast } from '@/utils';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

// TODO: проверить как работает
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message ? (typeof error.response.data.message === 'object' ? message[0] : message) : error.message;
};

// TODO: проверить как работает
export const handleErrors = (error: AxiosError) => {
  if (!error.response) {
    return handleNetworkError(error);
  }

  const { data, status } = error.response;

  switch (status) {
    case 400:
      return handleBadRequestError(error, data);
    case 401:
      return handleUnauthorizedError(error, data);
    case 403:
      return handleForbidenError(error, data);
    case 404:
      return handleNotFoundError(error, data);
    case 429:
      return handleRateLimitError(error, data);
    case 500:
      return handleServerError(error, data);
    default:
      return handleServerError(error, data);
  }
};

const handleBadRequestError = (error: AxiosError, data: any) => {
  console.error('Error 400:', { data, error });
  toast.error('Ошибка', data.message);
  return Promise.reject(error);
};

const handleUnauthorizedError = async (error: AxiosError, data: any) => {
  console.error('Error 401:', { data, error });
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (originalRequest && !originalRequest._retry) {
    originalRequest._retry = true;

    await getNewTokens();
    return apiClient.request(originalRequest);
  } else {
    await deleteTokensStorage();
    toast.error('Ошибка', 'Сессия истекла. Пожалуйста, войдите снова');

    return Promise.reject({
      type: 'auth',
      message: 'Сессия истекла. Пожалуйста, войдите снова.',
      code: 401,
      data,
    });
  }
};

export const handleForbidenError = (error: AxiosError, data: any) => {
  console.error('Error 403:', { data, error });
  toast.error('Недостаточно прав', data.message);

  return Promise.reject({
    type: 'permission',
    message: data.message,
    code: 403,
    data,
  });
};

export const handleNotFoundError = (error: AxiosError, data: any) => {
  console.error('Error 404:', { data, error });
  toast.error('Ошибка', data.message);

  return Promise.reject({
    type: 'not_found',
    message: data.message,
    code: 404,
    data,
  });
};

const handleRateLimitError = (error: AxiosError, data: any) => {
  console.error('Error 429:', { data, error });
  toast.error('Ошибка', 'Превышен лимит запросов. Попробуйте позже');

  return Promise.reject({
    type: 'rate_limit',
    message: 'Превышен лимит запросов. Попробуйте позже',
    code: 429,
    data,
  });
};

const handleServerError = (error: AxiosError, data: any) => {
  console.error('Error 500:', { data, error });
  toast.error('Ошибка сервера. Попробуйте позже.');

  return Promise.reject({
    type: 'server',
    message: 'Ошибка сервера. Попробуйте позже.',
    code: error.response?.status,
    data,
  });
};

export const handleNetworkError = (error: AxiosError) => {
  console.error('Network error:', error);
  toast.error('Ошибка', 'Проверьте подключение к интернету');

  return Promise.reject(error);
};
