const ADD_TO_PLAYER_STOCK = "player/ADD_TO_PLAYER_STOCK";
const REMOVE_TO_PLAYER_STOCK = "player/REMOVE_TO_PLAYER_STOCK";


export const addToPlayerStock = (event) => ({
  type: ADD_TO_PLAYER_STOCK,
  payload: event,
});

export const removeToPlayerStock = (event) => ({
  type: REMOVE_TO_PLAYER_STOCK,
  payload: event,
});

const INITIAL_STATE = {
  playerMoney: 479,
  storageSpace: 0,
  stockProducts: [
    {
      customID: "CS-01",
      productName: "Reis",
      count: 52,
      price: {
        basicPrice: 12,
      },
    },
    {
      customID: "CS-02",
      productName: "Malz",
      count: 35,
      price: {
        basicPrice: 23,
      },
    },
    {
      customID: "CS-03",
      productName: "Gold",
      count: 2,
      price: {
        basicPrice: 110,
      },
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_TO_PLAYER_STOCK:
      return {
        ...state,
        playerMoney: action.payload.money,
        stockProducts: addProducts(
          [...state.stockProducts],
          action.payload.stock
        ),
      };

    case REMOVE_TO_PLAYER_STOCK:
      return {
        ...state,
        playerMoney: action.payload.money,
        stockProducts: removeProducts(
          [...state.stockProducts],
          action.payload.stock
        )
      };

    default:
      return { ...state };
  }
}

export default reducer;


function addProducts(stockArray, changeArray) {
  for (let i = 0; i < stockArray.length; i++) {
    if (stockArray[i].productName === changeArray[0]) {
      const cache = stockArray[i].count + changeArray[1];
      stockArray[i].count = cache;
    }
  }

  return stockArray;
}

function removeProducts(stockArray, changeArray) {
  for (let i = 0; i < stockArray.length; i++) {
    if (stockArray[i].productName === changeArray[0]) {
      const cache = stockArray[i].count - changeArray[1];
      stockArray[i].count = cache;
    }
  }

  return stockArray;
}
