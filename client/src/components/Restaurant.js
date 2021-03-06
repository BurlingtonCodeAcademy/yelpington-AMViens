//importing dependencies from react and react-leaflet
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

//function to fetch, using useEffect to get specific restaurant info from json file
function Restaurant(props) {
  const [restaurantPage, setRestaurantPage] = useState("");

  useEffect(() => {
    if (!restaurantPage) {
      fetch(`/api/restaurant/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restaurantInfo) => {
          setRestaurantPage(restaurantInfo);
        });
    }
  });
  //rendering restaurant info and new map with single marker
  return (
    <div>
      <button id="backButton">Back to Home</button>
      <div id="infoContainer">
        <h2>{restaurantPage.name}</h2>
        <h3>{restaurantPage.address}</h3>
        <h3>{restaurantPage.phone}</h3>
        <h3>{restaurantPage.hours}</h3>
        <h3>{restaurantPage.notes}</h3>
      </div>
      <MapContainer
        id="restaurantMap"
        center={[44.34072, -72.7531167]}
        zoom={15}
        scrollWheelZoom={false}
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
        {/* <Marker position={props.position} /> */}
      </MapContainer>
    </div>
  );
}

export default Restaurant;
