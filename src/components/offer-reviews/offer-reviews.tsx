import OfferReviewItem from '../offer-review-item/offer-review-item';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import { Review } from '../../types/review';

type OfferHostProps = {
  reviewsCount: number;
  reviews: Review[];
  isShowForm?: boolean;
}

function OfferReviews({ reviewsCount, reviews, isShowForm = false }: OfferHostProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      {
        !reviewsCount
          ?
          null
          :
          <ul className="reviews__list">
            {
              reviews.map((review) => (
                <OfferReviewItem key={review.id} review={review} />
              ))
            }
          </ul>
      }
      {isShowForm ? <OfferReviewsForm /> : null}
    </section>
  );
}

export default OfferReviews;
