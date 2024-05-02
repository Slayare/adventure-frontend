import { styled } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";

import { FONT_SIZES } from "@/constants";
import { TextProps } from "@/types";

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

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
