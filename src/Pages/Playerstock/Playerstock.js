import React from "react";
import { useSelector } from "react-redux";

import InteriorWarehouseDetail from "../../Components/InteriorWarehouseDetail/InteriorWarehouseDetail";
import "./Playerstock.css";

function Playerstock() {
  const playerData = useSelector((state) => state.reduxPlayerData);

  const addToCart = (event) => {
    console.log(event);
  }

  return (
    <div className="player-warehouse-container">
      <div className="quader-bottom-connection player-warehouse-title">
        <div className="inner-frame-container player-warehouse-title-name">
          <h5>SPIELERLAGER</h5>
        </div>
      </div>
      <div className="quader-out-frame-container player-warehouse">
        <div className="col-50 hr-horizontal">
          {playerData.stockProducts &&
            playerData.stockProducts.map((value) => (
              <InteriorWarehouseDetail
                id={value.customID}
                keyID={value.productID}
                productName={value.productName}
                count={value.count}
                price={value.basicPrice}
                onChange={addToCart}
              />
            ))}
        </div>
        <div className="col-50">
          <div className="inner-frame-container custom-warehouse"></div>
        </div>
      </div>
    </div>
  );
}

export default Playerstock;
