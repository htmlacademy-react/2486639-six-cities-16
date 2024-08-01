import { Offer } from '../../types/offer';
import Mark from '../mark/mark';
import OfferLink from '../offer-link/offer-link';
import PlaceCardInfo from '../place-card-info/place-card-info';

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
  const { id, previewImage, isPremium } = offer;

  return (
    <>
      {isPremium ? <Mark className="place-card__mark" /> : null}
      <div className={`${additionalImageClassName} place-card__image-wrapper`}>
        <OfferLink offerId={additionalOfferId || id}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </OfferLink>
      </div>
      <PlaceCardInfo
        offer={offer}
        additionalClassName={additionalInfoClassName}
      />
    </>
  );
}

export default PlaceCardDetails;
