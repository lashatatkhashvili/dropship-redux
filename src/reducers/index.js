import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  nav: navReducer,
});

export default rootReducer;
