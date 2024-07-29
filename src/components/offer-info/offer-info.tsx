import OfferLink from '../offer-link/offer-link';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
import PlaceCardRating from '../place-card-rating/place-card-rating';
import { firstLetterToUppercase } from '../../utils/util';

type OfferInfoProps = {
  id: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  activeOfferId?: string; //!! временно
  isFromFavorite?: boolean;
}

function OfferInfo(props: OfferInfoProps): JSX.Element {
  const {
    id,
    type,
    title,
    price,
    rating,
    isFavorite = false,
    activeOfferId,
    isFromFavorite = false
  } = props;

  return (
    <div className={`${isFromFavorite ? 'favorites__card-info' : ''} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <OfferBookmarkButton isActive={isFromFavorite || isFavorite} />
      </div>
      <PlaceCardRating rating={rating} />
      <h2 className="place-card__name">
        <OfferLink offerId={id}>
          <>{title} ({`${activeOfferId === id}` /* //! для тестирования */})</>
        </OfferLink>

      </h2>
      <p className="place-card__type">{firstLetterToUppercase(type)}</p>
    </div>
  );
}

export default OfferInfo;
