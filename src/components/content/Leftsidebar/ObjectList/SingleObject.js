import React from "react";
//import { useSelector } from "react-redux";

import useConvert from '../../../../function/GameMoney/useConvert'

function SingleObject(props) {

  const { title, price, count } = props;
 // const sellMulit = useSelector((state) => state.reduxDate.sellMultiplikat)
 
  const { pfennig, schilling, pfund } = useConvert(price)


  return (
    <div className="SingleObject-container">
      <p>{`${title}`}</p>
      <p>{`PD:${pfund} | S:${schilling} | PF:${pfennig} `}</p>
      <p>{`${count}`}</p>
    </div>
  );
}

export default SingleObject;
