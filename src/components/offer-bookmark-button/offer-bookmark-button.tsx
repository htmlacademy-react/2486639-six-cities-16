import BookmarkButton from '../bookmark-button/bookmark-button';

type OfferBookmarkButtonProps = {
  isActive: boolean;
}

function OfferBookmarkButton({ isActive }: OfferBookmarkButtonProps): JSX.Element {
  return (
    <BookmarkButton
      buttonClassName="offer__bookmark-button"
      iconClassName="offer__bookmark-icon"
      iconWidth="31"
      iconHeight="33"
      activeClassName="offer__bookmark-button--active"
      isActive={isActive}
    />
  );
}

export default OfferBookmarkButton;
