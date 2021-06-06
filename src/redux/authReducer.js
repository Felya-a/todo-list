import { Initialize } from './api';


// Action Type
const INIT_APP = "INIT_APP";
const AUTH_ME = "AUTH_ME";
const LOGOUT_USER = "LOGOUT_USER";
// Action Creator
export const initializeAPP = () => ({ type: INIT_APP });
export const initializeUser = ({ login, email, id }) => ({ type: AUTH_ME, login, email, id });
export const logoutUser = () => ({ type: LOGOUT_USER });
// Thunk Creator
export const initializeAPPTC = () => async (dispatch) => {
  const response = await Initialize.authMe();
  if (response) dispatch(initializeAPP());
}
export const initializeUserTC = () => async (dispatch) => {
  const response = await Initialize.authMe();
  if (!response.data.resultCode) dispatch(initializeUser(response.data.data));
}
export const logoutTC = () => async (dispatch) => {
  const response = await Initialize.logout();
  if (!response.data.resultCode) dispatch(logoutUser());
}
export const loginingTC = (formData) => async (dispatch) => {
  const _formData = {
    email: "641027B@gmail.com",
    password: "qwerty123",
    rememberMe: true,
  }
  const response = await Initialize.logining(_formData);
  if (!response.data.resultCode) dispatch(initializeUserTC());
}

const initialState = {
  initialized: false,
  isAuth: false,
  login: null,
  email: null,
  id: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        initialized: true,
      }
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