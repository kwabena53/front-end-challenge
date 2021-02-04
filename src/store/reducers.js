import { combineReducers } from "redux";
import productReducer from "../Pages/duck/reducers";

const reducers = combineReducers({
  products: productReducer,
});

export default reducers;
