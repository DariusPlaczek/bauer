import React from 'react'
import {useSelector} from 'react-redux'

import CityWarehouse from './CityWarehouse/CityWarehouse'
import PlayerWarehouse from './PlayerWarehouse/PlayerWarehouse'

function Trade() {
  const {sell, buy} = useSelector((state) => state.reduxTrade)
  return (
    <>
     <CityWarehouse /> 
     <PlayerWarehouse />

    <div>sell:{sell.sum}</div>
    <div>buy:{buy.sum}</div>
    <div>gesamt:</div>
    </>
  )
}

export default Trade
