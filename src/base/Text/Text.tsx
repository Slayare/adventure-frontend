import Typography from "@mui/joy/Typography";

import { TextProps } from "@/types";

const Text = ({ children, ...props }: TextProps) => {
  return <Typography {...props}>{children}</Typography>;
};

export default Text;
