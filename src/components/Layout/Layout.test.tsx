import { CssVarsProvider } from "@mui/joy/styles";

import { render, screen } from "@/utils/testing";

import Layout from "./Layout";

describe("Layout", () => {
  it("should render the layout with children", () => {
    render(
      <CssVarsProvider>
        <Layout>
          <div>Some child content</div>
        </Layout>
      </CssVarsProvider>
    );
    expect(screen.getByText("Some child content")).toBeInTheDocument();
  });
});
