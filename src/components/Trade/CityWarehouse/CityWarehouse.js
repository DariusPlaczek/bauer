import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import WarehouseContainer from "../WarehouseContainer";
import { useConversion } from "../../../directories";

import { addToBuy } from "../../../function/redux/trade/redux";

function CityWarehouse() {
  const [enoughtMoney, setEnoughtMoney] = useState(true);

  const reduxCWCount = useSelector((state) => state.reduxCWCount);
  const { sumBuy } = useSelector((state) => state.reduxTrade);
  const { playerMoney } = useSelector((state) => state.reduxMoney);

  const { pfennig, schilling, pfund } = useConversion(sumBuy);

  useEffect(() => {
    if (playerMoney < sumBuy) {
      setEnoughtMoney(false);
    } else {
      setEnoughtMoney(true);
    }
  }, [playerMoney, sumBuy]);

  return (
    <>
      <h4>City Warehouse</h4>
      <WarehouseContainer
        keyValue="WC"
        reduxCount={reduxCWCount}
        dispatchProp={addToBuy}
      />
      <br />
      <h5>Sum:</h5>
      <h6>
        PD: {pfund} | SG: {schilling} | PG: {pfennig}
      </h6>
      <br />
      <button disabled={!enoughtMoney}>Buy</button>
    </>
  );
}

export default CityWarehouse;
