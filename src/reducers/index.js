import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import navReducer from "./navReducer";
import helpReducer from "./helpReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  nav: navReducer,
  help: helpReducer,
  user: authReducer,
  cart: cartReducer,
});

export default rootReducer;
