import React from "react";

import Login from "../Login/Login"
import ShowDate from '../../Components/ShowDate/ShowDate'

import "./MainCenterContent.css";

function MainCenterContent() {
  return (
    <div className="main-center-container">
      <div className="quader-bottom-connection middle-date">
        <div className="inner-frame-container middle-date-name">
          <ShowDate />
        </div>
      </div>
      <div className="quader-out-frame-container middle-container">
        <Login />
      </div>
    </div>
  );
}

export default MainCenterContent;

