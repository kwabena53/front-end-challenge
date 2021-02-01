import React, { useState } from "react";

import "tabler-react/dist/Tabler.css";
import { Grid, Form, Card, Button } from "tabler-react";

const ProductForm = ({ title, _productName, _price }) => {
  const productName = _productName ? _productName : undefined;
  const price = _price ? _price : undefined;
  const buttonText = _productName ? "save" : "submit";

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
  return (
    <Grid.Col lg={4} md={4} sm={12}>
      <Card styles={{ width: "300px" }}>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
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
          <Button color="primary">{buttonText}</Button>
        </Card.Body>
      </Card>
    </Grid.Col>
  );
};

export default ProductForm;
