import { combineReducers } from "redux";

import dayReducer from './function/redux/date/redux'
import moneyReducer from './function/redux/gameMoney/redux'
import wareReducer from './function/redux/ware/redux'
import cityWarehouseCountReducer from './function/redux/cityWarehouseCount/redux'
import playerWarehouseCountReducer from './function/redux/playerWarehouseCount/redux'
import tradeReducer from './function/redux/trade/redux'

const rootReducer = combineReducers({
  reduxDate: dayReducer,
  reduxMoney: moneyReducer,
  reduxWare: wareReducer,
  reduxCWCount: cityWarehouseCountReducer,
  reduxPWCount: playerWarehouseCountReducer,
  reduxTrade: tradeReducer
});

export default rootReducer;