import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("changes the selected panel", async () => {
    render(
      <Tabs
        items={[
          { content: "Overview content", label: "Overview", value: "overview" },
          { content: "Billing content", label: "Billing", value: "billing" },
        ]}
      />,
    );

    await userEvent.click(screen.getByRole("tab", { name: "Billing" }));

    expect(screen.getByRole("tabpanel")).toHaveTextContent("Billing content");
  });
});
