import React from "react";

function ColFifty({title, children}) {


  return (
    <div className="col-50">
      <div className="player-warehouse-container">
        <div className="quader-bottom-connection player-warehouse-title">
          <div className="inner-frame-container player-warehouse-title-name">
            <h5>{title}</h5>
          </div>
        </div>
        <div className="quader-out-frame-container player-warehouse">
          <div className="col-100 ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ColFifty;
