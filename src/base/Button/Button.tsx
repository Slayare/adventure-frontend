import { Button as MuiButton } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import React from "react";

import { ButtonProps } from "@/types";

// TODO: Add breakpoints
const StyledButton = styled(MuiButton)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    // do something
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    // do something
  },
  [theme.breakpoints.up("tablet")]: {
    // do something
  },
}));

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
