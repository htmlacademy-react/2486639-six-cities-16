import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer, OfferId } from '../../types/offer';
import { ClassNamePrefix } from '../../const';
import { Marker, layerGroup } from 'leaflet';

type PlacesMapProps = {
  classNamePrefix: ClassNamePrefix;
  offers: Offer[];
  selectedOfferId: OfferId;
}

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
            /*
            .setIcon(
              offer.id === selectedOfferId
                ? currentCustomIcon
                : defaultCustomIcon
            )
            */
            .addTo(markerLayer);

        });

        return () => {
          map.removeLayer(markerLayer);
        };
      }
    },
    [map, offers, selectedOfferId]);

  return (
    <div style={{ width: '400px', height: '500px' }} ref={mapRef}></div>
  );

  /*
  return (
    <section className={`${classNamePrefix}__map map`} >
      <div style={{ width: '400px', height: '500px' }} ref={mapRef}></div>
    </section >
  );
  */

  /*
  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef}/>
  );
  */
}

export default PlacesMap;
