import { ButtonProps } from "@/types";

import Button from "../../Button";

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button color="primary" variant="solid" {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
