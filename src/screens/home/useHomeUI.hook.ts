import { useLocation } from '../../hooks/useLocation';
import { useWeather } from '../../hooks/useWeather';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';
import { HomeScreenProps } from './props.type';
import { WeatherResponse } from '../../models/weatherResponse';
import { useCallback, useEffect } from 'react';

const CACHE_TIME = 1000 * 60 * 15;
const CACHE_KEY = 'weatherData';

export const useHomeUI = (props: HomeScreenProps) => {
  const {} = props;

  const {
    location,
    loading: locLoading,
    error: locError,
    getLocation,
  } = useLocation();

  const {
    weatherData,
    loading: weatherLoading,
    error: weatherError,
    fetchWeatherDataFromAPI,
  } = useWeather();

  const {
    storedValue: cachedData,
    saveValue,
    loadStoredValue,
    loading: cacheLoading,
  } = useAsyncStorage<WeatherResponse>(CACHE_KEY);

  // function to check if the cache is valid or not
  const isCacheValid = useCallback(() => {
    if (!cachedData) return false;
    const now = Date.now();
    return now - cachedData.time < CACHE_TIME;
  }, [cachedData]);

  const loadWeatherData = useCallback(async () => {
    // Try to load cached value first
    const cached = await loadStoredValue();

    const now = Date.now();
    const valid = cached && now - cached.time < CACHE_TIME;
    if (valid) {
      console.log('Using cached weather data');
      return;
    }

    // If no valid cache, fetch from API
    if (location) {
      const data = await fetchWeatherDataFromAPI(location.lat, location.lon);
      if (data) {
        saveValue(data);
      }
    }
  }, [fetchWeatherDataFromAPI, location, loadStoredValue, saveValue]);

  // Trigger fetching sequence
  useEffect(() => {
    // if location is not present
    if (!location) {
      getLocation();
    } else {
      loadWeatherData();
    }
  }, [location, getLocation, loadWeatherData]);

  return {
    weatherData: isCacheValid() && cachedData ? cachedData.value : weatherData,
    loading: locLoading || weatherLoading || cacheLoading,
    error: locError || weatherError,
    refreshData: loadWeatherData,
    lastUpdated: cachedData?.time ? new Date(cachedData.time) : null, // new
  };
};
