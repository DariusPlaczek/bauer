import React from "react";
import { useSelector } from "react-redux";

import WarehouseContainer from "../WarehouseContainer";
import { addToSell } from "../../../../../function/redux/trade/redux";

function PlayerWarehouse() {
  const reduxPWCount = useSelector((state) => state.reduxPWCount);

  return (
    <>
      <h4>Player Warehouse</h4>
      <WarehouseContainer
        keyValue="WC"
        reduxCount={reduxPWCount}
        dispatchProp={addToSell}
      />
    </>
  );
}

export default PlayerWarehouse;
