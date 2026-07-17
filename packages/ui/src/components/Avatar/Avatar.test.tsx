import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials fallback", () => {
    render(<Avatar alt="Ada Lovelace" />);

    expect(screen.getByText("AL")).toBeInTheDocument();
  });
});
