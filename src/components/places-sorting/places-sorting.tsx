import { PlacesSortingTypes } from '../../const';

type PlacesSortongType = typeof PlacesSortingTypes;

function PlacesSorting(): JSX.Element {
  const activeSortingType = PlacesSortingTypes.Popular;

  /*
  console.log(activeSortingType);
  console.log(PlacesSortingTypes[activeSortingType]);
  console.log(Object.entries(PlacesSortingTypes));

  for (const t in PlacesSortingTypes) {
    console.log(t)
    const tt: PlacesSortongType = t as PlacesSortongType;
    console.log(PlacesSortingTypes[tt])
  }
*/

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

          Object.keys(PlacesSortingTypes).map(
            (key) =>
              <li
                key={key}
                className={`places__option ${(key === activeSortingType) ? 'places__option--active' : null}`}
                tabIndex={0}>{PlacesSortingTypes[key]}</li>
          )}
      </ul>
    </form>
  );
}

export default PlacesSorting;
