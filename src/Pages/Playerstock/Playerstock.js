import React from "react";

import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail"
import "./Playerstock.css";

function Playerstock() {

  return (
    <div className="player-warehouse-container">
      <div className="quader-bottom-connection player-warehouse-title">
        <div className="inner-frame-container player-warehouse-title-name">
          <h5>SPIELERLAGER</h5>
        </div>
      </div>
      <div className="quader-out-frame-container player-warehouse">
        <div className="col-50 hr-horizontal">
          <InteriorWarehouseDetail title="Erdbeere" count="20" price="20" />
        </div>
        <div className="col-50">
          <div className="inner-frame-container custom-warehouse"></div>
        </div>
      </div>
    </div>
  );
}

export default Playerstock;
