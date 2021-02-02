import React, { useEffect } from "react";
import Product from "../../Components/Product/Product";
import { Grid } from "tabler-react";
import GlobalStyles from "../../style/Global.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./duck/actions";

const ProductListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.products);

  const getLatestPrice = (prodPrices, price) => {
    const sortedPriceIDList = prodPrices.sort(
      (a, b) => price[b].date - price[a].date
    );

    return price[sortedPriceIDList[0]].price;
  };
  return (
    <>
      <h2>Product List</h2>
      <div className={GlobalStyles.container}>
        {products.entities ? (
          <Grid.Row>
            {Object.values(products.entities.product).map((prod) => {
              const prodPrices = prod.prices;
              const latPrice = getLatestPrice(
                prodPrices,
                products.entities.price
              );
              return (
                <Product
                  key={prod.id}
                  name={prod.name}
                  latestPrice={latPrice}
                />
              );
            })}
          </Grid.Row>
        ) : (
          <p>waiting for products ...</p>
        )}
      </div>
    </>
  );
};

export default ProductListPage;
