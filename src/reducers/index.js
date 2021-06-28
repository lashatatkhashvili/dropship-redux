import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navReducer from "./navReducer";
import helpReducer from "./helpReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  nav: navReducer,
  help: helpReducer,
  user: authReducer,
});

export default rootReducer;
