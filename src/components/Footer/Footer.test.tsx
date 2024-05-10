import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it(`should render the footer with "ToS" and "Privacy policy" links`, () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText("Privacy policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });
});
