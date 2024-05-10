import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render the header with color scheme toggle", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByLabelText("toggle light/dark mode")).toBeInTheDocument();
  });
});
