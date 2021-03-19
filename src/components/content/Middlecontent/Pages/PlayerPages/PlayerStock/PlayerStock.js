import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//import productList from "../../../../../../config/productList"
import StockList from "../../../Function/Stock/StockList";
import Trade from "../../../Function/Stock/Trade";
import { addToSell, removeToPlayerStock, addToCityStock, resetTradeList } from "../../../";


function PlayerStock() {
  const { stockProducts, playerMoney } = useSelector((state) => state.reduxPlayerData);
  const cityStock = useSelector((state) => state.reduxCityStoreData.stockProducts);
  const { sell, sumSell } = useSelector((state) => state.reduxTrade);

  const [disabledButton, setDisabledButton] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  //const [hidden, setHidden] = useState(true)

  const dispatch = useDispatch();


  useEffect(() => {
    if (sumSell === 0 ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [sumSell, playerMoney]);

  useEffect(() => {
    if (resetInput) {
      setResetInput(false);
    }
  }, [resetInput]);

  const hidden = () => {
    if (sumSell !== 0) {
      return (
        <>
          <Trade tradeStock={sell} totalSum={sumSell} />
          <button disabled={disabledButton} onClick={trading}>
            VERKAUFEN
          </button>
        </>
      );
    }
    return;
  };

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

          dispatch(addToCityStock([cityIterator.productName, parseInt(playerIterator.count)]));
        }
      }
    }

    setResetInput(true);
    dispatch(resetTradeList());
  };

  return (
    <>
      <h1>SPIELERLAGER</h1>
      <StockList
        stock={stockProducts}
        dispatchProps={addToSell}
        reset={resetInput}
        customID="idPS"
      />
      {hidden()}
    </>
  );
}

export default PlayerStock;
