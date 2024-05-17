import { renderHook } from "@testing-library/react";

import { BackgroundType } from "@/types";

import useAppStore from "./useAppStore";

describe("useAppStore", () => {
  it("should create store with background type and mode", () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.backgroundType).toBe(BackgroundType.STATIC);
    expect(result.current.mode).toBe("light");
  });
});
