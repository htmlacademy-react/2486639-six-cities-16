import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { useAppSelector } from '../../hooks';
import { getOffersByCities } from '../../utils/offer';
import { APP_TITLE } from '../../const';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  const isOffersEmpty: boolean = !favoriteOffers.length;

  return (
    <div className="page">
      <Helmet>
        <title>{`${APP_TITLE}: favorites${isOffersEmpty ? ' empty' : ''}`}</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--favorites ${isOffersEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isOffersEmpty ? 'favorites--empty' : ''}`}>
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
                  {
                    getOffersByCities(favoriteOffers)
                      .map(({ cityName, offers: cityOffers }) => (
                        <FavoriteItem
                          key={cityName}
                          cityName={cityName}
                          offers={cityOffers}
                        />
                      ))
                  }
                </ul>
            }
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
