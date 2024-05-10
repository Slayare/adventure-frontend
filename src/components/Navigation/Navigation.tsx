import React from "react";

import { Flex } from "@/base/Container";
import { Link } from "@/components/Link";
import { PrimaryButton } from "@/base/Button";

// TODO: can make this common between footer and header nav
const Navigation = () => (
  <Flex alignItems="center">
    <Link destination="about">
      <PrimaryButton sx={{ mx: 1 }}>About</PrimaryButton>
    </Link>
    <Link destination="sign-in">
      <PrimaryButton sx={{ mx: 1 }}>Sign In</PrimaryButton>
    </Link>
  </Flex>
);

export default Navigation;
