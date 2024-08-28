import { useAppDispatch } from '../../hooks';
import { changeCityName } from '../../store/action';
import { CityName } from '../../types';
import { AppRoute, CITIES_NAMES } from '../../const';
import { Link } from 'react-router-dom';

type LocationsProps = {
  currentCityName: CityName;
}

function Locations({ currentCityName }: LocationsProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              CITIES_NAMES.map((cityName) => {
                let className: string = 'locations__item-link tabs__item';
                if (cityName === currentCityName) {
                  className += ' tabs__item--active';
                }

                return (
                  <li className="locations__item" key={cityName} >
                    <Link
                      to={AppRoute.Main}
                      className={className}
                      onClick={
                        () => {
                          dispatch(changeCityName(cityName));
                        }
                      }
                    >
                      <span>{cityName}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default Locations;
