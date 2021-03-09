import React, { useState, useEffect } from "react";
import { useConversion } from "../../../../../directories";


function StockObject(props) {

  const { id, productName, price, count, onChange, reset, rarity } = props;
  const { pfennig, schilling, pfund } = useConversion(price * rarity);
  const [useCount, setUseCount] = useState(0);


  useEffect(() => {
    if (reset) {
      setUseCount(0);
    }
    return;
  }, [reset]);

  const addition = (event) => {
    if (count !== useCount) {
      setUseCount((prev) => prev + 1);
      onChange([id, productName, event.target.value, price]);
    }
  };

  const subtract = (event) => {
    if (useCount !== 0 && count !== 0) {
      setUseCount((prev) => prev - 1);
      onChange([id, productName, event.target.value, price]);
    }
  };

  const OnWheelFunction = (event) => {
    if (event.deltaY < 0) {
      if (count !== useCount) {
        onChange([id, productName, useCount + 1, price]);
        setUseCount((prev) => prev + 1)
      }
    } else {
      if (useCount !== 0 && count !== 0) {
        onChange([id, productName, useCount - 1, price]);
        setUseCount((prev) => prev - 1)
      }
    }

  }

  return (
    <div className="SingleObject-container" >
      <p onWheel={(event) => OnWheelFunction(event)}>
        <button value={useCount - 1} onClick={(event) => subtract(event)}>
          -
        </button>
        {`${productName}`}
        <button value={useCount + 1} onClick={(event) => addition(event)}>
          +
        </button>
      </p>

      <h5>{count}</h5>
      <h6>
        PD: {pfund} | SG: {schilling} | PG: {pfennig}{" "}
      </h6>
      <br />
    </div>
  );
}

export default StockObject;