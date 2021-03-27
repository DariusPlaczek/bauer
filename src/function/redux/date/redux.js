const LOAD_DATE = "date/LOAD_DATE"
const Add_New_Day = "date/Add_New_Day";

export const loadDate = (event) => ({ type: LOAD_DATE, payload: event })
export const addDay = () => ({ type: Add_New_Day });

const INITIAL_STATE = {
  day: 1,
  month: 0,
  year: 1400,
};


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case LOAD_DATE: 
      return {
        day: action.payload.loadDate.day,
        month: action.payload.loadDate.month,
        year: action.payload.loadDate.year,
      }

    case Add_New_Day:
        if (state.month === 11 && state.day === 4) {
          return {
            ...state,
            day: 1,
            month: 0,
            year: state.year + 1,
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
        };
      }
    default:
      return state;
  }
}

export default reducer;

