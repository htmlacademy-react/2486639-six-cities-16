import PlaceCard from '../place-card/place-card';
import { Offer, OfferId } from '../../types/offer';

type PlaceCardListProps = {
  offers: Offer[];
  onPlaceCardMouseEnter?: (offerId: OfferId) => void;
  onPlaceCardMouseLeave?: () => void;
}

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers, onPlaceCardMouseEnter, onPlaceCardMouseLeave } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseEnter={onPlaceCardMouseEnter}
            onMouseLeave={onPlaceCardMouseLeave}
          />
        ))
      }
    </div>
  );
}

export default PlaceCardList;
