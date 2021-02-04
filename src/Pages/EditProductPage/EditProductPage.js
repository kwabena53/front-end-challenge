import React from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";
import GlobalStyles from "../../style/Global.module.css";
import { useSelector } from "react-redux";

const EditProductPage = (props) => {
  const products = useSelector((state) => state.products);
  const { id } = props.match.params;

  const productName = products.entities.product[id].name;
  const price = products.entities.price[id].price;

  return (
    <div className={GlobalStyles.container}>
      <ProductForm
        title="Edit"
        _productId={id}
        _product={productName}
        _price={price}
      />
    </div>
  );
};

export default EditProductPage;
