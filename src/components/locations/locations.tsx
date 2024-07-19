import Location from '../location/location';
import { CITIES, DEFAULT_CITY } from '../../const';

function Locations(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => <Location key={city} city={city} isActive={city === DEFAULT_CITY} />
            )}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Locations;
