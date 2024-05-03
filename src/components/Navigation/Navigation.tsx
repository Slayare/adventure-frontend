import Button from "@mui/joy/Button";
import { Link as RouterLink } from "react-router-dom";

import { Flex } from "@/base/Container";

const Navigation = () => (
  <Flex alignItems="center">
    <Button component={RouterLink} to="/about" color="primary" sx={{ mx: 1 }}>
      About
    </Button>
    <Button component={RouterLink} to="/sign-in" color="primary" sx={{ mx: 1 }}>
      Sign In
    </Button>
  </Flex>
);

export default Navigation;
