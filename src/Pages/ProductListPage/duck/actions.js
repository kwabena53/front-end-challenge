import { normalizeProductsData } from "../../../utils/helper";
import { PRODUCT_LIST_API } from "../../../utils/constants";
import axios from "axios";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const REQUEST_TO_ADD_PRODUCT = "REQUEST_TO_ADD_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

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

export const addProduct = (productName, price) => {
  return {
    type: ADD_PRODUCT,
    productName,
    price,
  };
};

export const editProduct = (productId, productName, price) => {
  return {
    type: EDIT_PRODUCT,
    productId,
    productName,
    price,
  };
};
