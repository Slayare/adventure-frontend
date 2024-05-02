import { TypographySystem } from "@mui/joy";
import React from "react";

import { FontType, TextProps } from "@/types";

import Text from "../../Text";

const createHeading = (level: keyof TypographySystem) => {
  return ({ children, ...props }: TextProps) => (
    <Text type={FontType.HEADING} level={level} {...props}>
      {children}
    </Text>
  );
};

const MainHeading = createHeading("h1");
const SubHeading = createHeading("h4");
const MediumHeading = createHeading("title-md");
const MinorHeading = createHeading("title-sm");

export { MainHeading, SubHeading, MediumHeading, MinorHeading };
