import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import HeaderAuth from '../../components/header/header-auth';
import Footer from '../../components/footer/footer';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { getFavoriteOffers, getSortingCityNames, getOffersByCityName } from '../../utils/offer';
import { APP_TITLE } from '../../const';

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = getFavoriteOffers(offers);
  const isOffersEmpty: boolean = !favoriteOffers.length;

  return (
    <div className="page">
      <Helmet>
        <title>{`${APP_TITLE}: favorites${isOffersEmpty ? ' empty' : ''}`}</title>
      </Helmet>
      <HeaderAuth />

      <main className={`page__main page__main--favorites ${isOffersEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isOffersEmpty ? 'favorites--empty' : ''}`} >
            <h1 className="visually-hidden">{isOffersEmpty ? 'Favorites (empty)' : 'Saved listing'} </h1>
            {
              isOffersEmpty
                ?
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
                :
                <ul className="favorites__list">
                  {getSortingCityNames(favoriteOffers).map(
                    (cityName) => (
                      <FavoriteItem
                        key={cityName}
                        cityName={cityName}
                        offers={getOffersByCityName(favoriteOffers, cityName)}
                      />
                    )
                  )}
                </ul>
            }
          </section>
        </div>
      </main >
      <Footer />
    </div >
  );
}

export default FavoritesPage;
