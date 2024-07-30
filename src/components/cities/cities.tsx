import { Offer } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import PlaceCard from '../place-card/place-card';

type CitiesProps = {
  offers: Offer[];
}

function Cities({ offers }: CitiesProps): JSX.Element {
  const isOffersEmpty: boolean = !offers.length;

  return (
    <div className="cities">
      <div className={`cities__places-container container ${(isOffersEmpty) ? 'cities__places-container--empty' : ''}`}>
        <section className={(isOffersEmpty) ? 'cities__no-places' : 'cities__places places'}>
          {
            isOffersEmpty
              ?
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
              :
              <>
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                <PlacesSorting />
                <div className="cities__places-list places__list tabs__content">
                  {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
                </div>
              </>
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
