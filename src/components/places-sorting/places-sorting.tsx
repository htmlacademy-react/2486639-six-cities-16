import { useState } from 'react';
import classNames from 'classnames';
import { PlacesSortingTypes } from '../../const';

type PlacesSortingProps = {
  activeSortingType: PlacesSortingTypes;
  onSortingTypeChange: (sortingType: PlacesSortingTypes) => void;
}

function PlacesSorting({ activeSortingType, onSortingTypeChange }: PlacesSortingProps): JSX.Element {
  const [isSortingTypesShown, setIsSortingTypesShown] = useState<boolean>(false);
  const ulClassName = classNames(
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
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClassName}>
        {
          Object.values(PlacesSortingTypes).map(
            (sortingType: PlacesSortingTypes) => {
              const liClassName = classNames(
                'places__option',
                { 'places__option--active': sortingType === activeSortingType }
              );

              return (
                <li
                  key={sortingType}
                  className={liClassName}
                  tabIndex={0}
                  onClick={
                    () => {
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
