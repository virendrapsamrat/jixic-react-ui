import { render, screen } from "@testing-library/react";
import { Button } from "../Button/Button";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("renders tooltip content", () => {
    render(
      <Tooltip content="Create a new project">
        <Button>New</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toHaveTextContent("Create a new project");
  });
});
