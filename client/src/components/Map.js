// Importing dependencies from react leaflet//

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import React from "react";

//functional component Map of Vermont taking props//

function Map(props) {
  return (
    <MapContainer
      id="mapContainer"
      center={[44.34072, -72.7531167]}
      zoom={15}
      scrollWheelZoom={false} // disabling user interaction with map//
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      keyboard={false}
      dragging={false}
      style={{ height: "450px", width: "750px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[44.34215, -72.74815]} />
      <Marker position={[44.33919, -72.75797]} />
      <Marker position={[44.34199, -72.75956]} />
      <Marker position={[44.33726, -72.75606]} />
      <Marker position={[44.33772, -72.75644]} />
      <Marker position={[44.33809, -72.75631]} />
      <Marker position={[44.3428, -72.76005]} />
      <Marker position={[44.33551, -72.75898]} />
      <Marker position={[44.33604, -72.75646]} />
    </MapContainer>
  );
}

export default Map;
