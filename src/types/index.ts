import {
  BoxProps,
  ButtonProps as MuiButtonProps,
  TypographyProps,
} from "@mui/joy";

export enum HeadingType {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
}

export enum FontType {
  H1 = HeadingType.H1,
  H2 = HeadingType.H2,
  H3 = HeadingType.H3,
  H4 = HeadingType.H4,
  BODY = "BODY",
}

export interface TextProps extends TypographyProps {
  type?: FontType;
}

export interface ButtonProps extends MuiButtonProps {}
export interface ContainerProps extends BoxProps {}
