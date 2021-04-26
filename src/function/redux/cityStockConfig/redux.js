const LOGIN_CITY = "city/LOGIN_CITY"
const ADD_TO_CITY_STOCK = "city/ADD_TO_CITY_STOCK";
const REMOVE_TO_CITY_STOCK= "city/REMOVE_TO_CITY_STOCK";

export const loginCity = (event) => ({
  type: LOGIN_CITY,
  payload: event
})

export const addToCityStock = (event) => ({
  type: ADD_TO_CITY_STOCK,
  payload: event
});

export const removeToCityStock = (event) => ({
  type: REMOVE_TO_CITY_STOCK,
  payload: event
})

const INITIAL_STATE = {
  stockProducts: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_CITY:
      return {
        ...state,
        stockProducts: action.payload
      };

    case REMOVE_TO_CITY_STOCK:
      return {...state,
        stockProducts: removeCounts([...state.stockProducts], action.payload),
      };
    case ADD_TO_CITY_STOCK:
      return {
        stockProducts: addCounts([...state.stockProducts], action.payload),
      };

    default:
      return {...state}
  }

}

export default reducer

function removeCounts(stockArray, changeArray) {
  for (let i = 0; i < stockArray.length; i++) {
    for (let j = 0; j < changeArray.length; j++) {
      if (stockArray[i]._id === changeArray[j].id) {
        const add = stockArray[i].count - changeArray[j].count;
        stockArray[i].count = add;
      }
    }
  }

  return stockArray;
}


function addCounts(stockArray, changeArray) {
  for (let i = 0; i < stockArray.length; i++) {
    for (let j = 0; j < changeArray.length; j++) {
      if (stockArray[i]._id === changeArray[j].id) {
        const add = stockArray[i].count + changeArray[j].count;
        stockArray[i].count = add;
      }
    }
  }

  return stockArray;
}


