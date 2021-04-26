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
          id: event[0].id,
          productName: event[0].productName,
          count: 1,
          price: event[0].price,
        },
      });
    } else {
      setCart({
        ...cart,
        [event[0].id]: {
          id: event[0].id,
          productName: event[0].productName,
          count: event[0].count,
          price: event[0].price * event[0].count,
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

  useEffect(() => {
    
    if (tradeList.length === 0) {
      setTotalSum(0)
      return
    }

    return

  }, [tradeList])

  const resetList = () => {
    setCart({});
    setTradeList([]);
    setTotalSum(0);
  }

  return [tradeList, totalSum, addCart, resetList];
}

export default useTradeList;
