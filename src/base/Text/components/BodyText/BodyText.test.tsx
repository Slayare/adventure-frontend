import React from "react";
import { render, screen } from "@testing-library/react";

import BodyText from "./BodyText";

describe("BodyText", () => {
  it("should render body text", () => {
    render(<BodyText>Some body</BodyText>);
    expect(screen.getByText("Some body")).toBeInTheDocument();
  });
});
