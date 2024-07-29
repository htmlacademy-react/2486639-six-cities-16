import Rating from '../rating/rating';

type PlaceCardRatingProps = {
  rating: number;
}

function PlaceCardRating({ rating }: PlaceCardRatingProps): JSX.Element {
  return (
    <Rating
      ratingClassName="place-card__rating"
      starsClassName="place-card__stars"
      rating={rating}
    />
  );
}

export default PlaceCardRating;
