import React, {useState} from "react";

import { useConversion } from "../../directories";

function InteriorWarehouseDetail(props) {
  const { id, keyID, productName, count, price, onChange } = props;
  const { pfennig, schilling, pfund } = useConversion(price);

  const [useCount, setUseCount] = useState(0);

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

  return (
    <div key={id} className="inner-frame-container custom-warehouse">
      <div className="wp-name-money">
        <div className="wp-name">
          <h6>{productName}</h6>
        </div>
        <div className="wp-buttons" onWheel={(event) => OnWheelFunction(event)}>
          <button className="horizontal-button-plus" value={useCount + 1} onClick={(event) => addition(event)}></button>
          <button className="horizontal-button-minus" value={useCount - 1} onClick={(event) => subtract(event)}></button>
        </div>
      </div>
      <div className="wp-details">
        <div className="warehouse-product-image">
          <img src="Images/weizen.png" alt="test" />
        </div>
        <div className="wp-flexible-container wp-details-product">
          <h6>Anzahl: {count} </h6>
          <div className="wp-money">
            <div className="s-pfund-icon">
              <h6>{pfund}</h6>
            </div>
            <div className="s-schilling-icon">
              <h6>{schilling}</h6>
            </div>
            <div className="s-pfennig-icon">
              <h6>{pfennig}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteriorWarehouseDetail;
