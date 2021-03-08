//defining requirements from express router
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

//allowing client access to only public files
app.use(express.static("./client/public"));

//set up route to serve all restaurant names
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/restaurants.json"));
});

//set up route to serve specific restaurant info .json
app.get("/api/:restaurantId", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.restaurantId}.json`));
});

//set up route to serve specific restaurant info .html
app.get("/api/restaurant/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

//set up catch all route, 404 page .html
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

//set up server to listen for requests
app.listen(port, () => {
  console.log("listening on port", port);
});
