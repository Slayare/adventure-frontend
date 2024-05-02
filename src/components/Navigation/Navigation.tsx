import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Button component={RouterLink} to="/about" color="primary" sx={{ mx: 1 }}>
      About
    </Button>
    <Button component={RouterLink} to="/sign-in" color="primary" sx={{ mx: 1 }}>
      Sign In
    </Button>
  </Box>
);

export default Navigation;
