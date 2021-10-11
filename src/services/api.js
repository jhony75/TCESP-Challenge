import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-tcesp.herokuapp.com",
});

export default api;