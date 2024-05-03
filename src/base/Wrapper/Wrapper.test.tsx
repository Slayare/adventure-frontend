import React from "react";
import { render, screen } from "@testing-library/react";

import Wrapper from "./Wrapper";

describe("Wrapper", () => {
  it("should render wrapper with content", () => {
    render(<Wrapper>Content</Wrapper>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
