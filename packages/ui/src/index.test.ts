import { Alert, Badge, Button, Card, EmptyState, Input, Modal, Skeleton, Spinner } from "./index";

describe("public exports", () => {
  it("exposes named component exports", () => {
    expect(Alert).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Button).toBeDefined();
    expect(Card).toBeDefined();
    expect(EmptyState).toBeDefined();
    expect(Input).toBeDefined();
    expect(Modal).toBeDefined();
    expect(Skeleton).toBeDefined();
    expect(Spinner).toBeDefined();
  });
});
