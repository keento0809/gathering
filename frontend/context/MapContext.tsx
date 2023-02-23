import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../types/index";

type LocationObj = {
  lat: number;
  lng: number;
};

export interface MapContextType {
  center: LocationObj;
  handleSetCenter: (lat: number, lng: number) => void;
}

const MapContext = createContext<MapContextType | null>(null);

const MapContextProvider = ({ children }: ChildrenProps) => {
  const [center, setCenter] = useState({
    lat: 49.2846717,
    lng: -123.1200546,
  });

  const handleSetCenter = (lat: number, lng: number) => {
    setCenter({
      lat: lat,
      lng: lng,
    });
  };

  const mapContextValue: MapContextType = {
    center,
    handleSetCenter,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};

export function useMapContext() {
  return useContext(MapContext);
}

export default MapContextProvider;
