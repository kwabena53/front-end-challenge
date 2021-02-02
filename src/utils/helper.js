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
