import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import PlacesMap from '../../components/places-map/places-map';
import { CityName } from '../../types/city';
import { Offer } from '../../types/offer';
import { getCityOffers } from '../../utils/offer';
import { ClassNamePrefix, DEFAULT_CITY } from '../../const';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const currentCity: CityName = DEFAULT_CITY;
  const cityOffers = getCityOffers(currentCity, offers);
  const isOffersEmpty: boolean = !cityOffers.length;

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
                  <PlaceCardList offers={cityOffers} />
              }
            </section>
            <div className="cities__right-section">
              {isOffersEmpty ? null : <PlacesMap classNamePrefix={ClassNamePrefix.Cities} offers={cityOffers} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
