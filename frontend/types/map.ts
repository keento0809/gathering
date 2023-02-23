export interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children?: React.ReactNode;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}
