import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, APP_TITLE } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import PublicRoute from '../public-route/public-route';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  placeCardCount: number;
}

const authorizationStatus = AuthorizationStatus.Auth;
//const authorizationStatus = AuthorizationStatus.NoAuth;
//const authorizationStatus = AuthorizationStatus.Unknown;

function App({ placeCardCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage placeCardCount={placeCardCount} />}
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
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage authorizationStatus={authorizationStatus} />}
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
