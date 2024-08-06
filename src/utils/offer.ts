import { OfferTypeFeature, OfferTypeFeatureTemplate, templateNumberString } from '../const';
import { Offer } from '../types/offer';

function getFavoriteOffers(offers: Offer[]): Offer[] {
  return offers.filter(({ isFavorite }) => isFavorite);
}

type CityOffers = { cityName: string; offers: Offer[] };

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

  const [templateOne, templateMany] = OfferTypeFeatureTemplate[key];
  const template = (value === 1) ? templateOne : templateMany;

  return template.replace(templateNumberString, value.toString());
}

export { getFavoriteOffers, getOffersByCities, getFeatureText };
