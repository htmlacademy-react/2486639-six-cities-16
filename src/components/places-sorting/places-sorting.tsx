import { PlacesSortingTypes, DEFALUT_PALCES_SORTING_TYPE } from '../../const';

function PlacesSorting(): JSX.Element {
  const activeSortingType = DEFALUT_PALCES_SORTING_TYPE;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.values(PlacesSortingTypes).map(
            (sortingType: PlacesSortingTypes) => (
              <li
                key={sortingType}
                className={`places__option ${(sortingType === activeSortingType) ? 'places__option--active' : null}`}
                tabIndex={0}
              >
                {sortingType}
              </li>
            )
          )
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
