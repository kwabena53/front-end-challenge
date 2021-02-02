import { combineReducers } from "redux";
import productReducer from "../Pages/ProductListPage/duck/reducers";

const reducers = combineReducers({
  products: productReducer,
});

export default reducers;
