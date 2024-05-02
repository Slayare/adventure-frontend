import React from "react";
import { render, screen } from "@testing-library/react";

import Container from "./Container";

describe("Container", () => {
  it("should render container with content", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
