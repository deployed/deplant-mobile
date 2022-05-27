import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTabs from '@core/navigation/HomeTabs';
import PlantDetails from '@core/screens/PlantDetails';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="PlantDetails" component={PlantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
