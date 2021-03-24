const LOAD_TILE_CARD = "/tileCards/LOAD_TILE_CARD";
const ADD_NEW_TILE_CARD = "/tileCards/ADD_NEW_TILE_CARD";

export const loadTileCard = (event) => ({
  type: LOAD_TILE_CARD,
  payload: event,
});

export const addNewTileCard = (event) => ({
  type: ADD_NEW_TILE_CARD,
  payload: event,
});

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
    default:
      return { ...state };
  }
}

export default reducer;

function addTileCardFunction(tileArray, tileId, changeArray) {
  for (const iterator of tileArray) {
    if (iterator.id === tileId) {
      iterator.isCard = true;
      iterator.card[0].name = changeArray.name;
      iterator.card[0].alt = changeArray.name;
      iterator.card[0].image = changeArray.img;
      iterator.card[0].zykl = changeArray.cycle;
    }
  }

  return tileArray;
}
