import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_MODE === "development" ? "http://localhost:5001/api" : `${import.meta.env.VITE_REACT_APP_BACKEND_URI}/api`,
  withCredentials: true,
});
