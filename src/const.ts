import { CityName } from './types/city';
import { OfferId } from './types/offer';

const APP_TITLE = '6 cities';

const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
const DEFAULT_CITY: CityName = CITIES_NAMES[3]; //! CITIES_NAMES[0] что в ТЗ по умолчанию

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

enum ClassNamePrefix {
  PlaceCard = 'place-card',
  Offer = 'offer',
  Reviews = 'reviews',
  Cities = 'cities'
}

const BookmarkButtonIconSize = {
  [ClassNamePrefix.PlaceCard]: { width: 18, height: 19 },
  [ClassNamePrefix.Offer]: { width: 31, height: 33 },
  [ClassNamePrefix.Reviews]: { width: 0, height: 0 }, //! как в низу [OfferTypeFeature.entire]: ['', '']... как обойти
  [ClassNamePrefix.Cities]: { width: 0, height: 0 } //! тоже
};

enum OfferTypeFeature {
  Entire = 'entire',
  Bedrooms = 'bedrooms',
  Adults = 'adults'
}
const templateNumberString = ':n';

const OfferTypeFeatureTemplate = {
  [OfferTypeFeature.Entire]: ['', ''], //! не могу убрать ошибку TS OfferTypeFeatureTemplate[key] хотя выше проверка - (key in OfferTypeFeatureTemplate)
  [OfferTypeFeature.Bedrooms]: [':n Bedroom', ':n Bedrooms'],
  [OfferTypeFeature.Adults]: ['Max :n adult', 'Max :n adults']
};

const IMAGES_SHOW_COUNT = 6;
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

const Leaflet = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS:
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};

const UrlMarker = {
  DEFAULT: '/img/pin.svg',
  CURRENT: '/img/pin-active.svg'
};

//! pin.svg и pin-active.svg <svg width="27" height="39"
//! 28 * 40 ?
const IconMarkerSize = {
  WIDTH: 27,
  HEIGHT: 39
};

const IconAnchorSize = {
  WIDTH: IconMarkerSize.WIDTH / 2, //! 14?
  HEIGHT: IconMarkerSize.HEIGHT
};

export {
  APP_TITLE,
  CITIES_NAMES,
  DEFAULT_CITY,
  OFFER_PATH,
  AppRoute,
  AuthorizationStatus,
  PlacesSortingTypes,
  ClassNamePrefix,
  BookmarkButtonIconSize,
  OfferTypeFeature,
  templateNumberString,
  OfferTypeFeatureTemplate,
  IMAGES_SHOW_COUNT,
  ONE_STAR_WIDTH,
  DEFAULT_ACTIVE_OFFER_ID,
  REVIEWS_SHOW_COUNT,
  Rating,
  REVIEW_TEXT_MIN_LENGTH,
  Leaflet,
  UrlMarker,
  IconMarkerSize,
  IconAnchorSize
};
