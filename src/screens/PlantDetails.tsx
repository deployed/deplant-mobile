
import React from 'react';
import PlantDetailsContainer from '@core/components/PlantDetailsContainer';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button, Text } from 'react-native';

const PlantDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <>
      <Text>Plant Details with id: <>{JSON.stringify(route.params)}</></Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
      <PlantDetailsContainer />
    </>
  );
};


export default PlantDetails;
