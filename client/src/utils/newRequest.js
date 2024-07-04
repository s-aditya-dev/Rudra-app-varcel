import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "rudra-backend.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
