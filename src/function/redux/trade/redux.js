const ADD_TO_SELL = 'trade/ADD_TO_SELL'

export const addToSell = (event) => ({type: ADD_TO_SELL, payload: event})

const INITIAL_STATE = {
  sell: {
    ware: [],
    sum: []
  },
  buy: {
    ware: [],
    sum: []
  }

}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_SELL:
    return {
      ...state,
      sell: {
        ware: action.payload.ware,
        sum: action.payload.sum
      }
    }
  
    default:
      return {...state}
  }
}

export default reducer;