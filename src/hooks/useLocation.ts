import { useState, useCallback } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const requestPermission = async (): Promise<boolean> => {
    // DOING ONLY FOR ANDROID as in iOS it asked automatically via Info.plist
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          // NEED TO MENTION IN THE ANDROID MANIFEST FILE
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'The app needs to access your location to fetch weather data.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err: any) {
        setError('Failed to request location permission');
        console.log(err.message);
        return false;
      }
    }
    return true;
  };

  const getLocation = useCallback(async () => {
    setLoading(true);
    setError(null);

    // try to fetch the permission
    const permissionGranted = await requestPermission();

    if (!permissionGranted) {
      setLoading(false);
      setError('Location permission denied');
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
        setLoading(false);
      },
      err => {
        console.error('Error getting location:', err.message);
        setError('Error getting location');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 100000 },
    );
  }, []);

  return { location, loading, error, getLocation };
};
