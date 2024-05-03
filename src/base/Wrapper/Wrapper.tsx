import { Sheet, SheetProps, styled } from "@mui/joy";
import React from "react";

interface WrapperProps extends SheetProps {}

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

const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <StyledSheet {...props}>{children}</StyledSheet>;
};

export default Wrapper;
