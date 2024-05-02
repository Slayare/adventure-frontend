import { ButtonProps } from "@/types";

import Button from "../../Button";

const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default SecondaryButton;
