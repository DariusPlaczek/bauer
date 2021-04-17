import { useState, useEffect } from "react";

function useTradeList() {
  const [cart, setCart] = useState({});
  const [tradeList, setTradeList] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const addCart = (event) => {
    if (cart[event[0].id] === undefined) {
      setCart({
        ...cart,
        [event[0].id]: {
          productName: event[0].productName,
          count: 1,
          price: event[0].price,
        },
      });
    } else {
      setCart({
        ...cart,
        [event[0].id]: {
          productName: event[0].productName,
          count: parseInt(event[0].count),
          price: event[0].price * parseInt(event[0].count, 10),
        },
      });
    }
  };

  useEffect(() => {
    setTradeList(Object.values(cart).filter((value) => value.count > 0));
  }, [cart]);

  useEffect(() => {
    let sum = 0;
    for (const iterator of tradeList) {
      sum += iterator.price;
      setTotalSum(sum);
    }
  }, [tradeList]);

  return [tradeList, totalSum, addCart];
}

export default useTradeList;
