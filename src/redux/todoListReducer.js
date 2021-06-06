import { TodoAPI } from "./api";

// Action Type
const SET_LIST = "SET_LIST"
// Action Creator
export const setLists = (lists) => ({ type: SET_LIST, lists});
// Thunk Creator
export const createNewListTC = (title) => async (dispatch) => {
  const response = await TodoAPI.createList(title);
  console.log(response);
  dispatch(setLists(response.data.item));
}
export const getListsTC = () => async (dispatch) => {
  const response = await TodoAPI.getLists();
  console.log(response.data)
  if (true) dispatch(setLists(response.data));
}

const initialState = {
  lists: [],
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        lists: [...state.lists, ...action.lists]
      }
    default:
      return state;
  }
}

export default todoListReducer;