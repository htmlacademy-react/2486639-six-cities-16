import { Offer } from '../../types/offer';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const cityNames = offers.map(({ city }) => city.name);
  cityNames.sort((firstCityName, secondCityName) => firstCityName.localeCompare(secondCityName));
  const sortingCityNames = new Set(cityNames);

  return (
    <ul className="favorites__list">
      {
        Array.from(sortingCityNames).map((cityName) => {
          const cityOffers = offers.filter(({ city }) => city.name === cityName);
          return <FavoriteItem key={cityName} cityName={cityName} offers={cityOffers} />;
        })
      }
    </ul>
  );
}

export default FavoritesList;
