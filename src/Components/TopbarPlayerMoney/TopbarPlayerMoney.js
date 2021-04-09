import React from "react";
import { useSelector } from "react-redux";

import { useConversion } from "../../directories";
import "./TopbarPlayerMoney.css";

function TopbarPlayerMoney() {
  const { playerMoney } = useSelector((state) => state.reduxPlayerData);
  const { pfennig, schilling, pfund } = useConversion(playerMoney);

  return (
        <div className="inner-frame-container player-money-container" >
          <div className="pfund-icon">{pfund}</div>
          <div className="schilling-icon">{schilling}</div>
          <div className="pfennig-icon">{pfennig}</div>
        </div>
  );
}

export default TopbarPlayerMoney;
