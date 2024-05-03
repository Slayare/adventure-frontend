import React from "react";
import { render, screen } from "@testing-library/react";

import Flex from "./Flex";

describe("Flex", () => {
  it("should render a flex component", () => {
    render(<Flex>Flexicution</Flex>);
    expect(screen.getByText("Flexicution")).toBeInTheDocument();
  });
});
