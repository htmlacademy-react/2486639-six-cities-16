import { Offer } from '../../types/offer';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import PlaceCard from '../../components/place-card/place-card';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const isOffersEmpty: boolean = !offers.length;

  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={`page__main page__main--index ${(offers.length) ? '' : 'page__main--index-empty'}`}>
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
                  <>
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                    <PlacesSorting />
                    <div className="cities__places-list places__list tabs__content">
                      {
                        offers.map((offer) => (
                          <PlaceCard
                            key={offer.id}
                            offer={offer}
                            handleActiveOfferChange={(activeOfferId) => {
                              document.title = activeOfferId; //! для тестирования
                              //! если сделать State у главной страницы, то при её перерисовке заново рисует все
                              //! тогда наверное нужно не использовать state у карточки, а сразу передавать id в обработчик
                            }}
                          />
                        ))
                      }
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
