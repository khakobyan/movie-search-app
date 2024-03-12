import axios from 'axios';

const BASE_URL =  'https://search.imdbot.workers.dev';

const axiosApiConfig = {
  baseURL: `${BASE_URL}`,
  timeout: 5000,
};

export const api = axios.create(axiosApiConfig);
