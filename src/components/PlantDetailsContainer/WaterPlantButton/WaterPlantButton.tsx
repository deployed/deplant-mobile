import React from 'react'
import { View, Button } from 'react-native'

const WaterPlantButton = () => {
    const handleOnPress = () => {
      console.log('generating QR code...')
    }
    return (
      <View><Button title={`Water`} onPress={handleOnPress}/></View>
    )

}

export default WaterPlantButton