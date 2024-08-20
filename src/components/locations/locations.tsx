import { CityName } from '../../types/city';
import { CITIES_NAMES } from '../../const';

type LocationsProps = {
  currentCityName: CityName;
  //onCityNameClick: (cityName: CityName) => void;
}

function Locations({ currentCityName/*, onCityNameClick*/ }: LocationsProps): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              CITIES_NAMES.map((city) => {
                let className: string = 'locations__item-link tabs__item';
                if (city === currentCityName) {
                  className += ' tabs__item--active';
                }

                return (
                  <li
                    className="locations__item"
                    key={city}
                    onClick={
                      (/*evt: SyntheticEvent*/) => {

                        //console.log(evt);

                        //cityName: CityName;
                        //onCityNameClick(cityName);
                      }
                    }
                  >
                    <a className={className} href="#">
                      <span>{city}</span>
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
