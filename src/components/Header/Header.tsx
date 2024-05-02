import Box from "@mui/joy/Box";
import { Link as RouterLink } from "react-router-dom";

import { Container } from "@/base/Container";
import { SubHeading } from "@/base/Text";
import { Navigation } from "@/components/Navigation";
import { ColorSchemeToggle } from "@/ui/ColorSchemeToggle";

const Header = () => (
  <Container
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
        <SubHeading sx={{ fontWeight: "bold", mr: 2 }}>
          Some generic title
        </SubHeading>
      </Box>
      <ColorSchemeToggle />
    </Box>
    <Navigation />
  </Container>
);

export default Header;
