import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "https://rudra-app-varcel.vercel.app",
  withCredentials: true,
});

export default newRequest;
