import { CityName } from './types';

const APP_TITLE = '6 cities';

const APIService = {
  URL: 'https://16.design.htmlacademy.pro/six-cities',
  TIMEOUT: 5000
} as const;

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
const DEFAULT_CITY_NAME: CityName = CITIES_NAMES[0];

const OFFER_PATH = '/offer/';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = `${OFFER_PATH}:id`
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum OfferSortigType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

const DEFALUT_OFFER_SORTING_TYPE = OfferSortigType.Popular;

enum ClassNamePrefix {
  Offer = 'offer',
  PlaceCard = 'place-card',
  Reviews = 'reviews',
  Cities = 'cities'
}

const BookmarkButtonIconSize = {
  SMALL: { width: 18, height: 19 },
  BIG: { width: 31, height: 33 },
} as const;

enum OfferFeatureType {
  Entire = 'entire',
  Bedrooms = 'bedrooms',
  Adults = 'adults'
}

const RATING_STAR_WIDTH = 20;

const OfferComponentsCount = {
  IMAGES: 6,
  NEAR_OFFERS: 3,
  REVIEWS: 10
};

const ReviewRating = {
  STARS_COUNT: 5,
  DEFAULT: 0,
  MIN: 1
} as const;
const ReviewTextLength = {
  MIN: 50,
  MAX: 300
} as const;

const Leaflet = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS:
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
} as const;

const UrlMarker = {
  DEFAULT: '/img/pin.svg',
  CURRENT: '/img/pin-active.svg'
} as const;

const IconMarkerSize = {
  WIDTH: 27,
  HEIGHT: 39
} as const;

const IconAnchorSize = {
  WIDTH: IconMarkerSize.WIDTH / 2,
  HEIGHT: IconMarkerSize.HEIGHT
} as const;

enum ActionName {
  LoadOffers = 'load/Offers',
  ChangeCityName = 'main/changeCityName',
  ChangeOfferSortingType = 'main/changeOfferSortingType',
  ChangeActiveOfferId = 'main/changeActiveOfferId'
}

export {
  APP_TITLE,
  APIService,
  AUTH_TOKEN_KEY_NAME,
  CITIES_NAMES,
  DEFAULT_CITY_NAME,
  OFFER_PATH,
  AppRoute,
  AuthorizationStatus,
  OfferSortigType,
  DEFALUT_OFFER_SORTING_TYPE,
  ClassNamePrefix,
  BookmarkButtonIconSize,
  OfferFeatureType,
  RATING_STAR_WIDTH,
  OfferComponentsCount,
  ReviewRating,
  ReviewTextLength,
  Leaflet,
  UrlMarker,
  IconMarkerSize,
  IconAnchorSize,
  ActionName
};
