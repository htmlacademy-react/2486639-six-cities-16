import { useNavigate } from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { useAppDispatch } from '../../hooks';
import { changeCityName } from '../../store/action';
import { Offer } from '../../types/offer';
import { CityName } from '../../types/city';
import { AppRoute } from '../../const';

type FavoriteItemProps = {
  cityName: CityName;
  offers: Offer[];
}

function FavoriteItem({ cityName, offers }: FavoriteItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a
            className="locations__item-link"
            href="#"
            onClick={(evt: React.MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              dispatch(changeCityName(cityName));
              navigate(AppRoute.Main);
            }}
          >
            <span>{cityName}</span>
          </a>
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
