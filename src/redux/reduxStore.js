import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import todoListReducer from "./todoListReducer.js";
import initializeReducer from "./initializeReducer.js"


const reducers = combineReducers({
  auth: authReducer,
  todo: todoListReducer,
  form: formReducer,
  init: initializeReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;