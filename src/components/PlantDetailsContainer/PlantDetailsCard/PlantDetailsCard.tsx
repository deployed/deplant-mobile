import React from 'react';
import {View, Text, Image} from 'react-native';
import WaterIntervalIcon from '../../../../assets/water-interval-icon.svg';

import tw from '@core/styles/tailwind';

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
    <View style={tw`bg-white w-5/6 p-4 shadow-lg shadow-white rounded-lg`}>
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
            <Text style={tw`text-very-dark-green text-lg font-semibold`}>
              Połozenie
            </Text>
            <Text style={tw`text-very-dark-green text-xs`}>{location}</Text>
          </View>
          <View>
            <Text style={tw`text-very-dark-green text-lg font-semibold`}>
              Stan
            </Text>
            <Text style={tw`text-very-dark-green text-xs`}>{plantState}</Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <View>
          <Image
            source={{
              uri: 'water-interval-icon.svg',
              width: 35,
              height: 32,
            }}
          />
          <Text style={tw`text-very-dark-green text-xs`}>
            Co{' '}
            <Text style={tw`text-very-dark-green text-xl font-semibold`}>
              {waterInterval}
            </Text>{' '}
            dni
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'water-interval-icon.svg',
              width: 35,
              height: 32,
            }}
          />
          <Text style={tw`text-very-dark-green text-xl font-semibold`}>
            {sunDemand}
          </Text>
          <Text style={tw`text-very-dark-green text-xs`}>
            (średnie nasłonecznienie)
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={tw`text-very-dark-green text-lg font-semibold`}>
            Gatunek
          </Text>
          <Text style={tw`text-very-dark-green text-xs ml-1`}>{species}</Text>
        </View>
        <View>
          <Text style={tw`text-very-dark-green text-lg font-semibold`}>
            Data urodzin
          </Text>
          <Text style={tw`text-very-dark-green text-xs ml-1`}>{birthday}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantDetailsCard;
