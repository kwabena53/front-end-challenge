import {
  RECEIVE_PRODUCTS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  REQUEST_TO_ADD_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
} from "./actions";
import { getNextAutoIncrementID } from "../../../utils/helper";

const INITIAL_STATE = {
  gettingProducts: false,
  addingProducts: false,
};
export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    //receiving products
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        gettingProducts: false,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products,
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

      // Create our new price object
      const priceId = getNextAutoIncrementID(state.entities.price);
      const date = new Date().toISOString();
      const _price = { id: priceId, price: action.price, date: date };

      // Create our new product object
      const productId = getNextAutoIncrementID(state.entities.product);
      const product = {
        id: productId,
        name: action.productName,
        prices: [priceId],
      };
    //adding products

    case REQUEST_TO_ADD_PRODUCT:
      return {
        ...state,
        addingProducts: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        entities: {
          price: {
            ...state[state.entities.price],
            [_price]: _price,
          },
          product: {
            ...state[state.entities.product],
            [product]: product,
          },
        },
        result: {
          product: state[state.result.product].concat(productId),
        },
        addingProducts: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addingProducts: false,
      };
    default:
      return state;
  }
}
