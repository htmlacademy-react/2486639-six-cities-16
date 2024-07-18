type LocationProps = {
  city: string;
  isActive: boolean;
}

function Location({ city, isActive }: LocationProps): JSX.Element {
  let className: string = 'locations__item-link tabs__item';
  if (isActive) {
    className += ' tabs__item--active';
  }
  return (
    <li className="locations__item">
      <a className={className} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Location;
