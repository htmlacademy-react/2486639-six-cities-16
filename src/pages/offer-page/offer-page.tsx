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
import OffersMap from '../../components/offers-map/offers-map';
import { OfferId, Offer, DetailOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { getById } from '../../utils/util';
import { compareStringDate } from '../../utils/date';
import { mockOffers, mockDetailOffers } from '../../mocks/offers';
import { mockReviews } from '../../mocks/reviews';
import {
  APP_TITLE, AuthorizationStatus, ClassNamePrefix,
  IMAGES_SHOW_COUNT, NEAR_OFFERS_SHOW_COUNT, REVIEWS_SHOW_COUNT
} from '../../const';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
}

function OfferPage({ authorizationStatus }: OfferPageProps): JSX.Element {
  //! временные данные
  const nearOffers: Offer[] = mockOffers;
  const reviews = mockReviews;
  //

  const params = useParams();
  const offers = nearOffers.slice(0, NEAR_OFFERS_SHOW_COUNT);
  const offerId: OfferId | undefined = params.id;

  if (!offerId) {
    return <NotFoundPage />;
  }

  const detailOffer: DetailOffer | undefined = getById(mockDetailOffers, offerId);

  if (!detailOffer) {
    return (<NotFoundPage />);
  }

  const offerReviews = reviews
    .sort((firstReview: Review, secondReview: Review) => compareStringDate(firstReview.date, secondReview.date))
    .slice(0, REVIEWS_SHOW_COUNT);

  const {
    title,
    type,
    price,
    city,
    isFavorite,
    isPremium,
    rating,
    description,
    bedrooms,
    goods,
    host,
    images,
    maxAdults
  } = detailOffer;
  const classNamePrefix: ClassNamePrefix = ClassNamePrefix.Offer;

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
                <BookmarkButton classNamePrefix={classNamePrefix} isActive={isFavorite} />
              </div>
              <Rating classNamePrefix={classNamePrefix} rating={rating} />
              <OfferFeatures offerType={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <Price classNamePrefix={classNamePrefix} price={price} />
              <OfferInside goods={goods} />
              <OfferHost host={host} description={description} />
              <OfferReviews
                reviewsCount={offerReviews.length}
                reviews={offerReviews}
                isShowForm={authorizationStatus === AuthorizationStatus.Auth}
              />
            </div>
          </div>
          <OffersMap
            classNamePrefix={classNamePrefix}
            startLocation={city.location}
            offers={offers}
            activeOfferId={offerId}
          />
        </section>
        <div className="container">
          <NearPlaces offers={offers} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
