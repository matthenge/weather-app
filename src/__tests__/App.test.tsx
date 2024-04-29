import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("renders learn react link", () => {
  it("Renders correctly", async () => {
    render(<App />);
    const linkElement = screen.getByTestId("App");
    expect(linkElement).toBeInTheDocument();
  });
});
