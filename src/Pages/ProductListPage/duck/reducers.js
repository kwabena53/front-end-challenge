import RECEIVE_PRODUCTS from "./actions";

export default function reducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...payload.products,
      };

    default:
      return state;
  }
}
