import { useContext } from "react";
import { useMap } from "react-leaflet";
import MainContext from "../Context/MainContext";
// Şehir seçildiğinde haritanın seçilen koordinatlara uçması için 
function FlyToMap() {
  const { location } = useContext(MainContext);

  const data = location.split(",").map(parseFloat);
  const map = useMap();

  map.flyTo(data, 7);
  return null;
}

export default FlyToMap;
