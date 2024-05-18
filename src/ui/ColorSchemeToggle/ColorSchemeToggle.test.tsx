import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import * as useAppStore from "@/store/useAppStore";

import ColorSchemeToggle from "./ColorSchemeToggle";

jest.mock("@/store/useAppStore", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/store/useAppStore"),
  };
});

describe("ColorSchemeToggle", () => {
  const storeSpy = jest.spyOn(useAppStore, "default");

  beforeEach(() => {
    storeSpy.mockClear();
  });

  it("should render toggle with icon", () => {
    render(<ColorSchemeToggle />);
    expect(screen.getByLabelText("toggle light/dark mode")).toBeInTheDocument();
  });

  it("should toggle mode when button is clicked", () => {
    const toggleMock = jest.fn();
    storeSpy.mockReturnValueOnce("light");
    storeSpy.mockReturnValueOnce(toggleMock);
    render(<ColorSchemeToggle />);

    fireEvent.click(screen.getByRole("button"));

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
