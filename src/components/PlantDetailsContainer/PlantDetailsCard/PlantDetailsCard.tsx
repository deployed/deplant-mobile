import React from 'react';
import {View, Text, Image} from 'react-native';

import tw from '@core/styles/tailwind';

import PlantStateIconBad from '../../../../assets/plant-state-bad-icon.svg';
import SunDemandIcon from '../../../../assets/sun-demand-icon.svg';
import WaterIntervalIcon from '../../../../assets/water-interval-icon.svg';

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
  return (
    <View style={tw`bg-white m-6 p-4 shadow-lg shadow-white rounded-lg`}>
      <View style={tw`flex-row justify-between`}>
        <Image
          style={tw`rounded-lg`}
          source={{
            uri: imgUrl,
            width: 105,
            height: 105,
          }}
        />
        <View style={tw`flex-col justify-between`}>
          <View>
            <Text style={tw`text-lg font-semibold`}>Połozenie</Text>
            <Text style={tw`text-xs`}>{location}</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <View>
              <Text style={tw`text-lg font-semibold`}>Stan</Text>
              <Text style={tw`text-xs`}>{plantState}</Text>
            </View>
            <PlantStateIconBad width={25} />
          </View>
        </View>
      </View>
      <View style={tw`flex-row justify-between items-center my-5`}>
        <View style={tw`flex-row justify-between items-center mr-5`}>
          <WaterIntervalIcon height={35} />
          <Text style={tw`text-10px`}>
            Co 
          </Text>
          <Text style={tw`text-14px font-semibold`}>{` ${waterInterval} `}</Text>
          <Text style={tw`text-10px`}>
            dni
          </Text>
        </View>
        <View style={tw`flex-row justify-center items-center`}>
          <SunDemandIcon height={36} width={36} />
          <View style={tw``}>
            <Text style={tw`text-14px font-semibold`}>75%</Text>
            <Text style={tw`text-10px w-80px`}>(średnie nasłonecznienie)</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-lg font-semibold`}>Gatunek</Text>
          <Text style={tw`text-xs ml-1`}>{species}</Text>
        </View>
        <View>
          <Text style={tw`text-lg font-semibold`}>Data urodzin</Text>
          <Text style={tw`text-xs ml-1`}>{birthday}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantDetailsCard;
