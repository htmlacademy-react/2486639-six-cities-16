import { Offer } from '../../types/offer';
import PlacesEmpty from '../places-empty/places-empty';
import PlacesList from '../places-list/places-list';

type CitiesProps = {
  offers: Offer[];
}

function Cities({ offers }: CitiesProps): JSX.Element {
  const isOffersEmpty: boolean = offers.length === 0;

  return (
    <div className="cities">
      <div className={`cities__places-container container ${(isOffersEmpty) ? 'cities__places-container--empty' : ''}`}>
        <section className={(isOffersEmpty) ? 'cities__no-places' : 'cities__places places'}>
          {
            isOffersEmpty
              ? <PlacesEmpty />
              : <PlacesList offers={offers} />
          }
        </section>
        <div className="cities__right-section">
          {isOffersEmpty ? null : <section className="cities__map map"></section>}
        </div>
      </div>
    </div>
  );
}

export default Cities;
