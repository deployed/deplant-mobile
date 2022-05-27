import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeHeader from '@core/components/HomeHeader';
import AddFlower from '@core/screens/AddFlower';
import FlowerList from '@core/screens/FlowerList';
import FlowerScanner from '@core/screens/FlowerScanner';

import type {HomeTabsParamList} from './types';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{header: HomeHeader}}
      initialRouteName="FlowerList">
      <Tab.Screen name="FlowerList" component={FlowerList} />
      <Tab.Screen name="FlowerScanner" component={FlowerScanner} />
      <Tab.Screen name="AddFlower" component={AddFlower} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
