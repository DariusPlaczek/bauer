import React from "react";
import { useConversion } from "../../directories";

function MediumMoney(props) {

  const {sum} = props;
  const { pfennig, schilling, pfund } = useConversion(sum);

  return (
    <div className="inner-frame-container trade-inner-frame-container">
      <div className="m-pfund-icon">
        <h5>{pfund}</h5>
      </div>
      <div className="m-schilling-icon">
        <h5>{schilling}</h5>
      </div>
      <div className="m-pfennig-icon">
        <h5>{pfennig}</h5>
      </div>
    </div>
  );
}

export default MediumMoney;
