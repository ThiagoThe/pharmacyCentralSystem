import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useFarm } from "../../contexts/farmContext";
import { PopFarm } from "./PopFarm";
import L from "leaflet";

export const Map = () => {
  const geo = useFarm();

  return (
    <MapContainer
      center={[-27.59185335, -48.5434751378199]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {geo.farmacias.map((farmacia) => (
          <Marker
            position={
              new L.LatLng(
                farmacia.endereco.latitude,
                farmacia.endereco.longitude
              )
            }
            key={farmacia.id}
          >
            <Popup>
              <PopFarm farmacia={farmacia} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
