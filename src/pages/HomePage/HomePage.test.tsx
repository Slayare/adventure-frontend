import { render, screen } from "@/utils/testing";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render homepage with message", () => {
    render(<HomePage />);
    const heading = screen.getByText("Some generic title");
    const content = screen.getByText(/Some witty quote about the experience/i);
    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
