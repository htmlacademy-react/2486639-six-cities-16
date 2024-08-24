import classNames from 'classnames';
import { useState } from 'react';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import OffersMap from '../../components/offers-map/offers-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOfferSortingType } from '../../store/action';
import { Offer, OfferId } from '../../types/offer';
import { getCityOffers, sortOffers } from '../../utils/offer';
import { ClassNamePrefix, OfferSortigType } from '../../const';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.cityName);
  const currentOfferSortType = useAppSelector((state) => state.offerSoritngType);
  const dispatch = useAppDispatch();

  const [activeOfferId, setActiveOfferId] = useState<OfferId>(null);

  const cityOffers = sortOffers(getCityOffers(currentCityName, offers), currentOfferSortType);

  const isCityOffersEmpty: boolean = !cityOffers.length;
  const mainClassName = classNames(
    'page__main page__main--index',
    { 'page__main--index-empty': isCityOffersEmpty }
  );
  const divClassName = classNames(
    'cities__places-container container',
    { 'cities__places-container--empty': isCityOffersEmpty }
  );
  const sectionClassName = classNames(
    { 'cities__no-places': isCityOffersEmpty },
    { 'cities__places places': !isCityOffersEmpty }
  );

  const handleSortingTypeChange = (sortingType: OfferSortigType) => {
    dispatch(changeOfferSortingType(sortingType));
  };

  const handlePlaceCardMouseEnter = (offerId: OfferId) => {
    setActiveOfferId(offerId);
  };

  const handlePlaceCardMouseLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={mainClassName}>
        <Locations currentCityName={currentCityName} />
        <div className="cities">
          <div className={divClassName}>
            <section className={sectionClassName}>
              {
                isCityOffersEmpty
                  ?
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in {currentCityName}</p>
                  </div>
                  :
                  <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{cityOffers.length} places to stay in {currentCityName}</b>
                    <PlacesSorting
                      currentOfferSortType={currentOfferSortType}
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
              {
                isCityOffersEmpty
                  ?
                  null
                  :
                  <OffersMap
                    classNamePrefix={ClassNamePrefix.Cities}
                    // для координат города можно взять коодинаты из первого предложения
                    startLocation={cityOffers[0].city.location}
                    offers={cityOffers}
                    activeOfferId={activeOfferId}
                  />
              }
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default MainPage;
