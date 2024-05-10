import React from "react";

import { ContainerProps } from "@/types";

import Container from "../../Container";

const Flex = ({ children, ...props }: ContainerProps) => {
  return (
    <Container display="flex" {...props}>
      {children}
    </Container>
  );
};

export default Flex;
