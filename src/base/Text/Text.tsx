import { styled, Typography } from "@mui/joy";
import React from "react";

import { FONT_SIZES } from "@/constants";
import { FontType, TextProps } from "@/types";

const StyledText = styled(Typography)<TextProps>(
  ({ theme, type = FontType.BODY }) => ({
    [theme.breakpoints.down("mobile")]: {
      fontSize: FONT_SIZES[type].XS,
    },
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: FONT_SIZES[type].SM,
    },
    [theme.breakpoints.up("tablet")]: {
      fontSize: FONT_SIZES[type].MD,
    },
  })
);

const Text = ({ children, type = FontType.BODY, ...props }: TextProps) => {
  return (
    <StyledText type={type} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
