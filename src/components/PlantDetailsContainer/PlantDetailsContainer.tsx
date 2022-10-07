import React from 'react';
import {View} from 'react-native';

import tw from '@core/styles/tailwind';

import PlantDetailsCard from './PlantDetailsCard';
import PlantHeader from './PlantHeader';
import PlantQrCodeGenerator from './PlantQrCodeGenerator';
import WaterPlantButton from './WaterPlantButton';

const PlantDetailsContainer = () => {
  return (
    <View style={tw`px-4`}>
      <PlantHeader>Kaktus Karl</PlantHeader>
      <PlantDetailsCard />
      <PlantQrCodeGenerator>Generate & share QR code</PlantQrCodeGenerator>
      <WaterPlantButton>WATER</WaterPlantButton>
    </View>
  );
};

export default PlantDetailsContainer;
