const ADD_STOCK_TO_STOCK = "city/ADD_STOCK_TO_STOCK";

export const changeCityStock = (event) => ({
  type: ADD_STOCK_TO_STOCK,
  payload: event,
});

const INITIAL_STATE = {
  playerMoney: 479,
  storageSpace: 0,
  stockProducts: [
    {
      customID: "PS-01",
      productName: "Reis",
      count: 102,
      price: {
        basicPrice: 12,
      }
    },
    {
      customID: "PS-02",
      productName: "Malz",
      count: 76,
      price: {
        basicPrice: 23,
      }
    },
    {
      customID: "PS-03",
      productName: "Gold",
      count: 36,
      price: {
        basicPrice: 110,
      }
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
    case ADD_STOCK_TO_STOCK:
      return {
        ...state,
        stockProducts: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer;