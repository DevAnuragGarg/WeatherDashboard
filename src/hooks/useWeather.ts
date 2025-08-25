import { useState, useCallback } from 'react';
import { WeatherResponse } from '../models/weatherResponse';
import { fetchWeather } from '../api/weatherApi';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherDataFromAPI = useCallback(
    async (lat: number, lon: number) => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeather(lat, lon);
        setWeatherData(data);
        return data;
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { weatherData, loading, error, fetchWeatherDataFromAPI };
};
