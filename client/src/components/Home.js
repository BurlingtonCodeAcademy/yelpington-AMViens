//importing dependencies from react and react-router-dom
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

//function uses useEffect to fetch restaurants list from json file
function Home(props) {
  const [restaurantNames, setRestaurantNames] = useState([]);

  useEffect(() => {
    if (restaurantNames.length === 0) {
      fetch("/api")
        .then((res) => res.json())
        .then((restaurantList) => {
          setRestaurantNames(restaurantList);
        });
    }
  });
  //rendering of Map component and restaurant lists making them clickable with the link tag
  return (
    <div id="main">
      <ul id="listContainer">
        {restaurantNames.map((name, index) => {
          return (
            <h3 key={index}>
              <Link id="listLink" to={`/restaurant/${name}`}>
                {name.replace("-", " ")}
              </Link>
            </h3>
          );
        })}
      </ul>
      <div id="mapContainer">
        <Map />
      </div>
    </div>
  );
}

export default Home;
