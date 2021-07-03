import axios from "axios";
import SERVER_ADDRESS from "./Variables";

const Api = (query) => {
  return axios.create({
    baseURL: `${SERVER_ADDRESS}/${query}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export default Api;
