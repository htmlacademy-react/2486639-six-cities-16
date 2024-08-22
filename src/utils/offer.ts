import { CityOffers, Offer } from '../types/offer';
import { CityName } from '../types/city';
import { OfferTypeFeature, OfferTypeFeatureTemplate, OfferSortigTypes, templateNumberString } from '../const';

function getCityOffers(cityName: CityName, offers: Offer[]): Offer[] {
  return offers.filter(({ city }) => (cityName === city.name));
}

const compareOffers = {
  [OfferSortigTypes.PriceLowToHigh]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (firstPrice - secondPrice),
  [OfferSortigTypes.PriceHighToLow]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (secondPrice - firstPrice),
  [OfferSortigTypes.TopRatedFirst]: ({ rating: firstRating }: Offer, { rating: secondRating }: Offer) => (secondRating - firstRating)
};

function sortOffers(offers: Offer[], offerSortingType: OfferSortigTypes): Offer[] {
  if (offerSortingType === OfferSortigTypes.Popular) {
    return offers;
  }

  return [...offers].sort(compareOffers[offerSortingType]);
}

function getFavoriteOffers(offers: Offer[]): Offer[] {
  return offers.filter(({ isFavorite }) => isFavorite);
}

function sortByCityName(citiesOffers: CityOffers[]): CityOffers[] {
  return citiesOffers.sort(({ cityName: firstCityName }, { cityName: secondCityName }) => (firstCityName.localeCompare(secondCityName)));
}

function getOffersByCities(offers: Offer[]): CityOffers[] {
  const offersByCities: CityOffers[] = [];

  offers.forEach((offer) => {
    const offersByCity = offersByCities.find(({ cityName }) => (cityName === offer.city.name));

    if (!offersByCity) {
      offersByCities.push({ cityName: offer.city.name, offers: [offer] });
    } else {
      offersByCity.offers.push(offer);
    }
  });

  return sortByCityName(offersByCities);
}

function getFeatureText(key: OfferTypeFeature, value: number): string {
  if (value < 1) {
    return '';
  }

  if (!(key in OfferTypeFeatureTemplate)) {
    return '';
  }

  const [templateOne, templateMany] = OfferTypeFeatureTemplate[key];
  const template = (value === 1) ? templateOne : templateMany;

  return template.replace(templateNumberString, value.toString());
}

export { getCityOffers, sortOffers, getFavoriteOffers, getOffersByCities, getFeatureText };
