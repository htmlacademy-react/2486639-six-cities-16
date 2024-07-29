type BookmarkButtonProps = {
  buttonClassName: string;
  iconClassName: string;
  iconWidth: string;
  iconHeight: string;
  activeClassName: string;
  isActive: boolean;
}

function BookmarkButton(props: BookmarkButtonProps): JSX.Element {
  const {
    buttonClassName,
    iconClassName,
    iconWidth,
    iconHeight,
    activeClassName,
    isActive
  } = props;

  return (
    <button
      className={`${buttonClassName} button ${isActive ? activeClassName : ''}`}
      type="button"
    >
      <svg className={iconClassName} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
