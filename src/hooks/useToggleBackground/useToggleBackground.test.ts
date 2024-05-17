import React from "react";
import { renderHook, act } from "@testing-library/react";

import { BackgroundType } from "@/types";

import useToggleBackground from "./useToggleBackground";

describe("useToggleBackground", () => {
  const stateSpy = jest.spyOn(React, "useState");

  it("should call setBackgroundType with dynamic when the toggle is called", () => {
    const setState = jest.fn();
    stateSpy.mockImplementation(() => [BackgroundType.STATIC, setState]);
    const { result } = renderHook(() => useToggleBackground());

    act(() => result.current());

    expect(setState).toHaveBeenCalledWith(BackgroundType.DYNAMIC);
  });
});
