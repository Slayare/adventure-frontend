import { useState } from "react";

import { BackgroundType } from "@/types";

const useToggleBackground = () => {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>(
    BackgroundType.STATIC
  );

  return () => {
    setBackgroundType(
      backgroundType === BackgroundType.STATIC
        ? BackgroundType.DYNAMIC
        : BackgroundType.STATIC
    );
  };
};

export default useToggleBackground;
