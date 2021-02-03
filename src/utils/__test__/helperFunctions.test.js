import { getNextAutoIncrementID } from "../helper";

test("renders product", () => {
  const price = {
    1: {
      date: "2019-01-01T17:16:32+00:00",
      id: 1,
      price: 10.99,
    },
    2: {
      date: "2019-01-01T17:16:32+00:00",
      id: 1,
      price: 10.99,
    },
    3: {
      date: "2019-01-01T17:16:32+00:00",
      id: 1,
      price: 10.99,
    },
  };

  expect(getNextAutoIncrementID(price)).toBe(4);
});
