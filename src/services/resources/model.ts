import { MODEL_URL, apiClient } from '../api';

import { IBaseResponse, IModel } from '@/types';

export type IModelsResponse = IModel[];

//TODO: написать остальные запросы
export const model = {
  getAll: (): Promise<IBaseResponse<IModelsResponse>> => apiClient.get(MODEL_URL),
};
