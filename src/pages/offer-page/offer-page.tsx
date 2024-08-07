import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import Price from '../../components/price/price';
import OfferFeatures from '../../components/offer-features/offer-features';
import { OfferId, Offer, DetailOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { getById } from '../../utils/util';
import { APP_TITLE, AuthorizationStatus, ClassNamePrefix, IMAGES_SHOW_COUNT } from '../../const';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
  detailOffers: DetailOffer[];
  nearOffers: Offer[];
  reviews: Review[];
}

function OfferPage({ authorizationStatus, detailOffers, nearOffers, reviews }: OfferPageProps): JSX.Element {
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
    rating,
    //description,
    bedrooms,
    //goods,
    //host,
    images,
    maxAdults
  } = detailOffer;

  return (
    <div className="page">
      <Helmet>
        <title>{`${APP_TITLE}: offer`}</title>
      </Helmet>
      <HeaderAuth />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images.slice(0, IMAGES_SHOW_COUNT)} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <Mark className="offer__mark" /> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton classNamePrefix={ClassNamePrefix.OFFER} isActive={isFavorite} />
              </div>
              <Rating classNamePrefix={ClassNamePrefix.OFFER} rating={rating} />
              <OfferFeatures offerType={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <Price classNamePrefix={ClassNamePrefix.OFFER} price={price} />
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
