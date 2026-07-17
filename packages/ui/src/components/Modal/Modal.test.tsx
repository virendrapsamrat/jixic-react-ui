import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders an accessible dialog when open", () => {
    render(
      <Modal isOpen onOpenChange={vi.fn()} title="Settings">
        <button type="button">Focusable</button>
      </Modal>,
    );

    expect(screen.getByRole("dialog", { name: "Settings" })).toBeInTheDocument();
  });

  it("closes when Escape is pressed", async () => {
    const onOpenChange = vi.fn();
    render(
      <Modal isOpen onOpenChange={onOpenChange} title="Settings">
        Content
      </Modal>,
    );

    await userEvent.keyboard("{Escape}");

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
