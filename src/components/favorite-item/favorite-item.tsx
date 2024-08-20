import PlaceCardInfo from '../place-card-info/place-card-info';
import { Offer } from '../../types/offer';

type FavoriteItemProps = {
  cityName: string;
  offers: Offer[];
}

function FavoriteItem({ cityName, offers }: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
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
