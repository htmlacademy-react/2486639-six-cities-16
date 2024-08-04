import { Offer, OfferId } from '../../types/offer';
import PlaceCardInfo from '../place-card-info/place-card-info';

type PlaceCardProps = {
  offer: Offer;
  onMouseEnter: (offerId: OfferId) => void;
  onMouseLeave: (offerId: OfferId) => void;
  //! два раза (offerId: OfferId) => void; сделать тип... но как его назвать? во втором случае можно и без параметров
}

function PlaceCard({ offer, onMouseEnter, onMouseLeave }: PlaceCardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        onMouseEnter(offer.id);
      }}
      onMouseLeave={() => {
        //! посмотреть по ТЗ при выходе нужно очистить
        onMouseLeave(offer.id);
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
