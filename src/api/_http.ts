import axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

Axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.params = config.params || {};
    config.params['api_key'] = 'db5f70f686694419f82e571b0d9fcb27';
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

export { Axios };
