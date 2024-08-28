import { Link } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { useAppDispatch } from '../../hooks';
import { changeCityName } from '../../store/action';
import { Offers } from '../../types/offer';
import { CityName } from '../../types';
import { AppRoute } from '../../const';

type FavoriteItemProps = {
  cityName: CityName;
  offers: Offers;
}

function FavoriteItem({ cityName, offers }: FavoriteItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            to={AppRoute.Main}
            className="locations__item-link"
            onClick={
              () => {
                dispatch(changeCityName(cityName));
              }
            }
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => (
            <article key={offer.id} className="favorites__card place-card">
              <PlaceCardInfo
                additionalImageClassName="favorites__image-wrapper"
                imageWidth="150"
                imageHeight="110"
                additionalInfoClassName="favorites__card-info"
                offer={offer}
              />
            </article>
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteItem;
