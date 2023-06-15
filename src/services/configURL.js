import axios from "axios";
import { setLoadingOff, setLoadingOn } from "../redux-toolkit/spinnerSlice";
import { store } from "./../index";
import { userLocalStorage } from "./LocalStorageService";

export const base_URL = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjgiLCJIZXRIYW5TdHJpbmciOiIwNi8wOC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTEyODAwMDAwMDAiLCJuYmYiOjE2NzI5MzgwMDAsImV4cCI6MTY5MTQyNzYwMH0.1IXShq-PS4U5xC7QUMQLQcPPHNDmZrXfqvEBkJOEvEw",
    Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
  },
});

base_URL.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
base_URL.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());

    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
