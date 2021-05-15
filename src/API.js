import axios from "axios";
import SERVER_ADDRESS from "./Variables";

const call = async (url) => await axios.get(SERVER_ADDRESS + url);
const productsReq = async (sort = "asc") =>
  await call(`products${`?sort=${sort}`}`);

export default productsReq;
