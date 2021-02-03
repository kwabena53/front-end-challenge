import {
  REQUEST_TO_ADD_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
} from "./actions";

import { getNextAutoIncrementID } from "../../../utils/helper";

const INITIAL_STATE = {
  addingProducts: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, price, productName } = action;

  // Create our new price object
  const priceId = getNextAutoIncrementID(state.entities.price);
  const date = new Date().toISOString();
  const _price = { id: priceId, price: price, date: date };
  const productId = getNextAutoIncrementID(state.entities.product);
  const product = { id: productId, name: productName, prices: [priceId] };

  switch (type) {
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
