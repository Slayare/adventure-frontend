import { render, screen, fireEvent } from "@testing-library/react";

import * as useToggleMode from "@/hooks/useToggleMode";

import DarkModeToggle from "./DarkModeToggle";

describe("DarkModeToggle", () => {
  const toggleSpy = jest.spyOn(useToggleMode, "useToggleMode");

  it("should call toggle when button is clicked", () => {
    const toggleMock = jest.fn();
    toggleSpy.mockImplementation(() => toggleMock);
    render(<DarkModeToggle />);

    fireEvent.click(screen.getByRole("button"));

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });
});
