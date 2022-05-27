import React from 'react';
import { View } from "react-native";
import PlantDetailsCard from './PlantDetailsCard';
import PlantHeader from './PlantHeader';
import PlantQrCodeGenerator from './PlantQrCodeGenerator';
import WaterPlantButton from './WaterPlantButton';

const PlantDetailsContainer = () => {
    return <View>
        <PlantHeader name="Kaktus Carl" />
        <PlantDetailsCard />
        <PlantQrCodeGenerator />
        <WaterPlantButton />
    </View>
}

export default PlantDetailsContainer;