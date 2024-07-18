import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderAuth from '../../components/header/header-auth';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className="page__main">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 Not Found</b>
                <p className="cities__status-description">
                  <u>
                    <Link to={AppRoute.Root}>Main page</Link>
                  </u>
                </p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
