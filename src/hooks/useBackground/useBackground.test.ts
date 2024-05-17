import { useColorScheme } from "@mui/joy/styles";
import { renderHook } from "@testing-library/react";

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

jest.mock("@mui/joy/styles");

const getBackgroundHookWithResult = (
  backgroundType: BackgroundType,
  expected: string
) => {
  const { result } = renderHook(() => useBackground({ backgroundType }));

  expect(result.current).toBe(expected);
};

describe("useBackground", () => {
  describe("dark theme", () => {
    beforeEach(() => {
      (useColorScheme as jest.Mock).mockReturnValue({
        mode: "dark",
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("should return static background when background type is static", () => {
      getBackgroundHookWithResult(BackgroundType.STATIC, darkStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      getBackgroundHookWithResult(BackgroundType.DYNAMIC, darkDynamic);
    });
  });

  describe("light theme", () => {
    beforeEach(() => {
      (useColorScheme as jest.Mock).mockReturnValue({
        mode: "light",
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
    it("should return static background when background type is static", () => {
      getBackgroundHookWithResult(BackgroundType.STATIC, lightStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      getBackgroundHookWithResult(BackgroundType.DYNAMIC, lightDynamic);
    });
  });
});
