import React from 'react';
import {Text} from 'react-native';

import tw from '@core/styles/tailwind';

import WaterDropIcon from '../../../../assets/water_drop.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface WaterPlantButtonProps {
  children: string;
}
const WaterPlantButton = ({children}: WaterPlantButtonProps) => {
  const handleOnPress = () => {
    console.log('Water the plant...');
  };
  return (
    <TouchableOpacity
      style={tw`
        bg-very-dark-green flex flex-row items-center
        justify-center text-xxl font-bold h-14 rounded-[20px]
        my-5
        `}
      onPress={handleOnPress}>
      <WaterDropIcon width={30} height={30}/>
      <Text style={tw`text-white ml-2 text-xl font-bold`}>{children}</Text>
    </TouchableOpacity>
  );
};

export default WaterPlantButton;
