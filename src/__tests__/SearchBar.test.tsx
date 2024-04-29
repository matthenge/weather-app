import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("updates input value and calls onSearch when Enter key is pressed", () => {
    const mockOnSearch = jest.fn();
    const location = "Tokyo";
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} location={location} />,
    );
    const inputElement = getByPlaceholderText("Enter city name");
    fireEvent.change(inputElement, { target: { value: "New York" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(mockOnSearch).toHaveBeenCalledWith("New York");
  });
});
