import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import ProgramScreen from '../screens/ProgramScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontFamily: 'Poppins-Bold', fontSize: 18 },
        cardStyle: { backgroundColor: '#0F0F0F' },
      }}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Program"
        component={ProgramScreen}
        options={{ headerTitle: '📋 Program Workout' }}
      />
    </Stack.Navigator>
  );
}