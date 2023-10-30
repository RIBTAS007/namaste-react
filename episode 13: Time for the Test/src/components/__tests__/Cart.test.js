import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load  restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Sweets (55)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(55);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", {name: "Add +"});

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(57);
  
  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(55);

  expect(screen.getByText("Cart is empty, Add items to the cart !")).toBeInTheDocument();
});
