import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3002"
});

export default axiosConfig;
