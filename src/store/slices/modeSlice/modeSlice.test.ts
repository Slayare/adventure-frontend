import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

import createModeSlice from "./modeSlice";

describe("modeSlice", () => {
  it("should toggle mode", () => {
    const useStore = create(createModeSlice);
    const { result } = renderHook(() => useStore());

    expect(result.current.mode).toBe("light");

    act(() => {
      result.current.toggleMode();
    });

    expect(result.current.mode).toBe("dark");
  });
});
