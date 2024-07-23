import { Offer } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in Amsterdam</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <PlaceCard key={offer.id} message='//!тест' />)}
      </div>
    </>
  );
}

export default PlacesList;
