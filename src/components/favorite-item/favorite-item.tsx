import { Offer } from '../../types/offer';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import PlaceCardInfo from '../place-card-info/place-card-info';
import PlaceCardImageLink from '../place-card-image-link/place-card-image-link';

type FavoriteItemProps = {
  cityName: string;
  offers: Offer[];
}

function FavoriteItem({ cityName, offers }: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">{/*//! locations--current посмотреть макет, наведенный? */}
        <div className="locations__item">
          <a className="locations__item-link" href="#">{/*//! ссылка на город */}
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => {
            const {
              id,
              previewImage,
              isPremium
            } = offer;

            return (
              <article key={id} className="favorites__card place-card">
                {isPremium ? <PlaceCardMark /> : null}
                <PlaceCardImageLink
                  additionalClassName="favorites__image-wrapper"
                  id={id}
                  previewImage={previewImage}
                  imageWidth="150"
                  imageHeight="110"
                />
                <PlaceCardInfo
                  offer={offer}
                  additionalClassName="favorites__card-info"
                />
              </article>
            );
          })
        }
      </div>
    </li>
  );
}

export default FavoriteItem;
