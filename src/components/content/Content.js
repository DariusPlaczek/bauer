import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Content.css";
import "./HomeMiddle.css";

import Leftsidebar from "./Leftsidebar/Leftsidebar";
import Rightsidebar from "./Rightsidebar/Rightsidebar";

import Home from "./Middlecontent/Home/Home";
import PlayerStock from "./Middlecontent/Pages/PlayerPages/PlayerStock/PlayerStock";
import CityStock from "./Middlecontent/Pages/CityPages/CityStock/CityStock";

import GameClock from "../GameClock/GameClock";
import DateForm from "./Assets/DateForm/DateForm";
import Money from "./Topbar/Money/Money";

function Content() {
  return (
    <div className="main-container">
      <Router>
        {/* <Leftsidebar /> */}
        <div className="topbar">
          <div className="topbar-left"></div>
          <div className="topbar-middle">
            <Money />
          </div>
          <div className="topbar-right"></div>
        </div>

        <GameClock />
        <div className="date-container"></div>
        <DateForm />
        <div className="middlecontent-container">
          <div className="design-middle">
            <div className="top-middle">
              <div className="m-top-left"></div>
              <div className="m-top-middle"></div>
              <div className="m-top-right"></div>
            </div>
            <div className="center-middle">
              <div className="m-center-left"></div>
              <div className="m-center-middle"></div>
              <div className="m-center-right"></div>
            </div>
            <div className="bottom-middle">
              <div className="m-bottom-left"></div>
              <div className="m-bottom-middle"></div>
              <div className="m-bottom-right"></div>
            </div>
          </div>

          <Switch>
            {/* <Route path="/playerstock">
              <PlayerStock />
            </Route>
            <Route path="/citystock">
              <CityStock />
            </Route>
            <Route exact path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>

        {/* <Rightsidebar /> */}
      </Router>
    </div>
  );
}

export default Content;
