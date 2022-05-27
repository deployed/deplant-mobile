import React from 'react';
// import PlantDetailsContainer from '@core/components/PlantDetailsContainer';
import SunDemandIcon from '../../assets/sun-demand-icon.svg';
import { View, Text } from 'react-native';
import tw from '@core/styles/tailwind';
import PlantDetailsContainer from '@core/components/PlantDetailsContainer';

const PlantDetails = () => {
  return (
    <PlantDetailsContainer />
//   <View style={tw`m-20`}>
//   <View style={tw`flex-row justify-center items-center`}>
//     <View>
//       <SunDemandIcon height={36} width={36} />
//     </View>
//     <View>
//       <Text style={tw`text-xl font-semibold w-50px`}>
//         75%
//       </Text>
//       <Text style={tw`text-xs`}>
//         (średnie nasłonecznienie)
//       </Text>
//     </View>
//   </View>
//  </View>
  );
};

export default PlantDetails;
