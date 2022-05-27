import React from 'react';
import {View, Text} from 'react-native';
import tw from '@core/styles/tailwind';

const PlantScanner = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`bg-dark-green`}>PlantScanner</Text>
    </View>
  );
};


export default PlantScanner;
