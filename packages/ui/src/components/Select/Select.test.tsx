import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

describe("Select", () => {
  it("selects an option", async () => {
    render(
      <Select
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "Member", value: "member" },
        ]}
      />,
    );

    await userEvent.selectOptions(screen.getByLabelText("Role"), "member");

    expect(screen.getByLabelText("Role")).toHaveValue("member");
  });
});
