import {
  RECEIVE_PRODUCTS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./actions";

const INITIAL_STATE = {
  gettingProducts: false,
};
export default function reducer(state = INITIAL_STATE, action) {
  const { type, products } = action;

  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        gettingProducts: false,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...products,
        gettingProducts: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        gettingProducts: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        gettingProducts: null,
      };

    default:
      return state;
  }
}
