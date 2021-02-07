const INITIAL_STATE = {
  Reis: 1000,
  Malz: 100,
  Gold: 10,
};

function reducer(state = INITIAL_STATE, action) {
  return { ...state };
}

export default reducer;
