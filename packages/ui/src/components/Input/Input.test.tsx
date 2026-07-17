import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("associates the label and helper text with the input", async () => {
    render(<Input helperText="Use your work email." label="Email" />);

    const input = screen.getByLabelText("Email");
    await userEvent.type(input, "person@example.com");

    expect(input).toHaveValue("person@example.com");
    expect(input).toHaveAccessibleDescription("Use your work email.");
  });

  it("marks invalid fields and announces errors", () => {
    render(<Input error="Email is required" label="Email" />);

    expect(screen.getByLabelText("Email")).toBeInvalid();
    expect(screen.getByRole("alert")).toHaveTextContent("Email is required");
  });
});
