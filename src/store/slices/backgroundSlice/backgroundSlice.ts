import { StateCreator } from "zustand";
import { BackgroundSlice, BackgroundType } from "@/types";

const backgroundSlice: StateCreator<BackgroundSlice> = (set) => ({
  backgroundType: BackgroundType.STATIC,
  toggleBackgroundType: () =>
    set((state) => ({
      backgroundType:
        state.backgroundType === BackgroundType.STATIC
          ? BackgroundType.DYNAMIC
          : BackgroundType.STATIC,
    })),
});

export default backgroundSlice;
