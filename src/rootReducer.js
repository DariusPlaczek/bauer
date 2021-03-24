import { combineReducers } from "redux";

import dayReducer from './function/redux/date/redux'
import moneyReducer from './function/redux/gameMoney/redux'
import playerConfig from './function/redux/playerConfig/redux'
import cityStoreData from './function/redux/cityStockConfig/redux'
import tradeReducer from './function/redux/trade/redux'
import tileCards from './function/redux/playerConfig/cardRedux'


const rootReducer = combineReducers({
  reduxDate: dayReducer,
  reduxMoney: moneyReducer,
  reduxPlayerData: playerConfig,
  reduxCityStoreData: cityStoreData,
  reduxTrade: tradeReducer,
  reduxTileCard: tileCards
});

export default rootReducer;