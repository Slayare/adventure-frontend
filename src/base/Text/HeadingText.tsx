import { styled } from "@mui/joy";
import React from "react";

import { HEADING_SIZES } from "@/constants";
import { TextProps } from "@/types";

import Text from "./Text";

const StyledText = styled(Text)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    fontSize: HEADING_SIZES.XS,
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    fontSize: HEADING_SIZES.SM,
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: HEADING_SIZES.MD,
  },
}));

const HeadingText = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default HeadingText;
