import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("announces loading state", () => {
    render(<Spinner label="Loading profile" />);

    expect(screen.getByRole("status", { name: "Loading profile" })).toBeInTheDocument();
  });
});
