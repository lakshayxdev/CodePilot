import axios from "axios";

const api = axios.create({
  baseURL: "https://codepilot-1-f6hb.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("Interceptor running");
  console.log("Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;