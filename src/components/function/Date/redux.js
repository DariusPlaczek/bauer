import { monthString } from "../../units/monthString";

const Add_New_Day = "date/Add_New_Day";

export const addDay = () => ({ type: Add_New_Day });

const INITIAL_STATE = {
  day: 1,
  month: 0,
  year: 720,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Add_New_Day:
      if (state.month === 11 && state.day === monthString[state.month].days) {
        return {
          ...state,
          day: 1,
          month: 0,
          year: state.year + 1,
        };
      }

      if (state.day !== monthString[state.month].days) {
        return {
          ...state,
          day: state.day + 1,
        };
      } else {
        return {
          ...state,
          day: 1,
          month: state.month + 1,
        };
      }
    default:
      return state;
  }
}

export default reducer;
