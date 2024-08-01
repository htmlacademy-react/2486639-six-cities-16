import { useState } from 'react';
import { Offer } from '../../types/offer';
import PlaceCardImageLink from '../place-card-image-link/place-card-image-link';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);

  const {
    id,
    previewImage,
    isPremium
  } = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        setActiveOfferId(id);
      }}
      onMouseOut={() => {
        //! посмотреть по ТЗ при выходе нужно очистить
        setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
      }}
    >
      {isPremium ? <PlaceCardMark /> : null}
      <PlaceCardImageLink
        additionalClassName="cities__image-wrapper"
        id={activeOfferId /*дз 4-1 п.9 компонент Link и хуки из пакета, можно же просто id*/}
        previewImage={previewImage}
      />
      <PlaceCardInfo
        offer={offer}
        activeOfferId={activeOfferId}
      />
    </article>
  );
}

export default PlaceCard;
