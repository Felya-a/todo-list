import { TodoAPI } from "./api";

// Action Type
const SET_LIST = "SET_LIST"
const DELETE_LIST = 'DELETE_LIST';
const CLEAN_LISTS = 'CLEAN_LISTS';
const SET_TASKS = 'SET_TASKS';
const SET_NEW_TASK = 'SET_NEW_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_TASK_AFTER_CHENGE = 'SET_TASK_AFTER_CHENGE';
// Action Creator
export const setLists = (lists) => ({ type: SET_LIST, lists });
export const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
export const deleteList = (idList) => ({ type: DELETE_LIST, idList });
export const cleanLists = () => ({ type: CLEAN_LISTS, });
export const setNewTask = (task) => ({ type: SET_NEW_TASK, task });
export const deleteTask = (idList, idTask) => ({ type: DELETE_TASK, idList, idTask });
export const setTaskAfterChenge = (task) => ({ type: SET_TASK_AFTER_CHENGE, task });
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
  if (response) dispatch(setLists(response.data));
  const idsList = response.data.map(item => item.id);
  Promise.all([...idsList.map(item => TodoAPI.getTasks(item))]) // в массиве может быть много промисов
    .then((result) => {
      dispatch(setTasks(result))
    })
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

export const createNewTaskTC = (idList) => async (dispatch) => {
  const response = await TodoAPI.setTask(idList, "Ваша задача")
  if (!response.data.resultCode) dispatch(setNewTask(response.data.data.item))
}

export const deleteTaskTC = (idList, idTask) => async (dispatch) => {
  const response = await TodoAPI.deleteTask(idList, idTask);
  if (!response.data.resultCode) dispatch(deleteTask(idList, idTask));
}

export const chengeTaskTextTC = (idList, idTask, title) => async (dispatch) => {
  // при сохранении таски и нулевым текстом она будет удалаться
  if (!title) {
    const resp = await TodoAPI.deleteTask(idList, idTask);
    if (!resp.data.resultCode) dispatch(deleteTask(idList, idTask))
  } else {
    const response = await TodoAPI.chengeTitleTask(idList, idTask, title);
    if (!response.data.resultCode) dispatch(setTaskAfterChenge(response.data.data.item));
  }
}

export const chengeComplitedStatusTC = (idList, idTask, done, taskText) => async (dispatch) => {
  const response = await TodoAPI.chengeComplited(idList, idTask, done, taskText);
  if (!response.data.resultCode) dispatch(setTaskAfterChenge(response.data.data.item));
}

const initialState = {
  lists: [],
  listsIds: [],
}

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      if (action.lists.length == 0) return { ...state, lists: null }; // если у пользователя нет листов
      return {
        ...state,
        listsIds: [...action.lists.map(item => item.id)],
        lists: [...action.lists].map(item => ({ ...item, tasks: [] })),
      };
    case CLEAN_LISTS:
      return {
        ...state,
        lists: [],
      }
    case DELETE_LIST:
      return {
        ...state,
        lists: [...state.lists.filter(item => item.id != action.idList)]
      }
    case SET_TASKS:
      return {
        ...state,
        lists: [...state.lists.map((item, index) => ({ ...item, tasks: [...action.tasks[index].data.items] }))],
      }
    case SET_NEW_TASK:
      return {
        ...state,
        lists: [...state.lists.map(item => item.id == action.task.todoListId ? ({ ...item, tasks: [action.task, ...item.tasks] }) : item)],
      }
    case DELETE_TASK:
      return {
        ...state,
        lists: [...state.lists.map(item => item.id == action.idList ? ({ ...item, tasks: item.tasks.filter(item => item.id != action.idTask) }) : item)],
      }
    case SET_TASK_AFTER_CHENGE:
      return {
        ...state,
        // мы в промисе получаем целую измененную таску и заменяем ей старую
        lists: [...state.lists.map(item => item.id == action.task.todoListId ? { ...item, tasks: item.tasks.map(item => item.id == action.task.id ? action.task : item) } : item)],
      }
    default:
      return state;
  }
}

export default todoListReducer;