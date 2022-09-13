import React from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { MapProps, latLngProps } from "../../models/model";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Marker, InfoWindow } from "@react-google-maps/api";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
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
    <>
      <div ref={ref} style={style}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { map });
          }
        })}
      </div>
    </>
  );
};

const MarkerA: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const MapWithMarker = ({ placeLatLng, placeName }: latLngProps) => {
  const [zoom, setZoom] = React.useState(14);
  const [centerPosition, setCenterPosition] =
    React.useState<google.maps.LatLngLiteral>({
      lat: placeLatLng.lat,
      lng: placeLatLng.lng,
    });
  const [showingInfoWindow, setShowingInfoWindow] = React.useState(false);

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenterPosition(m.getCenter()!.toJSON());
  };

  React.useEffect(() => {
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
        style={{ width: "100%", height: "400px", borderRadius: "8px" }}
      >
        {/* <MarkerA position={placeLatLng} /> */}
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
                {/* <a
                  target="_blank"
                  href={`https://maps.google.com/maps?q=loc:${placeLatLng.lat},${placeLatLng.lng}`}
                  className="outline-none"
                >
                  <span className="text-red-500 pt-1 outline-none">
                    View on Google Map
                  </span>
                </a> */}
              </div>
            </InfoWindow>
          )}
        </Marker>
      </Map>
    </Wrapper>
  );
};

export default MapWithMarker;
