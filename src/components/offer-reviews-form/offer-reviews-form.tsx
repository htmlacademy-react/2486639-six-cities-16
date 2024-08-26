import { FormEvent, Fragment, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setReviewPostingRequestStatus } from '../../store/action';
import { postOfferReviewAction } from '../../store/api-actions';
import { ReviewTextLength, ReviewRating, RequestStatus } from '../../const';

function OfferReviewsForm(): JSX.Element {
  const reviewPostingRequestStatus = useAppSelector((state) => state.reviewPostingRequestStatus);
  const offerId = useAppSelector((state) => state.detailOffer.id);
  const dispatch = useAppDispatch();

  const fromRef = useRef<HTMLFormElement | null>(null);
  const [rating, setRating] = useState<number>(ReviewRating.DEFAULT);
  const [comment, setComment] = useState<string>('');
  const [formInputsDisable, setFormInputsDisable] = useState<boolean>(false);

  const commentLength = comment.length;
  const isSubmitButtonEnabled = (rating >= ReviewRating.MIN) && (commentLength >= ReviewTextLength.MIN) && (commentLength <= ReviewTextLength.MAX);

  console.log('reviewPostingRequestStatus', reviewPostingRequestStatus);
  console.log('formInputsDisable', formInputsDisable);
  console.log('rating', rating);
  console.log('commentLength', commentLength);

  useEffect(() => {
    setFormInputsDisable(reviewPostingRequestStatus === RequestStatus.Loading);

    if (reviewPostingRequestStatus === RequestStatus.Success) {
      dispatch(setReviewPostingRequestStatus(RequestStatus.Idle));

      if (fromRef.current !== null) {
        fromRef.current.reset();
      }
    }
  }, [reviewPostingRequestStatus, dispatch]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postOfferReviewAction({ offerId, comment, rating }));
  };

  const handleFormReset = () => {
    setRating(ReviewRating.DEFAULT);
    setComment('');
  };

  return (
    <form ref={fromRef} className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ReviewRating.HINTS
            .map((hint, index) => {
              const keyIndex = ReviewRating.HINTS.length - index;
              const key: string = `${keyIndex}-stars`;

              return (
                <Fragment key={key} >
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value={keyIndex}
                    id={key}
                    type="radio"
                    disabled={formInputsDisable}
                    onChange={
                      (evt) => {
                        setRating(Number(evt.target.value));
                      }
                    }
                  />
                  <label htmlFor={key} className="reviews__rating-label form__rating-label" title={hint}>
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </Fragment>
              );
            })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={formInputsDisable}
        onChange={
          (evt) => {
            setComment(evt.target.value);
          }
        }
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitButtonEnabled || formInputsDisable}>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
