import React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
  it("should render text with content", () => {
    render(<Text>Some content</Text>);
    expect(screen.getByText("Some content")).toBeInTheDocument();
  });
});
