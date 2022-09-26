import React, { useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { locationObj, MapProps } from "../../models/model";
import useDeepCompareEffect from "use-deep-compare-effect";
import { MapContextType, useMapContext } from "../../context/MapContext";

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

      if (onClick) {
        map.addListener("click", onClick);
      }

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
            return React.cloneElement(child, {});
          }
        })}
      </div>
    </>
  );
};

const TestMap = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(11);
  const [centerPosition, setCenterPosition] =
    React.useState<google.maps.LatLngLiteral>({
      lat: 49.2846717,
      lng: -123.1200546,
    });
  const [latLngObj, setLatLngObj] = useState<locationObj>();
  const mapCtx = useMapContext();

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
    const lat = e.latLng!.toJSON().lat;
    const lng = e.latLng!.toJSON().lng;
    mapCtx?.handleSetCenter(lat, lng);
  };

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenterPosition(m.getCenter()!.toJSON());
  };

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}
      render={render}
    >
      <Map
        onClick={onClick}
        onIdle={onIdle}
        center={centerPosition}
        zoom={zoom}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "8px",
        }}
      />
    </Wrapper>
  );
};

export default TestMap;

export async function getStaticProps() {
  return {
    props: {
      data: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    },
  };
}
