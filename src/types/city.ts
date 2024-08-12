import { Location } from './location';
import { CITIES_NAMES } from '../const';

export type CityName = typeof CITIES_NAMES[number];

export type City = {
  name: CityName;
  location: Location;
};
