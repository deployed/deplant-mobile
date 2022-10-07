import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.title}>DePlant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
