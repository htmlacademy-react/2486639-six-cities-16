import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferLink from '../offer-link/offer-link';
import PlaceCardMark from '../place-card-mark/place-card-mark';
import OfferInfo from '../offer-info/offer-info';
import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardProps = {
  offer: Offer;
}

function PlaceCard({ offer }: PlaceCardProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);

  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
    rating
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
      <div className="cities__image-wrapper place-card__image-wrapper">
        <OfferLink offerId={id}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </OfferLink>
      </div>
      <OfferInfo
        key={id}
        id={id}
        title={title}
        type={type}
        price={price}
        rating={rating}
        activeOfferId={activeOfferId}
        isFavorite={isFavorite}
      />
    </article>
  );
}

export default PlaceCard;
