import React from "react";
import { useSelector } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import { addToSell } from "../../../../../../function/redux/trade/redux";

function PlayerStock() {
  const { stockProducts } = useSelector((state) => state.reduxPlayerData);

  return (
    <div>
      <h1>PlayerStock</h1>
      <StockList stock={stockProducts} dispatchProps={addToSell} customID="idPS" />
    </div>
  );
}

export default PlayerStock;
