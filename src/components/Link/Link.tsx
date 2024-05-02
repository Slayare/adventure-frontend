import { Link as MuiLink } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";

import React from "react";

interface LinkProps {
  children: React.ReactNode;
  destination: string;
}

const Link = ({ children, destination }: LinkProps) => {
  return (
    <MuiLink
      sx={{ ":hover": { textDecorationLine: "unset" } }}
      component={RouterLink}
      to={`/${destination}`}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
