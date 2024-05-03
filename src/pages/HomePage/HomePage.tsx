import { BodyText, SubHeading } from "@/base/Text";
import { Wrapper } from "@/base/Wrapper";
import { Layout } from "@/components/Layout";

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
      <SubHeading component="h2">
        Some witty quote about the experience
      </SubHeading>
      <BodyText>
        I aim to create a web-based text-adventure game using ChatGPT, its
        assistants API and a regular relational DB. The assistants API will
        assist with storing and tracking information in the vector DB, and my
        relational DB will provide a user save state through a login.
      </BodyText>
    </Wrapper>
  </Layout>
);

export default HomePage;
