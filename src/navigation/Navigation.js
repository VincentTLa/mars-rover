import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import InGameScreen from '../screens/InGameScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#793f06' } }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        {/* In Game Screen is for future where it would play the animation of the rover */}
        <Stack.Screen
          name="InGame"
          component={InGameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
