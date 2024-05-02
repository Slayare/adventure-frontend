import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import { Layout } from "@/components/Layout";
import { Text } from "@/base/Text";
import { FontType } from "@/types";

const HomePage = () => (
  <Layout>
    <Sheet
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
      <Typography level="h4" component="h2">
        Some witty quote about the experience
      </Typography>
      <Text type={FontType.BODY}>
        I aim to create a web-based text-adventure game using ChatGPT, its
        assistants API and a regular relational DB. The assistants API will
        assist with storing and tracking information in the vector DB, and my
        relational DB will provide a user save state through a login.
      </Text>
    </Sheet>
  </Layout>
);

export default HomePage;
