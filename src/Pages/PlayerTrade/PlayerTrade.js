import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail";
import InteriorTradeDetails from "../../Components/InteriorTradeDetails/InteriorTradeDetails";
import PlayerStock from "../Playerstock/Playerstock";
import Sellstock from "../Sellstock/Sellstock";

function PlayerTrade() {
  const playerData = useSelector((state) => state.reduxPlayerData);

  const [tradeList, setTradeList] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    // setTradeList(Object.values(cart))
    setTradeList(Object.values(cart).filter((value) => value.count > 0));
    // const result = Object.values(cart).filter(value => value.count > 0)
    // console.log(result);
  }, [cart]);

  const addToCart = (event) => {
    if (cart[event[0].id] === undefined) {
      setCart({
        ...cart,
        [event[0].id]: {
          productName: event[0].productName,
          count: parseInt(event[0].count),
          price: event[0].price,
        },
      });
    } else {
      setCart({
        ...cart,
        [event[0].id]: {
          productName: event[0].productName,
          count: parseInt(event[0].count),
          price: event[0].price * parseInt(event[0].count, 10),
        },
      });
    }
  };

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
                    onChange={addToCart}
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
                      <h5>999</h5>
                    </div>
                    <div className="m-schilling-icon">
                      <h5>999</h5>
                    </div>
                    <div className="m-pfennig-icon">
                      <h5>999</h5>
                    </div>
                  </div>
                </div>
                <hr />
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
      {/* <PlayerStock />
      <Sellstock /> */}
    </>
  );
}

export default PlayerTrade;
