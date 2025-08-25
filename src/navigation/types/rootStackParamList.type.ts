import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  ADD_EXPENSE_SCREEN,
  CHART_SCREEN,
} from '../screenName.constant';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  [HOME_SCREEN]: undefined;
  [ADD_EXPENSE_SCREEN]: undefined;
  [CHART_SCREEN]: undefined;
};

export type ScreenProps<Route extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, Route>;
  route: RouteProp<RootStackParamList, Route>;
};
