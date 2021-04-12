import React from "react";

import { useConversion } from "../../directories";

function InteriorWarehouseDetail(props) {
  const {title, count, price } = props;

  const { pfennig, schilling, pfund } = useConversion(price);

  return (
    <div className="inner-frame-container custom-warehouse">
      <div className="wp-name-money">
        <div className="wp-name">
          <h6>{title}</h6>
        </div>
        <div className="wp-buttons">
          <div className="horizontal-button-plus"></div>
          <div className="horizontal-button-minus"></div>
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
