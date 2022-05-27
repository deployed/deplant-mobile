import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const PlantDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View>
      <Text>Plant Details with id: <>{JSON.stringify(route.params)}</></Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};


export default PlantDetails;
