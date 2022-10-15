import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.dell-lee.com/react",
  timeout: 5000,
});
