/**
 * Root Application Navigator
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // In a real app, this would check authentication state
  const isAuthenticated = false;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuthenticated ? (
        <Stack.Screen name={ROUTES.MAIN} component={MainNavigator} />
      ) : (
        <Stack.Screen name={ROUTES.AUTH} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
