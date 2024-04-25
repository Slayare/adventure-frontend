import { useColorScheme } from "@mui/joy/styles";

const useToggleMode = () => {
  const { mode, setMode } = useColorScheme();

  return () => {
    setMode(mode === "light" ? "dark" : "light");
  };
};

export default useToggleMode;
