import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  headers: {
    "API-KEY": "8aab515b-a7ff-412f-94c0-660df0312e47",
  }
});

