import {
  BoxProps,
  ButtonProps as MuiButtonProps,
  TypographyProps,
} from "@mui/joy";

export enum FontType {
  HEADING = "HEADING",
  BODY = "BODY",
}

export interface TextProps extends TypographyProps {
  type?: FontType;
}

export interface ButtonProps extends MuiButtonProps {}
export interface ContainerProps extends BoxProps {}
