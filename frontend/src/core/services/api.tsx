import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { LoginParams } from '../../types';

class ApiService {
  BASE_URL = 'http://localhost:3000';

  TIMEOUT = 20000;

  INSTANCE: AxiosInstance = axios.create({
    baseURL: this.BASE_URL,
    timeout: this.TIMEOUT,
  });

  TOKEN = '';

  constructor() {
    if (!this.INSTANCE) {
      this.INSTANCE = axios.create({
        baseURL: this.BASE_URL,
        timeout: this.TIMEOUT,
      });
    }
  }

  addAuthorizationHeader = (token: string) => {
    this.INSTANCE.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };

  removeAuthorizationHeader = () => {
    this.INSTANCE.interceptors.request.use((config) => {
      config.headers.Authorization = null;
      return config;
    });
  };

  login = async (params: LoginParams) => {
    const response = await this.INSTANCE.post('login', params);
    console.log('Debug ~ file: api.tsx:42 ~ ApiService ~ login= ~ response:', response);
    const { token } = response.data;
    Cookies.set('token', token);
    this.addAuthorizationHeader(token);
    return token;
  };

  getVideos = async () => {
    const response = await this.INSTANCE.get('videos');
    return response.data;
  };

  shareVideo = async () => {
    const response = await this.INSTANCE.post('videos');
    return response.data;
  };
}

const API = new ApiService();

export default API;
