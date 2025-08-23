import { apiClient } from '../apiClient';
import { MODEL_URL } from '../apiUrls';

import { IBaseResponse, IModel } from '@/types';

export type IModelsResponse = IModel[];

//TODO: написать остальные запросы
export const model = {
  getAll: (): Promise<IBaseResponse<IModelsResponse>> => apiClient.get(MODEL_URL),
};
