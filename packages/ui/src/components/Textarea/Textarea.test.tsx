import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("associates label and helper text", async () => {
    render(<Textarea helperText="Keep it short." label="Bio" />);

    const textarea = screen.getByLabelText("Bio");
    await userEvent.type(textarea, "Designer");

    expect(textarea).toHaveValue("Designer");
    expect(textarea).toHaveAccessibleDescription("Keep it short.");
  });
});
