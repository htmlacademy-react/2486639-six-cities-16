import { Offer } from '../../types/offer';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import PlaceCardInfo from '../place-card-info/place-card-info';
import OfferLink from '../offer-link/offer-link';

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
          //! часть функционла похожа на place-card.tsx
          // еще попробовать объеденить... ссылка с картинкой, премиум, там еще есть обработчики

          offers.map((offer) => {
            const {
              id,
              title,
              type,
              price,
              previewImage,
              isPremium,
              isFavorite,
              rating
            } = offer;

            return (
              <article key={id} className="favorites__card place-card">
                {isPremium ? <PlaceCardMark /> : null}
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <OfferLink offerId={id}>
                    <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
                  </OfferLink>
                </div>
                <PlaceCardInfo
                  id={id}
                  title={title}
                  type={type}
                  price={price}
                  rating={rating}
                  isFavorite={isFavorite}
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
