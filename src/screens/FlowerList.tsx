import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlowerList = () => {
  return (
    <View style={styles.container}>
      <Text>FlowerList</Text>
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

export default FlowerList;
