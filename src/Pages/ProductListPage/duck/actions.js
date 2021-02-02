export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
import { normalizeProductsData } from "../../../utils/helper";

import axios from "axios";
import PRODUCT_LIST_API from "../../../utils/constants/PRODUCT_LIST_API";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(PRODUCT_LIST_API);
      const products = normalizeProductsData(data);
      dispatch({
        type: RECEIVE_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.log("couldn't load data");
    }
  };
};
