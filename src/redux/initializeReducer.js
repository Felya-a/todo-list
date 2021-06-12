import { initializeUserTC } from "./authReducer";
import { getListsTC } from "./todoListReducer";


// Action Type
const SET_INIT = 'SET_INIT';
// Action Creator
export const setInitialize = () => ({ type: SET_INIT, });
// Thunk Creator
export const initializeAppTC = () => async (dispatch) => {
  const promise = await dispatch(initializeUserTC());
  if (promise) dispatch(getListsTC());
  dispatch(setInitialize());
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
          return state;
  }
}

export default initializeReducer;