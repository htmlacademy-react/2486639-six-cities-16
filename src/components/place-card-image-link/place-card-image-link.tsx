import OfferLink from '../offer-link/offer-link';

type PlaceCardImageLinkProps = {
  additionalClassName: string;
  id: string;
  previewImage: string;
  imageWidth: string;
  imageHeight: string;
}

function PlaceCardImageLink(prop: PlaceCardImageLinkProps): JSX.Element {
  const {
    additionalClassName,
    id,
    previewImage,
    imageWidth,
    imageHeight
  } = prop;
  return (
    <div className={`${additionalClassName} place-card__image-wrapper`}>
      <OfferLink offerId={id}>
        <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
      </OfferLink>
    </div>
  );
}

export default PlaceCardImageLink;
