import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:4001"
});

export default axiosConfig;
