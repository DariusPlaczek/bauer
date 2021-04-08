import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade";
import { removeToCityStock, addToPlayerStock, addToBuy, resetTradeList } from "../../.."


function CityStock() {
  const { stockProducts } = useSelector((state) => state.reduxCityStoreData);
  const playerMoney = useSelector((state) => state.reduxPlayerData.playerMoney);
  const playerStock = useSelector((state) => state.reduxPlayerData.stockProducts);
  const { buy, sumBuy } = useSelector((state) => state.reduxTrade);

  const [disabledButton, setDisabledButton] = useState(false);
  const [resetInput, setResetInput] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (playerMoney < sumBuy || sumBuy === 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [sumBuy, playerMoney]);

  useEffect(() => {
    if (resetInput) {
      setResetInput(false)
    }
  }, [resetInput])

  const trading = () => {

    for (const cityIterator of buy) {
      for (const playerIterator of playerStock) {
        if (cityIterator.productName === playerIterator.productName) {
          dispatch(addToPlayerStock({money: playerMoney - sumBuy, stock: [playerIterator.productName, parseInt(cityIterator.count)]}));
          dispatch(removeToCityStock([playerIterator.productName, parseInt(cityIterator.count)]));
        }
      }
    }

    setResetInput(true)
    dispatch(resetTradeList())
  };

  const hidden = () => {
    if (sumBuy !== 0) {
      return (
      <>
        <Trade tradeStock={buy} totalSum={sumBuy} />
        <button disabled={disabledButton} onClick={trading}>VERKAUFEN</button>
      </>
      )
    }
    return
  }


  return (
    <>
      <h1>Stadtlager</h1>
      <StockList
        stock={stockProducts}
        dispatchProps={addToBuy}
        reset={resetInput}
        customID="idCW"
      />
      {hidden()}
    </>
  );
}

export default CityStock;
