import React from "react";
import { Nav } from "tabler-react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Nav>
      <Link to={"/"}>
        <Nav.Item>Products</Nav.Item>
      </Link>
      <Link to={"/add-product"}>
        <Nav.Item>Add Product</Nav.Item>
      </Link>
    </Nav>
  );
};

export default Menu;
