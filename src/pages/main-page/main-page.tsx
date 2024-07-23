import { Offer } from '../../types/offer';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlaceCard from '../../components/place-card/place-card';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const isOffersEmpty: boolean = offers.length === 0;

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
                  ? <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                  : <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">312 places to stay in Amsterdam</b>
                    <form className="places__sorting" action="#" method="get">
                      <span className="places__sorting-caption">Sort by</span>
                      <span className="places__sorting-type" tabIndex={0}>
                        Popular
                        <svg className="places__sorting-arrow" width="7" height="4">
                          <use xlinkHref="#icon-arrow-select"></use>
                        </svg>
                      </span>
                      <ul className="places__options places__options--custom places__options--opened">
                        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                        <li className="places__option" tabIndex={0}>Price: low to high</li>
                        <li className="places__option" tabIndex={0}>Price: high to low</li>
                        <li className="places__option" tabIndex={0}>Top rated first</li>
                      </ul>
                    </form>
                    <div className="cities__places-list places__list tabs__content">
                      {offers.map((offer) => <PlaceCard key={offer.id} message='//!тест' />)}
                    </div>
                  </>
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
