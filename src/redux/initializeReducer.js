import { initializeUserTC } from "./authReducer"
import { getListsTC } from "./todoListReducer"
import * as uuid from 'uuid'


// Action Type
const SET_INIT = 'SET_INIT'
// Action Creator
export const setInitialize = () => ({ type: SET_INIT, })
// Thunk Creator
export const initializeAppTC = () => async (dispatch) => {
  // const promise = await dispatch(initializeUserTC());
  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', '[{"id":"fea4a820-5b5e-11ec-b52d-650f3b77cf7b","title":"One","tasks":[{"id":"fe4c00d0-5b5e-11ec-b52d-650f3b77cf7b","listID":"fea4a820-5b5e-11ec-b52d-650f3b77cf7b","title":"ебашить","completed":true}]}]')
  }
  // window.uuid = uuid
  await dispatch(getListsTC())
  await dispatch(setInitialize())
}


const initialState = {
  initialized: false,
}

const initializeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export default initializeReducer