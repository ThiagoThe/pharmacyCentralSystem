import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useFarm } from "../../contexts/farmContext";
import { PopFarm } from "./PopFarm";
import L from "leaflet";
import iconGPS from "../../.././img/iconGPS.png";

export const Map = () => {
  const geo = useFarm();

  const iconPerson = new L.Icon({
    iconUrl: iconGPS,
    iconSize: [90, 90],
  });

  return (
    <MapContainer center={[-28, -50]} zoom={8} scrollWheelZoom={true}>
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
            icon={iconPerson}
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
