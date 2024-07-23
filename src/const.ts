const APP_TITLE = '6 cities';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
const DEFAULT_CITY: typeof CITIES[number] = CITIES[0];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = 'offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN' //! нужен ли...
}

enum PlacesSortingTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export { APP_TITLE, CITIES, DEFAULT_CITY, AppRoute, AuthorizationStatus, PlacesSortingTypes };
