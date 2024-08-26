import { OffersByCity, Offer, Offers } from '../types/offer';
import { CityName } from '../types';
import { OfferSortigType } from '../const';

function getCityOffers(cityName: CityName, offers: Offers) {
  return offers.filter(({ city }) => (cityName === city.name));
}

const compareOffers = {
  [OfferSortigType.PriceLowToHigh]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (firstPrice - secondPrice),
  [OfferSortigType.PriceHighToLow]: ({ price: firstPrice }: Offer, { price: secondPrice }: Offer) => (secondPrice - firstPrice),
  [OfferSortigType.TopRatedFirst]: ({ rating: firstRating }: Offer, { rating: secondRating }: Offer) => (secondRating - firstRating)
};

function sortOffers(offers: Offers, offerSortingType: OfferSortigType): Offers {
  if (offerSortingType === OfferSortigType.Popular) {
    return offers;
  }

  return [...offers].sort(compareOffers[offerSortingType]);
}

function sortByCityName(citiesOffers: OffersByCity[]): OffersByCity[] {
  return citiesOffers.sort(({ cityName: firstCityName }, { cityName: secondCityName }) => (firstCityName.localeCompare(secondCityName)));
}

function getOffersByCities(offers: Offers): OffersByCity[] {
  const offersByCities: OffersByCity[] = [];

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

export { getCityOffers, sortOffers, getOffersByCities };
