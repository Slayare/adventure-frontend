import { ModeSlice } from "@/types";
import { StateCreator } from "zustand";

const modeSlice: StateCreator<ModeSlice> = (set) => ({
  mode: "light",
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),
});

export default modeSlice;
