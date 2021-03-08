// Importing dependencies from react leaflet//

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import { Link } from 'react-router-dom'

//functional component Map of Vermont taking props//

function Map(props) {

  return (
    <MapContainer
      id="mapContainer"
      center={[44.34072, -72.7531167]}
      zoom={15}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomControl={true}
      touchZoom={true}
      keyboard={true}
      dragging={true}
      style={{ height: "450px", width: "750px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[44.34215, -72.74815]}>
        <Popup>
          <Link to={'/restaurant/hen-of-the-wood'}>Hen of The Wood</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33919, -72.75797]}>
        <Popup>
          <Link to={'restaurant/henders-bake-shop'}>Hender's Bake Shop</Link>
        </Popup>
      </Marker>
      <Marker position={[44.34199, -72.75956]}>
        <Popup>
          <Link to={'/restaurant/maxis'}>Maxi's</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33726, -72.75606]}>
        <Popup>
          <Link to={'/restaurant/prohibition-pig'}>Prohibition Pig</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33772, -72.75644]}>
        <Popup>
          <Link tp={'/restaurant/reservoir'}>The Reservoir</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33803, -72.75572]}>
        <Popup>
          <Link to={'/restaurant/kcs-bagel-cafe'}>KC's Bagel Cafe</Link>
        </Popup>
      </Marker>
      <Marker position={[44.3428, -72.76005]}>
        <Popup>
          <Link to={'/restaurant/zacharys-pizza'}>Zachary's Pizza</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33759, -72.75639]}>
        <Popup>
          <Link to={'/restaurant/allium'}>Allium</Link>
        </Popup>
      </Marker>
      <Marker position={[44.33766, -72.75610]}>
        <Popup>
          <Link to={'/restaurant/blackback-pub'}>Blackback Pub</Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
