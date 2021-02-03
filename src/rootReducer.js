import { combineReducers } from "redux";

import dayReducer from './function/redux/date/redux'
import moneyReducer from './function/redux/gameMoney/redux'

const rootReducer = combineReducers({
  reduxDate: dayReducer,
  reduxMoney: moneyReducer
});

export default rootReducer;