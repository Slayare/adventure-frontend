import { render, screen } from "@/utils/testing";

import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should render the nav component", () => {
    render(<Navigation />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
