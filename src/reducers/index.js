import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navReducer from "./navReducer";
import helpReducer from "./helpReducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  nav: navReducer,
  help: helpReducer,
});

export default rootReducer;
