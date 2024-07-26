import { ONE_STAR_WIDTH } from '../../const';

type OfferRatingProps = {
  classNamePrefix: string; //! place-card / offer
  rating: number;
}

function OfferRating({ classNamePrefix, rating }: OfferRatingProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * ONE_STAR_WIDTH}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div >
  );
}

export default OfferRating;
