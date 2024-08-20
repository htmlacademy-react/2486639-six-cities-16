import classNames from 'classnames';
import { useState } from 'react';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OffersMap from '../../components/offers-map/offers-map';
import { CityName } from '../../types/city';
import { Offer, OfferId } from '../../types/offer';
import { getCityOffers } from '../../utils/offer';
import { ClassNamePrefix, DEFAULT_ACTIVE_OFFER_ID, DEFAULT_CITY } from '../../const';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedCityName/*, setSelectedCityName*/] = useState<CityName>(DEFAULT_CITY);
  const [activeOfferId, setActiveOfferId] = useState<OfferId>(DEFAULT_ACTIVE_OFFER_ID);

  const currentCityName: CityName = DEFAULT_CITY;
  const cityOffers = getCityOffers(currentCityName, offers);
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

  //! типизировать функции
  const handlePlaceCardMouseEnter = (offerId: OfferId) => {
    setActiveOfferId(offerId);
  };

  const handlePlaceCardMouseLeave = () => {
    setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
  };

  /*
  const handleCityNameClick = (cityName: CityName) => {
    if (selectedCityName !== cityName) {
      setSelectedCityName(cityName);
    }
  };
  */

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={mainClassName}>
        <Locations currentCityName={selectedCityName} /*onCityNameClick={handleCityNameClick} */ />
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
                  <PlaceCardList
                    cityName={currentCityName}
                    offers={cityOffers}
                    onPlaceCardMouseEnter={handlePlaceCardMouseEnter}
                    onPlaceCardMouseLeave={handlePlaceCardMouseLeave}
                  />
              }
            </section>
            <div className="cities__right-section">
              {isOffersEmpty
                ?
                null
                :
                <OffersMap
                  classNamePrefix={ClassNamePrefix.Cities}
                  // для координат города можно взять коодинаты из первого предложения
                  startLocation={offers[0].city.location}
                  offers={cityOffers}
                  activeOfferId={activeOfferId}
                />}
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default MainPage;
