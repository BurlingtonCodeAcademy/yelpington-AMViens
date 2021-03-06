//importing dependencies from react and react-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import NotFound from "./components/404";
import "./App.css";

//main App function renders all components and routes to different pages switch method
function App() {
  return (
    <div id="main">
      <BrowserRouter>
        <h1 id="header">Yelpington</h1>
        <h2 id="headerTwo">Restaurants of Waterbury Vermont</h2>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
