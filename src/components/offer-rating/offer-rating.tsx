import Rating from '../rating/rating';

type OfferRatingProps = {
  rating: number;
}

function OfferRating({ rating }: OfferRatingProps): JSX.Element {
  return (
    <Rating
      ratingClassName="offer__rating"
      starsClassName="offer__stars"
      rating={rating}
      isShowText
    />
  );
}

export default OfferRating;
