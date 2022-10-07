import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddFlower = () => {
  return (
    <View style={styles.container}>
      <Text>AddFlower</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddFlower;
