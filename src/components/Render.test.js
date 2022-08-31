import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Render", () => {
  it("should render all the elements collectry", () => {
    render(<Render />);
    // screen.debug();
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeemy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
