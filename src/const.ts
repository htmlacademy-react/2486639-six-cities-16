const APP_TITLE = '6 cities';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
const DEFAULT_CITY: typeof CITIES[number] = CITIES[0];

const PLACE_CARD_COUNT = 5; //! тест

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

export { APP_TITLE, CITIES, DEFAULT_CITY, PLACE_CARD_COUNT, AppRoute, AuthorizationStatus };
