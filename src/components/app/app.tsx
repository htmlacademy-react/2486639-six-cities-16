import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import PublicRoute from '../public-route/public-route';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Offer, DetailOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { AppRoute, AuthorizationStatus, APP_TITLE } from '../../const';

type AppProps = {
  offers: Offer[];
  detailOffers: DetailOffer[];
  nearOffers: Offer[];
  reviews: Review[];
}

const authorizationStatus = AuthorizationStatus.Auth;
//const authorizationStatus = AuthorizationStatus.NoAuth;
//const authorizationStatus = AuthorizationStatus.Unknown;

function App({ offers, detailOffers, nearOffers, reviews }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PublicRoute authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                authorizationStatus={authorizationStatus}
                detailOffers={detailOffers}
                nearOffers={nearOffers}
                reviews={reviews}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
