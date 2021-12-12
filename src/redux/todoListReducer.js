import { TodoAPI } from "./api"
import * as uuid from 'uuid'

// Action Type
const SET_LIST = "SET_LIST"
const SET_NEW_LIST = "SET_NEW_LIST"
const RENAME_LIST = "RENAME_LIST"
const DELETE_LIST = 'DELETE_LIST'
const CLEAN_LISTS = 'CLEAN_LISTS'
const SET_TASKS = 'SET_TASKS'
const SET_NEW_TASK = 'SET_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const SET_TASK_AFTER_CHANGE = 'SET_TASK_AFTER_CHANGE'
// Action Creator
export const setLists = (lists) => ({ type: SET_LIST, lists })
export const setTasks = (tasks) => ({ type: SET_TASKS, tasks })
export const deleteList = (listID) => ({ type: DELETE_LIST, listID })
export const renameList = (listID, title) => ({ type: RENAME_LIST, listID, title })
export const cleanLists = () => ({ type: CLEAN_LISTS, })
export const setNewTask = (listID) => ({ type: SET_NEW_TASK, listID })
export const deleteTask = (listID, taskID) => ({ type: DELETE_TASK, listID, taskID })
export const setTaskAfterchange = (task) => ({ type: SET_TASK_AFTER_CHANGE, task })
export const setNewList = (title) => ({ type: SET_NEW_LIST, title })
// Thunk Creator
export const saveChangesToLocalStorage = () => (dispatch, state) => {
  localStorage.setItem('data', JSON.stringify(state().todo.lists))
}

export const createNewListTC = (title) => async (dispatch) => {
  title = !title ? 'Задачи' : title
  dispatch(setNewList(title))
  return true
}
export const getListsTC = () => async (dispatch) => {
  const data = JSON.parse(localStorage.getItem('data'))
  await dispatch(setLists(data))
}
export const renameListTC = (id, title) => async (dispatch) => {
  await dispatch(renameList(id, title))
}
export const deleteListTC = (id) => async (dispatch) => {
  await dispatch(deleteList(id))
  return true
}

export const createNewTaskTC = (listID) => async (dispatch) => {
  await dispatch(setNewTask(listID))
}

export const deleteTaskTC = (listID, taskID) => async (dispatch) => {
  await dispatch(deleteTask(listID, taskID))
}

export const changeTaskTextTC = (listID, taskID, title, completed) => async (dispatch) => {
  // при сохранении таски и нулевым текстом она будет удалаться
  if (!title) {
    await dispatch(deleteTask(listID, taskID))
  } else {
    await dispatch(setTaskAfterchange({ listID, taskID, title, completed }))
  }
}

export const changeComplitedStatusTC = (listID, taskID, completed, title) => async (dispatch, state) => {
  await dispatch(setTaskAfterchange({ listID, taskID, completed, title }))
}

const initialState = {
  lists: [],
  listsIds: [],
}

/*
'data' - [{
  id: string
  title: string
  tasks: [
    {
      id: string
      listID: string
      text: string
      completed: boolean
    },
  ]
},]
*/

const todoListReducer = (state = initialState, action) => {
  const listID = uuid.v1()
  const taskID = uuid.v1()
  switch (action.type) {
    case SET_LIST:
      return {
        lists: action.lists
      }
    case SET_NEW_LIST:
      return {
        ...state,
        lists: [...state.lists, {
          id: listID,
          title: action.title,
          tasks: [{
            id: taskID,
            listID: listID,
            title: action.title,
            completed: false
          }]
        }]
      }
    case RENAME_LIST:
      return {
        ...state,
        lists: state.lists.map(item => item.id == action.listID ? ({ ...item, title: action.title}) : item),
      }
    case CLEAN_LISTS:
      return {
        ...state,
        lists: [],
      }
    case DELETE_LIST:
      return {
        ...state,
        lists: [...state.lists.filter(item => item.id != action.listID)]
      }
    case SET_TASKS:
      return {
        ...state,
        lists: [...state.lists.map((item, index) => ({ ...item, tasks: [...action.tasks[index].data.items] }))],
      }
    case SET_NEW_TASK:
      return {
        ...state,
        lists: [...state.lists.map(item => item.id == action.listID ? ({
          ...item, tasks: [...item.tasks,
          {
            id: taskID,
            listID: item.id,
            title: '',
            completed: false
          }
          ]
        }) : item)],
      }
    case DELETE_TASK:
      return {
        ...state,
        lists: [...state.lists.map(item => item.id == action.listID ? ({ ...item, tasks: item.tasks.filter(item => item.id != action.taskID) }) : item)],
      }
    case SET_TASK_AFTER_CHANGE:
      return {
        ...state,
        // мы в промисе получаем целую измененную таску и заменяем ей старую
        lists: [...state.lists.map(item => item.id == action.task.listID ? {
          ...item, tasks: item.tasks.map(item => item.id == action.task.taskID ?
            {
              id: action.task.taskID,
              listID: action.task.listID,
              completed: action.task.completed,
              title: action.task.title,
            } : item)
        } : item)],
        // lists: [...state.lists.map(item => item.id == action.task.listID ? { ...item, tasks: item.tasks.map(item => item.id == action.task.id ? action.task : item) } : item)],
      }
    default:
      return state
  }
}

export default todoListReducer