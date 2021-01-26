const ADD_MONEY = "money/ADD_MONEY";
const SUB_MONEY = "money/SUB_MONEY";

export const addMoney = (event) => ({ type: ADD_MONEY, payload: event });
export const subMoney = (event) => ({ type: SUB_MONEY, payload: event });

const INITIAL_STATE = {
  pfennig: 256,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MONEY:
    return {
      ...state,
      pfennig: action.payload
    };

    default:
      return state
  }
}


export default reducer;
