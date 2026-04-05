import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WorkoutProvider } from './src/context/WorkoutContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App(): React.JSX.Element {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WorkoutProvider>
  );
}