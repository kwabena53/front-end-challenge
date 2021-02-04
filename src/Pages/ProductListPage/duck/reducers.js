import {
  RECEIVE_PRODUCTS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  REQUEST_TO_ADD_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
} from "./actions";
import { generateID } from "../../../utils/helper";
// getNextAutoIncrementID;

const INITIAL_STATE = {
  gettingProducts: false,
  addingProducts: false,
  editingProducts: false,
};
export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  // Create our new price object
  const priceId = generateID();
  const date = new Date().toISOString();
  const _price = { id: priceId, price: action.price, date: date };

  // Create our new product object
  const productId = generateID();
  const product = {
    id: productId,
    name: action.productName,
    prices: [priceId],
  };

  //adding products

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
            ...state.entities.price,
            [priceId]: _price,
          },
          product: {
            ...state.entities.product,
            [productId]: product,
          },
        },
        result: {
          products: state.result.products.concat(productId),
        },
        addingProducts: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addingProducts: false,
      };

    //edit product
    case EDIT_PRODUCT:
      return {
        ...state,
        entities: {
          price: {
            ...state.entities.price,
            [action.priceId]: {
              id: action.priceId,
              price: action.price,
              date: date,
            },
          },
          product: {
            ...state.entities.product,
            [action.productId]: {
              ...state.entities.product[action.productId],
              name: action.productName,
            },
          },
        },
        editingProducts: true,
      };
    default:
      return state;
  }
}
