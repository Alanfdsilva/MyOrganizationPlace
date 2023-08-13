import axios from 'axios';

export const api_url = axios.create({
  baseURL: 'http://localhost:4001',
});