import { Box } from "@mui/joy";
import { styled } from "@mui/joy/styles";

import { ContainerProps } from "@/types";

// TODO: Add breakpoints
const StyledBox = styled(Box)(({ theme }) => ({
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
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Container;
