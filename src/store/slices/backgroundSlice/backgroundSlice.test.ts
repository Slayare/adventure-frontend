import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

import { BackgroundType } from "@/types";

import createBackgroundSlice from "./backgroundSlice";

describe("backgroundSlice", () => {
  it("should toggle background type", () => {
    const useStore = create(createBackgroundSlice);
    const { result } = renderHook(() => useStore());

    expect(result.current.backgroundType).toBe(BackgroundType.STATIC);

    act(() => {
      result.current.toggleBackgroundType();
    });

    expect(result.current.backgroundType).toBe(BackgroundType.DYNAMIC);
  });
});
