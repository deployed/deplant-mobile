import React from 'react';
import {View, Text} from 'react-native';

import tw from '@core/styles/tailwind';

import type {FlowerItemProps} from './types';

const FlowerItem: React.FC<FlowerItemProps> = ({
  flower: {name, measurements, waterings, plantDate, room, sill},
}) => {
  return (
    <View
      style={tw`p-2 bg-very-dark-green flex flex-row rounded-10px px-8px py-5px`}>
      <View style={tw`w-64px h-64px bg-green rounded-8px mr-10px`} />
      <View style={tw`flex-1`}>
        <Text style={tw`text-light font-extrabold text-lg`}>{name}</Text>
        <Text style={tw`text-light`}>
          Room: {room}, sill: {sill}
        </Text>
      </View>
    </View>
  );
};

export default FlowerItem;
