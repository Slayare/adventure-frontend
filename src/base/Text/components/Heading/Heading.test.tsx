// Heading.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";

import Heading from "./Heading";

describe("Heading", () => {
  test("should render a heading", () => {
    render(<Heading>A Header</Heading>);
    expect(screen.getByText("A header")).toBeInTheDocument();
  });
});
