import { Layout } from "@/components/Layout";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React from "react";

const SignIn = () => (
  <Layout>
    <Sheet
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
      <Typography level="h4" component="h1">
        Hello world!
      </Typography>
      <Typography level="body-sm">Sign in to continue.</Typography>
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
      <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        fontSize="sm"
        sx={{ alignSelf: "center" }}
      >
        Don't have an account?
      </Typography>
    </Sheet>
  </Layout>
);

export default SignIn;
