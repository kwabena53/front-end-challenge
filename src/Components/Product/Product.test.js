import { render, screen } from "@testing-library/react";
import Product from "./Product";
import renderer from "react-test-renderer";

test("renders product", () => {
  render(<Product name="Product Name" latestPrice="Latest Price" />);
  const textElement = screen.getByText(/Product Name/i);
  expect(textElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const component = renderer.create(
    <Product name="Product Name" latestPrice="Latest Price" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
