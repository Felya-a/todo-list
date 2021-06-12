import { TodoAPI } from "./api";

// Action Type
const SET_LIST = "SET_LIST"
const DELETE_LIST = 'DELETE_LIST';
const CLEAN_LISTS = 'CLEAN_LISTS';
// Action Creator
export const setLists = (lists) => ({ type: SET_LIST, lists });
export const deleteList = (id) => ({ type: DELETE_LIST, id });
export const cleanLists = () => ({ type: CLEAN_LISTS, });
// Thunk Creator
export const createNewListTC = (title) => async (dispatch) => {
  const response = await TodoAPI.createList(title);
  if (!response.data.resultCode) {
    dispatch(getListsTC());
    return true;
  }
}
export const getListsTC = () => async (dispatch) => {
  const response = await TodoAPI.getLists();
  if (true) dispatch(setLists(response.data));
}
export const renameListTC = (id, title) => async (dispatch) => {
  const response = await TodoAPI.renameList(id, title);
  if (!response.data.resultCode) dispatch(getListsTC());
}
export const deleteListTC = (id) => async (dispatch) => {
  const response = await TodoAPI.deleteList(id);
  if (!response.data.resultCode) {
    dispatch(deleteList(id));
    return true;
  }
}

const initialState = {
  lists: [],
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      if (action.lists.length == 0) return { ...state, lists: null }; // если у пользователя нет листов
      return {
        ...state,
        lists: [...action.lists]
      };
    case CLEAN_LISTS:
      return {
        ...state,
        lists: [],
      }
    case DELETE_LIST:
      return {
        ...state,
        lists: [...state.lists.filter(item => item.id != action.id)]
      }
    default:
      return state;
  }
}

export default todoListReducer;