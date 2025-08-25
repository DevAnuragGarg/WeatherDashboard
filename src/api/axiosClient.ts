import axios from 'axios';

const API_KEY = '4d80f0ae7b9d9c132d7e1a218030e3ae';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric', // Use metric units for temperature
    timeout: 30000, // 30s timeout
  },
});

// Add interceptors
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  },
);
