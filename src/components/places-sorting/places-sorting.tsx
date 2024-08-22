import { useState } from 'react';
import classNames from 'classnames';
import { PlacesSortingTypes } from '../../const';

type PlacesSortingProps = {
  currentPlacesSortType: PlacesSortingTypes;
  onSortingTypeChange: (sortingType: PlacesSortingTypes) => void;
}

function PlacesSorting({ currentPlacesSortType, onSortingTypeChange }: PlacesSortingProps): JSX.Element {
  const [isSortingTypesShown, setIsSortingTypesShown] = useState<boolean>(false);
  const listClassName = classNames(
    'places__options',
    'places__options--custom',
    { 'places__options--opened': isSortingTypesShown }
  );

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={
          () => {
            setIsSortingTypesShown(!isSortingTypesShown);
          }
        }
      >
        {currentPlacesSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={listClassName}>
        {
          Object.values(PlacesSortingTypes).map(
            (sortingType: PlacesSortingTypes) => {
              const itemClassName = classNames(
                'places__option',
                { 'places__option--active': sortingType === currentPlacesSortType }
              );

              return (
                <li
                  key={sortingType}
                  className={itemClassName}
                  tabIndex={0}
                  onClick={
                    () => {
                      setIsSortingTypesShown(false);
                      onSortingTypeChange(sortingType);
                    }
                  }
                >
                  {sortingType}
                </li>
              );
            }
          )
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
