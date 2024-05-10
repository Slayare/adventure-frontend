import React from "react";
import { render, screen } from "@testing-library/react";

import SecondaryButton from "./SecondaryButton";

describe("PrimaryButton", () => {
  it("should render a secondary button", () => {
    render(<SecondaryButton>Other</SecondaryButton>);
    expect(screen.getByRole("button", { name: "Other" })).toBeInTheDocument();
  });
});
