const Add_New_Day = "date/Add_New_Day";

export const addDay = () => ({ type: Add_New_Day });

const INITIAL_STATE = {
  day: 1,
  month: 1,
  year: 720,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Add_New_Day:
      return {
        ...state,
        day: state.day + 1,
      };

    default:
      return state;
  }
}

export default reducer;
