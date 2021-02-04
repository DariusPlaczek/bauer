const INITIAL_STATE = {
  Reis: 52,
  Malz: 35,
  Gold: 3,
};

function reducer(state = INITIAL_STATE, action) {
  return { ...state };
}

export default reducer;
