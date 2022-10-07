import React from 'react';
import {View, Text} from 'react-native';

import tw from '@core/styles/tailwind';

interface InfoDisplayProps {
  title: string;
  children: string | number;
  wrapperStyles?: string;
}

const InfoDisplay = ({
  title,
  children,
  wrapperStyles = '',
}: InfoDisplayProps) => {
  return (
    <View style={tw`${wrapperStyles}`}>
      <Text style={tw`text-xl font-semibold`}>{title}</Text>
      <Text style={tw`text-xs ml-1`}>{children}</Text>
    </View>
  );
};

export default InfoDisplay;
