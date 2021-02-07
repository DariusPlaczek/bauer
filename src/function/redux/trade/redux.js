const ADD_TO_SELL = "trade/ADD_TO_SELL";
const ADD_TO_BUY = "trade/ADD_TO_BUY"
const ADD_SUM_TO_SELL = "trade/ADD_SUM_TO_SELL";

export const addToSell = (event) => ({ type: ADD_TO_SELL, payload: event });
export const addToBuy = (event) => ({ type: ADD_TO_BUY, payload: event })
export const addSumToSell = (event) => ({ type: ADD_SUM_TO_SELL, payload: event })

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
        sell: action.payload
      };
    case ADD_TO_BUY:
      return {
        ...state,
        buy: action.payload
      }
      case ADD_SUM_TO_SELL:
        return {
          ...state,
          sumSell: state.sumSell + action.payload
        }

    default:
      return { ...state };
  }
}

export default reducer;
