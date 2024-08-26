import { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginFrom from '../../components/login-form/login-form';
import { useAppDispatch } from '../../hooks';
import { changeCityName } from '../../store/action';
import { CityName } from '../../types';
import { getRandomArrayElement } from '../../utils/common';
import { APP_TITLE, AppRoute, CITIES_NAMES } from '../../const';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomCityName = getRandomArrayElement<CityName>([...CITIES_NAMES]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{`${APP_TITLE}: authorization`}</title>
      </Helmet>
      <Header isHiddenUserInfo />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginFrom />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Main}
                onClick={
                  (evt: MouseEvent<HTMLElement>) => {
                    evt.preventDefault();
                    dispatch(changeCityName(randomCityName as CityName));
                    navigate(AppRoute.Main);
                  }
                }
              >
                <span>{randomCityName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
