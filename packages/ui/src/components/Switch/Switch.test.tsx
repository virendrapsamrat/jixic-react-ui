import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("uses switch semantics", async () => {
    render(<Switch label="Email notifications" />);

    const toggle = screen.getByRole("switch", { name: "Email notifications" });
    await userEvent.click(toggle);

    expect(toggle).toBeChecked();
  });
});
