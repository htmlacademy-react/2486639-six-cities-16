import { Offer } from '../../types/offer';
import PlaceCardImageLink from '../place-card-image-link/place-card-image-link';
import PlaceCardMark from '../place-card-mark/place-card-mark';
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
      {isPremium ? <PlaceCardMark /> : null}
      <PlaceCardImageLink
        additionalClassName={additionalImageClassName}
        id={additionalOfferId || id}
        previewImage={previewImage}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <PlaceCardInfo
        offer={offer}
        additionalClassName={additionalInfoClassName}
      />
    </>
  );
}

export default PlaceCardDetails;
