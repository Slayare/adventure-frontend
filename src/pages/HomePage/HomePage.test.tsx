import { render, screen } from "@/utils/testing";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render homepage with message", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", {
      name: /Welcome to the home page!/i,
    });
    const content = screen.getByText(
      /This is the home page of the application./i
    );
    expect(heading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
