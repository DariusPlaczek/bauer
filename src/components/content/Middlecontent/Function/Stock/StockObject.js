import React, { useState, useEffect } from "react";
import { useConversion } from "../../../../../directories";

function StockObject(props) {
  const { id, productName, price, count, onChange, reset } = props;
  const { pfennig, schilling, pfund } = useConversion(price);
  const [useCount, setUseCount] = useState(0);

  const onSubmit = (data) => {
    setUseCount(data.target.value);
    onChange([id, productName, data.target.value, price]);
  };

  useEffect(() => {
    if (reset) {
      setUseCount(0)
    }
    return
  }, [reset])


  return (
    <div className="SingleObject-container">
      <p>{`${productName}`}</p>
      <form>
        <input
          name="age"
          type="number"
          min="0"
          max={count}
          value={useCount}
          onChange={(value) => onSubmit(value)}
        />
      </form>
      <h5>{count}</h5>
      <h6>
        PD: {pfund} | SG: {schilling} | PG: {pfennig}{" "}
      </h6>
      <br />
    </div>
  );
}

export default StockObject;
