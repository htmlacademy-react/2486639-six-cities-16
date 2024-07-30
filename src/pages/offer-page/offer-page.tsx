import { useParams } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import NotFoundPage from '../not-found-page/not-found-page';
import HeaderAuth from '../../components/header/header-auth';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferMark from '../../components/offer-mark/offer-mark';
import OfferBookmarkButton from '../../components/offer-bookmark-button/offer-bookmark-button';
import Rating from '../../components/rating/rating';
import OfferHost from '../../components/offer-host/offer-host';
import OfferReviews from '../../components/offer-reviews/offer-reviews';
import NearPlaces from '../../components/near-places/near-places';
import { firstLetterToUppercase, getById } from '../../utils/util';
import { AuthorizationStatus } from '../../const';

type OfferProps = {
  authorizationStatus: AuthorizationStatus;
  offers: Offer[];
  reviews: Review[];
}

function OfferPage({ authorizationStatus, offers, reviews }: OfferProps): JSX.Element {
  const params = useParams();
  const offerId: string | undefined = params.id; //! тест... а как получить в App и не передавать все предложения?

  if (!offerId) {
    return <NotFoundPage />;
  }

  const offer: Offer | undefined = getById(offers, offerId);

  if (!offer) {
    return (<NotFoundPage />);
  }

  const {
    title,
    type,
    price,
    //city,
    previewImage,
    isFavorite,
    isPremium,
    rating
  } = offer;

  //! может понадобится...
  //const ratingValue = reviews.reduce((ratingTotal, { rating }) => ratingTotal + rating, 0) / reviews.length;

  return (
    <div className="page">
      <HeaderAuth />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={Array.from({ length: 6 }, () => previewImage)} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <OfferMark /> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <OfferBookmarkButton isActive={isFavorite} />
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
          <NearPlaces offers={offers.slice(0, 3)} /> {/*//! Может нужно только 3 то в константы? поискать в ТЗ*/}
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
