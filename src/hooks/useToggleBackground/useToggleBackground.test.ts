import React from "react";
import { renderHook, act } from "@testing-library/react";

import { BackgroundType } from "@/types";

import useToggleBackground from "./useToggleBackground";

describe("useToggleBackground", () => {
  const stateSpy = jest.spyOn(React, "useState");

  it("should call setBackgroundType with dynamic when the toggle is called", () => {
    const setState = jest.fn();
    stateSpy.mockImplementation(() => [BackgroundType.DYNAMIC, setState]);
    const { result } = renderHook(() => useToggleBackground());

    expect(result.current).toEqual({
      backgroundType: BackgroundType.DYNAMIC,
      toggleBackgroundType: expect.any(Function),
    });
  });
});
