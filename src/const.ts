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

enum ClassNamePrefix {
  PLACE_CARD = 'place-card',
  OFFER = 'offer'
}

const BookmarkButtonIconSize = {
  [ClassNamePrefix.OFFER]: { width: 31, height: 33 },
  [ClassNamePrefix.PLACE_CARD]: { width: 18, height: 19 }
};

enum OfferTypeFeature {
  entire = 'entire',
  bedrooms = 'bedrooms',
  adults = 'adults'
}
const templateNumberString = ':n';

const OfferTypeFeatureTemplate = {
  [OfferTypeFeature.entire]: ['', ''], // не могу убрать ошибку TS OfferTypeFeatureTemplate[key] хотя выше проверка - (key in OfferTypeFeatureTemplate)
  [OfferTypeFeature.bedrooms]: [':n Bedroom', ':n Bedrooms'],
  [OfferTypeFeature.adults]: ['Max :n adult', 'Max :n adults']
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

export {
  APP_TITLE,
  CITIES,
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
  REVIEW_TEXT_MIN_LENGTH
};
