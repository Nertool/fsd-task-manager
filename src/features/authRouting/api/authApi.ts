import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://api.v2.react-learning.ru',
  withCredentials: true,
});
