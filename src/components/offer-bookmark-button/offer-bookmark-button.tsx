type OfferBookmarkButtonProps = {
  isActive: boolean;
}

function OfferBookmarkButton({ isActive }: OfferBookmarkButtonProps): JSX.Element {
  return (
    <button
      className={`place-card__bookmark-button button ${isActive ? 'place-card__bookmark-button--active' : ''}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default OfferBookmarkButton;
