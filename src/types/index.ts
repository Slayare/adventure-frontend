import { TypographyProps, ButtonProps as MuiButtonProps } from "@mui/joy";

export enum FontType {
  HEADING = "HEADING",
  BODY = "BODY",
}

export interface TextProps extends TypographyProps {
  type?: FontType;
}

export interface ButtonProps extends MuiButtonProps {}
