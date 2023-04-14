import React from "react";
import { MapContainer } from "react-leaflet";
import { useState } from "react";

//Map kapsayıcısının render olduğu component
function MapWrapper({ children }) {
  const [center] = useState([39.886479, 32.568294]);
  return (
      <MapContainer
        zoomControl={false}
        center={center}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "100vh", zIndex: 0 , width:"100%"}}     
      >
        {children}
      </MapContainer>

  );
}

export default MapWrapper;
