import React, { useState } from "react";
import {
  addProduct,
  editProduct,
} from "../../Pages/ProductListPage/duck/actions";

import "tabler-react/dist/Tabler.css";
import { Grid, Form, Card, Button } from "tabler-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductForm = ({ title, _product, _price, _productId, _priceId }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const productName = _product ? _product : undefined;
  const price = _price ? _price : undefined;
  const priceId = _priceId ? _priceId : undefined;
  const productId = _productId ? _productId : undefined;
  const buttonText = _product ? "save" : "submit";

  const [inputText, setInputText] = useState({
    prodName: productName,
    prodPrice: price,
  });

  const handleInputTextChange = (e) => {
    const target = e.target;
    setInputText({
      ...inputText,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "Add") {
      dispatch(addProduct(inputText.prodName, inputText.prodPrice));
    } else if (title === "Edit") {
      dispatch(
        editProduct(productId, inputText.prodName, inputText.prodPrice, priceId)
      );
    }
    history.push("/");
  };
  return (
    <Grid.Col lg={4} md={4} sm={12}>
      <Card styles={{ width: "300px" }}>
        <Card.Header>
          <Card.Title>{title} Product</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group label="Product Name">
            <Form.Input
              name="prodName"
              value={inputText.prodName}
              onChange={handleInputTextChange}
              placeholder="Enter product name"
            />
          </Form.Group>
          <Form.Group label="Price">
            <Form.Input
              name="prodPrice"
              value={inputText.prodPrice}
              onChange={handleInputTextChange}
              placeholder="Enter product latest price"
            />
          </Form.Group>
          <Button onClick={handleSubmit} color="primary">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default ProductForm;
