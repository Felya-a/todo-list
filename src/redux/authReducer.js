import { stopSubmit } from 'redux-form';
import { Initialize } from './api';
import { cleanLists, getListsTC } from './todoListReducer';


// Action Type
const AUTH_ME = "AUTH_ME";
const LOGOUT_USER = "LOGOUT_USER";
// Action Creator
export const initializeUser = ({ login, email, id }) => ({ type: AUTH_ME, login, email, id });
export const logoutUser = () => ({ type: LOGOUT_USER });
// Thunk Creator
export const initializeUserTC = () => async (dispatch) => {
  const response = await Initialize.authMe();
  if (!response.data.resultCode) {
    dispatch(initializeUser(response.data.data));
  }
  return true;
}
export const logoutTC = () => async (dispatch) => {
  const response = await Initialize.logout();
  if (!response.data.resultCode) {
    dispatch(logoutUser());
    dispatch(cleanLists());
  }
}
export const loginingTC = (formData) => async (dispatch) => {
  const response = await Initialize.logining(formData);
  if (!response.data.resultCode) {
    dispatch(initializeUserTC());
    dispatch(getListsTC());
    return true;
  } else {
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: errorMessage }))
  };
}

const initialState = {
  isAuth: false,
  login: null,
  email: null,
  id: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ME:
      return {
        ...state,
        isAuth: true,
        login: action.login,
        email: action.email,
        id: action.id,
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        login: null,
        email: null,
        id: null,
      }
    default:
      return state;
  }
}

export default authReducer;