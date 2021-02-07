import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SingleObject from "../ObjectList/SingleObject";

function WarehouseContainer(props) {

  const { keyValue, dispatchProp, reduxCount } = props
  const wares = useSelector((state) => state.reduxWare.products);

  const [ware, setWare] = useState([]);

  const dispatch = useDispatch();

  const addToCart = (event) => {

    if (ware.length === 0) {
      setWare([{ name: event[0], count: event[4], price: event[2] }]);

      return;
    }

    let bool = false;
    let integer = 0;

    for (let i = 0; i < ware.length; i++) {
      if (ware[i].name.includes(event[0])) {
        //cacheCount = ware[i].count
        integer = i;
        bool = true;
        break;
      }
    }

    if (bool) {
      const cache = ware.slice();
      cache[integer].count = event[4];
      setWare(cache);
    } else {
      setWare([...ware, { name: event[0], count: event[4], price: event[2] }]);
    }
  };

  useEffect(() => {

    dispatch(dispatchProp(ware));

  }, [ware, dispatchProp, dispatch]);

  return (
    <>
      {wares && wares.map((value, key) => (
        <SingleObject
          id={`${keyValue}-${key}`}
          key={`${keyValue}-${key}`}
          title={value.name}
          count={reduxCount[value.name]}
          price={value.price.basicPrice}
          onChange={addToCart}
        />
      ))}
    </>
  )
}

export default WarehouseContainer
