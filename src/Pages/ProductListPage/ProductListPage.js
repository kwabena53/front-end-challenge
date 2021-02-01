import React from "react";
import Product from "../../Components/Product/Product";

import GlobalStyles from "../../style/Global.module.css";

const ProductListPage = () => {
  return (
    <div className={GlobalStyles.container}>
      <Product name="Egma" latestPrice="3" />
      <Product name="Egma" latestPrice="3" />
      <Product name="Egma" latestPrice="3" />
    </div>
  );
};

export default ProductListPage;
