const Setting = { //! временно
  PLACE_CARD_COUNT: 5
};

enum AppRoute {
  Root = '/',
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
