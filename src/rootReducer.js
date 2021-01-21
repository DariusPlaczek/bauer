import { combineReducers } from "redux";

import dayReducer from './function/Date/redux'

const rootReducer = combineReducers({
  reduxDate: dayReducer
});

export default rootReducer;