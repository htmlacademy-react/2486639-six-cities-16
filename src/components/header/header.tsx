import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import classNames from 'classnames';
import { getFavoriteOffers } from '../../utils/offer';
import { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';

type HeaderProps = {
  isHiddenUserInfo?: boolean;
}

function Header({ isHiddenUserInfo }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userName = useAppSelector((state) => state.userName);
  const offers: Offer[] = useAppSelector((state) => state.offers);

  const isAuthUser = authorizationStatus === AuthorizationStatus.Auth;
  const logoLinkClassName = classNames('header__logo-link', { 'header__logo-link--active': !isHiddenUserInfo });

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={logoLinkClassName} to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            (isHiddenUserInfo)
              ?
              null
              :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {
                      (isAuthUser)
                        ?
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">{userName}</span>
                          <span className="header__favorite-count">{getFavoriteOffers(offers).length}</span>
                        </Link>
                        :
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </Link>
                    }
                  </li>
                  {
                    (isAuthUser)
                      ?
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={AppRoute.Main}>
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                      :
                      null
                  }
                </ul>
              </nav>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
