import { CITIES_NAMES, DEFAULT_CITY } from '../../const';

function Locations(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              CITIES_NAMES.map((city) => {
                let className: string = 'locations__item-link tabs__item';
                if (city === DEFAULT_CITY) {
                  className += ' tabs__item--active';
                }

                return (
                  <li className="locations__item" key={city}>
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
