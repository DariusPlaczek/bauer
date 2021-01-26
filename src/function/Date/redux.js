//import { monthString } from "../../units/monthString";
import { buyMultiplikate } from "../multiplikate";

const Add_New_Day = "date/Add_New_Day";

export const addDay = () => ({ type: Add_New_Day });

const INITIAL_STATE = {
  day: 1,
  month: 0,
  year: 1400,
  sellMultiplikat: buyMultiplikate(),
  buyMultiplikat: 0,
};


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Add_New_Day:
        if (state.month === 11 && state.day === 4) {
          return {
            ...state,
            day: 1,
            month: 0,
            year: state.year + 1,
            sellMultiplikat: buyMultiplikate()
          };
        }
      if (state.day !== 4) {
        return {
          ...state,
          day: state.day + 1,
        };
      } else {
        return {
          ...state,
          day: 1,
          month: state.month + 1,
          sellMultiplikat: buyMultiplikate()
        };
      }
    default:
      return state;
  }
}

export default reducer;

