import { render, screen } from "@/utils/testing";

import Layout from "./Layout";

describe("Layout", () => {
  it("should render the layout with children", () => {
    render(
      <Layout>
        <div>Some child content</div>
      </Layout>
    );
    expect(screen.getByText("Some child content")).toBeInTheDocument();
  });
});