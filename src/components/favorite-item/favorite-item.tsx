import { Offer } from '../../types/offer';
//import OfferMark from '../offer-mark/offer-mark';

type FavoriteItemProps = {
  cityName: string;
  offers: Offer[];
}

function FavoriteItem({ cityName, offers }: FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      {cityName} {offers.length}
    </li>
  );

  /*
  return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <article className="favorites__card place-card">
            {
              //! временно
              //true ? <OfferMark /> : null
              <OfferMark />
            }
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;180</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">Nice, cozy, warm big bed apartment</a>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>

          <article className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/room-small.jpg" width="150" height="110" alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;80</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">Wood and stone place</a>
              </h2>
              <p className="place-card__type">Room</p>
            </div>
          </article>
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Cologne</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <article className="favorites__card place-card">
            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src="img/apartment-small-04.jpg" width="150" height="110" alt="Place image" />
              </a>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;180</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '100%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#">White castle</a>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>
        </div>
      </li>
  );
  */
}

export default FavoriteItem;
