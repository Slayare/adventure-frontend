import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Link from "./Link";

describe("Link", () => {
  it("should render the link with destination", () => {
    render(
      <MemoryRouter>
        <Link destination="test">Link</Link>
      </MemoryRouter>
    );
    const linkElement = screen.getByText("Link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/test");
  });
});
