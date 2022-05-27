export enum SunDemand {
  Shadow = 'SHADOW',
  LightShadow = 'LIGHT_SHADOW',
  PartialSun = 'PARTIAL_SUN',
  FullSun = 'FULL_SUN',
}

export interface Flower {
  id: string;
  name: string;
  specie: string;
  plantDate: Date;
  wateringIntervalInDays: number;
  sunDemand: SunDemand;
  room: number;
  sill: number;
  sensor: Sensor;
  waterings: Watering[];
  measurements: Measurement[];
}

export interface Watering {
  id: number;
  time: Date;
}

export interface Sensor {
  id: number;
  macAddress: string;
}

export interface Measurement {
  id: number;
  time: Date;
  temperature: number;
  humidity: number;
}
