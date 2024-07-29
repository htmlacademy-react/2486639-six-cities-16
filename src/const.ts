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

const DEFAULT_ACTIVE_OFFER_ID: string = '';

export {
  APP_TITLE,
  CITIES,
  DEFAULT_CITY,
  OFFER_PATH,
  AppRoute,
  AuthorizationStatus,
  PlacesSortingTypes,
  ONE_STAR_WIDTH,
  DEFAULT_ACTIVE_OFFER_ID
};
