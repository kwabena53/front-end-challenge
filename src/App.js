import "./App.css";
import AddProductPage from "./Pages/AddProductPage/AddProductPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import EditProductPage from "./Pages/EditProductPage/EditProductPage";

import Menu from "./Components/Menu/Menu";
import GlobalStyles from "./style/Global.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
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
