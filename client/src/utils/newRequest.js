import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "rudra-backend-git-main-adityas-projects-a46e79b7.vercel.app/",
  withCredentials: true,
});

export default newRequest;
