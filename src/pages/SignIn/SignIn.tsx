import { Layout } from "@/components/Layout";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import React from "react";

import { BodyText, SubHeading } from "@/base/Text";
import { Container } from "@/base/Container";

const SignIn = () => (
  <Layout>
    <Container
      sx={{
        width: 300,
        mx: "auto",
        my: 4,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="soft"
    >
      <SubHeading component="h1">Hello world!</SubHeading>
      <BodyText>Sign in to continue.</BodyText>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" placeholder="Enter your email..." />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
      </FormControl>
      <Button sx={{ mt: 1 }}>Log in</Button>
      <BodyText
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
      >
        Don't have an account?
      </BodyText>
    </Container>
  </Layout>
);

export default SignIn;
