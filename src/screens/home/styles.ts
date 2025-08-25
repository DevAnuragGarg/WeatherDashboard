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
  listView: {
    flex: 9,
  },
  headline: {
    flex: 7,
  },
  buttonView: {
    flex: 1,
    borderTopColor: 'white',
    borderTopWidth: 1,
    justifyContent: 'center',
  },
});
