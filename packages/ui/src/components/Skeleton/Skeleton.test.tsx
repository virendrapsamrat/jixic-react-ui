import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("is hidden from assistive technology", () => {
    const { container } = render(<Skeleton height={24} width={120} />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });
});
