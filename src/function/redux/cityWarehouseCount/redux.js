const CHANGE_CITYWARECOUNT = 'ware/CHANGE_CITYWARECOUNT';

export const changeCWC = (event) => ({type: CHANGE_CITYWARECOUNT, payload: event })

const INITIAL_STATE = {
  Reis: 1000,
  Malz: 100,
  Gold: 10
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CITYWARECOUNT:
      const cacheName =  action.payload.name;

      return {...state, [cacheName]: action.payload.count}

    default:
      return {...state}
  }
}

export default reducer;
