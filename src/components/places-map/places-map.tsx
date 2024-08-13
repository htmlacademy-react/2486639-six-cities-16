import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer, OfferId } from '../../types/offer';
import { ClassNamePrefix } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type PlacesMapProps = {
  classNamePrefix: ClassNamePrefix;
  offers: Offer[];
  selectedOfferId: OfferId;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function PlacesMap({ classNamePrefix, offers, selectedOfferId }: PlacesMapProps): JSX.Element {
  const mapRef = useRef(null);
  // т.к. проверка на пустой список предложений в родительском компоненте,
  // то для координат города можно взять коодинаты из первого предложения
  const map = useMap(mapRef, offers[0].city);

  useEffect(
    () => {
      if (map) {
        const markerLayer = layerGroup().addTo(map);
        offers.forEach((offer) => {
          const { latitude: lat, longitude: lng } = offer.location;
          const marker = new Marker({
            lat,
            lng
          });

          marker
            .setIcon(
              offer.id === selectedOfferId
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);

        });

        return () => {
          map.removeLayer(markerLayer);
        };
      }
    },
    [map, offers, selectedOfferId]);

  //return <div style={{ width: '300px', height: '100px' }} ref={mapRef}></div>;

  /**/
  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef} />
  );
  /**/

  /*
  return (
    <div style={{ width: '400px', height: '500px' }} ref={mapRef}></div>
  );
  */

  /*
  return (
    <section className="cities__map" >
      <div  className="cities__map" style={{ width: '400px', height: '200px' }} ref={mapRef}></div>
    </section >
  );
  */

  /*
  return (
    <section className={`${classNamePrefix}__map map`} >
      <div style={{ width: '400px', height: '200px' }} ref={mapRef}></div>
    </section >
  );
  */

  /*
return (
  <section className={`${classNamePrefix}__map map`} >
    <div style={{ width: '400px', height: '500px' }} ref={mapRef} />
  </section >
);
*/
}

export default PlacesMap;
