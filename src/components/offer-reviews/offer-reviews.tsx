import { Review } from '../../types/review';
import OfferReviewItem from '../offer-review-item/offer-review-item';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';

type OfferHostProps = {
  reviews: Review[];
  isShowForm?: boolean;
}

function OfferReviews({ reviews, isShowForm = false }: OfferHostProps): JSX.Element {
  const reviewsCount: number = reviews.length;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      {
        !reviewsCount
          ?
          null
          :
          <ul className="reviews__list">
            {reviews.map((review) => <OfferReviewItem key={review.id} review={review} />)}
          </ul>
      }
      {isShowForm ? <OfferReviewsForm /> : null}
    </section>
  );
}

export default OfferReviews;
