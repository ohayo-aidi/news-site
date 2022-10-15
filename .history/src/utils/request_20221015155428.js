import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/8ee236b9be977eee65b73b9cd481d691/aiditest",
  timeout: 5000,
});
