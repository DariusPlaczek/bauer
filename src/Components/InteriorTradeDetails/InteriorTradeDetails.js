import React from "react";
import { useConversion } from "../../directories";

function InteriorTradeDetails(props) {
  const { id, productName, count, price } = props;
  const { pfennig, schilling, pfund } = useConversion(price);

  return (
    <div key={id} className="col-50-row">
      {/* <div className="inner-frame-container custom-warehouse"> */}
      <div className="quader-trader-container custom-warehouse">
        <div className="wp-name-money">
          <div className="wp-name">
            <h5 className="trade-title">{productName}</h5>
          </div>
        </div>
        <div className="wp-details">
          <div className="warehouse-product-image">
            <img className="trade-image" src="Images/weizen.png" alt="test" />
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
    </div>
  );
}

export default InteriorTradeDetails;
