import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const theme = extendTheme({
  breakpoints: {
    values: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
