import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
  form: formReducer,
})

let store = createStore(reducers)

export default store;