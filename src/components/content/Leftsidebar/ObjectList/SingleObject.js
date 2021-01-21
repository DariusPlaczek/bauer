import React from "react";
import { useSelector } from "react-redux";

function SingleObject(props) {
  const { title, price, count } = props;
  const sellMulit = useSelector((state) => state.reduxDate.sellMultiplikat)
  return (
    <div className="SingleObject-container">
      <p>{`Titel: ${title}`}</p>
      <p>{`Preis: ${(price * sellMulit).toFixed(2)}`}</p>
      <p>{`Anzahl: ${count}`}</p>
    </div>
  );
}

export default SingleObject;
