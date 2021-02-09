import React from "react";
import { useSelector } from "react-redux";

import WarehouseContainer from "../WarehouseContainer";
import {useConversion} from '../../../directories'

import { addToSell } from "../../../function/redux/trade/redux";

function PlayerWarehouse() {
  const reduxPlayerConfig = useSelector((state) => state.reduxPlayerConfig);
  const {sumSell} = useSelector((state) => state.reduxTrade)

  const { pfennig, schilling, pfund } = useConversion(sumSell)

  return (
    <>
      <h4>Player Warehouse</h4>
      <WarehouseContainer
        keyValue="WC"
        reduxCount={reduxPlayerConfig}
        dispatchProp={addToSell}
      />
      <br />
      <h5>Sum:</h5>
      <h6>PD: {pfund} | SG: {schilling} | PG: {pfennig} </h6>
      <br />
    </>
  );
}

export default PlayerWarehouse;
