import { ONE_STAR_WIDTH } from '../../const';

type OfferRatingProps = {
  classNamePrefix: string;
  rating: number;
  isShowText?: boolean;
}

function OfferRating({ classNamePrefix, rating, isShowText = false }: OfferRatingProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * ONE_STAR_WIDTH}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isShowText ? <span className="offer__rating-value rating__value">{rating}</span> : null}
    </div>
  );
}

export default OfferRating;
