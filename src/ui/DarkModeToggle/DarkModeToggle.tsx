import { useState, useEffect } from "react";
import Button from "@mui/joy/Button";

import { useToggleMode } from "@/hooks/useToggleMode";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const toggleMode = useToggleMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button variant="outlined" onClick={toggleMode}>
      Toggle theme
    </Button>
  );
};

export default DarkModeToggle;
