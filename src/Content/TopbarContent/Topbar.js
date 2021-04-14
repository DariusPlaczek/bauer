import React from "react";

import TopbarPlayerMoney from "../../Components/TopbarPlayerMoney/TopbarPlayerMoney";
import GameClock from "../../Components/GameClock/GameClock";

import Login from "../Login/Login"

import "./Topbar.css";

function Topbar() {
  return (
      <div className="quader-out-frame-container topbar-container" >
        <div className="col-33 left-align">
          <TopbarPlayerMoney />
        </div>
        <div className="col-33 center-align">
          <GameClock />
        </div>
        <div className="col-33 right-align">
          <Login />
        </div>
      </div>
  );
}

export default Topbar;
