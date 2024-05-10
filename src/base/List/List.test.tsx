import React from "react";
import { render, screen } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("should render a list with items", () => {
    const items = ["1", "2", "3"];
    render(<List items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
