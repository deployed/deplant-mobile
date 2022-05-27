import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';

import tw from '@core/styles/tailwind';

const QRCodeHandler = () => {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const handlePermission = async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      console.log(`Status: ${status}`);
      setHasPermission(status === 'granted');
    };
    handlePermission();
  }, []);

  const handleBarCodeScanned = ({type, data}: {type: string; data: string}) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`,
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={tw`border-2 border-rose flex-1 justify-center items-center`}>
      <Text>Scan the flower</Text>
      <BarCodeScanner style={tw`border-2 border-green w-60 h-4/6 m-4`} onBarCodeScanned={handleBarCodeScanned}/>
      <>{scanned && <Text>Plant Scanned</Text>}</>
    </View>
  );
};

export default QRCodeHandler;
