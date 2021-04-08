import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "../TopbarContent/Topbar";
import Navigation from "../Navigation/Navigation";
import LeftContent from "../LeftContent/LeftContent";
import MainCenterContent from "../CenterContent/MainCenterContent";
import ShowDate from "../../Components/ShowDate/ShowDate";

import PlayerStock from "../../Pages/Playerstock/Playerstock";

import "./Maincontent.css";
// import "./HomeMiddle.css";

// import ContentButtons from "../../../Alt/ContentButtons/ContentButtons"

// import Leftsidebar from "../../../Alt/content/Leftsidebar/Leftsidebar";
// import Rightsidebar from "../../../Alt/content/Rightsidebar/Rightsidebar";

// import Home from "../../../Alt/content/Middlecontent/Home/Home";

// import PlayerStock from "../../../Alt/content/Middlecontent/Pages/PlayerPages/PlayerStock/PlayerStock";
// import CityStock from "../../../Alt/content/Middlecontent/Pages/CityPages/CityStock/CityStock";

function Maincontent() {
  return (
    <Router>
      <div className="main-container">
        <div className="main-topbar-container">
          <Topbar />
        </div>
        <div className="main-middle-container">
          <div className="main-middle-navigation-container">
            <Navigation />
          </div>
          <div className="main-middle-left-container">
            <Switch>
              <Route path="/playerstock">
                <PlayerStock />
              </Route>
              <Route path="/citystock">
                <LeftContent />
              </Route>
              <Route exact path="/"></Route>
            </Switch>
          </div>
          <div className="main-middle-center-container">
            <ShowDate />
            <MainCenterContent />
          </div>
          <div className="main-middle-right-container"></div>
          <div className="main-middle-navigation-container"></div>
        </div>

        {/*


        <ShowDate />
        <div className="middlecontent-container">
          <MainCenterContent />
        </div>

        <Switch>
          <Route path="/playerstock">
            <PlayerStock />
          </Route>
          <Route path="/citystock">
            <LeftContent />
          </Route>
         <Route exact path="/">

          </Route>
        </Switch>
      </Router> */}
        {/* <Rightsidebar /> */}
      </div>
    </Router>
  );
}

export default Maincontent;
