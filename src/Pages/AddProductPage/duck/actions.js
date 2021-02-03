export const REQUEST_TO_ADD_PRODUCT = "REQUEST_TO_ADD_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";

export const addProduct = (productName, price) => {
  return {
    type: ADD_PRODUCT,
    productName,
    price,
  };
};
