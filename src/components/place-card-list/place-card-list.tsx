import PlacesSorting from '../places-sorting/places-sorting';
import PlaceCard from '../place-card/place-card';
import { CityName } from '../../types/city';
import { Offer, OfferId } from '../../types/offer';

type PlaceCardListProps = {
  cityName: CityName;
  offers: Offer[];
  onPlaceCardMouseEnter?: (offerId: OfferId) => void;
  onPlaceCardMouseLeave?: () => void;
}

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { cityName, offers, onPlaceCardMouseEnter, onPlaceCardMouseLeave } = props;

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {cityName}</b>
      <PlacesSorting />
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
    </>
  );
}

export default PlaceCardList;
