import tw from '@core/styles/tailwind';
import React from 'react'
import { Pressable, Text } from 'react-native'
import QRCodeIcon from '../../../../assets/qr_code.svg';
interface PlantQrCodeGeneratorProps {
  children: string;
}
const PlantQrCodeGenerator = ({ children }: PlantQrCodeGeneratorProps) => {
  const handleOnPress = () => {
    console.log('generating QR code...')
  }
  return (
    <Pressable style={tw`
    flex-row items-center justify-center
    my-2
    `}onPress={handleOnPress}>
      <QRCodeIcon />
      <Text style={tw`ml-2 text-xl text-very-dark-green underline`}>
        {children}
      </Text>
    </Pressable>
  )
}

export default PlantQrCodeGenerator