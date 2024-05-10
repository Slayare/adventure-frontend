import { TypographySystem } from "@mui/joy/styles";
import React from "react";

import { FontType, TextProps } from "@/types";

import Text from "../../Text";

const createHeading = (level: keyof TypographySystem, type: FontType) => {
  return ({ children, ...props }: TextProps) => (
    <Text type={type} level={level} {...props}>
      {children}
    </Text>
  );
};

const MainHeading = createHeading("h1", FontType.H1);
const SubHeading = createHeading("h4", FontType.H2);
const MediumHeading = createHeading("title-md", FontType.H3);
const MinorHeading = createHeading("title-sm", FontType.H4);

export { MainHeading, SubHeading, MediumHeading, MinorHeading };
