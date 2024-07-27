import { Offer } from '../../types/offer';
import OfferInfo from '../offer-info/offer-info';
import OfferLink from '../offer-link/offer-link';
import OfferMark from '../offer-mark/offer-mark';

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
              rating
            } = offer;

            return (
              <article key={id} className="favorites__card place-card">
                {isPremium ? <OfferMark /> : null}
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <OfferLink offerId={id}>
                    <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
                  </OfferLink>
                </div>
                <OfferInfo
                  id={id}
                  title={title}
                  type={type}
                  price={price}
                  rating={rating}
                  isFromFavorite
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
