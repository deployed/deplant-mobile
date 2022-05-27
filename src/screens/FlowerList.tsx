import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {useQuery} from 'react-query';

import api from '@core/api';
import {Flower} from '@core/api/types';
import FlowerItem from '@core/components/FlowerItem/FlowerItem';
import tw from '@core/styles/tailwind';

const FlowerList = () => {
  const {
    isLoading,
    data: flowers,
    isError,
    error,
  } = useQuery('flowers', () => api.getFlowers());

  if (isError) {
    console.log(error);
  }

  const renderItem = ({item}: {item: Flower}) => {
    return <FlowerItem flower={item} />;
  };

  return (
    <View style={styles.container}>
      {isLoading || !flowers ? (
        <Text>Loading ...</Text>
      ) : (
        <FlatList
          data={flowers}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={tw`h-10px`} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
});

export default FlowerList;
