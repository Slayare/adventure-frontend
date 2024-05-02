import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Link as RouterLink } from "react-router-dom";

import { Navigation } from "@/components/Navigation";
import { ColorSchemeToggle } from "@/ui/ColorSchemeToggle";

const Header = () => (
  <Sheet
    component="header"
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      boxShadow: "md",
    }}
    variant="outlined"
  >
    <Box sx={{ display: "flex" }}>
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Typography level="h4" sx={{ fontWeight: "bold", mr: 2 }}>
          Some generic title
        </Typography>
      </Box>
      <ColorSchemeToggle />
    </Box>
    <Navigation />
  </Sheet>
);

export default Header;
