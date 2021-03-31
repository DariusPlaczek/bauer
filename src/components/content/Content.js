import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "./Content.css";

import Leftsidebar from "./Leftsidebar/Leftsidebar";
import Rightsidebar from "./Rightsidebar/Rightsidebar";

import Home from "./Middlecontent/Home/Home";
import PlayerStock from "./Middlecontent/Pages/PlayerPages/PlayerStock/PlayerStock";
import CityStock from "./Middlecontent/Pages/CityPages/CityStock/CityStock";

import GameClock from '../GameClock/GameClock';
import DateForm from './Assets/DateForm/DateForm';
import Money from './Topbar/Money/Money'

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
        <div className="middlecontent-container">
          <div className="date-container"></div>
          <DateForm />

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
