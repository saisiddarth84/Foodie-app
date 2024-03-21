import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Chocolate Ice Creams (9)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

});

it("should update cart items added in the Header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Chocolate Ice Creams (9)");
  fireEvent.click(accordianHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
});

it("should show added items in the Cart Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Chocolate Ice Creams (9)");
  fireEvent.click(accordianHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[3]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (3)")).toBeInTheDocument();

  expect(screen.getAllByTestId("cartItems").length).toBe(3);
});
