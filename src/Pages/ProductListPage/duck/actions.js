import { normalizeProductsData } from "../../../utils/helper";
import { PRODUCT_LIST_API } from "../../../utils/constants";
import axios from "axios";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
      const { data } = await axios.get(PRODUCT_LIST_API);
      const products = normalizeProductsData(data);
      dispatch({
        type: RECEIVE_PRODUCTS,
        products,
      });

      dispatch({ type: GET_PRODUCTS_SUCCESS });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
};
