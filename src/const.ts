import { OfferId } from './types/offer';

const APP_TITLE = '6 cities';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
const DEFAULT_CITY: typeof CITIES[number] = CITIES[0];

const OFFER_PATH = '/offer/';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = `${OFFER_PATH}:id` //! может как то по другому константу применить
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum PlacesSortingTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

const ONE_STAR_WIDTH = 20;
const DEFAULT_ACTIVE_OFFER_ID: OfferId = '';
const REVIEWS_SHOW_COUNT = 10;
const REVIEW_RATING_STARS_COUNT = 5;
const Rating = {
  STAR_VALUES: Array.from({ length: REVIEW_RATING_STARS_COUNT }, (_, index) => (REVIEW_RATING_STARS_COUNT - index)),
  DEFAULT: 0,
  MIN: 0
};
const REVIEW_TEXT_MIN_LENGTH = 50;

export {
  APP_TITLE,
  CITIES,
  DEFAULT_CITY,
  OFFER_PATH,
  AppRoute,
  AuthorizationStatus,
  PlacesSortingTypes,
  ONE_STAR_WIDTH,
  DEFAULT_ACTIVE_OFFER_ID,
  REVIEWS_SHOW_COUNT,
  Rating,
  REVIEW_TEXT_MIN_LENGTH
};
