import { Sheet, Stack, Typography, Button } from "@mui/joy";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Sheet
      component="footer"
      sx={{
        mt: 8,
        py: 2,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="outlined"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography level="body-md">
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
        <Stack direction="row" gap={2}>
          <Button component={Link} to="/privacy-policy">
            Privacy Policy
          </Button>
          <Button component={Link} to="/terms-of-service">
            Terms of Service
          </Button>
        </Stack>
      </Stack>
    </Sheet>
  );
};

export default Footer;
