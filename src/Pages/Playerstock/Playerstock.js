import React from "react";

import "./Playerstock.css";

function Playerstock() {
  return (
    <div className="player-warehouse-container">
    <div className="quader-bottom-connection">
        <div
          className="inner-framed-container inner-framed"
          style={{ width: "200px", padding: "0 25px"}}
        >
               <h4>Spielerlager</h4>
        </div>
      </div>
    <div className="quader-out-frame-container" style={{ width: "100%", height: "100%" }}>
    </div>
  </div>
  );
}

export default Playerstock;
