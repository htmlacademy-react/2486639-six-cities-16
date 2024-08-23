import { City } from './city';
import { Location } from './location';
import { User } from './user';

export type OfferId = string | null;

export type BaseOffer = {
  id: OfferId;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offer = BaseOffer & { previewImage: string };

export type DetailOffer = BaseOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type CityOffers = { cityName: string; offers: Offer[] };
