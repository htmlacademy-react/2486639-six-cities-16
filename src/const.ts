const Setting = { //! временно
  PLACE_CARD_COUNT: 5,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  //DEFAULT_CITY: CITIES[0] //! определить по другому
  DEFAULT_CITY: 'Paris'
};

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

export { Setting, AppRoute, AuthorizationStatus };
