import { render, screen } from "@testing-library/react";
import ProductForm from "../ProductForm";
import renderer from "react-test-renderer";

test("renders product form: add product", () => {
  render(<ProductForm title="add product" />);
  const textElement = screen.getByText(/add product/i);
  expect(textElement).toBeInTheDocument();
});

test("matches product form snapshot: add product", () => {
  const component = renderer.create(<ProductForm title="add product" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders product form: edit product", () => {
  render(
    <ProductForm
      title="edit product"
      _productName="Product Name"
      _price="Price"
    />
  );
  const textElement = screen.getByText(/Product Name/i);
  expect(textElement).toBeInTheDocument();
});

test("matches product form snapshot", () => {
  const component = renderer.create(
    <ProductForm
      title="edit product"
      _productName="Product Name"
      _price="Price"
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("changes the button to save when it's an edit form", () => {
  render(
    <ProductForm
      title="edit product"
      _productName="Product Name"
      _price="Price"
    />
  );
  const textElement = screen.getByText(/save/i);
  expect(textElement).toBeInTheDocument();
});
