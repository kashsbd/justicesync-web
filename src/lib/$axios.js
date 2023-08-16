import axios from "axios";
import { API_URL, CURRENT_USER } from "../utils/constants";

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  const token = CURRENT_USER?.accessToken;

  if (token) {
    config.headers["x-access-token"] = token;
  }

  return config;
});

export default instance;
