import { createWithEqualityFn } from "zustand/traditional";

import { BackgroundSlice, ModeSlice } from "@/types";

import { backgroundSlice } from "./slices/backgroundSlice";
import { modeSlice } from "./slices/modeSlice";

type AppState = BackgroundSlice & ModeSlice;

const useAppStore = createWithEqualityFn<AppState>((get, set, api) => ({
  ...backgroundSlice(get, set, api),
  ...modeSlice(get, set, api),
}));

export default useAppStore;
