type OfferBookmarkButtonProps = {
  isActive: boolean;
}

function OfferBookmarkButton({ isActive }: OfferBookmarkButtonProps): JSX.Element {
  const caption = isActive ? 'In bookmarks' : 'To bookmarks';
  const activeClassName = isActive ? 'place-card__bookmark-button--active' : '';

  return (
    <button
      className={`place-card__bookmark-button button ${activeClassName}`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{caption}</span>
    </button>
  );
}

export default OfferBookmarkButton;
