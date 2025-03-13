import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ApiCallScreen,
  DummyScreen,
  PokemonDetailScreen,
  InfiniteQueryScreen,
} from '../screens';
import {RootStackParamList, StackScreens} from './types';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  const commonScreenProps = {
    options: {
      headerShown: false,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          {...commonScreenProps}
          name={StackScreens.DummyScreen}
          component={DummyScreen}
        />
        <Stack.Screen
          {...commonScreenProps}
          name={StackScreens.ApiCallScreen}
          component={ApiCallScreen}
        />
        <Stack.Screen
          {...commonScreenProps}
          name={StackScreens.PokemonDetailScreen}
          component={PokemonDetailScreen}
        />
        <Stack.Screen
          {...commonScreenProps}
          name={StackScreens.InfiniteQueryScreen}
          component={InfiniteQueryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
