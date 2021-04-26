import { combineReducers } from "redux";

import dayReducer from './function/redux/date/redux'
import playerConfig from './function/redux/playerConfig/redux'
import cityStoreData from './function/redux/cityStockConfig/redux'
import tradeReducer from './function/redux/trade/redux'
import tileCards from './function/redux/playerConfig/cardRedux'


const rootReducer = combineReducers({
  reduxDate: dayReducer,
  reduxPlayerData: playerConfig,
  reduxCityData: cityStoreData,
  reduxTrade: tradeReducer,
  reduxTileCard: tileCards
});

export default rootReducer;