import {ware} from '../../../directories'
import cityWarehouse from '../../../settings/cityWarehouse'


const INITIAL_STATE = {
  products: cityWarehouse.slice()
}



function reducer(state = INITIAL_STATE, action) {
  return {...state}
}

export default reducer
//console.log(INITIAL_STATE);