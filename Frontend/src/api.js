import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const token = localStorage.getItem('access')
  ? JSON.parse(localStorage.getItem('access'))
  : null;
const refresh_token = localStorage.getItem('refresh')
  ? JSON.parse(localStorage.getItem('refresh'))
  : null;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  'Content-type': 'application/json',
  headers: {Authorization: localStorage.getItem('access') ? `Bearer $[token]` : null },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
