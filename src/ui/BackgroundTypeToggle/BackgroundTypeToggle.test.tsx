import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import * as useAppStore from "@/store/useAppStore";
import { BackgroundType } from "@/types";

import BackgroundTypeToggle from "./BackgroundTypeToggle";

jest.mock("@/store/useAppStore", () => {
  return {
    __esModule: true,
    ...jest.requireActual("@/store/useAppStore"),
  };
});

const storeSpy = jest.spyOn(useAppStore, "default");

describe("BackgroundTypeToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with the correct icon", () => {
    render(<BackgroundTypeToggle />);
    expect(
      screen.getByRole("button", {
        name: /toggle background type/i,
      })
    ).toBeInTheDocument();
  });

  it("should toggle background type on click", () => {
    const mockToggleBackgroundType = jest.fn();

    storeSpy.mockReturnValueOnce(BackgroundType.STATIC);
    storeSpy.mockReturnValueOnce(mockToggleBackgroundType);

    render(<BackgroundTypeToggle />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockToggleBackgroundType).toHaveBeenCalled();
  });
});
