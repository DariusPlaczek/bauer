import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SingleObject from "../../ObjectList/SingleObject";
import { addToSell } from "../../../../../function/redux/trade/redux";

function PlayerWarehouse() {
  const wares = useSelector((state) => state.reduxWare.products);
  const reduxPWCount = useSelector((state) => state.reduxPWCount);

  const dispatch = useDispatch()

  const addToCart = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h4>Player Warehouse</h4>
      {wares.map((value, key) => (
        <SingleObject
          id={value.idPW}
          key={value.idPW}
          title={value.name}
          count={reduxPWCount[value.name]}
          price={value.price.basicPrice}
          onClick={addToCart}
        />
      ))}
    </div>
  );
}

export default PlayerWarehouse;
