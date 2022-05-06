import axios from "axios";

const API_URL = "https://6252ce1e7f7fa1b1ddea01e2.mockapi.io/";
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
