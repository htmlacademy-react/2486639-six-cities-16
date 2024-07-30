import { Offer } from '../types/offer';

function getFavoriteOffers(offers: Offer[]): Offer[] {
  return offers.filter(({ isFavorite }) => isFavorite);
}

function getSortingCityNames(offers: Offer[]): string[] {
  const cityNames = offers.map(({ city }) => city.name);
  cityNames.sort((firstCityName, secondCityName) => firstCityName.localeCompare(secondCityName));
  const sortingCityNames = new Set(cityNames);

  return Array.from(sortingCityNames);
}

function getOffersByCityName(offers: Offer[], cityName: string): Offer[] {
  return offers.filter(({ city }) => city.name === cityName);
}

export { getFavoriteOffers, getSortingCityNames, getOffersByCityName };
