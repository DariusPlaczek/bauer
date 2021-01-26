import { combineReducers } from "redux";

import dayReducer from './function/Date/redux'
import moneyReducer from './function/GameMoney/redux'

const rootReducer = combineReducers({
  reduxDate: dayReducer,
  reduxMoney: moneyReducer
});

export default rootReducer;