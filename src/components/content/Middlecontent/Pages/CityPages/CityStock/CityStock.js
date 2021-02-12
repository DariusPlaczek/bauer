import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade";
import {removeToCityStock, addToPlayerStock, addToBuy} from "../../../"


function CityStock() {
  const { stockProducts } = useSelector((state) => state.reduxCityStoreData);
  const playerMoney = useSelector((state) => state.reduxPlayerData.playerMoney);
  const playerStock = useSelector((state) => state.reduxPlayerData.stockProducts);
  const { buy, sumBuy } = useSelector((state) => state.reduxTrade);

  const [disabledButton, setDisabledButton] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (playerMoney < sumBuy) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [sumBuy, playerMoney]);

  const trading = () => {

    for (const cityIterator of buy) {
      for (const playerIterator of playerStock) {
        if (cityIterator.productName === playerIterator.productName) {
          dispatch(addToPlayerStock({money: playerMoney - sumBuy, stock: [playerIterator.productName, parseInt(cityIterator.count)]}));
          dispatch(removeToCityStock([playerIterator.productName, parseInt(cityIterator.count)]));
        }
      }
    }
  };

  return (
    <>
      <h1>Stadtlager</h1>
      <StockList
        stock={stockProducts}
        dispatchProps={addToBuy}
        customID="idCW"
      />
      <Trade tradeStock={buy} totalSum={sumBuy} />
      <button disabled={disabledButton} onClick={trading}>
        KAUFEN
      </button>
    </>
  );
}

export default CityStock;
