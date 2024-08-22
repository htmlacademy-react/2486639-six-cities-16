import classNames from 'classnames';
import { useState } from 'react';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OffersMap from '../../components/offers-map/offers-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCityName } from '../../store/action';
import { CityName } from '../../types/city';
import { Offer, OfferId } from '../../types/offer';
import { getCityOffers } from '../../utils/offer';
import { ClassNamePrefix, DEFAULT_ACTIVE_OFFER_ID, PlacesSortingTypes, DEFALUT_PALCES_SORTING_TYPE } from '../../const';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.cityName);
  const dispatch = useAppDispatch();

  const [activeSortingType, setActiveSortingType] = useState<PlacesSortingTypes>(DEFALUT_PALCES_SORTING_TYPE);
  const [activeOfferId, setActiveOfferId] = useState<OfferId>(DEFAULT_ACTIVE_OFFER_ID);

  const cityOffers = getCityOffers(currentCityName, offers);

  //! тут отсортировать по activeSortingType
  //if (activeSortingType === PlacesSortingTypes.PriceHighToLow) {
  //  cityOffers.push(cityOffers[0]);
  //}
  const isCityOffersEmpty: boolean = !cityOffers.length;
  const mainClassName = classNames(
    'page__main',
    'page__main--index',
    { 'page__main--index-empty': isCityOffersEmpty }
  );
  const divClassName = classNames(
    'cities__places-container',
    'container',
    { 'cities__places-container--empty': isCityOffersEmpty }
  );
  const sectionClassName = classNames(
    { 'cities__no-places': isCityOffersEmpty },
    { 'cities__places places': !isCityOffersEmpty }
  );

  const handleSortingTypeChange = (sortingType: PlacesSortingTypes) => {
    setActiveSortingType(sortingType);
    //!console.log(sortingType);
  };

  const handlePlaceCardMouseEnter = (offerId: OfferId) => {
    setActiveOfferId(offerId);
  };

  const handlePlaceCardMouseLeave = () => {
    setActiveOfferId(DEFAULT_ACTIVE_OFFER_ID);
  };

  const handleCityNameClick = (cityName: CityName) => {
    if (currentCityName !== cityName) {//! а может проверку сам redux сделет и не будет лишней перерисовки
      dispatch(changeCityName(cityName));
    }
  };

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={mainClassName}>
        <Locations
          currentCityName={currentCityName}
          onCityNameClick={handleCityNameClick}
        />
        <div className="cities">
          <div className={divClassName}>
            <section className={sectionClassName}>
              {
                isCityOffersEmpty
                  ?
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                  :
                  <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offers.length} places to stay in {currentCityName}</b>
                    <PlacesSorting
                      activeSortingType={activeSortingType}
                      onSortingTypeChange={handleSortingTypeChange}
                    />
                    <PlaceCardList
                      offers={cityOffers}
                      onPlaceCardMouseEnter={handlePlaceCardMouseEnter}
                      onPlaceCardMouseLeave={handlePlaceCardMouseLeave}
                    />
                  </>
              }
            </section>
            <div className="cities__right-section">
              {isCityOffersEmpty
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
