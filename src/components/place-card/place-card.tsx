import { useState } from 'react';
import { Offer } from '../../types/offer';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        setActiveOfferId(offer.id);
      }}
      onMouseOut={() => {
        //! посмотреть по ТЗ при выходе нужно очистить
        setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
      }}
    >
      <PlaceCardInfo
        additionalImageClassName="cities__image-wrapper"
        imageWidth="260"
        imageHeight="200"
        offer={offer}
        additionalOfferId={activeOfferId /*дз 4-1 п.9 компонент Link и хуки из пакета, можно же просто offer.id*/}
      />
    </article>
  );
}

export default PlaceCard;
