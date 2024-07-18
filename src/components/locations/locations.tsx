import Location from '../location/location';
import { Setting } from '../../const';

function Locations(): JSX.Element {
  const { CITIES: cities, DEFAULT_CITY: defaultCity } = Setting;
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <Location key={city} city={city} isActive={city === defaultCity} />
            )}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Locations;
