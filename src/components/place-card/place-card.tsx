import { useState } from 'react';
import { Offer, OfferId } from '../../types/offer';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardProps = {
  offer: Offer;
  handleActiveOfferChange: (activeOfferId: OfferId) => void;
}

function PlaceCard({ offer, handleActiveOfferChange }: PlaceCardProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);
  //! а где вызвать при изменении и не использовать state? или можно забрать state у компоненета снаружи
  handleActiveOfferChange(activeOfferId);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        setActiveOfferId(offer.id);
        //! handleActiveOfferChange(offer.id);
      }}
      onMouseLeave={() => {
        //! посмотреть по ТЗ при выходе нужно очистить
        setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
        //! handleActiveOfferChange(DEFAULT_ACTIVE_OFFER_ID);
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
