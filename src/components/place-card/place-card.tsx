import PlaceCardInfo from '../place-card-info/place-card-info';
import { Offer, OfferId } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  //! типизировать функции
  onMouseEnter?: (offerId: OfferId) => void;
  onMouseLeave?: () => void;
}

function PlaceCard({ offer, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        onMouseEnter?.(offer.id);
      }}
      onMouseLeave={() => {
        onMouseLeave?.();
      }}
    >
      <PlaceCardInfo
        additionalImageClassName="cities__image-wrapper"
        imageWidth="260"
        imageHeight="200"
        offer={offer}
      />
    </article>
  );
}

export default PlaceCard;
