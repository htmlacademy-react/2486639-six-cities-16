import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/city';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(
    () => {
      if (mapRef.current && !isRenderedRef.current) {
        const { latitude: lat, longitude: lng, zoom } = city.location;
        const instance = new Map(
          mapRef.current,
          {
            center: {
              lat,
              lng
            },
            zoom
          }
        );

        //! все в констаны и сравнить с ТЗ
        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
        );

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
