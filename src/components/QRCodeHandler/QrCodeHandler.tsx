import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {BarCodeScanner, BarCodeEvent} from 'expo-barcode-scanner';

import tw from '@core/styles/tailwind';

const getFlowerID = (dataFromQRCode: string): string => {
  return dataFromQRCode;
};

const QRCodeHandler = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [renderBarCode, setRenderBarCode] = useState<boolean>();
  const {navigate} = useNavigation();

  useEffect(() => {
    const handlePermission = async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    handlePermission();
  }, []);

  useFocusEffect(() => {
    if (hasPermission) {
      setRenderBarCode(true);
    }
  });

  const handleBarCodeScanned = ({data}: BarCodeEvent) => {
    setRenderBarCode(false);
    const flowerID = getFlowerID(data);
    navigate('PlantDetails', {id: flowerID});
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={tw`border-2 flex-1 justify-center items-center`}>
      <Text>Scan the flower</Text>
      {renderBarCode && (
        <BarCodeScanner
          style={tw`border-2 border-green w-60 h-4/6 m-4`}
          onBarCodeScanned={handleBarCodeScanned}
        />
      )}
    </View>
  );
};

export default QRCodeHandler;
