import React from "react";
import Product from "../../Components/Product/Product";
import { Grid } from "tabler-react";
import GlobalStyles from "../../style/Global.module.css";
import { useSelector } from "react-redux";

const ProductListPage = () => {
  const products = useSelector((state) => state.products);

  const getLatestPrice = (prodPrices, price) => {
    const sortedPriceIDList = prodPrices.sort(
      (a, b) => new Date(price[b].date) - new Date(price[a].date)
    );

    return price[sortedPriceIDList[0]];
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
                <Product key={prod.id} product={prod} latestPrice={latPrice} />
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
