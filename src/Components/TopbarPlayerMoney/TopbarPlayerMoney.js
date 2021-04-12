import React from "react";
import { useSelector } from "react-redux";

import { useConversion } from "../../directories";
import "./TopbarPlayerMoney.css";

function TopbarPlayerMoney() {
  const { playerMoney } = useSelector((state) => state.reduxPlayerData);
  const { pfennig, schilling, pfund } = useConversion(playerMoney);

  return (
        <div className="inner-frame-container player-money-container" >
          <div className="m-pfund-icon"><h5>{pfund}</h5></div>
          <div className="m-schilling-icon"><h5>{schilling}</h5></div>
          <div className="m-pfennig-icon"><h5>{pfennig}</h5></div>
        </div>
  );
}

export default TopbarPlayerMoney;
