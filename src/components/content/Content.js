import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Content.css";

import Leftsidebar from "./Leftsidebar/Leftsidebar";
import Rightsidebar from "./Rightsidebar/Rightsidebar";

import Home from "./Middlecontent/Home/Home";
import PlayerStock from "./Middlecontent/Pages/PlayerPages/PlayerStock/PlayerStock";
import CityStock from "./Middlecontent/Pages/CityPages/CityStock/CityStock";

function Content() {
  return (
    <div className="main-container">
      <Router>

        <Leftsidebar />

        <div className="middlecontent-container">
          <Switch>
            <Route path="/playerstock">
              <PlayerStock />
            </Route>
            <Route path="/citystock">
              <CityStock />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        {/* <Rightsidebar /> */}
        
      </Router>
    </div>
  );
}

export default Content;
