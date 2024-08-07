import { BookmarkButtonIconSize, ClassNamePrefix } from '../../const';

type BookmarkButtonProps = {
  classNamePrefix: ClassNamePrefix;
  isActive: boolean;
}

function BookmarkButton({ classNamePrefix, isActive }: BookmarkButtonProps): JSX.Element {
  const className = `${classNamePrefix}__bookmark`;
  const buttonClassName = `${className}-button`;
  const iconClassName = `${className}-icon`;
  const activeButtonClassName = `${buttonClassName}--active`;
  const { width, height } = BookmarkButtonIconSize[classNamePrefix];

  return (
    <button
      className={`${buttonClassName} button ${isActive ? activeButtonClassName : ''}`}
      type="button"
    >
      <svg className={iconClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default BookmarkButton;
