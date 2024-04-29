import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

import { Header } from "@/components/Header";

const HomePage = () => (
  <>
    <Header />
    <Sheet
      sx={{
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
        maxWidth: "md",
      }}
      variant="soft"
    >
      <Typography level="h4" component="h2">
        Some witty quote about the experience
      </Typography>
      <Typography level="body-sm">
        I aim to create a web-based text-adventure game using ChatGPT, its
        assistants API and a regular relational DB. The assistants API will
        assist with storing and tracking information in the vector DB, and my
        relational DB will provide a user save state through a login.
      </Typography>
    </Sheet>

    {/* TODO: extract footer to new component */}
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
      <Stack direction="row" justifyContent="space-between">
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
  </>
);

export default HomePage;
