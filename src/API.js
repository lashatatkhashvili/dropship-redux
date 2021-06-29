import axios from "axios";
import SERVER_ADDRESS from "./Variables";

const token = localStorage.getItem("token");

const bearerToken = `Bearer ${token}`;

const Api = (query) => {
  return axios.create({
    baseURL: `${SERVER_ADDRESS}/${query}`,
    headers: { Authorization: bearerToken },
  });
};

export default Api;
