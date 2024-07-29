import { ONE_STAR_WIDTH } from '../../const';

type RatingProps = {
  //place-card__rating place-card__stars
  //offer__rating offer__stars
  ratingClassName: string;
  starsClassName: string;
  rating: number;
  isShowText?: boolean;
}

function Rating({ ratingClassName, starsClassName, rating, isShowText = false }: RatingProps): JSX.Element {
  return (
    <div className={`${ratingClassName} rating`}>
      <div className={`${starsClassName} rating__stars`}>
        <span style={{ width: `${Math.round(rating) * ONE_STAR_WIDTH}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isShowText ? <span className="offer__rating-value rating__value">{rating}</span> : null}
    </div>
  );
}

export default Rating;
