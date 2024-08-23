import { Helmet } from 'react-helmet-async';
import HeaderAuth from '../../components/header/header-auth';
import Footer from '../../components/footer/footer';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { Offer } from '../../types/offer';
import { getOffersByCities } from '../../utils/offer';
import { APP_TITLE } from '../../const';
import { CityName } from '../../types/city';

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const isOffersEmpty: boolean = !offers.length;

  return (
    <div className="page">
      <Helmet>
        <title>{`${APP_TITLE}: favorites${isOffersEmpty ? ' empty' : ''}`}</title>
      </Helmet>
      <HeaderAuth />

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
                    getOffersByCities(offers)
                      .map(({ cityName, offers: cityOffers }) => (
                        <FavoriteItem
                          key={cityName}
                          cityName={cityName as CityName}
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
