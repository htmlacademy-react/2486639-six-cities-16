import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, OfferId } from '../../types/offer';
import { Location } from '../../types';
import { ClassNamePrefix, UrlMarker, IconMarkerSize, IconAnchorSize } from '../../const';

type OffersMapProps = {
  classNamePrefix: ClassNamePrefix;
  startLocation: Location;
  offers: Offer[];
  activeOfferId?: OfferId;
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

function OffersMap(props: OffersMapProps): JSX.Element {
  const {
    classNamePrefix,
    startLocation,
    offers,
    activeOfferId = ''
  } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, startLocation);

  useEffect(
    () => {
      if (map) {
        const markerLayer = layerGroup().addTo(map);

        offers.forEach((offer) => {
          const { latitude: lat, longitude: lng } = offer.location;
          const customIcon = (offer.id === activeOfferId) ? currentCustomIcon : defaultCustomIcon;
          const marker = new Marker({ lat, lng });

          marker.setIcon(customIcon).addTo(markerLayer);
        });

        return () => {
          map.removeLayer(markerLayer);
        };
      }
    },
    [map, offers, activeOfferId]);

  return (
    <section className={`${classNamePrefix}__map map`} ref={mapRef} />
  );
}

export default OffersMap;
