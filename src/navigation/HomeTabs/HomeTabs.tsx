import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeHeader from '@core/components/HomeHeader';
import AddFlower from '@core/screens/AddFlower';
import FlowerList from '@core/screens/FlowerList';
import PlantScanner from '@core/screens/PlantScanner';

import type {HomeTabsParamList} from './types';
import PlantDetails from '@core/screens/PlantDetails';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{header: HomeHeader}}
      initialRouteName="FlowerList">
      <Tab.Screen name="FlowerList" component={FlowerList} />
      <Tab.Screen name="PlantScanner" component={PlantScanner} />
      <Tab.Screen name="AddFlower" component={PlantDetails} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
