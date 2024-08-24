import { CityOffers, Offer } from '../types/offer';
import { CityName } from '../types';
import { OfferSortigType } from '../const';

function getCityOffers(cityName: CityName, offers: Offer[]) {
  return offers.filter(({ city }) => (cityName === city.name));
}

const compareOffers = {
  [OfferSortigType.PriceLowToHigh]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (firstPrice - secondPrice),
  [OfferSortigType.PriceHighToLow]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (secondPrice - firstPrice),
  [OfferSortigType.TopRatedFirst]: ({ rating: firstRating }: Offer, { rating: secondRating }: Offer) => (secondRating - firstRating)
};

function sortOffers(offers: Offer[], offerSortingType: OfferSortigType): Offer[] {
  if (offerSortingType === OfferSortigType.Popular) {
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

export { getCityOffers, sortOffers, getFavoriteOffers, getOffersByCities };
