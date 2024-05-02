import { styled } from "@mui/joy";
import React from "react";

import { FONT_SIZES } from "@/constants";
import { TextProps } from "@/types";

import Text from "./Text";

const StyledText = styled(Text)(({ theme }) => ({
  [theme.breakpoints.down("mobile")]: {
    fontSize: FONT_SIZES.XS,
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    fontSize: FONT_SIZES.SM,
  },
  [theme.breakpoints.up("tablet")]: {
    fontSize: FONT_SIZES.MD,
  },
}));

const BodyText = ({ children, ...props }: TextProps) => {
  return (
    <StyledText level="body-md" {...props}>
      {children}
    </StyledText>
  );
};

export default BodyText;
