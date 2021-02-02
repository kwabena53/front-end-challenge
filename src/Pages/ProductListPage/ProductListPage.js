import React from "react";
import Product from "../../Components/Product/Product";
import { Grid } from "tabler-react";
import GlobalStyles from "../../style/Global.module.css";

const ProductListPage = () => {
  return (
    <>
      <h2>Product List</h2>
      <div className={GlobalStyles.container}>
        <Grid.Row>
          <Product name="Egma" latestPrice="3" />
          <Product name="Egma" latestPrice="3" />
          <Product name="Egma" latestPrice="3" />
          <Product name="Egma" latestPrice="3" />
          <Product name="Egma" latestPrice="3" />
          <Product name="Egma" latestPrice="3" />
        </Grid.Row>
      </div>
    </>
  );
};

export default ProductListPage;
