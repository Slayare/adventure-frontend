import React from "react";
import { render, screen } from "@testing-library/react";

import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("should render a primary button", () => {
    render(<PrimaryButton>Primary</PrimaryButton>);
    expect(screen.getByRole("button", { name: "Primary" })).toBeInTheDocument();
  });
});
