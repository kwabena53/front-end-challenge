import ProductForm from "../../Components/ProductForm/ProductForm";
import GlobalStyles from "../../style/Global.module.css";

const AddProductPage = () => {
  return (
    <div className={GlobalStyles.container}>
      <ProductForm title="Add" />
    </div>
  );
};

export default AddProductPage;
