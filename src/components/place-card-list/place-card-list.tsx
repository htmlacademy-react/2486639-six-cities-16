import { useState } from 'react';
import PlacesSorting from '../places-sorting/places-sorting';
import PlaceCard from '../place-card/place-card';
import { Offer, OfferId } from '../../types/offer';
import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList({ offers }: PlaceCardListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);
  document.title = activeOfferId; //! для тестирования

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onMouseEnter={(offerId: OfferId) => {
                setActiveOfferId(offerId);
              }}
              onMouseLeave={() => {
                //! посмотреть по ТЗ при выходе нужно очистить
                setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
              }}
            />
          ))
        }
      </div>
    </>
  );
}

export default PlaceCardList;
