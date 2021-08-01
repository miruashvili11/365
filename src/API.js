import axios from "axios";

const SERVER_URL = "http://18.185.148.165:3000";
const SERVER_PRODUCTS = SERVER_URL + 'api/v1/products'

const API = (query) => {
  return axios.create({
    baseURL: `${SERVER_URL}/${query}`,
    headers: {
      Authorization: "Bearer" + localStorage.getItem("token"),
    },
  });
};

export default API;
