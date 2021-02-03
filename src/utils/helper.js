import { normalize, schema } from "normalizr";

export const normalizeProductsData = (originalData) => {
  const price = new schema.Entity("price");

  const product = new schema.Entity("product", {
    prices: [price],
  });
  const products = { products: [product] };

  const normalizedData = normalize(originalData, products);

  return normalizedData;
};

export const generateID = () => {
  return Math.floor(Math.random() * 100);
};

export const getNextAutoIncrementID = (object) => {
  const arr = Object.keys(object);
  const lastId = arr[arr.length - 1];
  return parseInt(lastId) + 1;
};
