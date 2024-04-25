import { CssVarsProvider } from "@mui/joy/styles";
import { render, screen, fireEvent } from "@testing-library/react";

import * as useToggleMode from "@/hooks/useToggleMode";

import ColorSchemeToggle from "./ColorSchemeToggle";

describe("ColorSchemeToggle", () => {
  const toggleSpy = jest.spyOn(useToggleMode, "useToggleMode");

  beforeEach(() => {
    toggleSpy.mockClear();
  });

  it("should render toggle with icon", () => {
    render(
      <CssVarsProvider defaultMode="light">
        <ColorSchemeToggle />
      </CssVarsProvider>
    );
    expect(screen.getByLabelText("toggle light/dark mode")).toBeInTheDocument();
  });

  it("should toggle mode when button is clicked", () => {
    const toggleMock = jest.fn();
    toggleSpy.mockImplementation(() => toggleMock);
    render(
      <CssVarsProvider defaultMode="light">
        <ColorSchemeToggle />
      </CssVarsProvider>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
