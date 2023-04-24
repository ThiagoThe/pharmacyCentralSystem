import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useFarm } from "../../contexts/farmContext";
import { PopFarm } from "./PopFarm";
import L from "leaflet";
import iconGPS from "../../.././img/iconGPS.png";

export const Map = ({ farmacias }) => {
  const geo = useFarm();

  const iconPerson = new L.Icon({
    iconUrl: iconGPS,
    iconSize: [90, 90],
  });

  return (
    <MapContainer center={[-21, -51]} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {farmacias.length === 0
          ? geo.farmacias.map((farmacia) => (
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
            ))
          : farmacias.map((farmacia) => (
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
