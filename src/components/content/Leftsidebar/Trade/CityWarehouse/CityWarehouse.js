import React from "react";
import { useSelector } from "react-redux";

import WarehouseContainer from "../WarehouseContainer";
import { addToBuy } from "../../../../../function/redux/trade/redux";

function CityWarehouse() {
  const reduxCWCount = useSelector((state) => state.reduxCWCount);

  return (
    <>
      <h4>City Warehouse</h4>
      <WarehouseContainer
        keyValue="WC"
        reduxCount={reduxCWCount}
        dispatchProp={addToBuy}
      />
    </>
  );
}

export default CityWarehouse;
