import React from "react";

import MoneyConversion from './MoneyConversion'

function Trade(props) {
  const { tradeStock, totalSum } = props;


  return (
    <>
      {tradeStock &&
        tradeStock.map((value, key) => (
          <div key={`trade-${value.id}-${key}`}>
            <h2>{value.productName}</h2>
            <h3>{value.count}</h3>
            <MoneyConversion value={value.basicPrice * value.count} />
          </div>
        ))}
      Gesamtsumme: <MoneyConversion value={totalSum} />
    </>
  );
}

export default Trade;
