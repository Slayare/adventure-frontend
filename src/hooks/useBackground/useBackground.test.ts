import { useColorScheme } from "@mui/joy/styles";
import { renderHook } from "@testing-library/react";

import * as useAppStore from "@/store/useAppStore";
import { BackgroundType } from "@/types";

import useBackground from "./useBackground";

const darkStatic = "dark-static.png";
const darkDynamic = "dark-dynamic.gif";
const lightStatic = "light-static.png";
const lightDynamic = "light-dynamic.gif";

jest.mock("../../../public/assets", () => ({
  darkStatic: "dark-static.png",
  darkDynamic: "dark-dynamic.gif",
  lightStatic: "light-static.png",
  lightDynamic: "light-dynamic.gif",
}));

jest.mock("@/store/useAppStore", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock("@mui/joy/styles", () => ({
  ...jest.requireActual("@mui/joy/styles"),
  useColorScheme: () => ({
    setMode: jest.fn(),
  }),
}));

const getBackgroundHookWithResult = (
  mode: string,
  backgroundType: BackgroundType,
  expected: string
) => {
  // @ts-ignore
  useAppStore.default.mockReturnValue({
    mode,
    backgroundType,
  });

  const { result } = renderHook(() => useBackground());
  expect(result.current).toBe(expected);

  // @ts-ignore
  useAppStore.default.mockReset();
};

describe("useBackground", () => {
  describe("dark theme", () => {
    it("should return static background when background type is static", () => {
      getBackgroundHookWithResult("dark", BackgroundType.STATIC, darkStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      getBackgroundHookWithResult("dark", BackgroundType.DYNAMIC, darkDynamic);
    });
  });

  describe("light theme", () => {
    it("should return static background when background type is static", () => {
      getBackgroundHookWithResult("light", BackgroundType.STATIC, lightStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      getBackgroundHookWithResult(
        "light",
        BackgroundType.DYNAMIC,
        lightDynamic
      );
    });
  });
});
