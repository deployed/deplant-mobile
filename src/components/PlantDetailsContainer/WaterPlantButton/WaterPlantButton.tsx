import React from 'react';
import {Pressable, Text} from 'react-native';

import tw from '@core/styles/tailwind';

import WaterDropIcon from '../../../../assets/water_drop.svg';

interface WaterPlantButtonProps {
  children: string;
}
const WaterPlantButton = ({children}: WaterPlantButtonProps) => {
  const handleOnPress = () => {
    console.log('Water the plant...');
  };
  return (
    <Pressable
      style={tw`
        bg-very-dark-green flex flex-row items-center
        justify-center text-xxl font-bold h-14 rounded-[20px]
        my-5
        `}
      onPress={handleOnPress}>
      <WaterDropIcon />
      <Text style={tw`text-white`}>{children}</Text>
    </Pressable>
  );
};

export default WaterPlantButton;
