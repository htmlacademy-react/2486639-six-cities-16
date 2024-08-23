import { CityName } from '../../types/city';
import { CITIES_NAMES } from '../../const';

type LocationsProps = {
  currentCityName: CityName;
  onCityNameClick: (cityName: CityName) => void;
}

function Locations({ currentCityName, onCityNameClick }: LocationsProps): JSX.Element {
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
                    <a
                      className={className}
                      href="#"
                      onClick={
                        (evt: React.MouseEvent<HTMLElement>) => {
                          evt.preventDefault();
                          onCityNameClick(cityName);
                        }
                      }
                    >
                      <span>{cityName}</span>
                    </a>
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
