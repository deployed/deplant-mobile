import React from 'react';
import {View, Text, Image} from 'react-native';

import tw from '@core/styles/tailwind';

import PlantStateIconBad from '../../../../assets/plant-state-bad-icon.svg';
import SunDemandIcon from '../../../../assets/sun-demand-icon.svg';
import WaterIntervalIcon from '../../../../assets/water-interval-icon.svg';
import InfoDisplay from './InfoDisplay';


interface PlantDetailsCardProps {
  imgUrl: string;
  location: string;
  plantState: string;
  waterInterval: string;
  sunDemand: string;
  species: string;
  birthday: string;
}

const defaultUrl =
  'https://a.allegroimg.com/s128/11a3f5/b709b38e467aa6eac709a9522c37/Elektroniczny-Cactus-Toy-Shake-z-piosenka-i-Wiek-dziecka-brak-informacji';

const PlantDetailsCard = ({
  imgUrl = defaultUrl,
  location = 'Pokoj 1, parapet 2',
  plantState = 'Podlej mnie!',
  species = 'Kaktus pospolity',
  birthday = '18.02.2022',
  sunDemand = '75%',
  waterInterval = '5',
}: Partial<PlantDetailsCardProps>) => {
  const imgSource = {
    uri: imgUrl,
    width: 140,
    height: 140,
  }
  return (
    <View style={tw`bg-white my-6 p-4 shadow-lg shadow-white rounded-lg`}>
      <View style={tw`flex-row justify-start`}>
        <Image
          style={tw`rounded-lg mr-20px`}
          source={imgSource}
        />
        <View style={tw`flex-col justify-start`}>
          <InfoDisplay title="Połozenie" wrapperStyles='mb-20px'>{location}</InfoDisplay>
          <View style={tw`flex-row justify-between items-center`}>
            <InfoDisplay title="Stan">{plantState}</InfoDisplay>
            <PlantStateIconBad width={25} />
          </View>
        </View>
      </View>
      <View style={tw`flex-row justify-center items-center my-5`}>
        <View style={tw`flex-row justify-between items-center`}>
          <WaterIntervalIcon height={35} />
          <Text style={tw`text-10px`}>
            Co 
          </Text>
          <Text style={tw`text-14px font-semibold`}>{` ${waterInterval} `}</Text>
          <Text style={tw`text-10px w-90px`}>
            dni
          </Text>
        </View>
        <View style={tw`flex-row justify-center items-center`}>
          <SunDemandIcon height={36} width={36} />
          <View style={tw`ml-1`}>
            <Text style={tw`text-14px font-semibold`}>{sunDemand}</Text>
            <Text style={tw`text-10px w-90px`}>(średnie nasłonecznienie)</Text>
          </View>
        </View>
      </View>
      <View>
        <InfoDisplay wrapperStyles="mb-2" title="Gatunek">{species}</InfoDisplay>
        <InfoDisplay title="Data urodzin">{birthday}</InfoDisplay>
      </View>
    </View>
  );
};





export default PlantDetailsCard;
