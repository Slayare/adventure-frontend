import React from "react";
import { render, screen } from "@testing-library/react";

import Link from "./Link";

describe("Link", () => {
  it("should render the link with destination", () => {
    render(<Link destination="test">Link</Link>);
    const linkElement = screen.getByText("Link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/test");
  });
});
