import React from "react";

import { Container, Flex } from "@/base/Container";
import { SubHeading } from "@/base/Text";
import { Wrapper } from "@/base/Wrapper";
import { Navigation } from "@/components/Navigation";
import { Link } from "@/components/Link";
import { BackgroundTypeToggle } from "@/ui/BackgroundTypeToggle";
import { ColorSchemeToggle } from "@/ui/ColorSchemeToggle";

const Header = () => (
  <Wrapper
    component="header"
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      boxShadow: "md",
    }}
    variant="soft"
  >
    <Flex>
      <Link destination="">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <SubHeading sx={{ fontWeight: "bold", mr: 2 }}>
            Some generic title
          </SubHeading>
        </Container>
      </Link>
      <ColorSchemeToggle />
      <BackgroundTypeToggle />
    </Flex>
    <Navigation />
  </Wrapper>
);

export default Header;
