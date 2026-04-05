import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { WorkoutProvider } from './src/context/WorkoutContext';

export default function App(): React.JSX.Element {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </WorkoutProvider>
  );
}