import React from "react";
import { render, screen } from "@testing-library/react";

import Container from "./Container";

describe("Container", () => {
  it("should render the container with children", () => {
    render(<Container>Container</Container>);
    expect(screen.getByText("Container")).toBeInTheDocument();
  });
});
