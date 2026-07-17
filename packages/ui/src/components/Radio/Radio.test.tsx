import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio, RadioGroup } from "./Radio";

describe("RadioGroup", () => {
  it("groups radio options", async () => {
    render(
      <RadioGroup label="Plan">
        <Radio label="Starter" name="plan" value="starter" />
        <Radio label="Pro" name="plan" value="pro" />
      </RadioGroup>,
    );

    await userEvent.click(screen.getByLabelText("Pro"));

    expect(screen.getByLabelText("Pro")).toBeChecked();
  });
});
