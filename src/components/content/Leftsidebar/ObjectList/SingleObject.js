import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {useConversion}  from '../../../../directories'
import {changeCWC} from '../../../../function/redux/cityWarehouseCount/redux'

function SingleObject(props) {

  const { id, title, price, count, onClick } = props;
  const warehouseCount = useSelector((state) => state.reduxCWCount)
  const dispatch = useDispatch();
  const { pfennig, schilling, pfund } = useConversion(price)
  

  return (
    <div className="SingleObject-container">
        <p>{`${title}`}</p>
        <h5>{count}</h5>
        <h6>PD: {pfund} | SG: {schilling} | PG: {pfennig} </h6>
        <button id={id} onClick={() => onClick([id, title, price])}>ADD {title} to card</button> 

        {/* <p>{warehouseCount[title]}</p>
      <button onClick={() => dispatch(changeCWC({name: title, count: 1}))}>CLICK ME</button> */}
      <br />
    </div>
  );
}

export default SingleObject;


function name(params) { 
  const schilling = Math.floor((params % 1000 % 20) / 12);
  return schilling
}