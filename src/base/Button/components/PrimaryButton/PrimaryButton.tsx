import { ButtonProps } from "@/types";

import Button from "../../Button";

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default PrimaryButton;
