import React from "react";
import { useSelector } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade"
import { addToSell } from "../../../../../../function/redux/trade/redux";

function PlayerStock() {
  const { stockProducts } = useSelector((state) => state.reduxPlayerData);
  const {sell, sumSell} = useSelector(state => state.reduxTrade);

  return (
    <>
      <h1>PlayerStock</h1>
      <StockList stock={stockProducts} dispatchProps={addToSell} customID="idPS" />
      <Trade tradeStock={sell} totalSum={sumSell}/>
    </>
  );
}

export default PlayerStock;
