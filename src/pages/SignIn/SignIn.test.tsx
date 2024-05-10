import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignIn from "./SignIn";

jest.mock("@mui/joy/styles", () => ({
  ...jest.requireActual("@mui/joy/styles"),
  useColorScheme: () => (component: any) => component,
}));

describe("SignIn", () => {
  it("should render sign-in page", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    expect(screen.getByText("Sign in to continue.")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign up" })).toBeInTheDocument();
  });

  it("should populate email and password fields when typing", () => {
    const email = "some-email@example.com";
    const password = "password";

    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText("Enter your email...");
    const passwordInput = screen.getByPlaceholderText("Enter your password...");
    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);

    waitFor(() => {
      expect(emailInput).toHaveValue(email);
    });
    waitFor(() => {
      expect(passwordInput).toHaveValue(password);
    });
  });
});
