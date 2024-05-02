import { Sheet, styled } from "@mui/joy";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

// TODO: Add breakpoints
const StyledSheet = styled(Sheet)(({ theme }) => ({
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

const Container = ({ children, ...props }: ContainerProps) => {
  return <StyledSheet {...props}>{children}</StyledSheet>;
};

export default Container;
