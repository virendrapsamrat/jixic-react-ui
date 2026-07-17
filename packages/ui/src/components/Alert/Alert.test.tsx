import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("uses alert role for urgent variants", () => {
    render(
      <Alert title="Error" variant="danger">
        Try again.
      </Alert>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Try again.");
  });

  it("uses status role for informational content", () => {
    render(<Alert>Saved.</Alert>);

    expect(screen.getByRole("status")).toHaveTextContent("Saved.");
  });
});
