import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <Stack direction="row" justifyContent="space-between" p={2}>
      <Typography level="h4" component="h1">
        My App
      </Typography>
      <Stack direction="row" gap={2}>
        <Button component={Link} to="/sign-in">
          Sign In Link
        </Button>
      </Stack>
    </Stack>
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
      }}
      variant="soft"
    >
      <Typography level="h4" component="h1">
        Welcome to the Home Page!
      </Typography>
      <Typography level="body-sm">
        This is the home page of the application.
      </Typography>
    </Sheet>
  </>
);

export default HomePage;
