import OfferLink from '../offer-link/offer-link';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
import PlaceCardRating from '../place-card-rating/place-card-rating';
import { firstLetterToUppercase } from '../../utils/util';

type PlaceCardInfoProps = {
  id: string;
  type: string;
  title: string;
  price: number;
  rating: number;
  additionalClassName?: string;
  isFavorite: boolean;
  activeOfferId?: string; //!! временно
}

function PlaceCardInfo(props: PlaceCardInfoProps): JSX.Element {
  const {
    id,
    type,
    title,
    price,
    rating,
    isFavorite,
    additionalClassName = '',
    activeOfferId
  } = props;
  const className = `${additionalClassName} place-card__info`;

  return (
    <div className={className}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <OfferBookmarkButton isActive={isFavorite} />
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

export default PlaceCardInfo;
