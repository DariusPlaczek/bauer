const ADD_TO_SELL = "trade/ADD_TO_SELL";
const ADD_TO_BUY = "trade/ADD_TO_BUY";
const RESET_TRADE_LIST = "trade/RESET_TRADE_LIST";

export const addToSell = (event) => ({ type: ADD_TO_SELL, payload: event });
export const addToBuy = (event) => ({ type: ADD_TO_BUY, payload: event });
export const resetTradeList = () => ({ type: RESET_TRADE_LIST });

const INITIAL_STATE = {
  sell: [],
  buy: [],
  sumSell: 0,
  sumBuy: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_SELL:
      return {
        ...state,
        sell: sortOut(action.payload),
        sumSell: calculation(action.payload),
      };
    case ADD_TO_BUY:
      return {
        ...state,
        buy: sortOut(action.payload),
        sumBuy: calculation(action.payload),
      };
    case RESET_TRADE_LIST:
      return {
        sell: [],
        buy: [],
        sumSell: 0,
        sumBuy: 0,
      };

    default:
      return { ...state };
  }
}

export default reducer;

function sortOut(value) {
  const sellCache = [];
  for (const iterator of value) {
    if (iterator.count !== 0) {
      sellCache.push(iterator);
    }
  }
  return sellCache;
}

function calculation(value) {
  let sum = 0;
  for (const iterator of value) {
    sum = sum + iterator.count * iterator.price.basicPrice;
  }
  return sum;
}
