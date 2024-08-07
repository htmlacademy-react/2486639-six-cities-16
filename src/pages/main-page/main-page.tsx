import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { Offer } from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const isOffersEmpty: boolean = !offers.length;

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={`page__main page__main--index ${(isOffersEmpty) ? 'page__main--index-empty' : ''}`}>
        <Locations />
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
                  <PlaceCardList offers={offers} />
              }
            </section>
            <div className="cities__right-section">
              {isOffersEmpty ? null : <section className="cities__map map"></section>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
