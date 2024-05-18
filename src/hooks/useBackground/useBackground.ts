import { useColorScheme } from "@mui/joy/styles";
import { useState, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import useAppStore from "@/store/useAppStore";
import { BackgroundType } from "@/types";

import { darkStatic, darkDynamic } from "../../../public/assets";

//TODO: move to user profile when created
const useBackground = () => {
  const [background, setBackground] = useState("");
  const { mode, backgroundType } = useAppStore(
    useShallow((state) => ({
      mode: state.mode,
      backgroundType: state.backgroundType,
    }))
  );
  const { setMode } = useColorScheme();

  useEffect(() => {
    if (mode === "light") {
      setMode(mode);
      //TODO: src proper images for light theme
      if (backgroundType === BackgroundType.STATIC) {
        setBackground("light-static.png");
      } else {
        setBackground("light-dynamic.gif");
      }
    } else {
      setMode(mode);
      if (backgroundType === BackgroundType.STATIC) {
        setBackground(darkStatic);
      } else {
        setBackground(darkDynamic);
      }
    }
  }, [mode, backgroundType]);

  return background;
};

export default useBackground;
