import { useColorScheme } from "@mui/joy/styles";
import { renderHook, act } from "@testing-library/react-hooks";

import useToggleMode from "./useToggleMode";

jest.mock("@mui/joy/styles");

describe("useToggleMode", () => {
  it("should call setMode with a string when called", () => {
    const setMode = jest.fn();
    (useColorScheme as jest.Mock).mockReturnValue({
      mode: "light",
      setMode,
    });
    const { result } = renderHook(() => useToggleMode());

    act(() => {
      result.current();
    });

    expect(setMode).toHaveBeenCalledWith("dark");
  });
});
