import React from "react";

import { Flex } from "@/base/Container";
import { Wrapper } from "@/base/Wrapper";
import { useBackground } from "@/hooks/useBackground";

import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const background = useBackground();
  return (
    <Wrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "repeat",
          opacity: 0.65,
          filter: "blur(8px)",
        },
      }}
    >
      <Header />
      <Flex
        sx={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {children}
      </Flex>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
