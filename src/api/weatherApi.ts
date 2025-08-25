import { axiosClient } from './axiosClient';
import { WeatherResponse } from '../models/weatherResponse';

export const fetchWeather = async (lat: number, lon: number) => {
  const res = await axiosClient.get<WeatherResponse>('/weather', {
    params: { lat, lon },
  });
  return res.data;
};
