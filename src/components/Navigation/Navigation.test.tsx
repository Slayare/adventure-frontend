import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should render the nav component", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
