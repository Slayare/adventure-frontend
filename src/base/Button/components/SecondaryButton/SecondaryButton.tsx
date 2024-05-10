import React from "react";

import { ButtonProps } from "@/types";

import Button from "../../Button";

const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button color="neutral" variant="solid" {...props}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
