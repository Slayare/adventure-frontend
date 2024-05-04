import { render, screen } from "@/utils/testing";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render homepage with message", () => {
    render(<HomePage />);
    expect(screen.getByText("Some generic title")).toBeInTheDocument();
    expect(screen.getByText("The game that writes itself")).toBeInTheDocument();
  });
});
