import { TileLayer } from "react-leaflet";

function DynamicTileLayer({ url }) {
  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={url}
    />
  );
}

export default DynamicTileLayer;
