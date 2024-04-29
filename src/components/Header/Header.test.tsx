import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Header", () => {
  it("should render the header", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
