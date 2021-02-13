import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import StockObject from "./StockObject";

function StockList(props) {
  const { stock, dispatchProps, reset } = props;
  const dispatch = useDispatch();
  const [productsArray, setProductsArray] = useState([]);
  const [newStockList, setNewStockList] = useState([])

  const addToCart = (event) => {
    if (productsArray.length === 0) {
      setProductsArray([{customID: event[0], productName: event[1], count: event[2], price: {basicPrice:event[3]} }])
      return
    }

    let bool = false;
    let integer = 0;

    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].productName.includes(event[1])) {
        integer = i;
        bool = true;
        break;
      }
    }

    if (bool) {
      const cache = productsArray.slice();
      cache[integer].count = event[2];
      setProductsArray(cache);
    } else {
      setProductsArray([...productsArray, {customID: event[0], productName: event[1], count: event[2], price: {basicPrice:event[3]} }]);
    }
  };

  useEffect(() => {
    dispatch(dispatchProps(productsArray))
  }, [productsArray, dispatchProps, dispatch])

  useEffect(() => {
    if (reset) {
      setProductsArray([])
      setNewStockList([])
    }
  }, [reset])

  useEffect(() => {
    for (const iterator of stock) {
      if (iterator.count !== 0) {
        setNewStockList((state) => [...state, iterator])
      }
    }
  }, [stock])


  return (
    <>
      {newStockList &&
        newStockList.map((value) => (
          <StockObject
            key={value.customID}
            id={value.customID}
            productName={value.productName}
            count={value.count}
            reset={reset}
            price={value.price.basicPrice}
            onChange={addToCart}
          />
        ))}
    </>
  );
}

export default StockList;
