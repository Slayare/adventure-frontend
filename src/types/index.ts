import { TypographyProps } from "@mui/joy";

export enum FontType {
  HEADING = "HEADING",
  BODY = "BODY",
}

export interface TextProps extends TypographyProps {
  type?: FontType;
}
