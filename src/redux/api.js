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
    console.log("api");
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
  }
}