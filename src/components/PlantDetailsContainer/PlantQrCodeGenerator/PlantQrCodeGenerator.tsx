import React from 'react';
import {Text} from 'react-native';

import tw from '@core/styles/tailwind';

import QRCodeIcon from '../../../../assets/qr_code.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PlantQrCodeGeneratorProps {
  children: string;
}
const PlantQrCodeGenerator = ({children}: PlantQrCodeGeneratorProps) => {
  const handleOnPress = () => {
    console.log('generating QR code...');
  };
  return (
    <TouchableOpacity
      style={tw`
    flex-row items-center justify-center
    my-2 
    `}
      onPress={handleOnPress}>
      <QRCodeIcon width={40} height={40} />
      <Text style={tw`ml-2 text-xl text-very-dark-green underline`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PlantQrCodeGenerator;
