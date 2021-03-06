import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./playerTrade.css";

import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail";
import InteriorTradeDetails from "../../Components/InteriorTradeDetails/InteriorTradeDetails";
import useTradeList from "../../function/useHooks/useTradeList";

import { removeToPlayerStock } from "../../function/redux/playerConfig/redux";
import { addToCityStock } from "../../function/redux/cityStockConfig/redux"
import ColFifty from "../../Content/Cols/ColFifty/ColFifty";
import MediumMoney from "../../Components/MediumMoney/MediumMoney";
import TradeTopContent from "../../Content/TradeTopContent/TradeTopContent";

function PlayerTrade() {
  const playerData = useSelector((state) => state.reduxPlayerData);
  const [tradeList, totalSum, addCart, resetList] = useTradeList();
  const [resetCount, setResetCount] = useState(false);
  const [emptyList, setEmptyList] = useState(true);

  const dispatch = useDispatch();

  const sell = () => {
    dispatch(removeToPlayerStock({ money: totalSum, stock: tradeList }));
    dispatch(addToCityStock(tradeList));
    resetList();
    setResetCount(() => (resetCount ? false : true));
  };

  useEffect(() => {
    tradeList.length === 0 ? setEmptyList(true) : setEmptyList(false);
  }, [tradeList]);

  return (
    <>

      <ColFifty title="SPIELERLAGER">
        {playerData.stockProducts &&
          playerData.stockProducts.map((value) => (
            <InteriorWarehouseDetail
              key={`warePlayer-${value.customID}`}
              id={value.customID}
              keyID={value.productID}
              productName={value.productName}
              count={value.count}
              price={value.basicPrice}
              resetCount={resetCount}
              onChange={(event) => addCart(event)}
            />
          ))}
      </ColFifty>

      <ColFifty title="HANDEL">
        <div className="trade-container">
          <TradeTopContent>
            <button className="button blue" onClick={sell} disabled={emptyList}>Verkaufen</button>
            <MediumMoney sum={totalSum} />
          </TradeTopContent>
          <div className="col-100-row">
            {tradeList &&
              tradeList.map((value) => (
                <InteriorTradeDetails
                  key={`tradePlayer-${value.productName}`}
                  productName={value.productName}
                  count={value.count}
                  price={value.price}
                />
              ))}
          </div>
        </div>
      </ColFifty>
    </>
  );
}

export default PlayerTrade;
