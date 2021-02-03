import "./App.css";
import React, { useEffect } from "react";
import AddProductPage from "./Pages/AddProductPage/AddProductPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import EditProductPage from "./Pages/EditProductPage/EditProductPage";
import Menu from "./Components/Menu/Menu";
import GlobalStyles from "./style/Global.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getProducts } from "./Pages/ProductListPage/duck/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <Router>
      <div className={GlobalStyles.content}>
        <Menu />
        <Route path="/" exact component={ProductListPage} />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/edit-product/:id" component={EditProductPage} />
      </div>
    </Router>
  );
}

export default App;
