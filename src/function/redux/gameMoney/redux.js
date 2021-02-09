const ADD_MONEY = "money/ADD_MONEY";
const SUB_MONEY = "money/SUB_MONEY";
const ADD_TO_STORE = "money/ADD_TO_STORE";

export const addMoney = (event) => ({ type: ADD_MONEY, payload: event });
export const subMoney = (event) => ({ type: SUB_MONEY, payload: event });
export const addToStock = (event) => ({ type: ADD_TO_STORE, payload: event });

const INITIAL_STATE = {
  playerMoney: 479,
  storageSpace: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        playerMoney: action.payload,
      };
    case ADD_TO_STORE:
      return {
        ...state,
        storageSpace: action.payload
      }

    default:
      return state;
  }
}

export default reducer;
