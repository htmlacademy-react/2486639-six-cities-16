import { Offer } from '../../types/offer';
import Mark from '../mark/mark';
import OfferLink from '../offer-link/offer-link';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Rating from '../rating/rating';
import { firstLetterToUppercase } from '../../utils/util';

type PlaceCardDetailsProps = {
  additionalImageClassName: string;
  imageWidth: string;
  imageHeight: string;
  additionalInfoClassName?: string;
  offer: Offer;
  additionalOfferId?: string;
}

function PlaceCardDetails(prop: PlaceCardDetailsProps): JSX.Element {
  const {
    additionalImageClassName,
    imageWidth,
    imageHeight,
    additionalInfoClassName,
    offer,
    additionalOfferId
  } = prop;
  const {
    id,
    type,
    title,
    price,
    rating,
    isPremium,
    isFavorite,
    previewImage
  } = offer;

  return (
    <>
      {isPremium ? <Mark className="place-card__mark" /> : null}
      <div className={`${additionalImageClassName} place-card__image-wrapper`}>
        <OfferLink offerId={additionalOfferId || id}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </OfferLink>
      </div>
      <div className={`${additionalInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            buttonClassName="place-card__bookmark-button"
            iconClassName="place-card__bookmark-icon"
            iconWidth="18"
            iconHeight="19"
            activeClassName="place-card__bookmark-button--active"
            isActive={isFavorite}
          />
        </div>
        <Rating
          ratingClassName="place-card__rating"
          starsClassName="place-card__stars"
          rating={rating}
        />
        <h2 className="place-card__name">
          <OfferLink offerId={id}>
            {title}
          </OfferLink>
        </h2>
        <p className="place-card__type">{firstLetterToUppercase(type)}</p>
      </div>
    </>
  );
}

export default PlaceCardDetails;
