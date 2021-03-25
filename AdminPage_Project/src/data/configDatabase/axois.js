import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3005"
});

export default axiosConfig;
