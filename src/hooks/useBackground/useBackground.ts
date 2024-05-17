import { useColorScheme } from "@mui/joy/styles";
import { useState, useEffect } from "react";

import { BackgroundType } from "@/types";

import { darkStatic, darkDynamic } from "../../../public/assets";

//TODO: move to user profile when created
const useBackground = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}) => {
  const [background, setBackground] = useState("");
  const { mode } = useColorScheme();

  useEffect(() => {
    if (mode === "light") {
      //TODO: src proper images for light theme
      if (backgroundType === BackgroundType.STATIC) {
        setBackground("light-static.png");
      } else {
        setBackground("light-dynamic.gif");
      }
    } else {
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
