import classNames from 'classnames';
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
  const cityName: CityName = DEFAULT_CITY;
  const cityOffers = getCityOffers(cityName, offers);
  const isOffersEmpty: boolean = !cityOffers.length;
  const mainClassName = classNames(
    'page__main',
    'page__main--index',
    { 'page__main--index-empty': isOffersEmpty }
  );
  const divClassName = classNames(
    'cities__places-container',
    'container',
    { 'cities__places-container--empty': isOffersEmpty }
  );
  const sectionClassName = classNames(
    { 'cities__no-places': isOffersEmpty },
    { 'cities__places places': !isOffersEmpty }
  );

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={mainClassName}>
        <Locations />
        <div className="cities">
          <div className={divClassName}>
            <section className={sectionClassName}>
              {
                isOffersEmpty
                  ?
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                  :
                  <PlaceCardList cityName={cityName} offers={cityOffers} />
              }
            </section>
            <div className="cities__right-section">
              {isOffersEmpty
                ?
                null
                :
                <PlacesMap
                  classNamePrefix={ClassNamePrefix.Cities}
                  offers={cityOffers}
                  selectedOfferId={'' /* //! временно*/}
                />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default MainPage;
