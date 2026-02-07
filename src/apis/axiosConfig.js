// src/apis/axiosConfig.js
import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://3.35.8.84:3000";

const api = axios.create({ baseURL });

export const getAuthAxios = () => {
  const token = localStorage.getItem("token");
  const instance = axios.create({ baseURL });

  if (token) {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  }
  return instance;
};

export default api;
