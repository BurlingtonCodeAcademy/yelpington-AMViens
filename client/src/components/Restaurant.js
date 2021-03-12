//restaurant.js is restaurant page showing specific information for each restaurant per url path
//importing dependencies from react and react-leaflet
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import ChangeView from './ChangeView'

//function to fetch, using useEffect to get specific restaurant info from json file
function Restaurant(props) {
  const [restaurantPage, setRestaurantPage] = useState("");
  const [center, setCenter] = useState([44.34072, -72.7531167])
  const [position, setPosition] = useState([44.34072, -72.7531167])

  useEffect(() => {
    if (!restaurantPage) {
      fetch(`/api/restaurant/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restaurantInfo) => {//setting new variables for marker position and center map on marker
          setRestaurantPage(restaurantInfo);
          setPosition([restaurantInfo.lat, restaurantInfo.lon])
          setCenter(position[0], position[1])
        });
    }
  });
  //rendering restaurant info and new map instance with single marker
  //new center and zoom function allowed by ChangeView functional component
  return (
    <div>
      <a href='/'><button id="backButton">Back to Home</button></a>
      <div id="infoContainer">
        <h2 style={{color: "black", fontFamily: "cursive"}}>{restaurantPage.name}</h2>
        <h3 style={{fontFamily: "fantasy"}}>{restaurantPage.address}</h3>
        <h3 style={{fontFamily: "fantasy"}}>{restaurantPage.phone}</h3>
        <h3 style={{fontFamily: "fantasy"}}>{restaurantPage.hours}</h3>
        <h3 style={{fontFamily: "fantasy"}}>{restaurantPage.notes}</h3>
      </div>
      <MapContainer
        id="restaurantMap"
        center={center}
        zoom={18}
        scrollWheelZoom={false}
        zoomControl={false}
        touchZoom={false}
        keyboard={false}
        dragging={false}
        style={{ height: "450px", width: "750px", marginRight: "10vw", border: "solid violet 5px", borderRadius: "25%" }}//ChangeView function below allows for map manipulation
      >
          <ChangeView center={[position[0], position[1]]}/>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
}

export default Restaurant;
