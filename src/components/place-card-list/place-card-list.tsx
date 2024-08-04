//import { useState } from 'react';
import { Offer, /*OfferId*/ } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import PlaceCard from '../place-card/place-card';
//import { DEFAULT_ACTIVE_OFFER_ID } from '../../const';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList({ offers }: PlaceCardListProps): JSX.Element {
  //const [activeOfferId, setActiveOfferId] = useState(DEFAULT_ACTIVE_OFFER_ID);

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
              handleActiveOfferChange={(activeOfferId) => {
                document.title = activeOfferId; //! для тестирования
                //! если сделать State у главной страницы, то при её перерисовке заново рисует все
                //! тогда наверное нужно не использовать state у карточки, а сразу передавать id в обработчик
              }}
            />
          ))
        }
      </div>
    </>
  );
}

export default PlaceCardList;
