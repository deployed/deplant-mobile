import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from '@core/styles/tailwind';
import { View, Text, Pressable } from 'react-native';
import SensorsOnIcon from '../../../../assets/sensors_on.svg';
import SensorsOffIcon from '../../../../assets/sensors_off.svg';
import EditIcon from '../../../../assets/edit.svg';
import ArrowBackIcon from '../../../../assets/arrow_back.svg';

type PlantConnectionStatus = 'CONNECTED' | 'NOT_CONNECTED' | 'UNKNOWN';

interface PlantHeaderProps {
  children: string;
  connectionStatus?: PlantConnectionStatus;
}


const PlantHeader = ({ children, connectionStatus = 'NOT_CONNECTED' }: PlantHeaderProps) => {
  const { navigate } = useNavigation();
  const goBack = () => navigate('Home');
  const editPlant = () => {
    console.log('go to edit plant');
  }

  const iconOptions = {
    CONNECTED: <SensorsOnIcon />,
    NOT_CONNECTED: <SensorsOffIcon />,
    UNKNOWN: null,
  } as const;

  return (
    <View style={tw` flex flex-row text-green font-bold items-center justify-between mt-4`}>
      <Pressable onPress={goBack}><ArrowBackIcon /></Pressable>
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={tw`text-xl font-bold text-very-dark-green mr-10px`}>{children}</Text>
        {iconOptions[connectionStatus]}
      </View>
      <Pressable onPress={editPlant}><EditIcon /></Pressable>
    </View>
  )
}

export default PlantHeader