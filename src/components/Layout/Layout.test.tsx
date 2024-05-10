import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Layout from "./Layout";
import { CssVarsProvider } from "@mui/joy";

jest.mock("@mui/joy/styles", () => ({
  ...jest.requireActual("@mui/joy/styles"),
  useColorScheme: () => (component: any) => component,
}));

describe("Layout", () => {
  it("should render the layout with children", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Some child content</div>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByText("Some child content")).toBeInTheDocument();
  });
});
