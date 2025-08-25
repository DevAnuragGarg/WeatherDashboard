import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StoredItem } from '../models/storedItem';

export const useAsyncStorage = <T>(key: string) => {
  const [storedValue, setStoredValue] = useState<StoredItem<T> | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStoredValue = useCallback(async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem(key);
      const finalValue = value ? JSON.parse(value) : null;
      setStoredValue(finalValue);
      return finalValue;
    } catch (error) {
      console.error('Error loading stored value:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [key]);

  const saveValue = useCallback(
    async (value: T) => {
      setLoading(true);
      try {
        const item: StoredItem<T> = { value, time: Date.now() };
        await AsyncStorage.setItem(key, JSON.stringify(item));
        setStoredValue(item);
      } catch (error) {
        console.error('Error saving value:', error);
      } finally {
        setLoading(false);
      }
    },
    [key],
  );

  // Remove value
  const removeValue = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(null);
    } catch (err) {
      console.error(`Error removing key "${key}":`, err);
    }
  }, [key]);

  return { storedValue, loading, loadStoredValue, saveValue, removeValue };
};
