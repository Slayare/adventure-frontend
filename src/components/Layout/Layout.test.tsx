import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Layout from "./Layout";

jest.mock("@mui/joy/styles", () => ({
  ...jest.requireActual("@mui/joy/styles"),
  useColorScheme: () => ({
    setMode: jest.fn(),
  }),
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
