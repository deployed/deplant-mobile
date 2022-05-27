import tw from '@core/styles/tailwind';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button } from 'react-native'

interface PlantHeaderProps {
  name: string;
}

const PlantHeader = ({ name }: PlantHeaderProps) => {
  const { navigate } = useNavigation();
  return (
    <View style={tw`border-2 flex flex-col text-green font-bold`}>
      <Button title="Go back" onPress={() => navigate('Home')} />
      <Text style={tw`text-lg text-very-dark-green`}>{name}</Text>
    </View>
  )
}

export default PlantHeader