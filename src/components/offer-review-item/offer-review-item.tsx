import { Review } from '../../types/review';
import Rating from '../rating/rating';

type OfferReviewItemProps = {
  review: Review;
}

function OfferReviewItem({ review }: OfferReviewItemProps): JSX.Element {
  const {
    date,
    user,
    comment,
    rating
  } = review;
  const {
    name,
    avatarUrl
  } = user;

  //! прообразовать дату из Review.date
  //const dateTime = '2019-04-24';
  //const dateString = 'April 2019';
  const dateTime = date;
  const dateString = date;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating
          ratingClassName="reviews__rating"
          starsClassName="reviews__stars"
          rating={rating}
        />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateString}</time>
      </div>
    </li>
  );
}

export default OfferReviewItem;
