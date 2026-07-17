import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders status text", () => {
    render(<Badge variant="success">Active</Badge>);

    expect(screen.getByText("Active")).toHaveClass("ui-badge-success");
  });
});
