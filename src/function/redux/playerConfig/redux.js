const LOGIN_PLAYER = "/player/LOGIN_PLAYER";
const ADD_TO_PLAYER_STOCK = "player/ADD_TO_PLAYER_STOCK";
const REMOVE_TO_PLAYER_STOCK = "player/REMOVE_TO_PLAYER_STOCK";

export const loginPlayer = (event) => ({
  type: LOGIN_PLAYER,
  payload: event
})

export const addToPlayerStock = (event) => ({
  type: ADD_TO_PLAYER_STOCK,
  payload: event,
});

export const removeToPlayerStock = (event) => ({
  type: REMOVE_TO_PLAYER_STOCK,
  payload: event,
});

const INITIAL_STATE = {
  playerId: '',
  playerName: '',
  playerMoney: 0,
  storageSpace: 0,
  stockProducts: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case LOGIN_PLAYER:
      return {
        ...state,
        playerId: action.payload.playerId,
        playerName: action.payload.playerNames,
        playerMoney: action.payload.playerMoney,
        stockProducts: action.payload.playerWare,
      };

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
