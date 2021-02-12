import React from "react";
import { useSelector, useDispatch } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade";
import { addToSell, removeToPlayerStock, addToCityStock } from "../../../";

function PlayerStock() {
  const { stockProducts, playerMoney } = useSelector(
    (state) => state.reduxPlayerData
  );
  const cityStock = useSelector(
    (state) => state.reduxCityStoreData.stockProducts
  );
  const { sell, sumSell } = useSelector((state) => state.reduxTrade);

  const dispatch = useDispatch();

  const trading = () => {
    for (const playerIterator of sell) {
      for (const cityIterator of cityStock) {
        if (cityIterator.productName === playerIterator.productName) {
          dispatch(
            removeToPlayerStock({
              money: playerMoney + sumSell,
              stock: [cityIterator.productName, parseInt(playerIterator.count)],
            })
          );

          dispatch(
            addToCityStock([
              cityIterator.productName,
              parseInt(playerIterator.count),
            ])
          );

        }
      }
    }
  };

  return (
    <>
      <h1>PlayerStock</h1>
      <StockList
        stock={stockProducts}
        dispatchProps={addToSell}
        customID="idPS"
      />
      <Trade tradeStock={sell} totalSum={sumSell} />
      <button onClick={trading}>VERKAUFEN</button>
    </>
  );
}

export default PlayerStock;
