import MapWrapper from './MapWrapper'
import DynamicTileLayer from './DynamicTileLayer'
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import FlyToMap from '../FlyToMap';
import { cityData } from '../Data/adressData';

function Map() {
  //Mapin diğer bileşenleri ile render olduğu component
  const basemapUrl = {
    dark: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  };

  //harita üzerindeki markerlar için icon 
  const customIcon = new L.Icon({
    iconUrl: require("../../Assets/location.svg").default,
    iconSize: new L.Point(40, 47),
  });
  return (
    <MapWrapper>
      <DynamicTileLayer url={basemapUrl.dark}/>
      <MarkerClusterGroup chunkedLoading>
            {cityData.map((address, index) => (
              <Marker
                key={index}
                position={[address.latitude, address.longitude]}
                title="test"
                icon={customIcon}
              >
                <Popup>{address.name}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          <FlyToMap />
    </MapWrapper>
  )
}

export default Map