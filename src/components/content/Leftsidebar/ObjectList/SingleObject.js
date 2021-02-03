import React from "react";
//import { useSelector } from "react-redux";

import {useConversion}  from '../../../../directories'

function SingleObject(props) {

  const { title, price, count } = props;
 // const sellMulit = useSelector((state) => state.reduxDate.sellMultiplikat)
 
  const { pfennig, schilling, pfund } = useConversion(price)
  
  console.log(name(price));

  return (
    <div className="SingleObject-container">
        <p>{`${title}`}</p>
      <p>{`PD:${pfund} | S:${schilling} | PF:${pfennig} `}</p>
      <p>Preis: {price}</p>
      <p>{`${count}`}</p>
      <br />
      <br />
    </div>
  );
}

export default SingleObject;


function name(params) { 
  const schilling = Math.floor((params % 1000 % 20) / 12);
  return schilling
}