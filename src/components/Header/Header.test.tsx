import { CssVarsProvider } from "@mui/joy/styles";

import { render, screen } from "@/utils/testing";

import Header from "./Header";

describe("Header", () => {
  it("should render the header with color scheme toggle", () => {
    render(
      <CssVarsProvider>
        <Header />
      </CssVarsProvider>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByLabelText("toggle light/dark mode")).toBeInTheDocument();
  });
});
