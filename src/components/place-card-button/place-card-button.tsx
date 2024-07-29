import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardBookmarkButtonProps = {
  isActive: boolean;
}

function PlaceCardBookmarkButton({ isActive }: PlaceCardBookmarkButtonProps): JSX.Element {
  return (
    <BookmarkButton
      buttonClassName="place-card__bookmark-button"
      iconClassName="place-card__bookmark-icon"
      iconWidth="18"
      iconHeight="19"
      activeClassName="place-card__bookmark-button--active"
      isActive={isActive}
    />
  );
}

export default PlaceCardBookmarkButton;
