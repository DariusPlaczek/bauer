import React  from "react";
import { useSelector } from "react-redux";

import {useConversion}  from '../../directories'
import './playerTrade.css'


import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail";
import InteriorTradeDetails from "../../Components/InteriorTradeDetails/InteriorTradeDetails";
import useTradeList from "../../function/useHooks/useTradeList";

function PlayerTrade() {
  const playerData = useSelector((state) => state.reduxPlayerData);
  const [tradeList, totalSum, addCart] = useTradeList();

  const { pfennig, schilling, pfund } = useConversion(totalSum)

  return (
    <>
      <div className="col-50">
        <div className="player-warehouse-container">
          <div className="quader-bottom-connection player-warehouse-title">
            <div className="inner-frame-container player-warehouse-title-name">
              <h5>SPIELERLAGER</h5>
            </div>
          </div>
          <div className="quader-out-frame-container player-warehouse">
            <div className="col-100 ">
              {playerData.stockProducts &&
                playerData.stockProducts.map((value) => (
                  <InteriorWarehouseDetail
                    key={`warePlayer-${value.customID}`}
                    id={value.customID}
                    keyID={value.productID}
                    productName={value.productName}
                    count={value.count}
                    price={value.basicPrice}
                    onChange={(event) => addCart(event)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-50">
        <div className="player-warehouse-container">
          <div className="quader-bottom-connection player-warehouse-title">
            <div className="inner-frame-container player-warehouse-title-name">
              <h5>HANDEL</h5>
            </div>
          </div>
          <div className="quader-out-frame-container player-warehouse">
            <div className="trade-container">
              <div className="col-100">
                <div className="quader-trade-wrapper">
                  <button className="button blue">Verkaufen</button>
                  <div className="inner-frame-container trade-inner-frame-container">
                    <div className="m-pfund-icon">
                      <h5>{pfund}</h5>
                    </div>
                    <div className="m-schilling-icon">
                      <h5>{schilling}</h5>
                    </div>
                    <div className="m-pfennig-icon">
                      <h5>{pfennig}</h5>
                    </div>
                  </div>
                </div>
                <hr className="una" />
              </div>
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
          </div>
        </div>
      </div>

    </>
  );
}

export default PlayerTrade;
