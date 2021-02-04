import React from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";
import GlobalStyles from "../../style/Global.module.css";
import { useSelector } from "react-redux";

const EditProductPage = (props) => {
  const products = useSelector((state) => state.products);
  const { id } = props.match.params;

  const getLatestPriceId = (prodPrices, price) => {
    const sortedPriceIDList = prodPrices.sort(
      (a, b) => new Date(price[b].date) - new Date(price[a].date)
    );

    return sortedPriceIDList[0];
  };

  const productName = products.entities.product[id].name;
  const prices = products.entities.product[id].prices;
  const priceId = getLatestPriceId(prices, products.entities.price);
  const price = products.entities.price[priceId].price;

  return (
    <div className={GlobalStyles.container}>
      <ProductForm
        title="Edit"
        _productId={id}
        _product={productName}
        _price={price}
        _priceId={priceId}
      />
    </div>
  );
};

export default EditProductPage;
