import { CityName } from './types/city';

const APP_TITLE = '6 cities';

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

enum OfferSortigTypes {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

const DEFALUT_OFFER_SORTING_TYPE = OfferSortigTypes.Popular;

enum ClassNamePrefix {
  PlaceCard = 'place-card',
  Offer = 'offer',
  Reviews = 'reviews',
  Cities = 'cities'
}

const BookmarkButtonIconSize = {
  [ClassNamePrefix.PlaceCard]: { width: 18, height: 19 },
  [ClassNamePrefix.Offer]: { width: 31, height: 33 },
  [ClassNamePrefix.Reviews]: { width: 0, height: 0 },
  [ClassNamePrefix.Cities]: { width: 0, height: 0 }
} as const;

enum OfferTypeFeature {
  Entire = 'entire',
  Bedrooms = 'bedrooms',
  Adults = 'adults'
}
const templateNumberString = ':n';

const OfferTypeFeatureTemplate = {
  [OfferTypeFeature.Entire]: ['', ''],
  [OfferTypeFeature.Bedrooms]: [`${templateNumberString} Bedroom`, `${templateNumberString} Bedrooms`],
  [OfferTypeFeature.Adults]: [`Max ${templateNumberString} adult`, `Max ${templateNumberString} adults`]
} as const;

const RATING_STAR_WIDTH = 20;

//! константы сгруппировать
//const FeatureOffer sShowCount = {};
const IMAGES_SHOW_COUNT = 6;
const NEAR_OFFERS_SHOW_COUNT = 3;
const REVIEWS_SHOW_COUNT = 10;

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

export {
  APP_TITLE,
  CITIES_NAMES,
  DEFAULT_CITY_NAME,
  OFFER_PATH,
  AppRoute,
  AuthorizationStatus,
  OfferSortigTypes,
  DEFALUT_OFFER_SORTING_TYPE,
  ClassNamePrefix,
  BookmarkButtonIconSize,
  OfferTypeFeature,
  templateNumberString,
  OfferTypeFeatureTemplate,
  RATING_STAR_WIDTH,
  IMAGES_SHOW_COUNT,
  NEAR_OFFERS_SHOW_COUNT,
  REVIEWS_SHOW_COUNT,
  ReviewRating,
  ReviewTextLength,
  Leaflet,
  UrlMarker,
  IconMarkerSize,
  IconAnchorSize
};
