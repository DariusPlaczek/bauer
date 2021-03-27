const LOAD_TILE_CARD = "/tileCards/LOAD_TILE_CARD";
const ADD_NEW_TILE_CARD = "/tileCards/ADD_NEW_TILE_CARD";
const DEDUCT_CYCLE = "tileCards/DEDUCT_CYCLE";
const SET_TILE_CARD_ZERO = "titleCard/SET_TILE_CARD_ZERO"

export const loadTileCard = (event) => ({
  type: LOAD_TILE_CARD,
  payload: event,
});

export const addNewTileCard = (event) => ({
  type: ADD_NEW_TILE_CARD,
  payload: event,
});

export const deductCycle = (event) => ({
  type: DEDUCT_CYCLE,
  payload: event,
})

export const setTileCardZero = (event) => ({
  type: SET_TILE_CARD_ZERO,
  payload: event
})


const INITIAL_STATE = {
  tileBoard: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TILE_CARD:
      return {
        tileBoard: action.payload,
      };

    case ADD_NEW_TILE_CARD:
      return {
        ...state,
        tileBoard: addTileCardFunction(
          [...state.tileBoard],
          action.payload.cardTileId,
          action.payload.content
        ),
      };

    case DEDUCT_CYCLE:
      return {
        ...state,
        tileBoard: deductCyclFunction([...state.tileBoard])
      }

    case SET_TILE_CARD_ZERO: 
      return {
        ...state,
        tileBoard: setZeroFunction([...state.tileBoard], action.payload.setId)
      }

    default:
      return { ...state };
  }
}

export default reducer;

function addTileCardFunction(tileArray, tileId, changeArray) {
  for (const iterator of tileArray) {
    if (iterator.id === tileId) {
      iterator.isCard = true;
      iterator.card[0].productID = changeArray.productID;
      iterator.card[0].name = changeArray.name;
      iterator.card[0].alt = changeArray.name;
      iterator.card[0].image = changeArray.img;
      iterator.card[0].zykl = changeArray.cycle;
      iterator.card[0].count = changeArray.count;
    }
  }

  return tileArray;
}

function deductCyclFunction(tileArray) {
  for (const iterator of tileArray) {
    if (iterator.card[0].zykl > 0) {
      iterator.card[0].zykl -= 1
    }
  }
  return tileArray;
}

function setZeroFunction(tileArray, setId) {
  for (const iterator of tileArray) {
    if (iterator.id === setId) {
      iterator.isCard = false;
      iterator.card[0].productId = '';
      iterator.card[0].name = '';
      iterator.card[0].alt = '';
      iterator.card[0].image = '';
      iterator.card[0].zykl = null;
      iterator.card[0].count = null;
    }
  }
  return tileArray;
}