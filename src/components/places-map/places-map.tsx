import { Offer } from '../../types/offer';
import { ClassNamePrefix } from '../../const';

type PlacesMapProps = {
  classNamePrefix: ClassNamePrefix;
  offers: Offer[];
}

function PlacesMap({ classNamePrefix, offers }: PlacesMapProps): JSX.Element {
  //const isOffersEmpty: boolean = !offers.length;

  return (
    <section className={`${classNamePrefix}__map map`}><div>{classNamePrefix} {offers.length}</div></section>
  );
}

export default PlacesMap;
