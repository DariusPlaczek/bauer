import React from "react";

function TradeTopContent({children}) {
  return (
    <div className="col-100">
      <div className="quader-trade-wrapper">
        {children}
      </div>
      <hr className="brown" />
    </div>
  );
}

export default TradeTopContent;
