import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import HeaderAuth from '../../components/header/header-auth';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { APP_TITLE } from '../../const';

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter(({ isFavorite }) => isFavorite);
  const isOffersEmpty: boolean = favoriteOffers.length === 0;

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
              isOffersEmpty ?
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div> :
                <FavoritesList offers={favoriteOffers} />
            }
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
