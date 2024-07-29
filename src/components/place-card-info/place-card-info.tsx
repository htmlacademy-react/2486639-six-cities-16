import { Offer } from '../../types/offer';
import OfferLink from '../offer-link/offer-link';
import PlaceCardBookmarkButton from '../place-card-button/place-card-button';
import PlaceCardRating from '../place-card-rating/place-card-rating';
import { firstLetterToUppercase } from '../../utils/util';

type PlaceCardInfoProps = {
  offer: Offer;
  additionalClassName?: string;
  activeOfferId?: string; //!! временно
}

function PlaceCardInfo(props: PlaceCardInfoProps): JSX.Element {
  const {
    offer,
    additionalClassName = '',
    activeOfferId
  } = props;
  const {
    id,
    type,
    title,
    price,
    rating,
    isFavorite
  } = offer;
  const className = `${additionalClassName} place-card__info`;

  return (
    <div className={className}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <PlaceCardBookmarkButton isActive={isFavorite} />
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
