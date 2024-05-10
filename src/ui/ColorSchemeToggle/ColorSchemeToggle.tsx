import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { IconButton, IconButtonProps } from "@mui/joy";
import { useColorScheme } from "@mui/joy";
import { useEffect, useState } from "react";

import { useToggleMode } from "@/hooks/useToggleMode";

const ColorSchemeToggle = ({ onClick, ...other }: IconButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { mode } = useColorScheme();
  const toggleMode = useToggleMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={toggleMode}
      {...other}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
};

export default ColorSchemeToggle;
