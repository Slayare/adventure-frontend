import { styled } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import * as React from "react";

import { FONT_SIZES } from "@/constants";

const StyledText = styled(Typography)(({ theme }) => ({
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

const Text = ({ children }: { children: React.ReactNode }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
