import { useCallback, useState } from "react";

import { BackgroundType } from "@/types";

const useToggleBackground = () => {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>(
    BackgroundType.STATIC
  );

  const toggleBackgroundType = useCallback(() => {
    setBackgroundType((prevType) =>
      prevType === BackgroundType.STATIC
        ? BackgroundType.DYNAMIC
        : BackgroundType.STATIC
    );
  }, []);

  return { backgroundType, toggleBackgroundType };
};

export default useToggleBackground;
