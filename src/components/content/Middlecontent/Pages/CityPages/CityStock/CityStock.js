import React from 'react'
import { useSelector } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade"
import { addToBuy } from "../../../../../../function/redux/trade/redux";

function CityStock() {
  const { stockProducts } = useSelector((state) => state.reduxCityStoreData);
  const {buy, sumBuy} = useSelector(state => state.reduxTrade);

  return (
    <>
      <h1>Stadtlager</h1>
      <StockList stock={stockProducts} dispatchProps={addToBuy} customID="idCW" />
      <Trade tradeStock={buy} totalSum={sumBuy}/>
    </>
  )
}

export default CityStock
