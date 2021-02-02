import React from "react";
import { Nav } from "tabler-react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link to={"/"}>Products</Link>
      </Nav.Item>

      <Nav.Item>
        <Link to={"/add-product"}>Add Product</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu;
