import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginFrom from '../../components/login-form/login-form';
import { useAppDispatch } from '../../hooks';
import { changeCityName } from '../../store/action';
import { APP_TITLE, AppRoute, CITY_NAME_IN_LOGIN_PAGE } from '../../const';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
                  (evt: React.MouseEvent<HTMLElement>) => {
                    evt.preventDefault();
                    dispatch(changeCityName(CITY_NAME_IN_LOGIN_PAGE));
                    navigate(AppRoute.Main);
                  }
                }
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
