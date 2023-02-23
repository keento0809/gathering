import React, { useRef, useState, useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Marker, InfoWindow } from "@react-google-maps/api";
import Link from "next/link";
import { MapProps } from "../../types/map";

type MarkerProps = {
  placeLatLng: {
    lat: number;
    lng: number;
  };
  placeName: string;
};

const Map = ({ onClick, onIdle, children, style, ...options }: MapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <div ref={ref} style={style}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </div>
  );
};

const MapWithMarker = ({ placeLatLng, placeName }: MarkerProps) => {
  const [zoom, setZoom] = useState(14);
  const [centerPosition, setCenterPosition] =
    useState<google.maps.LatLngLiteral>({
      lat: placeLatLng.lat,
      lng: placeLatLng.lng,
    });
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenterPosition(m.getCenter()!.toJSON());
  };

  useEffect(() => {
    setCenterPosition({
      lat: placeLatLng.lat,
      lng: placeLatLng.lng,
    });
  }, []);

  const onMarkerClick = () => {
    setShowingInfoWindow(!showingInfoWindow);
  };
  const onInfoWindowClose = () => {
    setShowingInfoWindow(false);
  };

  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}>
      <Map
        zoom={zoom}
        center={centerPosition}
        onIdle={onIdle}
        style={{ width: "100%", height: "236px" }}
      >
        <Marker position={placeLatLng} clickable onClick={onMarkerClick}>
          {showingInfoWindow && (
            <InfoWindow
              position={{
                lat: placeLatLng.lat,
                lng: placeLatLng.lng,
              }}
              zIndex={20}
              onCloseClick={onInfoWindowClose}
            >
              <div>
                <h2 className="text-xs">{placeName}</h2>
                <Link
                  href={`https://maps.google.com/maps?q=loc:${placeLatLng.lat},${placeLatLng.lng}`}
                >
                  <a target="_blank">
                    <span className="text-primary pt-1 outline-none">
                      View on Google Map
                    </span>
                  </a>
                </Link>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </Map>
    </Wrapper>
  );
};

export default MapWithMarker;
