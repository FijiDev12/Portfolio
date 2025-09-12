"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, DivIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { renderToStaticMarkup } from "react-dom/server";
import RoomIcon from "@mui/icons-material/Room";

// Create a custom red marker using MUI icon
const redPin = new DivIcon({
  className: "custom-pin",
  html: renderToStaticMarkup(<RoomIcon style={{ color: "red", fontSize: 40 }} />),
  iconSize: [40, 40],
  iconAnchor: [20, 40], // anchor so bottom tip points at location
});

const position: LatLngExpression = [14.0794, 121.1839]; // Sto Tomas, Batangas

export default function FooterMap() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position} icon={redPin}>
        <Popup>We are here!</Popup>
      </Marker>
    </MapContainer>
  );
}
