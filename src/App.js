import "./App.css";
// import ProductForm from "./Components/ProductForm/ProductForm";
import AddProductPage from "./Pages/AddProductPage/AddProductPage";

function App() {
  return (
    <div className="App">
      <AddProductPage title="Add Product" _price="3" _productName="Egma" />
    </div>
  );
}

export default App;
