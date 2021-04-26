import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail";
import InteriorTradeDetails from "../../Components/InteriorTradeDetails/InteriorTradeDetails";
import useTradeList from "../../function/useHooks/useTradeList";

import { addToPlayerStock } from "../../function/redux/playerConfig/redux";
import { removeToCityStock } from "../../function/redux/cityStockConfig/redux";
import ColFifty from "../../Content/Cols/ColFifty/ColFifty";
import MediumMoney from "../../Components/MediumMoney/MediumMoney";
import TradeTopContent from "../../Content/TradeTopContent/TradeTopContent";

function CityTrade() {
  const cityData = useSelector((state) => state.reduxCityData);
  const playerMoney = useSelector((state) => state.reduxPlayerData.playerMoney)
  const [tradeList, totalSum, addCart, resetList] = useTradeList();
  const [resetCount, setResetCount] = useState(false);
  const [emptyList, setEmptyList] = useState(true);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(removeToCityStock(tradeList));
    dispatch(addToPlayerStock({ money: totalSum, stock: tradeList }));
    resetList();
    setResetCount(() => (resetCount ? false : true));
  };

  useEffect(() => {

    if (totalSum > playerMoney || tradeList.length === 0 ) {
      setEmptyList(true)
    } else {
      setEmptyList(false)
    }

  }, [totalSum, playerMoney, tradeList])

  return (
    <>
      <ColFifty title="STADTLAGER">
      {cityData.stockProducts &&
          cityData.stockProducts.map((value) => (
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
            <button className="button blue" onClick={add} disabled={emptyList}>
              Kaufen
            </button>
            <MediumMoney sum={totalSum} />
          </TradeTopContent>
          <div className="col-100-row">
          {tradeList &&
              tradeList.map((value) => (
                <InteriorTradeDetails
                  key={`tradeCity-${value.productName}`}
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

export default CityTrade;
