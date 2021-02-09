const ADD_TO_SELL = "trade/ADD_TO_SELL";
const ADD_TO_BUY = "trade/ADD_TO_BUY"

export const addToSell = (event) => ({ type: ADD_TO_SELL, payload: event });
export const addToBuy = (event) => ({ type: ADD_TO_BUY, payload: event })

const INITIAL_STATE = {
  sell: [],
  buy: [],
  sumSell: 0,
  sumBuy: 0
};


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_SELL:
      return {
        ...state,
        sell: action.payload,
        sumSell: calculation(action.payload)
      };
    case ADD_TO_BUY:
      return {
        ...state,
        buy: action.payload,
        sumBuy: calculation(action.payload)
      }

    default:
      return { ...state };
  }
}

export default reducer;

function calculation(value) {

  let sum = 0;
  for (const iterator of value) {
   sum = sum + iterator.count * iterator.price;
 }
  return sum;
}
