import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  headers: {
    "API-KEY": "8aab515b-a7ff-412f-94c0-660df0312e47",
  }
});

export const Initialize = {
  authMe() {
    return instance.get('auth/me')
  },
  logining(formData) {
    return instance.post("auth/login", formData)
  },
  logout() {
    return instance.delete("auth/login")
  },
}

export const TodoAPI = {
  createList(title) {
    return instance.post("todo-lists", { title })
  },
  getLists() {
    return instance.get("todo-lists")
  },
  renameList(id, title) {
    return instance.put(`todo-lists/${id}`, { title })
  },
  deleteList(id) {
    return instance.delete(`todo-lists/${id}`)
  },
  setTask(idList, taskText) {
    return instance.post(`todo-lists/${idList}/tasks`, { title: taskText })
  },
  getTasks(idList, count = 100, page = 1) {
    return instance.get(`todo-lists/${idList}/tasks`, { count, page })
  },
  // change Task
  changeTitleTask(idList, idTask, title) {
    return instance.put(`todo-lists/${idList}/tasks/${idTask}`, { title })
  },
  changeComplited(idList, idTask, complited, title) {
    return instance.put(`todo-lists/${idList}/tasks/${idTask}`, { title, status: Number(complited) })
  },
  deleteTask(idList, idTask) {
    return instance.delete(`todo-lists/${idList}/tasks/${idTask}`)
  },
}