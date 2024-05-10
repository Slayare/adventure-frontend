import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

jest.mock("@mui/joy/styles", () => ({
  ...jest.requireActual("@mui/joy/styles"),
  useColorScheme: () => (component: any) => component,
}));

describe("HomePage", () => {
  it("should render homepage with message", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText("Some generic title")).toBeInTheDocument();
    expect(screen.getByText("The game that writes itself")).toBeInTheDocument();
  });
});
