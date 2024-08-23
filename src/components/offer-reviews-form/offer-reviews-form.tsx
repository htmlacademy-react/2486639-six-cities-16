import React, { useState } from 'react';
import { ReviewTextLength, ReviewRating } from '../../const';

function OfferReviewsForm(): JSX.Element {
  const [rating, setRating] = useState<number>(ReviewRating.DEFAULT);
  const [text, setText] = useState<string>('');

  const textLength = text.length;
  const isSubmitButtonEnabled = (rating >= ReviewRating.MIN) && (textLength >= ReviewTextLength.MIN) && (textLength <= ReviewTextLength.MAX);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review {rating} - {text}</label>
      <div className="reviews__rating-form form__rating">
        {
          ReviewRating.STAR_VALUES.map((item) => {
            const key: string = `${item}-stars`;

            return (
              <React.Fragment key={key} >
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={item}
                  id={key}
                  type="radio"
                  onChange={
                    (evt) => {
                      setRating(Number(evt.target.value));
                    }
                  }
                />
                <label htmlFor={key} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={
          (evt) => {
            setText(evt.target.value);
          }
        }
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitButtonEnabled}>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
