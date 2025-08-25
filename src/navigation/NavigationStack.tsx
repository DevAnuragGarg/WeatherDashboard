import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/rootStackParamList.type';
import {
  HOME_SCREEN,
  // ADD_EXPENSE_SCREEN,
  // CHART_SCREEN,
} from './screenName.constant';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: 'All Expenses' }}
        />
        {/* <Stack.Screen
          name={ADD_EXPENSE_SCREEN}
          component={AddExpenseScreen}
          options={{ title: 'Add new expense' }}
        />
        <Stack.Screen
          name={CHART_SCREEN}
          component={ChartScreen}
          options={{ title: 'Expenses as charts' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
