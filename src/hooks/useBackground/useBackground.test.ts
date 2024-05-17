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
      const { result } = renderHook(() =>
        useBackground({ backgroundType: BackgroundType.STATIC })
      );

      expect(result.current).toBe(darkStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      const { result } = renderHook(() =>
        useBackground({ backgroundType: BackgroundType.DYNAMIC })
      );

      expect(result.current).toBe(darkDynamic);
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
      const { result } = renderHook(() =>
        useBackground({ backgroundType: BackgroundType.STATIC })
      );

      expect(result.current).toBe(lightStatic);
    });

    it("should return dynamic background when background type is dynamic", () => {
      const { result } = renderHook(() =>
        useBackground({ backgroundType: BackgroundType.DYNAMIC })
      );

      expect(result.current).toBe(lightDynamic);
    });
  });
});
