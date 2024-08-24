import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { APIService } from '../const';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: APIService.URL,
    timeout: APIService.TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
