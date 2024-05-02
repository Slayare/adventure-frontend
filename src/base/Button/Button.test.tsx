import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render a button component", () => {
    render(<Button onClick={() => jest.fn()}>Some button</Button>);
    expect(
      screen.getByRole("button", { name: "Some button" })
    ).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick()}>Some button</Button>);
    userEvent.click(screen.getByRole("button", { name: "Some button" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
