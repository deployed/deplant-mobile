import React from 'react'
import { View, Button } from 'react-native'

const PlantQrCodeGenerator = () => {
  const handleOnPress = () => {
    console.log('generating QR code...')
  }
  return (
    <View><Button title={`Generate & share QR code`} onPress={handleOnPress}/></View>
  )
}

export default PlantQrCodeGenerator