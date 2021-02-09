const CHANGE_PLAYER_MONEY = "playerConfig/CHANGE_PLAYER_MONEY";

export const changePlayerMoney = (event) => ({
  type: CHANGE_PLAYER_MONEY,
  payload: event,
});

const INITIAL_STATE = {
  playerMoney: 479,
  storageSpace: 0,
  stockProducts: [
    {
      customID: "PS-01",
      productName: "Reis",
      count: 52,
      price: {
        basicPrice: 12,
      }
    },
    {
      customID: "PS-02",
      productName: "Malz",
      count: 35,
      price: {
        basicPrice: 23,
      }
    },
    {
      customID: "PS-03",
      productName: "Gold",
      count: 3,
      price: {
        basicPrice: 110,
      }
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
    case CHANGE_PLAYER_MONEY:
      return {
        ...state,
        stockProducts: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer;
