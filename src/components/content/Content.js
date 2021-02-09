import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Content.css";

import Leftsidebar from "./Leftsidebar/Leftsidebar";
import Middlecontent from "./Middlecontent/Middlecontent";
import Rightsidebar from "./Rightsidebar/Rightsidebar";
import PlayerWarehouse from "../Trade/PlayerWarehouse/PlayerWarehouse";
import CityWarehouse from "../Trade/CityWarehouse/CityWarehouse";

function Content() {
  return (
    <Router>
      <div className="main-container">
        <Leftsidebar />
        <div className="middlecontent-container">
          <Switch>
            <Route path="/playerwarehouse">
              <PlayerWarehouse />
            </Route>
            <Route path="/citywarehouse">
              <CityWarehouse />
            </Route>
            <Route exact path="/">
              <Middlecontent />
            </Route>
          </Switch>
        </div>
        <Rightsidebar />
      </div>
    </Router>
  );
}

export default Content;
