import React from "react";
import { useSelector } from "react-redux";

import CityWarehouse from "./CityWarehouse/CityWarehouse";
import PlayerWarehouse from "./PlayerWarehouse/PlayerWarehouse";
import Conversion from "./Conversion";

function Trade() {
  const { sell, buy } = useSelector((state) => state.reduxTrade);

  return (
    <>
      <CityWarehouse />
      <PlayerWarehouse />

      <div>
        <p>sell:</p>
        {sell &&
          sell.map((value, key) => (
            <div key={`sell-${key}`}>
              {value.name} | {value.count} |{" "}
              <Conversion sum={value.count * value.price} />
            </div>
          ))}
      </div>
      <br />
      <div>buy:</div>
      {buy && buy.map((value, key) => (
            <div key={`buy-${key}`}>
              {value.name} | {value.count} |{" "}
              <Conversion sum={value.count * value.price} />
            </div>
          ))}
      <div>gesamt:</div>
    </>
  );
}

export default Trade;
