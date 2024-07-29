import OfferLink from '../offer-link/offer-link';

type PlaceCardImageLinkProps = {
  additionalClassName: string; //cities__image-wrapper
  id: string;
  previewImage: string;
}

function PlaceCardImageLink({ additionalClassName, id, previewImage }: PlaceCardImageLinkProps): JSX.Element {
  return (
    <div className={`${additionalClassName} place-card__image-wrapper`}>
      <OfferLink offerId={id}>
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </OfferLink>
    </div>
  );
}

export default PlaceCardImageLink;
