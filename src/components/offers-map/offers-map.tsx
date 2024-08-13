import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer, OfferId } from '../../types/offer';
import { ClassNamePrefix, UrlMarker, IconMarkerSize, IconAnchorSize } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';

type OffersMapProps = {
  classNamePrefix: ClassNamePrefix;
  offers: Offer[];
  selectedOfferId: OfferId;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DEFAULT,
  iconSize: [IconMarkerSize.WIDTH, IconMarkerSize.HEIGHT],
  iconAnchor: [IconAnchorSize.WIDTH, IconAnchorSize.HEIGHT]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
  iconSize: [IconMarkerSize.WIDTH, IconMarkerSize.HEIGHT],
  iconAnchor: [IconAnchorSize.WIDTH, IconAnchorSize.HEIGHT]
});

function OffersMap({ classNamePrefix, offers, selectedOfferId }: OffersMapProps): JSX.Element {
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
          const customIcon = (offer.id === selectedOfferId) ? currentCustomIcon : defaultCustomIcon;
          const marker = new Marker({ lat, lng });

          marker.setIcon(customIcon).addTo(markerLayer);
        });

        return () => {
          map.removeLayer(markerLayer);
        };
      }
    },
    [map, offers, selectedOfferId]);

  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef} />
  );
}

export default OffersMap;
