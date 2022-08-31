import React from "react";
import { render, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

describe("Rendering the list with props", () => {
  it("Should render no data! when no data propped", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });

  it("Should render list item correctly", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const itemList = screen
      .getAllByRole("listitem")
      .map((elm) => elm.textContent);
    const dummyItemList = dummyData.map((elm) => elm.item);
    expect(itemList).toEqual(dummyItemList);
    expect(screen.queryByText("No data !")).toBeNull();
  });
});
