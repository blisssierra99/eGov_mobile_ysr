/**
 * Main App Navigator with bottom tab navigation
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, StyleSheet} from 'react-native';
import {ROUTES} from '../constants/routes';
import {COLORS} from '../constants/colors';
import {FONT_SIZES} from '../constants/typography';
import HomeScreen from '../screens/HomeScreen';
import SchemeListScreen from '../screens/SchemeListScreen';
import SchemeDetailsScreen from '../screens/SchemeDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServicesScreen from '../screens/ServicesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTES.SCHEME_LIST} component={SchemeListScreen} />
    <Stack.Screen name={ROUTES.SCHEME_DETAILS} component={SchemeDetailsScreen} />
  </Stack.Navigator>
);

const ServicesStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTES.SERVICES} component={ServicesScreen} />
    <Stack.Screen name={ROUTES.SCHEME_DETAILS} component={SchemeDetailsScreen} />
  </Stack.Navigator>
);

const TAB_ICONS = {
  Home: '🏠',
  Services: '⚙️',
  Profile: '👤',
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>
            {TAB_ICONS[route.name]}
          </Text>
        ),
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Services"
        component={ServicesStack}
        options={{title: 'Services'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
    paddingBottom: 8,
    paddingTop: 8,
    height: 60,
  },
  tabLabel: {
    fontSize: FONT_SIZES.xs,
    fontWeight: '500',
  },
  tabIcon: {
    fontSize: 22,
    opacity: 0.5,
  },
  tabIconActive: {
    opacity: 1,
  },
});

export default MainNavigator;
