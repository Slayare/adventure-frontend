import { Divider } from "@mui/joy";
import React from "react";

import { Flex } from "@/base/Container";
import { List } from "@/base/List";
import { BodyText, MinorHeading, SubHeading } from "@/base/Text";
import { Wrapper } from "@/base/Wrapper";
import { Layout } from "@/components/Layout";

const HomePageFlex = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex flexDirection="column" gap={1}>
      {children}
    </Flex>
  );
};

const HomePage = () => (
  <Layout>
    <Wrapper
      sx={{
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
        maxWidth: "md",
      }}
      variant="soft"
    >
      <SubHeading component="h2" alignSelf="center">
        The game that writes itself
      </SubHeading>
      <Divider />
      <HomePageFlex>
        <MinorHeading component="h3">About</MinorHeading>
        <BodyText>
          I aim to create a web-based text-adventure game using ChatGPT, its
          assistants API and a regular relational DB. The assistants API will
          assist with storing and tracking information in the vector DB, and my
          relational DB will provide a user save state through a login.
        </BodyText>
      </HomePageFlex>
      <Divider />
      <HomePageFlex>
        <MinorHeading component="h3">Features</MinorHeading>
        <List
          marker="disc"
          items={[
            "Dynamic role-playing system",
            "Customisable story integration",
            "Adaptive engine",
          ]}
        />
      </HomePageFlex>
      <Divider />
      <HomePageFlex>
        <MinorHeading component="h3">Roadmap</MinorHeading>
        <BodyText>To be completed!</BodyText>
      </HomePageFlex>
    </Wrapper>
  </Layout>
);

export default HomePage;
