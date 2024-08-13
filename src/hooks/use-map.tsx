import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../types/city';
import { Leaflet } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(
    () => {
      if (mapRef.current && !isRenderedRef.current) {
        const { URL_TEMPLATE, OPTIONS } = Leaflet;
        const { latitude: lat, longitude: lng, zoom } = city.location;
        const mapOptions = {
          center: {
            lat,
            lng
          },
          zoom
        };

        const instance = new Map(mapRef.current, mapOptions);
        const layer = new TileLayer(URL_TEMPLATE, OPTIONS);

        instance.addLayer(layer);
        setMap(instance);
        isRenderedRef.current = true;
      }
    },
    [mapRef, city]
  );

  return map;
}

export default useMap;
