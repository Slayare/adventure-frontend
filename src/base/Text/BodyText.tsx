import React from "react";

import { TextProps } from "@/types";

import Text from "./Text";

interface BodyTextProps extends TextProps {
  sx?: object;
}

const BodyText = ({ children, sx, ...props }: BodyTextProps) => {
  return (
    <Text
      {...props}
      sx={{
        fontSize: "body-sm !important",
        ...sx,
      }}
    >
      {children}
    </Text>
  );
};

export default BodyText;
