import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type LeafletISSMapProps = {
  latitude: number;
  longitude: number;
};

const LeafletISSMap: React.FC<LeafletISSMapProps> = ({
  latitude,
  longitude,
}: LeafletISSMapProps) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>ISS is here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletISSMap;
