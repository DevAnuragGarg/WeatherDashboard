import { View } from 'react-native';
import { styles } from './styles';
import { HomeScreenProps } from './props.type';
import { useHomeUI } from './useHomeUI.hook';
import { Text } from 'react-native-gesture-handler';
import { UIButton } from '../../components/button/UIButton';
import { SkeletonLoader } from '../../components/skeletonLoader/SkeletonLoader';

export const HomeScreen: React.FC<HomeScreenProps> = (
  props: HomeScreenProps,
) => {
  // get the hook
  const { weatherData, loading, error, refreshData, lastUpdated } =
    useHomeUI(props);

  // if loading show skeleton
  if (loading) {
    return (
      <View style={styles.root}>
        <SkeletonLoader />
      </View>
    );
  }

  // if error show error message
  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>
          There was error while fetching weather data: ${error}
        </Text>
        <UIButton text="RETRY" onClick={() => refreshData()} />
      </View>
    );
  }

  // if data is not available show empty state
  if (!weatherData) {
    return (
      <View style={styles.centered}>
        <Text style={styles.noData}>No weather data available</Text>
        <UIButton text="RETRY" onClick={() => refreshData()} />
      </View>
    );
  }

  // show weather data
  return (
    <View style={styles.centered}>
      <Text style={styles.city}>{weatherData?.name}</Text>
      <Text style={styles.temp}>🌡 {weatherData?.main.temp}°C</Text>
      <Text style={styles.humidity}>💧 {weatherData?.main.humidity}%</Text>
      <Text style={styles.condition}>
        ☁️ {weatherData?.weather[0].description}
      </Text>
      {lastUpdated && (
        <Text style={styles.lastUpdated}>
          Last updated: {lastUpdated.toLocaleTimeString()}
        </Text>
      )}
      <UIButton text="Refresh" onClick={() => refreshData()} />
    </View>
  );
};
