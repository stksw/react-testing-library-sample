import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Redux from "./Redux";
import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "./customCounterSlice";

describe("Redux Integration Test", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("Should display value with increment by 1 per click", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("increment"));
    await userEvent.click(screen.getByText("increment"));
    await userEvent.click(screen.getByText("increment"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(3);
  });

  it("Should display value with decrement by 1 per click", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("decrement"));
    await userEvent.click(screen.getByText("decrement"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(-2);
  });
});
