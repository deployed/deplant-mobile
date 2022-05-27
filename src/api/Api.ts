import axios, { AxiosInstance } from 'axios';
import { Flower } from './types';

const API_URL = 'http://192.168.1.242:3000';

class Api {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({baseURL: API_URL})
  }

  async getFlowers(): Promise<Flower[]> {
    try {
      const response = await this.axios.get<Flower[]>('/flowers');
      return response.data;
    } catch (err) {
      console.log('failed to fetch flowers', err);
      if (axios.isAxiosError(err)) {
        if (err.request) {
          console.log(err.request.data);
        }
        if (err.response) {
          console.log(err.response.data);
        }
      }
      throw new Error('FF');
    }
  }
}

export default Api;