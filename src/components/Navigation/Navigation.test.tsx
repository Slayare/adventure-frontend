import { render, screen } from "@testing-library/react";

import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should render the nav component", () => {
    render(<Navigation />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
