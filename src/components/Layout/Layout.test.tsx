import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Layout from "./Layout";

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
