import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OfferId, Offer, DetailOffer } from '../../types/offer';
import { Review } from '../../types/review';
import NotFoundPage from '../not-found-page/not-found-page';
import HeaderAuth from '../../components/header/header-auth';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInside from '../../components/offer-inside/offer-inside';
import Mark from '../../components/mark/mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Rating from '../../components/rating/rating';
import OfferHost from '../../components/offer-host/offer-host';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import NearPlaces from '../../components/near-places/near-places';
import { firstLetterToUppercase, getById } from '../../utils/util';
import { APP_TITLE, AuthorizationStatus } from '../../const';

type OfferProps = {
  authorizationStatus: AuthorizationStatus;
  detailOffers: DetailOffer[];
  nearOffers: Offer[];
  reviews: Review[];
}

function OfferPage({ authorizationStatus, detailOffers, nearOffers, reviews }: OfferProps): JSX.Element {
  const params = useParams();
  const offerId: OfferId | undefined = params.id; //! тест... а как получить в App и не передавать все предложения?

  if (!offerId) {
    return <NotFoundPage />;
  }

  const detailOffer: DetailOffer | undefined = getById(detailOffers, offerId);

  if (!detailOffer) {
    return (<NotFoundPage />);
  }

  const {
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating
  } = detailOffer;

  const previewImage = 'https://16.design.htmlacademy.pro/static/hotel/10.jpg'; //! тест

  return (
    <div className="page">
      <Helmet>
        <title>{`${APP_TITLE}: offer`}</title>
      </Helmet>
      <HeaderAuth />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={Array.from({ length: 6 }, () => previewImage)} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <Mark className="offer__mark" /> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton
                  buttonClassName="offer__bookmark-button"
                  iconClassName="offer__bookmark-icon"
                  iconWidth="31"
                  iconHeight="33"
                  activeClassName="offer__bookmark-button--active"
                  isActive={isFavorite}
                />
              </div>
              <Rating
                ratingClassName="offer__rating"
                starsClassName="offer__stars"
                rating={rating}
                isShowText
              />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {firstLetterToUppercase(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside />
              <OfferHost name="Meet the host" />
              <OfferReviews reviews={reviews} isShowForm={authorizationStatus === AuthorizationStatus.Auth} />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers.slice(0, 3)} /> {/*//! Может нужно только 3 то в константы? поискать в ТЗ*/}
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
