import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../utils/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    padding: 16,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    padding: 24,
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noData: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonView: {
    flex: 1,
    borderTopColor: 'white',
    borderTopWidth: 1,
    justifyContent: 'center',
  },
  city: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  temp: {
    fontSize: 24,
    marginBottom: 12,
    color: 'white',
  },
  humidity: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  condition: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  lastUpdated: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
});
