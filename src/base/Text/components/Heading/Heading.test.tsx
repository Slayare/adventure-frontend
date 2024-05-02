// Heading.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";

import {
  MainHeading,
  SubHeading,
  MediumHeading,
  MinorHeading,
} from "./Heading";

describe("Heading", () => {
  it("should render the main heading", () => {
    render(<MainHeading>Main</MainHeading>);
    expect(screen.getByText("Main")).toBeInTheDocument();
  });

  it("should render the sub heading", () => {
    render(<SubHeading>Sub</SubHeading>);
    expect(screen.getByText("Sub")).toBeInTheDocument();
  });

  it("should render the medium heading", () => {
    render(<MediumHeading>Med</MediumHeading>);
    expect(screen.getByText("Med")).toBeInTheDocument();
  });

  it("should render the minor heading", () => {
    render(<MinorHeading>Min</MinorHeading>);
    expect(screen.getByText("Min")).toBeInTheDocument();
  });
});
