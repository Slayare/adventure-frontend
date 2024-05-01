import { render, screen } from "@/utils/testing";

import Header from "./Header";

describe("Header", () => {
  it("should render the header with color scheme toggle", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByLabelText("toggle light/dark mode")).toBeInTheDocument();
  });
});
