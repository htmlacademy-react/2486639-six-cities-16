import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NotFoundPage from '../not-found-page/not-found-page';
import Header from '../../components/header/header';
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
import { APP_TITLE, ClassNamePrefix, OfferComponentsCount } from '../../const';

function OfferPage(): JSX.Element {
  //! временные данные
  const nearOffers: Offer[] = [];//![mockOffers];
  const reviews: Review[] = [];//mockReviews;
  //

  const params = useParams();
  const offers = nearOffers.slice(0, OfferComponentsCount.NEAR_OFFERS);
  const offerId: OfferId | undefined = params.id;

  if (!offerId) {
    return <NotFoundPage />;
  }

  const detailOffer: DetailOffer | undefined = getById([] as DetailOffer[]/*//! mockDetailOffers*/, offerId);

  if (!detailOffer) {
    return (<NotFoundPage />);
  }

  const offerReviews = reviews
    .sort((firstReview: Review, secondReview: Review) => compareStringDate(firstReview.date, secondReview.date))
    .slice(0, OfferComponentsCount.REVIEWS);

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
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images.slice(0, OfferComponentsCount.IMAGES)} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <Mark className="offer__mark" /> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton classNamePrefix={classNamePrefix} isActive={isFavorite} isBigButton />
              </div>
              <Rating classNamePrefix={classNamePrefix} rating={rating} />
              <OfferFeatures offerType={type} bedrooms={bedrooms} maxAdults={maxAdults} />
              <Price classNamePrefix={classNamePrefix} price={price} />
              <OfferInside goods={goods} />
              <OfferHost host={host} description={description} />
              <OfferReviews reviewsCount={offerReviews.length} reviews={offerReviews} />
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
