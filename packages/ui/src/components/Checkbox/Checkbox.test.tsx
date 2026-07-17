import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("toggles from its label", async () => {
    render(<Checkbox label="Accept terms" />);

    const checkbox = screen.getByLabelText("Accept terms");
    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
