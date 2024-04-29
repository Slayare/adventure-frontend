import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Link as RouterLink } from "react-router-dom";

import { Navigation } from "@/components/Navigation";

const Header = () => (
  //  TODO: Use navigation component across all pages through a shared layout.
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
    <Navigation />
  </Sheet>
);

export default Header;
